
"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function HeroSection() {
  const [menuOpen, setMenuOpen] = useState(false);
  const dots = Array.from({ length: 24 });
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let particles = [];
    let animationId;

    const particleCount = 150; // Increased particles
    const mouse = { x: null, y: null, radius: 150 };

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    window.addEventListener("mousemove", handleMouseMove);

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;

        this.vx = (Math.random() - 0.5) * 0.6;
        this.vy = (Math.random() - 0.5) * 0.6;

        // Bigger particles
        this.radius = Math.random() * 3 + 2;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);

        // Maximum opacity particles
        ctx.fillStyle = "rgba(255,255,255,1)";
        ctx.fill();
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        // Mouse repulsion
        if (mouse.x !== null) {
          const dx = this.x - mouse.x;
          const dy = this.y - mouse.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < mouse.radius) {
            const force = (mouse.radius - distance) / mouse.radius;
            const angle = Math.atan2(dy, dx);

            this.x += Math.cos(angle) * force * 6;
            this.y += Math.sin(angle) * force * 6;
          }
        }

        // Bounce from edges
        if (this.x <= 0 || this.x >= canvas.width) this.vx *= -1;
        if (this.y <= 0 || this.y >= canvas.height) this.vy *= -1;
      }
    }

    // Create particles
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p, i) => {
        p.update();
        p.draw();

        for (let j = i + 1; j < particles.length; j++) {
          const dx = p.x - particles[j].x;
          const dy = p.y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 160) {
            // Increased line opacity
            ctx.strokeStyle = `rgba(255,255,255,${
              0.9 * (1 - distance / 160)
            })`;

            ctx.lineWidth = 1;

            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section className="relative w-full min-h-screen bg-black overflow-hidden text-white flex flex-col">
      {/* PARTICLE BACKGROUND */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full z-0 pointer-events-none"
      />

      {/* Optional glow overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/10 to-transparent z-[1]" />

      {/* NAVBAR */}
      <nav className="relative z-50 flex items-center justify-between px-6 py-6 w-full max-w-7xl mx-auto">
        <div className="text-xl font-bold">
          JM<span className="text-orange-500">KC</span>
        </div>

        <div className="hidden md:flex gap-8 text-sm font-medium text-gray-300">
          {["Service", "About", "Blog", "Contact"].map((item) => (
            <a
              key={item}
              href="#"
              className="hover:text-orange-500 transition-colors"
            >
              {item}
            </a>
          ))}
        </div>

        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        <button className="hidden md:block px-5 py-2 rounded-full bg-white text-black text-sm font-semibold hover:bg-gray-200">
          Get in touch
        </button>
      </nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="md:hidden absolute top-20 left-0 w-full bg-black/90 p-6 flex flex-col gap-4 text-center z-40"
          >
            {["Service", "About", "Blog", "Contact"].map((item) => (
              <a key={item} href="#" className="text-lg">
                {item}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* HERO CONTENT */}
      <div className="flex-1 flex flex-col lg:flex-row items-center justify-center relative z-10 p-6 gap-10">
        {/* TEXT */}
        <motion.div
          initial={{ x: -300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.8 }}
          className="text-center lg:text-left"
        >
          <h1 className="text-4xl md:text-7xl font-extrabold leading-tight">
            NEXT GENERATION <br />
            <span className="text-blue-400">NETWORK </span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              SOLUTIONS
            </span>
          </h1>

          <button className="mt-8 px-8 py-4 rounded-full bg-orange-500 font-semibold hover:scale-105 transition-transform">
            Get in touch
          </button>
        </motion.div>

        {/* SPHERE */}
        <motion.div
          initial={{ y: 400, opacity: 0, scale: 0.7 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 2, delay: 0.3 }}
          className="relative w-[300px] h-[300px] md:w-[450px] md:h-[450px] flex items-center justify-center"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              repeat: Infinity,
              duration: 20,
              ease: "linear",
            }}
            className="absolute inset-0"
          >
            {dots.map((_, i) => (
              <div
                key={i}
                className="absolute w-full h-full flex justify-center"
                style={{
                  transform: `rotate(${(i / dots.length) * 360}deg)`,
                }}
              >
                <div className="w-2 h-2 rounded-full bg-white/40" />
              </div>
            ))}
          </motion.div>

          <div className="w-[200px] h-[200px] md:w-[300px] md:h-[300px] rounded-full bg-gradient-to-tr from-orange-400 to-purple-600 shadow-[0_0_80px_rgba(124,58,237,0.8)]" />
        </motion.div>
      </div>
    </section>
  );
}
