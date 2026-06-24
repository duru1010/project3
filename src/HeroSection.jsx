// "use client";

// import { motion } from "framer-motion";

// export default function HeroSection() {
//   const dots = Array.from({ length: 24 });

//   return (
//     <section className="relative w-full h-screen bg-[#f3f4f6] overflow-hidden">
      
//       {/* FLOATING NAVBAR */}
//       <motion.nav 
//         initial={{ y: -100, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         transition={{ duration: 0.8, ease: "easeOut" }}
//         className="absolute top-6 left-1/2 -translate-x-1/2 w-[90%] md:w-[80%] z-50 flex items-center justify-between px-8 py-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-xl"
//       >
//         <div className="text-xl font-bold tracking-wide text-black">
//           JM<span className="text-orange-500">KC</span>
//         </div>
//         <div className="hidden md:flex gap-8 text-sm text-gray-800 font-medium">
//           {["Service", "About", "Blog", "Contact"].map((item) => (
//             <a key={item} href="#" className="hover:text-orange-600 transition-colors">{item}</a>
//           ))}
//         </div>
//         <button className="px-5 py-2 rounded-full bg-black text-white text-sm hover:bg-gray-800 transition-all">
//           Get in touch
//         </button>
//       </motion.nav>

//       {/* SPOTLIGHT EFFECT */}
//       <div className="absolute -left-[200px] top-[10%] w-[500px] h-[500px] bg-orange-400/20 blur-[150px] rounded-full pointer-events-none z-0"></div>

//       {/* MAIN */}
//       <div className="flex w-full h-full relative z-10 pt-20">
        
//         {/* LEFT */}
//         <div className="w-full md:w-1/2 flex flex-col justify-center px-10 md:px-20 lg:px-28">
//           <motion.h1
//             initial={{ opacity: 0, x: -100 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 1, ease: "easeOut" }}
//             className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05]"
//           >
//             <span className="text-black">TESTING </span>
//             <span className="text-orange-500">THE </span>
//             <br />
//             <span className="text-gray-800">SOFTWARE </span>
//             <span className="text-indigo-600">FOR </span>
//             <br />
//             <span className="text-purple-600">YOUR </span>
//             <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-red-600">
//               BUSINESS
//             </span>
//           </motion.h1>

//           {/* TWO CALL-TO-ACTION BUTTONS */}
//           <motion.div 
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.6 }}
//             className="mt-10 flex gap-4"
//           >
//             <button className="px-8 py-4 rounded-full bg-orange-500 text-white font-semibold shadow-lg hover:bg-orange-600 transition-all">
//               Get in touch
//             </button>
//             <button className="px-8 py-4 rounded-full border-2 border-black text-black font-semibold hover:bg-black hover:text-white transition-all">
//               View Projects
//             </button>
//           </motion.div>
//         </div>

//         {/* RIGHT */}
//         <div className="w-full md:w-1/2 relative flex items-center justify-center">
//           <div className="absolute inset-0 bg-[#15171c] rounded-l-[70px]" />

//           {/* ORBIT SYSTEM */}
//           <motion.div
//             className="absolute w-[20px] h-[520px] flex items-center justify-center z-10"
//             animate={{ rotate: 360 }}
//             transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
//           >
//             {dots.map((_, i) => (
//               <div
//                 key={i}
//                 className="absolute w-full h-full flex justify-center"
//                 style={{ transform: `rotate(${(i / dots.length) * 360}deg)` }}
//               >
//                 <div className="w-2 h-2 rounded-full bg-white/40" />
//               </div>
//             ))}
//           </motion.div>

//           {/* SPHERE */}
//           <motion.div
//             className="relative w-[300px] h-[300px] md:w-[420px] md:h-[420px] rounded-full z-20 shadow-2xl"
//             style={{
//               background: "radial-gradient(circle at 30% 30%, #ffffff 0%, #f472b6 40%, #7c3aed 70%, #15171c 100%)",
//             }}
//             initial={{ opacity: 0, y: 100 }}
//             animate={{ opacity: 1, y: 0, rotate: -360 }}
//             transition={{
//               y: { duration: 1.2, type: "spring", stiffness: 70 },
//               rotate: { repeat: Infinity, duration: 30, ease: "linear" },
//             }}
//           />
//         </div>
//       </div>
//     </section>
//   );
// }



