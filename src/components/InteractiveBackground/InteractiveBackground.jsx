import React, { useRef, useMemo, useEffect, useState, useCallback } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import styles from "./InteractiveBackground.module.css";

const NODE_COUNT = 70;
const CONNECTION_DISTANCE = 2.8;
const FIELD_SIZE = 8;

function generateNodes(count) {
  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    positions[i * 3] = (Math.random() - 0.5) * FIELD_SIZE * 2;
    positions[i * 3 + 1] = (Math.random() - 0.5) * FIELD_SIZE * 2;
    positions[i * 3 + 2] = (Math.random() - 0.5) * FIELD_SIZE;
  }
  return positions;
}

function NeuralNetwork({ mousePos }) {
  const nodesRef = useRef();
  const linesRef = useRef();
  const basePositions = useMemo(() => generateNodes(NODE_COUNT), []);
  const offsets = useMemo(() => {
    const arr = [];
    for (let i = 0; i < NODE_COUNT; i++) {
      arr.push({
        speedX: 0.1 + Math.random() * 0.3,
        speedY: 0.1 + Math.random() * 0.3,
        speedZ: 0.05 + Math.random() * 0.15,
        phaseX: Math.random() * Math.PI * 2,
        phaseY: Math.random() * Math.PI * 2,
        phaseZ: Math.random() * Math.PI * 2,
        ampX: 0.3 + Math.random() * 0.6,
        ampY: 0.3 + Math.random() * 0.6,
        ampZ: 0.2 + Math.random() * 0.3,
      });
    }
    return arr;
  }, []);

  const currentPositions = useMemo(() => new Float32Array(NODE_COUNT * 3), []);

  const lineGeometry = useMemo(() => new THREE.BufferGeometry(), []);
  const maxLines = NODE_COUNT * 6;
  const linePositions = useMemo(() => new Float32Array(maxLines * 6), [maxLines]);
  const lineColors = useMemo(() => new Float32Array(maxLines * 6), [maxLines]);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();

    for (let i = 0; i < NODE_COUNT; i++) {
      const o = offsets[i];
      currentPositions[i * 3] =
        basePositions[i * 3] + Math.sin(t * o.speedX + o.phaseX) * o.ampX;
      currentPositions[i * 3 + 1] =
        basePositions[i * 3 + 1] + Math.sin(t * o.speedY + o.phaseY) * o.ampY;
      currentPositions[i * 3 + 2] =
        basePositions[i * 3 + 2] + Math.sin(t * o.speedZ + o.phaseZ) * o.ampZ;
    }

    if (nodesRef.current) {
      nodesRef.current.geometry.setAttribute(
        "position",
        new THREE.BufferAttribute(new Float32Array(currentPositions), 3)
      );
    }

    let lineIndex = 0;
    for (let i = 0; i < NODE_COUNT; i++) {
      for (let j = i + 1; j < NODE_COUNT; j++) {
        const dx = currentPositions[i * 3] - currentPositions[j * 3];
        const dy = currentPositions[i * 3 + 1] - currentPositions[j * 3 + 1];
        const dz = currentPositions[i * 3 + 2] - currentPositions[j * 3 + 2];
        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

        if (dist < CONNECTION_DISTANCE && lineIndex < maxLines) {
          const idx = lineIndex * 6;

          linePositions[idx] = currentPositions[i * 3];
          linePositions[idx + 1] = currentPositions[i * 3 + 1];
          linePositions[idx + 2] = currentPositions[i * 3 + 2];
          linePositions[idx + 3] = currentPositions[j * 3];
          linePositions[idx + 4] = currentPositions[j * 3 + 1];
          linePositions[idx + 5] = currentPositions[j * 3 + 2];

          const r = 0.91, g = 0.44, b = 0.25;
          lineColors[idx] = r;
          lineColors[idx + 1] = g;
          lineColors[idx + 2] = b;
          lineColors[idx + 3] = r;
          lineColors[idx + 4] = g;
          lineColors[idx + 5] = b;

          lineIndex++;
        }
      }
    }

    const usedPositions = linePositions.slice(0, lineIndex * 6);
    const usedColors = lineColors.slice(0, lineIndex * 6);

    lineGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(usedPositions, 3)
    );
    lineGeometry.setAttribute(
      "color",
      new THREE.BufferAttribute(usedColors, 3)
    );
    lineGeometry.setDrawRange(0, lineIndex * 2);
  });

  return (
    <>
      <points ref={nodesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={NODE_COUNT}
            array={new Float32Array(basePositions)}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.06}
          color="#F0EDE8"
          transparent
          opacity={0.7}
          sizeAttenuation
        />
      </points>

      <lineSegments ref={linesRef} geometry={lineGeometry}>
        <lineBasicMaterial
          vertexColors
          transparent
          opacity={0.2}
          blending={THREE.AdditiveBlending}
        />
      </lineSegments>
    </>
  );
}

function CameraRig({ mousePos }) {
  const { camera } = useThree();
  const targetX = useRef(0);
  const targetY = useRef(0);

  useFrame(() => {
    targetX.current += (mousePos.current.x * 2 - targetX.current) * 0.02;
    targetY.current += (mousePos.current.y * 1.5 - targetY.current) * 0.02;
    camera.position.x = targetX.current;
    camera.position.y = -targetY.current;
    camera.lookAt(0, 0, 0);
  });

  return null;
}

export default function InteractiveBackground() {
  const mousePos = useRef({ x: 0, y: 0 });
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const handler = () => setReducedMotion(mq.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const handleMouseMove = useCallback((e) => {
    mousePos.current = {
      x: (e.clientX / window.innerWidth - 0.5) * 2,
      y: (e.clientY / window.innerHeight - 0.5) * 2,
    };
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [handleMouseMove]);

  if (reducedMotion) {
    return <div className={styles.root} aria-hidden="true" />;
  }

  return (
    <div className={styles.root} aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 60 }}
        dpr={[1, 1.5]}
        gl={{ antialias: false, alpha: true }}
        style={{ background: "transparent" }}
      >
        <NeuralNetwork mousePos={mousePos} />
        <CameraRig mousePos={mousePos} />
      </Canvas>
    </div>
  );
}
