import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

// Peel dimples painted once into a bump map; no texture files to download.
function usePeelTexture() {
  return useMemo(() => {
    const c = document.createElement("canvas");
    c.width = 1024;
    c.height = 512;
    const g = c.getContext("2d");
    g.fillStyle = "#808080";
    g.fillRect(0, 0, c.width, c.height);
    for (let i = 0; i < 9000; i++) {
      const x = Math.random() * c.width;
      const y = Math.random() * c.height;
      const r = 1 + Math.random() * 2.2;
      g.fillStyle = Math.random() > 0.35 ? "rgba(40,40,40,0.55)" : "rgba(220,220,220,0.4)";
      g.beginPath();
      g.arc(x, y, r, 0, Math.PI * 2);
      g.fill();
    }
    const t = new THREE.CanvasTexture(c);
    t.wrapS = THREE.RepeatWrapping;
    return t;
  }, []);
}

// Three flat tones, like a stone lithograph run in three passes.
function useLithoSteps() {
  return useMemo(() => {
    const t = new THREE.DataTexture(new Uint8Array([90, 170, 255]), 3, 1, THREE.RedFormat);
    t.minFilter = t.magFilter = THREE.NearestFilter;
    t.needsUpdate = true;
    return t;
  }, []);
}

function useLeafGeometry() {
  return useMemo(() => {
    const s = new THREE.Shape();
    s.moveTo(0, 0);
    s.bezierCurveTo(0.25, 0.15, 0.35, 0.55, 0, 0.95);
    s.bezierCurveTo(-0.35, 0.55, -0.25, 0.15, 0, 0);
    const geo = new THREE.ExtrudeGeometry(s, { depth: 0.02, bevelEnabled: true, bevelSize: 0.015, bevelThickness: 0.01, bevelSegments: 2 });
    geo.center();
    return geo;
  }, []);
}

function Orange({ peel, drag, still }) {
  const group = useRef();
  const mat = useRef();
  const leaf = useRef();
  const bump = usePeelTexture();
  const leafGeo = useLeafGeometry();
  const steps = useLithoSteps();
  const target = useMemo(() => new THREE.Color(), []);

  useFrame((state, dt) => {
    const d = drag.current;
    if (!d.down) d.vel *= 0.94;
    group.current.rotation.y += d.vel + (still ? 0 : dt * 0.35);
    group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, d.tilt, 0.08);
    target.set(peel);
    mat.current.color.lerp(target, 0.08);
    if (!still) leaf.current.rotation.z = -0.9 + Math.sin(state.clock.elapsedTime * 1.4) * 0.06;
  });

  return (
    <group ref={group} rotation={[0.25, 0, 0]}>
      <mesh scale={[1, 0.94, 1]}>
        <sphereGeometry args={[1, 96, 64]} />
        <meshToonMaterial ref={mat} color={peel} gradientMap={steps} bumpMap={bump} bumpScale={0.03} />
      </mesh>
      {/* Navy key line, same ink as the medallion rim. */}
      <mesh scale={[1.035, 0.975, 1.035]}>
        <sphereGeometry args={[1, 64, 48]} />
        <meshBasicMaterial color="#10294a" side={THREE.BackSide} />
      </mesh>
      <mesh position={[0, 0.95, 0]}>
        <cylinderGeometry args={[0.035, 0.05, 0.14, 12]} />
        <meshToonMaterial color="#4a5a23" gradientMap={steps} />
      </mesh>
      <mesh ref={leaf} geometry={leafGeo} position={[0.34, 1.12, 0.05]} rotation={[0.35, 0.2, -0.9]}>
        <meshToonMaterial color="#1f6b45" gradientMap={steps} side={THREE.DoubleSide} />
      </mesh>
    </group>
  );
}

export default function Fruit({ peel }) {
  const drag = useRef({ down: false, x: 0, vel: 0, tilt: 0.25 });
  const still = useMemo(() => window.matchMedia("(prefers-reduced-motion: reduce)").matches, []);

  const onDown = (e) => {
    drag.current.down = true;
    drag.current.x = e.clientX;
    e.currentTarget.setPointerCapture(e.pointerId);
  };
  const onMove = (e) => {
    const d = drag.current;
    if (!d.down) return;
    d.vel = (e.clientX - d.x) * 0.004;
    d.x = e.clientX;
    d.tilt = THREE.MathUtils.clamp(d.tilt + e.movementY * 0.004, -0.4, 0.8);
  };
  const onUp = () => (drag.current.down = false);

  return (
    <div className="fruit-canvas" aria-hidden="true" onPointerDown={onDown} onPointerMove={onMove} onPointerUp={onUp} onPointerCancel={onUp}>
      <Canvas camera={{ position: [0, 0.3, 5.3], fov: 32 }} dpr={[1, 2]} gl={{ antialias: true, alpha: true }}>
        <hemisphereLight args={["#fff4d6", "#7a4a2a", 1.3]} />
        <directionalLight position={[3, 4, 3]} intensity={2.2} color="#fff1c9" />
        <Orange peel={peel} drag={drag} still={still} />
      </Canvas>
    </div>
  );
}