// "use client";

// import { motion } from "framer-motion";
// import { useEffect, useRef } from "react";

// export default function HeroSection() {
//   const dots = Array.from({ length: 24 });
//   const canvasRef = useRef(null);

//   // Particle Network Effect Logic
//   useEffect(() => {
//     const canvas = canvasRef.current;
//     const ctx = canvas.getContext("2d");
//     let particles = [];
//     const particleCount = 60;
    
//     canvas.width = window.innerWidth;
//     canvas.height = window.innerHeight;

//     class Particle {
//       constructor() {
//         this.x = Math.random() * canvas.width;
//         this.y = Math.random() * canvas.height;
//         this.vx = (Math.random() - 0.5) * 0.5;
//         this.vy = (Math.random() - 0.5) * 0.5;
//         this.radius = Math.random() * 2 + 1;
//       }
//       draw() {
//         ctx.beginPath();
//         ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
//         ctx.fillStyle = "rgba(100, 200, 255, 0.4)";
//         ctx.fill();
//       }
//       update() {
//         this.x += this.vx;
//         this.y += this.vy;
//         if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
//         if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
//       }
//     }

//     for (let i = 0; i < particleCount; i++) particles.push(new Particle());

//     function animate() {
//       ctx.clearRect(0, 0, canvas.width, canvas.height);
//       particles.forEach((p, i) => {
//         p.update();
//         p.draw();
//         for (let j = i + 1; j < particles.length; j++) {
//           let dx = p.x - particles[j].x;
//           let dy = p.y - particles[j].y;
//           let distance = Math.sqrt(dx * dx + dy * dy);
//           if (distance < 150) {
//             ctx.beginPath();
//             ctx.strokeStyle = `rgba(100, 200, 255, ${0.2 * (1 - distance / 150)})`;
//             ctx.lineWidth = 0.5;
//             ctx.moveTo(p.x, p.y);
//             ctx.lineTo(particles[j].x, particles[j].y);
//             ctx.stroke();
//           }
//         }
//       });
//       requestAnimationFrame(animate);
//     }
//     animate();

//     const handleResize = () => {
//         canvas.width = window.innerWidth;
//         canvas.height = window.innerHeight;
//     };
//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   return (
//     <section className="relative w-full h-screen bg-[#050508] overflow-hidden text-white">
      
//       {/* PARTICLE NETWORK BACKGROUND */}
//       <canvas ref={canvasRef} className="absolute inset-0 z-0" />
      
//       {/* FLOATING NAVBAR */}
//       <motion.nav 
//         initial={{ y: -100, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         transition={{ duration: 0.8, ease: "easeOut" }}
//         className="absolute top-6 left-1/2 -translate-x-1/2 w-[90%] md:w-[80%] z-50 flex items-center justify-between px-8 py-4 rounded-full bg-white/5 backdrop-blur-md border border-white/10 shadow-2xl"
//       >
//         <div className="text-xl font-bold tracking-wide">
//           JM<span className="text-orange-500">KC</span>
//         </div>
//         <div className="hidden md:flex gap-8 text-sm font-medium text-gray-300">
//           {["Service", "About", "Blog", "Contact"].map((item) => (
//             <a key={item} href="#" className="hover:text-orange-500 transition-colors">{item}</a>
//           ))}
//         </div>
//         <button className="px-5 py-2 rounded-full bg-white text-black text-sm font-semibold hover:bg-gray-200 transition-all">
//           Get in touch
//         </button>
//       </motion.nav>

//       {/* MAIN CONTENT */}
//       <div className="flex w-full h-full relative z-10 pt-20">
        
//         {/* LEFT */}
//         <div className="w-full md:w-1/2 flex flex-col justify-center px-10 md:px-20 lg:px-28">
//           <motion.h1
//             initial={{ opacity: 0, x: -100 }}
//             animate={{ opacity: 1, x: 0 }}
//             className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05]"
//           >
//             <span className="text-white">TESTING </span>
//             <span className="text-orange-500">THE </span><br />
//             <span className="text-gray-300">SOFTWARE </span>
//             <span className="text-blue-400">FOR </span><br />
//             <span className="text-purple-400">YOUR </span>
//             <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-red-500">BUSINESS</span>
//           </motion.h1>

