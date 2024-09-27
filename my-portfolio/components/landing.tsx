import React, { useEffect, useRef } from 'react';
import SideBar from '../components/sidebar';
import { motion } from 'framer-motion';

const NeuralNetworkBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const handleResize = () => {
      if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }
    };
    handleResize();

    const particles: { x: number; y: number; size: number; speedX: number; speedY: number }[] = [];
    const particleCount = 100;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 5 + 1,
        speedX: Math.random() * 3 - 1.5,
        speedY: Math.random() * 3 - 1.5
      });
    }

    function animate() {
      const canvas = canvasRef.current;
      if (!ctx || !canvas) return; 
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((particle, index) => {
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(100, 255, 218, 0.5)';
        ctx.fill();

        for (let j = index + 1; j < particles.length; j++) {
          const dx = particles[j].x - particle.x;
          const dy = particles[j].y - particle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(100, 255, 218, ${1 - distance / 100})`;
            ctx.stroke();
          }
        }
      });

      requestAnimationFrame(animate);
    }

    animate();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 z-0" />;
};

export default function Home() {
  return (
    <section id="landing" className="relative min-h-screen flex flex-col justify-center bg-gray-900 text-white overflow-hidden">
      <NeuralNetworkBackground />
      
      {/* Sidebar for larger screens */}
      <div className="hidden md:block absolute top-20 left-4">
        <SideBar />
      </div>
      
      {/* Content container */}
      <div className="container mx-auto px-4 flex flex-col justify-center items-center z-10">
        {/* Sidebar for mobile screens */}
        <div className="md:hidden w-full mb-8">
          <SideBar />
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.h1 
            className="text-2xl sm:text-5xl md:text-6xl lg:text-7xl font-bold"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Nandita Nandakumar
          </motion.h1>
          <motion.p 
            className="text-lg sm:text-xl md:text-2xl mt-4 text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Deep Learning Engineer | AI for Sustainability | ML Enthusiast
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}