import React, { useCallback, useEffect, useRef, useState } from "react";
import styles from "./InteractiveBackground.module.css";

const ORB_COUNT = 3;
const MOVE_RATIO = 0.03; // parallax strength
const REDUCED_MOVE_RATIO = 0.008;

function usePrefersReducedMotion() {
  const [prefersReduced, setPrefersReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReduced(mq.matches);
    const handler = () => setPrefersReduced(mq.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);
  return prefersReduced;
}

export default function InteractiveBackground() {
  const containerRef = useRef(null);
  const [mouse, setMouse] = useState({ x: 0.5, y: 0.5 });
  const targetRef = useRef({ x: 0.5, y: 0.5 });
  const rafRef = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  const ratio = prefersReducedMotion ? REDUCED_MOVE_RATIO : MOVE_RATIO;

  const handleMouseMove = useCallback((e) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    targetRef.current = {
      x: clientX / innerWidth,
      y: clientY / innerHeight,
    };
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let ticking = false;
    const tick = () => {
      setMouse((prev) => {
        const t = targetRef.current;
        const dx = (t.x - prev.x) * ratio;
        const dy = (t.y - prev.y) * ratio;
        if (Math.abs(dx) < 0.0005 && Math.abs(dy) < 0.0005) return prev;
        return { x: prev.x + dx, y: prev.y + dy };
      });
      ticking = false;
    };

    const onMove = (e) => {
      handleMouseMove(e);
      if (!ticking) {
        ticking = true;
        rafRef.current = requestAnimationFrame(tick);
      }
    };

    const scheduleTick = () => {
      if (!ticking) {
        ticking = true;
        rafRef.current = requestAnimationFrame(tick);
      }
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    const interval = setInterval(scheduleTick, 100);

    return () => {
      window.removeEventListener("mousemove", onMove);
      clearInterval(interval);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [handleMouseMove, ratio]);

  const orbOffsets = [
    { dx: -0.2, dy: -0.1 },
    { dx: 0.15, dy: 0.2 },
    { dx: -0.1, dy: 0.15 },
  ];

  return (
    <div ref={containerRef} className={styles.root} aria-hidden="true">
      {Array.from({ length: ORB_COUNT }, (_, i) => {
        const cx = 50 + (mouse.x - 0.5) * 40 + orbOffsets[i].dx * 40;
        const cy = 50 + (mouse.y - 0.5) * 40 + orbOffsets[i].dy * 40;
        return (
          <div
            key={i}
            className={styles.orb}
            style={{
              "--cx": cx,
              "--cy": cy,
            }}
          />
        );
      })}
    </div>
  );
}