//           <motion.div className="mt-10 flex gap-4">
//             <button className="px-8 py-4 rounded-full bg-orange-500 text-white font-semibold shadow-lg shadow-orange-500/20 hover:scale-105 transition-all">
//               Get in touch
//             </button>
//           </motion.div>
//         </div>

//         {/* RIGHT */}
//         <div className="w-full md:w-1/2 relative flex items-center justify-center cursor-grab active:cursor-grabbing">
//           {/* Subtle dark glass effect */}
//           <div className="absolute inset-0 bg-black/20 backdrop-blur-[2px] rounded-l-[70px]" />

//           {/* ORBIT SYSTEM */}
//           <motion.div
//             className="absolute w-[20px] h-[520px] flex items-center justify-center z-10 pointer-events-none"
//             animate={{ rotate: 360 }}
//             transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
//           >
//             {dots.map((_, i) => (
//               <div
//                 key={i}
//                 className="absolute w-full h-full flex justify-center"
//                 style={{ transform: `rotate(${(i / dots.length) * 360}deg)` }}
//               >
//                 <div className="w-2 h-2 rounded-full bg-white/20" />
//               </div>
//             ))}
//           </motion.div>

//           {/* 3D INTERACTIVE SPHERE */}
//           <motion.div
//             className="relative w-[300px] h-[300px] md:w-[420px] md:h-[420px] rounded-full z-20"
//             style={{
//               background: "radial-gradient(circle at 35% 35%, #ffffff 0%, #f472b6 40%, #7c3aed 70%, #050508 100%)",
//               boxShadow: "inset -20px -20px 50px rgba(0,0,0,0.8), 0 0 50px rgba(124, 58, 237, 0.3)",
//               cursor: "pointer",
//             }}
//             initial={{ opacity: 0, y: 100, scale: 0.8 }}
//             animate={{ opacity: 1, y: 0, scale: 1, rotate: -360 }}
//             transition={{
//               y: { duration: 1.2, type: "spring", stiffness: 70 },
//               rotate: { repeat: Infinity, duration: 30, ease: "linear" },
//             }}
//             whileHover={{ scale: 1.05, boxShadow: "inset -20px -20px 50px rgba(0,0,0,0.8), 0 0 80px rgba(124, 58, 237, 0.5)" }}
//             whileTap={{ scale: 0.95, rotate: 0 }}
//           />
//         </div>
//       </div>
//     </section>
//   );
// }




"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

