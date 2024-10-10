import React, { useEffect, useRef } from 'react';
import './_StarrySky.scss';

const StarrySky = () => {
  const canvasRef = useRef(null);
  let shootingStars = [];
  let staticStars = [];

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    resizeCanvas(canvas);
    createStaticStars(ctx);
    window.addEventListener('resize', () => resizeCanvas(canvas));
    canvas.addEventListener('click', handleClick);
    animate(ctx);

    return () => {
      window.removeEventListener('resize', () => resizeCanvas(canvas));
      canvas.removeEventListener('click', handleClick);
    };
  }, []);

  const resizeCanvas = (canvas) => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  };

  const createStaticStars = (ctx) => {
    staticStars = [];
    for (let i = 0; i < 200; i++) {
      staticStars.push({
        x: Math.random() * ctx.canvas.width,
        y: Math.random() * ctx.canvas.height,
        radius: Math.random() * 1.5,
        alpha: Math.random() * 0.8 + 0.2,
      });
    }
    drawStaticStars(ctx);
  };

  const drawStaticStars = (ctx) => {
    staticStars.forEach((star) => {
      ctx.beginPath();
      ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255, 255, 255, ${star.alpha})`;
      ctx.fill();
    });
  };

  const animate = (ctx) => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    drawStaticStars(ctx);

    shootingStars.forEach((star, index) => {
      ctx.beginPath();
      ctx.moveTo(star.x, star.y);
      ctx.lineTo(
        star.x - star.length * star.dx,
        star.y - star.length * star.dy
      );
      ctx.strokeStyle = `rgba(255, 255, 255, ${star.alpha})`;
      ctx.lineWidth = 2;
      ctx.stroke();

      star.x += star.dx * star.speed;
      star.y += star.dy * star.speed;
      star.alpha -= 0.005;

      if (star.alpha <= 0) {
        shootingStars.splice(index, 1);
      }
    });
    requestAnimationFrame(() => animate(ctx));
  };

  const handleClick = (e) => {
    const rect = canvasRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    createShootingStar(x, y);
  };

  const createShootingStar = (x, y) => {
    shootingStars.push({
      x: x,
      y: y,
      dx: Math.random() * 2 - 1,
      dy: Math.random() * 2 + 1,
      length: Math.random() * 80 + 10,
      speed: Math.random() * 3 + 2,
      alpha: 1,
    });
  };

  return <canvas ref={canvasRef} id="starry-sky"></canvas>;
};

export default StarrySky;
