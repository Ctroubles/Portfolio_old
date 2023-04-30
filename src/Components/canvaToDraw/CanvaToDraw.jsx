import React, { useRef, useEffect } from "react";
import { TweenMax } from "gsap";

const Dots = () => {
  const canvasRef = useRef(null);
  const points = [];
  let m = { x: null, y: null };

  const a = 20; // how many dots to have
  const b = 5; // how fast to spin
  const c = 0.1; // how much to fade. 1 all, 0.5 half, 0 none
  const d = 50; // distance from the mouse

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    m.x = canvas.width / 2;
    m.y = canvas.height / 2;

    const render = () => {
      if (m.x == null || m.y == null) return;

      ctx.fillStyle = `#1d1d1d22`;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.lineCap = "round";

      for (let i = 0; i < points.length; i++) {
        const p = points[i];

        p.r += p.s;
        if (p.r >= 360) p.r = p.r - 360;

        const vel = {
          x: p.d * Math.cos((p.r * Math.PI) / 180),
          y: p.d * Math.sin((p.r * Math.PI) / 180),
        };

        if (p.p.x != null && p.p.y != null) {
          ctx.strokeStyle = p.c;
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.moveTo(p.p.x, p.p.y);
          ctx.lineTo(m.x + vel.x, m.y + vel.y);
          ctx.stroke();
          ctx.closePath();
        }

        p.p.x = m.x + vel.x;
        p.p.y = m.y + vel.y;
      }
    };

    const mouseMoveHandler = (e) => {
      TweenMax.to(m, 0.3, { x: e.clientX, y: e.clientY, ease: "linear" });
    };

    window.addEventListener("mousemove", mouseMoveHandler);

    for (let i = 0; i < a; i++) {
      points.push({
        r: (360 / a) * i,
        p: { x: null, y: null },
        w: Math.random() * 5,
        c: "#08fdd8",
        d: Math.random() * (d + 5) - 5,
        s: Math.random() * (b + 5) - 5,
      });
    }

    let requestId = null;

    const animate = () => {
      render();
      requestId = window.requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("mousemove", mouseMoveHandler);
      window.cancelAnimationFrame(requestId);
    };
  }, []);

  return (
    <>
      <canvas ref={canvasRef} />
    </>
  );
};

export default Dots;