export default function HeroSection() {
  const dots = Array.from({ length: 24 });
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let particles = [];
    const particleCount = 80; // Slightly more particles for density
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.4;
        this.vy = (Math.random() - 0.5) * 0.4;
        this.radius = Math.random() * 2 + 1.5;
      }
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        // Bright blue/white glow color
        ctx.fillStyle = "#A3C4FF"; 
        ctx.shadowBlur = 10;
        ctx.shadowColor = "#60A5FA";
        ctx.fill();
        ctx.shadowBlur = 0; // Reset for performance
      }
      update() {
        this.x += this.vx;
        this.y += this.vy;
        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
      }
    }

    for (let i = 0; i < particleCount; i++) particles.push(new Particle());

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p, i) => {
        p.update();
        p.draw();
        for (let j = i + 1; j < particles.length; j++) {
          let dx = p.x - particles[j].x;
          let dy = p.y - particles[j].y;
          let distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < 180) {
            ctx.beginPath();
            // High visibility glowing lines
            ctx.strokeStyle = `rgba(163, 196, 255, ${0.4 * (1 - distance / 180)})`;
            ctx.shadowBlur = 5;
            ctx.shadowColor = "#3B82F6";
            ctx.lineWidth = 1.5;
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
            ctx.shadowBlur = 0;
          }
        }
      });
      requestAnimationFrame(animate);
    }
    animate();
  }, []);

  return (
    // Deepest black background
    <section className="relative w-full h-screen bg-[#000000] overflow-hidden text-white">
      
      {/* GLOWING NETWORK LAYER */}
      <canvas ref={canvasRef} className="absolute inset-1 z-100" />
      
      {/* UI Elements remain with high contrast */}
      <motion.nav 
         initial={{ y: -100, opacity: 0 }}
         animate={{ y: 0, opacity: 1 }}
         transition={{ duration: 0.8, ease: "easeOut" }}
         className="absolute top-6 left-1/2 -translate-x-1/2 w-[90%] md:w-[80%] z-50 flex items-center justify-between px-8 py-4 rounded-full bg-white/5 backdrop-blur-md border border-white/10 shadow-2xl"
       >
         <div className="text-xl font-bold tracking-wide">
           JM<span className="text-orange-500">KC</span>
         </div>
         <div className="hidden md:flex gap-8 text-sm font-medium text-gray-300">
           {["Service", "About", "Blog", "Contact"].map((item) => (
             <a key={item} href="#" className="hover:text-orange-500 transition-colors">{item}</a>
           ))}
         </div>
         <button className="px-5 py-2 rounded-full bg-white text-black text-sm font-semibold hover:bg-gray-200 transition-all">
           Get in touch
         </button>
    </motion.nav>

      {/* Main Content remains here... */}
      <div className="flex w-full h-full relative z-10 pt-20">
        
      {/* LEFT */}
         <div className="w-full md:w-1/2 flex flex-col justify-center px-10 md:px-20 lg:px-28">
         <motion.h1
  initial={{ opacity: 0, x: -100 }}
  animate={{ opacity: 1, x: 0 }}
  className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1]"
>
  <span className="text-white">NEXT GENERATION </span><br />
  <span className="text-blue-400">NETWORK </span>
  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
    SOLUTIONS
  </span>
</motion.h1>

           <motion.div className="mt-10 flex gap-4">
             <button className="px-8 py-4 rounded-full bg-orange-500 text-white font-semibold shadow-lg shadow-orange-500/20 hover:scale-105 transition-all">
               Get in touch
             </button>
           </motion.div>
        </div>

         {/* RIGHT */}
         <div className="w-full md:w-1/2 relative flex items-center justify-center cursor-grab active:cursor-grabbing">
           {/* Subtle dark glass effect */}
           <div className="absolute inset-0 bg-black/20 backdrop-blur-[2px] rounded-l-[70px]" />

           {/* ORBIT SYSTEM */}
           <motion.div
             className="absolute w-[20px] h-[520px] flex items-center justify-center z-10 pointer-events-none"
             animate={{ rotate: 360 }}
             transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
           >
             {dots.map((_, i) => (
               <div
                key={i}
                 className="absolute w-full h-full flex justify-center"
                 style={{ transform: `rotate(${(i / dots.length) * 360}deg)` }}
               >
                 <div className="w-2 h-2 rounded-full bg-white/20" />
               </div>
             ))}
       </motion.div>

           {/* 3D INTERACTIVE SPHERE */}
           <motion.div
           className="relative w-[300px] h-[300px] md:w-[420px] md:h-[420px] rounded-full z-20"
             style={{
               background: "radial-gradient(circle at 35% 35%, #ffffff 0%, #f472b6 40%, #7c3aed 70%, #050508 100%)",
               boxShadow: "inset -20px -20px 50px rgba(0,0,0,0.8), 0 0 50px rgba(124, 58, 237, 0.3)",
               cursor: "pointer",
             }}
             initial={{ opacity: 0, y: 100, scale: 0.8 }}
             animate={{ opacity: 1, y: 0, scale: 1, rotate: -360 }}
             transition={{
               y: { duration: 1.2, type: "spring", stiffness: 70 },
               rotate: { repeat: Infinity, duration: 30, ease: "linear" },
             }}
             whileHover={{ scale: 1.05, boxShadow: "inset -20px -20px 50px rgba(0,0,0,0.8), 0 0 80px rgba(124, 58, 237, 0.5)" }}
             whileTap={{ scale: 0.95, rotate: 0 }}
           />
         </div>
      </div>
    </section>
  );
}