"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.2, ease: "easeInOut" as const },
  },
};

export default function Story() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-[#0C2B4E] via-[#0B2A4C] to-[#163B68] text-white py-24 px-6 md:px-12 lg:px-20">
      {/* Decorative overlay */}
      <div className="absolute inset-0 bg-[url('/texture.svg')] opacity-10 mix-blend-overlay pointer-events-none"></div>

      {/* Title */}
      <motion.h2
        className="text-center text-4xl md:text-6xl font-bold mb-8"
        initial="hidden"
        whileInView="visible"
        variants={fadeUp}
        viewport={{ once: true }}
      >
        Cerita Kami
      </motion.h2>

      <motion.p
        className="text-center max-w-3xl mx-auto text-lg md:text-xl text-gray-200 leading-relaxed mb-20"
        initial="hidden"
        whileInView="visible"
        variants={fadeUp}
        viewport={{ once: true }}
      >
        Di antara ribuan langkah dan jutaan wajah, takdir membawa kami saling
        mengenal. Semua terasa biasa, hingga perlahan rasa itu tumbuh dan
        berubah menjadi sesuatu yang sulit dijelaskan — hangat, lembut, dan
        nyata. Inilah kisah kami, perjalanan dua hati yang akhirnya dipertemukan
        pada waktu terbaik oleh semesta yang penuh kejutan.
      </motion.p>

      {/* Stories container */}
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-stretch justify-center">
        {/* Cerita dari mempelai pria */}
        <motion.div
          className="flex-1 bg-white/5 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-white/10"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.3, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold mb-4 text-pink-200">
            Dari Sudut Pandang who
          </h3>
          <p className="text-gray-100 leading-relaxed text-base md:text-lg">
            Hari itu, aku tidak mencari apa pun. Dunia terasa seperti biasanya
            — tenang, datar, dan tanpa kejutan. Tapi semuanya berubah ketika aku
            melihatnya untuk pertama kali. Senyumnya bukan sekadar indah, tapi
            seperti cahaya kecil yang menembus hari-hari kelabu.  
            <br />
            <br />
            Aku tak langsung tahu apa artinya perasaan itu. Kami mulai berbicara
            dengan canggung, menukar cerita kecil tentang hal-hal sederhana:
            kopi, buku, dan mimpi. Tapi setiap percakapan selalu meninggalkan
            gema di hati. Hari berganti minggu, minggu menjadi bulan. Tiba-tiba
            aku sadar, aku mulai menunggu pesan darinya, tawa darinya, bahkan
            diamnya yang menenangkan.  
            <br />
            <br />
            Kini, setiap kali aku menatapnya, aku tahu — aku telah menemukan
            rumahku. Bukan tempat, tapi seseorang. Dia.
          </p>
        </motion.div>

        {/* Cerita dari mempelai wanita */}
        <motion.div
          className="flex-1 bg-white/5 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-white/10"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.3, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold mb-4 text-pink-200">
            Dari Sudut Pandang who?
          </h3>
          <p className="text-gray-100 leading-relaxed text-base md:text-lg">
            Saat pertama kali mengenalnya, aku tidak menyangka bahwa seseorang
            yang begitu sederhana bisa memberi warna sebanyak itu. Ia tidak
            datang dengan janji besar atau kata-kata manis — ia datang dengan
            kejujuran, dan itu cukup membuatku merasa aman.  
            <br />
            <br />
            Aku masih ingat bagaimana ia selalu berusaha memahami, bahkan saat
            aku sulit dimengerti. Ia tak pernah memaksakan apa pun, hanya
            menunggu dengan sabar hingga aku siap membuka hati sepenuhnya. Dari
            pertemuan kecil di tempat yang tak terduga, kami tumbuh bersama —
            belajar arti sabar, arti memaafkan, dan arti menjaga perasaan satu
            sama lain.  
            <br />
            <br />
            Cinta ini bukan tentang kesempurnaan. Ia adalah perjalanan dua jiwa
            yang berani berjalan bersama, dengan langkah yang tak selalu seirama
            — tapi menuju arah yang sama.
          </p>
        </motion.div>
      </div>

      {/* Divider / soft gradient transition to next section */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#163B68] via-[#0B2A4C]/70 to-transparent"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      />
    </section>
  );
}
