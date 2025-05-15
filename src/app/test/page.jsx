// pages/index.js
'use client'
// pages/index.js

import dynamic from 'next/dynamic';
import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { Text } from '@react-three/drei';

const Canvas = dynamic(() => import('@react-three/fiber').then(mod => mod.Canvas), { ssr: false });

const vertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const fragmentShader = `
uniform float uTime;
uniform vec3 uColor;
varying vec2 vUv;

void main() {
  // Compute distance from center of UV (0.5, 0.5)
  float dist = distance(vUv, vec2(0.8));

  // Circular gradient with smooth falloff
  float intensity = smoothstep(2.0, 0.2, dist);

  // Optional subtle pulse for jelly feel
  float pulse = 0.95 + 0.05 * sin(uTime * 3.0);

  vec3 color = uColor * intensity * pulse;

  gl_FragColor = vec4(color, intensity);
}
`;

function Blob({ startPos, direction, speed, color }) {
  const materialRef = useRef();
  const meshRef = useRef();
  const textRef = useRef();

  useFrame(({ clock }) => {
    const t = (clock.getElapsedTime() * speed) % 50.0;
    const pos = new THREE.Vector3().copy(startPos).addScaledVector(direction, t);

    if (pos.z > -2) {
      pos.z = startPos.z;
    }

    if (meshRef.current) {
      meshRef.current.position.copy(pos);
    }

    if (textRef.current) {
      textRef.current.position.copy(pos);
    }

    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value = clock.getElapsedTime();
    }
  });

  return (
    <>
      <mesh ref={meshRef} position={startPos} transparent opacity={1}>
        <sphereGeometry args={[0.3, 32, 32]} />
        <shaderMaterial
          ref={materialRef}
          vertexShader={vertexShader}
          fragmentShader={fragmentShader}
          uniforms={{
            uTime: { value: 0 },
            uColor: { value: new THREE.Color(color) },
          }}
          transparent
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </mesh>

      <Text
        ref={textRef}
        fontSize={0.2}
        color="black"
        anchorX="center"
        anchorY="middle"
      >
        Hi
      </Text>
    </>
  );
}

export default function Home() {
  // Prepare multiple blobs with different random start positions and directions
  const blobs = useMemo(() => {
    const arr = [];
    const count = 15;
    for (let i = 0; i < count; i++) {
      const startPos = new THREE.Vector3(
        (Math.random() - 0.5) * 8,
        (Math.random() - 0.5) * 6,
        -20 - Math.random() * 10 // start farther away
      );

      const direction = new THREE.Vector3(0, 0, 1); // toward camera positive Z

      const speed = 0.5 + Math.random();

      const hue = (i / count) * 360;
      const color = new THREE.Color(`hsl(${hue}, 100%, 60%)`);

      arr.push({ startPos, direction, speed, color });
    }


    return arr;
  }, []);

  return (
    <div style={{ width: '100vw', height: '100vh', backgroundColor: '#fff' }}>
      <Canvas camera={{ position: [0, 0, 10], fov: 10, near: 10, far: 30 }}>
        <ambientLight />
        {blobs.map((props, i) => (
          <Blob key={i} {...props} index={i} />
        ))}
      </Canvas>
    </div>
  );
}
