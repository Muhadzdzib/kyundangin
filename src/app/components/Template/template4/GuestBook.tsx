"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Guest {
  name: string;
  message: string;
  date: string;
}

export default function GuestBook() {
  const [guests, setGuests] = useState<Guest[]>([]);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    const newGuest: Guest = {
      name,
      message,
      date: new Date().toLocaleString("id-ID", {
        day: "2-digit",
        month: "short",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    setGuests([newGuest, ...guests]);
    setName("");
    setMessage("");
  };

  return (
    <section className="relative w-full bg-gradient-to-b from-[#163B68] via-[#0B2A4C] to-[#0a0a0a] py-24 px-6 md:px-12 lg:px-20 text-white">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center text-4xl md:text-6xl font-bold mb-12"
      >
        Reservasi & Buku Tamu
      </motion.h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        {/* === FORM RESERVASI === */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2 }}
          className="bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/10 shadow-xl"
        >
          <h3 className="text-2xl font-semibold mb-6 text-pink-200 text-center">
            Konfirmasi Kehadiran
          </h3>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col space-y-4 text-gray-200"
          >
            <input
              type="text"
              placeholder="Nama Anda"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="px-4 py-3 rounded-lg bg-white/10 border border-white/10 focus:outline-none focus:ring-2 focus:ring-pink-300 placeholder-gray-400"
            />
            <textarea
              placeholder="Ucapan atau pesan"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="px-4 py-3 rounded-lg bg-white/10 border border-white/10 focus:outline-none focus:ring-2 focus:ring-pink-300 placeholder-gray-400 h-28 resize-none"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="mt-2 bg-pink-500 hover:bg-pink-400 text-white font-semibold py-3 rounded-lg shadow-md transition-all"
            >
              Konfirmasi Hadir
            </motion.button>
          </form>
        </motion.div>

        {/* === BUKU TAMU === */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2 }}
          className="bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/10 shadow-xl"
        >
          <h3 className="text-2xl font-semibold mb-6 text-pink-200 text-center">
            Buku Tamu
          </h3>

          {guests.length === 0 ? (
            <p className="text-gray-400 text-center italic">
              Belum ada tamu yang hadir. Jadilah yang pertama meninggalkan
              ucapan 💌
            </p>
          ) : (
            <ul className="space-y-5 max-h-[420px] overflow-y-auto pr-2">
              <AnimatePresence>
                {guests.map((guest, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="bg-white/10 rounded-lg p-4 border border-white/10"
                  >
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-semibold text-white">
                        {guest.name}
                      </span>
                      <span className="text-xs text-gray-400">
                        {guest.date}
                      </span>
                    </div>
                    <p className="text-gray-200 text-sm whitespace-pre-wrap">
                      {guest.message}
                    </p>
                  </motion.li>
                ))}
              </AnimatePresence>
            </ul>
          )}
        </motion.div>
      </div>

      {/* Gradient bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#0a0a0a] via-[#0B2A4C]/80 to-transparent" />
    </section>
  );
}
