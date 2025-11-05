"use client";

import { useEffect, useState } from "react";
import Particles from "../../Particles";
import Ring from "./Ring";
import { motion } from "framer-motion";

const Hero = () => {
  const [guestName, setGuestName] = useState<string>("");
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // 🎯 Target waktu: 1 bulan dari sekarang
  const targetDate = new Date();
  targetDate.setMonth(targetDate.getMonth() + 1);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const name = params.get("to");
    if (name) setGuestName(decodeURIComponent(name));
  }, []);

  // 🕒 Countdown logic
  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance <= 0) {
        clearInterval(timer);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((distance / (1000 * 60)) % 60),
        seconds: Math.floor((distance / 1000) % 60),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden bg-gradient-to-b from-[#0a0a0a] to-[#0C2B4E] flex flex-col items-center justify-center text-center px-4">
      {/* 🌌 Background Particles */}
      <Particles
        className="absolute inset-0 z-0"
        particleCount={250}
        particleSpread={6}
        speed={0.15}
        particleColors={["#0C2B4E", "#1A3D64", "#00000"]}
        alphaParticles={true}
        particleBaseSize={80}
        sizeRandomness={1}
      />

      {/* Overlay lembut */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/80 z-10" />

      {/* ✨ Konten Utama */}
      <div className="relative z-20 flex flex-col items-center justify-center">
        {/* Cincin animasi */}
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
          who <span className="text-[#1D546C]">&</span> who?
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

        {/* Countdown */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 1 }}
          className="mt-8 flex gap-3 sm:gap-6 md:gap-8 text-white text-sm sm:text-base md:text-lg font-mono"
        >
          <CountdownItem label="Hari" value={timeLeft.days} />
          <CountdownItem label="Jam" value={timeLeft.hours} />
          <CountdownItem label="Menit" value={timeLeft.minutes} />
          <CountdownItem label="Detik" value={timeLeft.seconds} />
        </motion.div>

        {/* Nama Tamu */}
        {guestName && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6 }}
            className="mt-8 text-lg sm:text-xl text-pink-200"
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

// 🎈 Komponen kecil untuk setiap bagian countdown
const CountdownItem = ({
  label,
  value,
}: {
  label: string;
  value: number;
}) => (
  <div className="flex flex-col items-center">
    <span className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#B3E5FC] drop-shadow-lg">
      {String(value).padStart(2, "0")}
    </span>
    <span className="mt-1 text-gray-300 text-xs sm:text-sm">{label}</span>
  </div>
);
