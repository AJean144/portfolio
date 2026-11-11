import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { Bloom, EffectComposer, Noise, Vignette } from "@react-three/postprocessing";
import { Component, Suspense, useMemo, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { RGBELoader } from "three/examples/jsm/loaders/RGBELoader.js";
import { RectAreaLightUniformsLib } from "three/examples/jsm/lights/RectAreaLightUniformsLib.js";
import { MeshoptDecoder } from "three/examples/jsm/libs/meshopt_decoder.module.js";
import portraitUrl from "./assets/andell.jpg";
import { hotspots } from "./content";
import { lakeFragment, lakeVertex } from "./lake";

RectAreaLightUniformsLib.init();

const reduceMotion = typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const asset = (p) => `${import.meta.env.BASE_URL}${p}`;
const DESK = 2.2; // x of the desk, monitor and shelves

function tex(w, h, draw) {
  const c = document.createElement("canvas");
  c.width = w;
  c.height = h;
  draw(c.getContext("2d"), w, h);
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
}

const B = ({ p, s, c, r = 0.7, m = 0, rot, mat }) => (
  <mesh position={p} rotation={rot} material={mat} castShadow receiveShadow>
    <boxGeometry args={s} />
    {!mat && <meshStandardMaterial color={c} roughness={r} metalness={m} />}
  </mesh>
);

// Places a model with its base centred on `p`. `size` fits the longest side in metres; `scale` keeps real-world scale.
function Model({ name, p, rot, size, scale = 1, screen }) {
  const { scene } = useLoader(GLTFLoader, asset(`models/${name}.glb`), (l) => l.setMeshoptDecoder(MeshoptDecoder));
  const sky = useSky();
  const [obj, k, offset] = useMemo(() => {
    const o = scene.clone();
    o.traverse((m) => {
      if (!m.isMesh) return;
      m.castShadow = m.receiveShadow = true;
      // Only models reflect the sky; walls and floor stay dark so the room's own lights carry it.
      m.material.envMap = sky;
      m.material.envMapIntensity = 0.35;
      if (screen && m.material.name === screen.name) m.material = new THREE.MeshBasicMaterial({ map: screen.map, color: [1.3, 1.3, 1.3], toneMapped: false });
    });
    const box = new THREE.Box3().setFromObject(o);
    const dim = box.getSize(new THREE.Vector3());
    const c = box.getCenter(new THREE.Vector3());
    return [o, size ? size / Math.max(dim.x, dim.y, dim.z) : scale, [-c.x, -box.min.y, -c.z]];
  }, [scene, size, scale, screen, sky]);
  return (
    <group position={p} rotation={rot}>
      <group scale={k}><primitive object={obj} position={offset} /></group>
    </group>
  );
}

// Floating shelf with an LED strip that washes the plaster below it.
function Shelf({ y, mat }) {
  return (
    <>
      <B p={[DESK, y, 0.16]} s={[2.5, 0.045, 0.3]} mat={mat} />
      <mesh position={[DESK, y - 0.026, 0.06]}>
        <boxGeometry args={[2.4, 0.008, 0.012]} />
        <meshBasicMaterial color={[5, 3.1, 1.7]} toneMapped={false} />
      </mesh>
      <rectAreaLight position={[DESK, y - 0.03, 0.07]} rotation={[-1.15, 0, 0]} width={2.4} height={0.12} color="#ffb877" intensity={40} />
    </>
  );
}

function Spot({ from, to, ...props }) {
  const target = useMemo(() => new THREE.Object3D(), []);
  return (
    <>
      <primitive object={target} position={to} />
      <spotLight position={from} target={target} {...props} />
    </>
  );
}

// Soft darkening where furniture meets the floor; shadow maps alone leave it looking like it floats.
const Contact = ({ map, p: [x, z], r }) => (
  <mesh position={[x, 0.004, z]} rotation={[-Math.PI / 2, 0, 0]}>
    <planeGeometry args={[r * 2, r * 2]} />
    <meshBasicMaterial map={map} transparent depthWrite={false} />
  </mesh>
);

function Lake() {
  const mat = useRef();
  const uniforms = useMemo(() => ({ uTime: { value: 0 } }), []);
  useFrame(({ clock }) => { mat.current.uniforms.uTime.value = reduceMotion ? 20 : clock.elapsedTime; });
  return (
    <mesh position={[-1.4, 2.4, -14]}>
      <planeGeometry args={[34, 14]} />
      <shaderMaterial ref={mat} uniforms={uniforms} vertexShader={lakeVertex} fragmentShader={lakeFragment} toneMapped={false} />
    </mesh>
  );
}

function Hot({ spot, onPick, onHover }) {
  const dot = useRef();
  useFrame(({ clock }) => dot.current.scale.setScalar(1 + 0.35 * Math.sin(clock.elapsedTime * 2.5)));
  return (
    <group position={spot.pos}>
      <mesh
        onClick={(e) => { e.stopPropagation(); onPick(spot.id); }}
        onPointerOver={(e) => { e.stopPropagation(); onHover(spot.id); }}
        onPointerOut={() => onHover(null)}
      >
        <boxGeometry args={spot.hit ?? [0.3, 0.3, 0.26]} />
        <meshBasicMaterial transparent opacity={0} depthWrite={false} />
      </mesh>
      <mesh ref={dot} position={[0, spot.dot ?? 0.2, 0]}>
        <sphereGeometry args={[0.012, 12, 8]} />
        <meshBasicMaterial color={[2, 2, 2]} toneMapped={false} />
      </mesh>
    </group>
  );
}

function Rig({ focus, inOS }) {
  const look = useRef(new THREE.Vector3(0.4, 1.4, 0));
  const pos = useMemo(() => new THREE.Vector3(), []);
  const at = useMemo(() => new THREE.Vector3(), []);
  useFrame(({ camera, pointer, size }, dt) => {
    const aspect = size.width / size.height;
    const spot = hotspots.find((h) => h.id === focus);
    if (inOS) {
      at.set(DESK, 1.18, 0.44);
      pos.set(DESK, 1.18, 1.1);
    } else if (spot) {
      at.set(...spot.pos);
      pos.set(spot.pos[0] - 0.2, spot.pos[1] + 0.08, spot.pos[2] + 1.5 / Math.min(1, aspect * 1.3));
    } else {
      // Wide screens see the glass and the desk; tall ones frame the desk wall.
      const wide = aspect > 1.3;
      at.set(wide ? 0.4 : DESK, wide ? 1.5 : 1.35, 0);
      pos.set(at.x + pointer.x * 0.35, at.y + 0.1 + pointer.y * 0.15, Math.min((wide ? 7.6 : 3.4) / (0.728 * aspect), 9.5));
    }
    const k = reduceMotion ? 1 : 1 - Math.exp(-3.5 * dt);
    camera.position.lerp(pos, k);
    look.current.lerp(at, k);
    camera.lookAt(look.current);
  });
  return null;
}

function useSky() {
  const hdr = useLoader(RGBELoader, asset("textures/dusk.hdr"));
  hdr.mapping = THREE.EquirectangularReflectionMapping;
  return hdr;
}

function Scene({ onPick, onHover }) {
  const files = ["smoked_walnut_veneer-Diffuse", "smoked_walnut_veneer-nor_gl", "smoked_walnut_veneer-Rough", "herringbone_parquet-Diffuse", "herringbone_parquet-nor_gl", "herringbone_parquet-Rough", "plaster-Diffuse", "plaster-nor_gl", "plaster-Rough"];
  const maps = useLoader(THREE.TextureLoader, [...files.map((f) => asset(`textures/${f}.webp`)), portraitUrl]);
  const t = useMemo(() => {
    const [wd, wn, wr, fd, fn, fr, pd, pn, pr, portrait] = maps;
    [wd, fd, pd, portrait].forEach((m) => (m.colorSpace = THREE.SRGBColorSpace));
    [fd, fn, fr].forEach((m) => { m.wrapS = m.wrapT = THREE.RepeatWrapping; m.repeat.set(10, 6); });
    [pd, pn, pr].forEach((m) => { m.wrapS = m.wrapT = THREE.RepeatWrapping; m.repeat.set(3, 2); });
    const screen = tex(1024, 330, (g, w, h) => {
      const gr = g.createLinearGradient(0, 0, 0, h);
      ["#0b1030", "#2c2a66", "#7a4a86", "#e08a6a"].forEach((c, i) => gr.addColorStop(i / 3, c));
      g.fillStyle = gr;
      g.fillRect(0, 0, w, h);
      g.fillStyle = "#fff";
      g.textAlign = "center";
      g.font = `${h * 0.26}px "Instrument Serif", serif`;
      g.fillText(new Date().toLocaleTimeString([], { hour: "numeric", minute: "2-digit" }).replace(/\s?[AP]M/i, ""), w / 2, h * 0.45);
    });
    return {
      portrait,
      blob: tex(64, 64, (g, w) => {
        const gr = g.createRadialGradient(w / 2, w / 2, 0, w / 2, w / 2, w / 2);
        gr.addColorStop(0, "rgba(0,0,0,.75)");
        gr.addColorStop(1, "rgba(0,0,0,0)");
        g.fillStyle = gr;
        g.fillRect(0, 0, w, w);
      }),
      screen: { name: "Material.003", map: screen },
      walnut: new THREE.MeshStandardMaterial({ map: wd, normalMap: wn, roughnessMap: wr, color: "#8a6650" }),
      floor: new THREE.MeshStandardMaterial({ map: fd, normalMap: fn, roughnessMap: fr, color: "#5a4638" }),
      plaster: new THREE.MeshStandardMaterial({ map: pd, normalMap: pn, roughnessMap: pr, color: "#3c4a3a" }),
      side: new THREE.MeshStandardMaterial({ map: pd, normalMap: pn, roughnessMap: pr, color: "#2a2a30" }),
    };
  }, [maps]);
  const dust = useMemo(() => new Float32Array([...Array(150)].map((_, i) => (i % 3 === 0 ? Math.random() * 2.9 - 2.9 : i % 3 === 1 ? Math.random() * 2.8 : Math.random() * 3))), []);
  const motes = useRef();
  useFrame((_, dt) => { motes.current.position.y = (motes.current.position.y + dt * 0.02) % 0.4; });
  const flat = [-Math.PI / 2, 0, 0];

  return (
    <>
      <Lake />
      <ambientLight intensity={0.12} color="#7080c0" />
      {/* Moonlight through the glass throws the plant and chair across the floor. */}
      <directionalLight position={[-3.2, 4.5, -5]} intensity={22} color="#9fb4ff" castShadow shadow-mapSize={[2048, 2048]} shadow-bias={-0.0004} shadow-normalBias={0.02}>
        <orthographicCamera attach="shadow-camera" args={[-6, 6, 6, -6, 0.5, 20]} />
      </directionalLight>
      <rectAreaLight position={[-1.5, 1.4, 0.05]} width={3} height={2.8} color="#7f88d8" intensity={1.2} rotation={[0, Math.PI, 0]} />
      {/* Monitor glow on the desk and the wall around it. */}
      <rectAreaLight position={[DESK, 1.2, 0.56]} width={1.2} height={0.38} color="#9a86ff" intensity={3} rotation={[0, Math.PI, 0]} />
      {/* Ceiling wall-washers: the scallops of light that make plaster read as plaster. */}
      {[-0.8, 0.8].map((dx) => (
        <Spot key={dx} from={[DESK + dx, 2.95, 0.35]} to={[DESK + dx, 0.6, -0.1]} angle={0.5} penumbra={1} intensity={9} color="#ffcf9a" distance={4} decay={1.4} />
      ))}
      <pointLight position={[DESK, 2.75, 0.6]} intensity={1.6} color="#ffd2a0" distance={2.2} />
      {/* Reading lamp by the chair. */}
      <pointLight position={[-2.3, 1.45, 0.95]} intensity={5} color="#ffbf7a" distance={5} decay={1.6} castShadow shadow-mapSize={[512, 512]} />
      <mesh position={[-2.3, 1.47, 0.95]}><sphereGeometry args={[0.05, 16, 12]} /><meshBasicMaterial color={[6, 4, 2.2]} toneMapped={false} /></mesh>
      {/* Picture light over the portrait. */}
      <Spot from={[0.4, 2.15, 0.35]} to={[0.4, 1.5, 0]} angle={0.55} penumbra={0.8} intensity={6} color="#ffd29a" distance={2} />

      {/* Shell: floor, ceiling, plaster back wall to the right of the glass, side walls */}
      <mesh rotation={flat} position={[0, 0, 4]} material={t.floor} receiveShadow><planeGeometry args={[14, 10]} /></mesh>
      <mesh rotation={[Math.PI / 2, 0, 0]} position={[0.4, 3, 4]} castShadow><planeGeometry args={[14, 10]} /><meshStandardMaterial color="#141218" roughness={1} /></mesh>
      <mesh position={[2.0, 1.5, 0]} material={t.plaster} castShadow receiveShadow><planeGeometry args={[4, 3]} /></mesh>
      <mesh position={[-1.5, 2.9, 0]} material={t.side} castShadow><planeGeometry args={[3, 0.2]} /></mesh>
      <mesh position={[-3, 1.5, 4]} rotation={[0, Math.PI / 2, 0]} material={t.side} castShadow receiveShadow><planeGeometry args={[8, 3]} /></mesh>
      <mesh position={[4, 1.5, 4]} rotation={[0, -Math.PI / 2, 0]} material={t.side} receiveShadow><planeGeometry args={[8, 3]} /></mesh>

      {/* Floor-to-ceiling glass: thin black frame, three panes */}
      {[[-1.5, 2.8, 3.04, 0.05], [-1.5, 0.02, 3.04, 0.04], [-2.98, 1.4, 0.05, 2.8], [-0.02, 1.4, 0.05, 2.8], [-2.0, 1.4, 0.035, 2.8], [-1.0, 1.4, 0.035, 2.8]].map(([x, y, w, h], i) => (
        <B key={i} p={[x, y, 0.02]} s={[w, h, 0.05]} c="#0c0c10" r={0.4} m={0.5} />
      ))}
      <mesh position={[-1.5, 1.4, 0.03]}>
        <planeGeometry args={[3, 2.8]} />
        <meshPhysicalMaterial color="#a8b4d8" transparent opacity={0.06} roughness={0.05} metalness={0} envMapIntensity={0.6} />
      </mesh>

      {/* Reading nook by the glass */}
      <Model name="mid_century_lounge_chair" p={[-1.55, 0, 1.15]} rot={[0, Math.PI * 0.82, 0]} scale={0.9} />
      <Model name="floor_lamp" p={[-2.3, 0, 0.95]} size={1.75} />
      <Model name="potted_plant_02" p={[-0.45, 0, 0.6]} scale={1.6} />
      <Contact map={t.blob} p={[-1.55, 1.15]} r={0.55} />
      <Contact map={t.blob} p={[-2.3, 0.95]} r={0.3} />
      <Contact map={t.blob} p={[-0.45, 0.6]} r={0.45} />

      {/* Portrait under its picture light */}
      <Model name="hanging_picture_frame_01" p={[0.4, 1.256, 0.01]} scale={0.7} />
      <mesh position={[0.4, 1.55, 0.022]}><planeGeometry args={[0.34, 0.34]} /><meshStandardMaterial map={t.portrait} roughness={0.6} /></mesh>

      <Shelf y={2.15} mat={t.walnut} />
      <Shelf y={1.6} mat={t.walnut} />

      {/* Top shelf: globe, gears, glowing core, sofa */}
      <Model name="globe" p={[DESK - 0.85, 2.17, 0.17]} size={0.32} />
      <Model name="gears" p={[DESK - 0.3, 2.31, 0.18]} rot={[Math.PI / 2, 0, 0]} size={0.42} />
      <mesh position={[DESK + 0.25, 2.28, 0.17]}><boxGeometry args={[0.07, 0.2, 0.045]} /><meshStandardMaterial color="#2a1840" emissive="#c58cff" emissiveIntensity={2.5} toneMapped={false} /></mesh>
      <pointLight position={[DESK + 0.25, 2.3, 0.3]} color="#b070ff" intensity={0.8} distance={1} />
      <Model name="sofa_02" p={[DESK + 0.8, 2.17, 0.17]} scale={0.26} />

      {/* Low shelf: law books, trophies, health kit */}
      <Model name="book_encyclopedia_set_01" p={[DESK - 0.45, 1.62, 0.17]} scale={0.85} />
      <Model name="trophy" p={[DESK, 1.62, 0.17]} size={0.5} />
      <Model name="medical_box" p={[DESK + 0.45, 1.62, 0.17]} scale={0.6} />

      {/* Desk */}
      <B p={[DESK, 0.78, 0.55]} s={[2.3, 0.04, 0.8]} mat={t.walnut} />
      <B p={[DESK - 1.0, 0.38, 0.55]} s={[0.05, 0.76, 0.6]} c="#0e0c0c" r={0.4} m={0.6} />
      <B p={[DESK + 1.0, 0.38, 0.55]} s={[0.05, 0.76, 0.6]} c="#0e0c0c" r={0.4} m={0.6} />
      <Model name="monitor" p={[DESK, 0.8, 0.36]} rot={[0, -Math.PI / 2, 0]} size={1.3} screen={t.screen} />
      <B p={[DESK, 1.435, 0.42]} s={[0.09, 0.06, 0.07]} c="#111" />
      <Model name="mic" p={[DESK - 0.75, 0.8, 0.45]} size={0.8} />
      <Model name="mug" p={[DESK - 0.65, 0.8, 0.72]} size={0.1} />
      <B p={[DESK - 0.45, 0.805, 0.78]} s={[0.15, 0.008, 0.21]} c="#e8e2d6" rot={[0, 0.2, 0]} />
      <Model name="keyboard" p={[DESK, 0.8, 0.78]} size={0.6} />
      <B p={[DESK + 0.42, 0.812, 0.8]} s={[0.06, 0.025, 0.1]} c="#1a1a1c" r={0.4} />
      <Model name="laptop" p={[DESK + 0.8, 0.8, 0.62]} rot={[0, -0.35, 0]} size={0.38} />

      <points ref={motes}>
        <bufferGeometry><bufferAttribute attach="attributes-position" args={[dust, 3]} /></bufferGeometry>
        <pointsMaterial size={0.008} color="#c8d2ff" transparent opacity={0.35} depthWrite={false} />
      </points>

      {hotspots.map((h) => <Hot key={h.id} spot={h} onPick={onPick} onHover={onHover} />)}
    </>
  );
}

// A WebGL failure must not blank the page: the chips, cards and computer still work without the room.
class Boundary extends Component {
  state = { failed: false };
  static getDerivedStateFromError() {
    return { failed: true };
  }
  render() {
    return this.state.failed ? <div className="room room-fallback" /> : this.props.children;
  }
}

export default function Room({ focus, inOS, onPick, onHover }) {
  return (
    <Boundary>
      <Canvas className="room" aria-hidden="true" shadows="soft" dpr={[1, 2]} camera={{ fov: 40, position: [0.4, 1.45, 7] }} onCreated={({ gl }) => (gl.toneMappingExposure = 0.9)} onPointerMissed={() => onPick(null)}>
        <color attach="background" args={["#07070b"]} />
        <Suspense fallback={null}>
          <Scene onPick={onPick} onHover={onHover} />
          <EffectComposer disableNormalPass>
            <Bloom mipmapBlur luminanceThreshold={0.85} intensity={0.7} radius={0.7} />
            <Vignette offset={0.25} darkness={0.75} />
            <Noise premultiply opacity={0.4} />
          </EffectComposer>
        </Suspense>
        <Rig focus={focus} inOS={inOS} />
      </Canvas>
    </Boundary>
  );
}
