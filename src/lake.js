// The view through the glass: a lake at blue hour, drawn per pixel so the water can move.
// Sky, moon and stars above a hazy far ridge, a dark near shore strung with lights,
// and water that mirrors all of it through ripples that shrink toward the horizon.
export const lakeVertex = /* glsl */ `
varying vec2 vUv;
void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }
`;

export const lakeFragment = /* glsl */ `
uniform float uTime;
varying vec2 vUv;
const float H = 0.40; // horizon

float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
float noise(vec2 p) {
  vec2 i = floor(p), f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  return mix(mix(hash(i), hash(i + vec2(1, 0)), f.x), mix(hash(i + vec2(0, 1)), hash(i + 1.0), f.x), f.y);
}
float fbm(vec2 p) {
  float v = 0.0, a = 0.5;
  for (int i = 0; i < 5; i++) { v += a * noise(p); p *= 2.03; a *= 0.5; }
  return v;
}

vec3 sky(vec2 uv) {
  float y = (uv.y - H) / (1.0 - H);
  vec3 c = mix(vec3(1.0, 0.52, 0.38), vec3(0.42, 0.30, 0.62), smoothstep(0.0, 0.18, y));
  c = mix(c, vec3(0.05, 0.07, 0.20), smoothstep(0.12, 0.75, y));
  c = mix(c, vec3(0.015, 0.02, 0.06), smoothstep(0.7, 1.0, y));
  // thin clouds catching the last light
  float cl = smoothstep(0.55, 0.85, fbm(vec2(uv.x * 3.0 + uTime * 0.004, y * 9.0)));
  c = mix(c, vec3(0.55, 0.32, 0.45) * (1.2 - y), cl * 0.35 * smoothstep(0.05, 0.3, y) * (1.0 - smoothstep(0.4, 0.7, y)));
  vec2 m = (uv - vec2(0.70, 0.60)) * vec2(2.4, 1.0);
  float d = length(m);
  c += vec3(1.0, 0.95, 0.85) * (smoothstep(0.024, 0.02, d) * 1.6 + 0.35 * exp(-d * 14.0));
  vec2 g = floor(uv * vec2(420.0, 170.0));
  float s = hash(g);
  c += step(0.996, s) * smoothstep(0.25, 0.6, y) * (0.5 + 0.5 * sin(uTime * 1.7 + s * 80.0));
  return c;
}

float farRidge(float x) { return H + 0.09 * fbm(vec2(x * 3.0, 2.0)) + 0.01; }
float nearRidge(float x) { return H + 0.035 * fbm(vec2(x * 7.0 + 4.0, 5.0)) - 0.006; }

// Shore lights sit on the waterline; in the water they stretch into rippling streaks.
float shoreLights(float x, float dy, float stretch) {
  float n = 240.0;
  float cell = floor(x * n);
  float r = hash(vec2(cell, 3.0));
  float dx = (fract(x * n) - 0.5) / 0.5;
  float on = step(0.62, r) * (0.7 + 0.3 * sin(uTime * (0.6 + r * 2.0) + r * 40.0) * step(0.9, r));
  float lift = 0.004 + 0.01 * hash(vec2(cell, 9.0));
  return on * exp(-dx * dx * 6.0) * exp(-pow((dy - lift * (1.0 - stretch)) * mix(900.0, 22.0, stretch), 2.0));
}

vec3 above(vec2 uv) {
  vec3 c = sky(uv);
  float fr = farRidge(uv.x), nr = nearRidge(uv.x);
  c = mix(c, mix(c, vec3(0.16, 0.13, 0.28), 0.75), step(uv.y, fr));
  c = mix(c, vec3(0.025, 0.025, 0.06), step(uv.y, nr));
  c += vec3(1.0, 0.72, 0.42) * 2.2 * shoreLights(uv.x, uv.y - H, 0.0);
  return c;
}

void main() {
  vec2 uv = vUv;
  vec3 c;
  if (uv.y >= H) {
    c = above(uv);
  } else {
    float d = H - uv.y;
    // perspective: ripples get finer and flatter toward the horizon
    vec2 p = vec2(uv.x * 30.0 / (d + 0.05), 4.0 / (d + 0.05));
    float w = fbm(p * vec2(0.6, 0.35) + vec2(uTime * 0.25, uTime * 0.6)) - 0.5;
    float w2 = fbm(p * vec2(1.4, 0.8) - vec2(uTime * 0.4, uTime * 0.9)) - 0.5;
    vec2 r = vec2(uv.x + (w + w2 * 0.5) * 0.03 * (d + 0.02), H + d * 0.9 + (w * 0.6) * 0.05 * d);
    c = above(r) * 0.6 * mix(vec3(1.0), vec3(0.7, 0.8, 1.0), smoothstep(0.0, 0.2, d));
    c += vec3(1.0, 0.7, 0.4) * 1.6 * shoreLights(r.x, d, 1.0) * (0.6 + 0.8 * max(w2, 0.0));
    // moon path glints
    float mx = exp(-pow((uv.x - 0.70) * 9.0, 2.0));
    c += vec3(0.9, 0.9, 1.0) * mx * smoothstep(0.62, 0.8, fbm(p * vec2(2.5, 1.2) + uTime * 0.8)) * 1.4;
    c *= mix(1.0, 0.5, smoothstep(0.0, 0.4, d));
  }
  gl_FragColor = vec4(c * c * 1.3, 1.0); // authored in display colours; the pipeline expects linear
}
`;
