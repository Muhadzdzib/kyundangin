"use client";

import { useEffect, useState } from "react";
import Particles from "../../Particles";
import Ring from "./Ring";
import { motion } from "framer-motion";

const Hero = () => {
  const [guestName, setGuestName] = useState<string>("");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const name = params.get("to");
    if (name) setGuestName(decodeURIComponent(name));
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden bg-gradient-to-b from-[#0a0a0a] to-[#1a1a1a] flex flex-col items-center justify-center text-center px-4">
      {/* Background Particles */}
      <Particles
        className="absolute inset-0 z-0"
        particleCount={250}
        particleSpread={6}
        speed={0.15}
        particleColors={["#0C2B4E", "#1A3D64", "#1D546C"]}
        alphaParticles={true}
        particleBaseSize={80}
        sizeRandomness={1}
      />

      {/* Overlay Lembut */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/80 z-10" />

      {/* Konten Utama */}
      <div className="relative z-20 flex flex-col items-center justify-center">
        {/* Cincin 3D */}
        <motion.div
          initial={{ y: -40, opacity: 0, scale: 0.8 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <Ring />
        </motion.div>

        {/* Nama Pasangan */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1.2 }}
          className="text-4xl sm:text-5xl md:text-7xl font-serif font-semibold text-white tracking-wide"
        >
          Ali <span className="text-[#1D546C]">&</span> Bunga
        </motion.h1>

        {/* Teks Undangan */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-4 md:mt-6 text-base sm:text-lg md:text-xl text-gray-200 italic max-w-md"
        >
          Mengundang Anda untuk hadir di hari bahagia kami
        </motion.p>

        {/* Nama Tamu */}
        {guestName && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3 }}
            className="mt-6 md:mt-8 text-lg sm:text-xl text-pink-200"
          >
            Untuk yang terhormat:{" "}
            <span className="font-semibold text-white">{guestName}</span>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Hero;
