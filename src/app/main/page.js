"use client";
import Head from "next/head";
import TextType from "../components/TextType";
import { useState } from "react";
import "../globals.css";

export default function Home() {
  const menuData = [
    {
      category: "Pernikahan",
      items: [
        {
          title: "Pernikahan Template 1",
          link: "/pernikahan/template1",
          target: "_blank",
        },
        {
          title: "Pernikahan Template 2",
          link: "/pernikahan/template2",
          target: "_blank",
        },
        {
          title: "Pernikahan Template 3",
          link: "/pernikahan/template3",
          target: "_blank",
        },
        { title: "Pernikahan Template 4",
           link: "/pernikahan/template4",
           target: "_blank",
        },
        { title: "Pernikahan Template 5", link: "#" },
        { title: "Pernikahan Template 6", link: "#" },
      ],
    },
    {
      category: "Ulang Tahun ",
      items: [
        { title: "Ulang Tahun Template 1", link: "#" },
        { title: "Ulang Tahun Template 2", link: "#" },
        { title: "Ulang Tahun Template 3", link: "#" },
        { title: "Ulang Tahun Template 4", link: "#" },
        { title: "Ulang Tahun Template 5", link: "#" },
        { title: "Ulang Tahun Template 6", link: "#" },
      ],
    },
    {
      category: "Lainnya ",
      items: [
        { title: "Template 1", link: "#" },
        { title: "Template 2", link: "#" },
        { title: "Template 3", link: "#" },
        { title: "Template 4", link: "#" },
        { title: "Template 5", link: "#" },
        { title: "Template 6", link: "#" },
      ],
    },
  ];

  const [activeCat, setActiveCat] = useState(menuData[0].category);

  return (
    <>
      <Head>
        <meta
          name="description"
          content="Jasa pembuatan undangan online elegan & modern."
        />
      </Head>

      <main className="font-jakarta">
        {/*  Section Hero  */}
        <section
          id="hero"
          className="min-h-screen flex items-center bg-white px-6 pt-20"
        >
          <div className="max-w-6xl w-full mx-auto grid grid-cols-1 md:grid-cols-[3fr_1fr] gap-2">
            {/* === KIRI : Deskripsi + tombol + harga === */}
            <div className="flex flex-col justify-between h-full">
              {/* Bagian atas : Judul + Tombol */}
              <div>
                <h1 className="text-xl md:text-5xl text-[#34656D] leading-snug mb-8">
                  Buat undangan
                  <span className="text-3xl">
                    {" "}
                    <TextType
                      text={[" pernikahan", " ulang tahun", " lainnya"]}
                      typingSpeed={10}
                      pauseDuration={1000}
                      showCursor={true}
                      cursorCharacter="|"
                    />{" "}
                  </span>
                  <br />
                  bersama kami, <br />
                  abadikan momen istimewa <br />
                  dalam satu tautan
                </h1>

                <div className="flex gap-4">
                  <a
                    href="#harga"
                    className="bg-[#34656D] text-white px-5 py-2 rounded-md hover:bg-slate-600 transition"
                  >
                    Lihat Harga
                  </a>
                  <a
                    href="#contoh"
                    className="bg-slate-600 text-white px-5 py-2 rounded-md hover:bg-[#34656D] transition"
                  >
                    Lihat Contoh
                  </a>
                </div>
              </div>

              {/* Bagian bawah : Harga */}
              <div className="md:mt-auto">
                <p className="mt-10 text-xl md:text-xl font-semibold text-[#34656D]">
                  Mulai dari
                </p>
                <p className="text-3xl md:text-4xl font-semibold text-[#34656D]">
                  Rp. 25.000
                </p>
              </div>
            </div>

            {/* === KANAN : Gambar === */}
            <div className="flex justify-center md:justify-end">
              <div className="w-72 h-72 md:w-96 md:h-96 bg-gray-300 rounded-md flex items-center justify-center">
                {/* Ganti div ini dengan <Image> dari next/image */}
                <span className="text-gray-500">Gambar</span>
              </div>
            </div>
          </div>
        </section>

        {/*  Section Template  */}
        <section id="contoh" className="py-20 bg-gray-50 px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-[#34656D] text-center">
            Pilih Template, Wujudkan Undangan Impianmu
          </h1>
          <p className="text-gray-600 mb-10 max-w-2xl mx-auto text-center">
            Berikut beberapa template undangan yang tersedia. Klik untuk melihat
            live demo.
          </p>

          {/* Menu Tabs */}
          <div className="flex justify-center gap-4 mb-8">
            {menuData.map((cat) => (
              <button
                key={cat.category}
                onClick={() => setActiveCat(cat.category)}
                className={`px-4 py-2 rounded-lg ${
                  activeCat === cat.category
                    ? "bg-[#34656D] text-white"
                    : "bg-white text-[#34656D] hover:bg-gray-300"
                }`}
              >
                {cat.category}
              </button>
            ))}
          </div>

          {/* Items */}
          <div className="grid gap-6 md:grid-cols-3 max-w-5xl mx-auto">
            {menuData
              .find((cat) => cat.category === activeCat)
              ?.items.map((item, idx) => (
                <a
                  key={idx}
                  href={item.link}
                  target={item.target ? item.target : "_self"}
                  rel={
                    item.target === "_blank" ? "noopener noreferrer" : undefined
                  }
                  className="group relative block bg-gray-100 rounded-xl overflow-hidden shadow hover:shadow-lg transition"
                >
                  <div className="h-48 bg-gray-200 flex items-center justify-center">
                    <span className="text-gray-500">{item.title}</span>
                  </div>
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition flex items-center justify-center text-white font-semibold">
                    Lihat Demo
                  </div>
                </a>
              ))}
          </div>
        </section>

        {/*  Section Fitur  */}
        <section id="fitur" className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-[#34656D] text-center">
              Nikmati Beragam Fitur untuk Undangan Digital
            </h1>
            <p className="text-center text-gray-600 mb-12">
              Dari galeri foto, peta lokasi, hingga musik latar, semua tersedia.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Card 1 */}
              <div className="bg-white shadow-md rounded-xl p-6 text-center hover:shadow-lg transition">
                <div className="text-indigo-500 mb-4 text-5xl">🕒</div>
                <h3 className="text-lg text-[#34656D] font-semibold mb-2">
                  Masa Aktif
                </h3>
                <p className="text-gray-600 text-sm">
                  Undangan bisa diakses sesuai kebutuhan, mulai dari 2 Minggu
                  hingga 1 tahun penuh.
                </p>
              </div>

              {/* Card 5 */}
              <div className="bg-white shadow-md rounded-xl p-6 text-center hover:shadow-lg transition">
                <div className="text-blue-500 mb-4 text-5xl">🎵</div>
                <h3 className="text-[#34656D] text-lg font-semibold mb-2">
                  Musik Latar
                </h3>
                <p className="text-gray-600 text-sm">
                  Lengkapi undanganmu dengan musik latar yang indah dan
                  menyentuh (Bebas Requst Lagu).
                </p>
              </div>

              {/* Card 6 */}
              <div className="bg-white shadow-md rounded-xl p-6 text-center hover:shadow-lg transition">
                <div className="text-red-500 mb-4 text-5xl">⏳</div>
                <h3 className="text-[#34656D] text-lg font-semibold mb-2">
                  Countdown Timer
                </h3>
                <p className="text-gray-600 text-sm">
                  Hitung mundur menuju hari spesial secara otomatis di
                  undanganmu.
                </p>
              </div>

              {/* Card 7 */}
              <div className="bg-white shadow-md rounded-xl p-6 text-center hover:shadow-lg transition">
                <div className="text-indigo-500 mb-4 text-5xl">📖</div>
                <h3 className="text-[#34656D] text-lg font-semibold mb-2">
                  Cerita
                </h3>
                <p className="text-gray-600 text-sm">
                  Tambahkan cerita perjalanan cinta untuk membuat undangan lebih
                  personal.
                </p>
              </div>

              {/* Card 8 */}
              <div className="bg-white shadow-md rounded-xl p-6 text-center hover:shadow-lg transition">
                <div className="text-pink-500 mb-4 text-5xl">📸</div>
                <h3 className="text-[#34656D] text-lg font-semibold mb-2">
                  Galeri
                </h3>
                <p className="text-gray-600 text-sm">
                  Bagikan momen berharga dalam jumlah tak terbatas lewat galeri
                  foto.
                </p>
              </div>

              {/* Card 9 */}
              <div className="bg-white shadow-md rounded-xl p-6 text-center hover:shadow-lg transition">
                <div className="text-green-500 mb-4 text-5xl">💝</div>
                <h3 className="text-[#34656D] text-lg font-semibold mb-2">
                  Cashless Gift
                </h3>
                <p className="text-gray-600 text-sm">
                  Permudah tamu memberikan hadiah secara online melalui
                  transfer.
                </p>
              </div>

              {/* Card 10 */}
              <div className="bg-white shadow-md rounded-xl p-6 text-center hover:shadow-lg transition">
                <div className="text-blue-500 mb-4 text-5xl">📝</div>
                <h3 className="text-[#34656D] text-lg font-semibold mb-2">
                  Reservasi Tamu
                </h3>
                <p className="text-gray-600 text-sm">
                  Kelola kehadiran tamu dengan sistem reservasi yang mudah
                  diisi.
                </p>
              </div>

              {/* Card 11 */}
              <div className="bg-white shadow-md rounded-xl p-6 text-center hover:shadow-lg transition">
                <div className="text-red-500 mb-4 text-5xl">📔</div>
                <h3 className="text-[#34656D] text-lg font-semibold mb-2">
                  Buku Tamu
                </h3>
                <p className="text-gray-600 text-sm">
                  Simpan kenangan ucapan tamu di buku tamu digital Anda.
                </p>
              </div>

              {/* Card 12 */}
              <div className="bg-white shadow-md rounded-xl p-6 text-center hover:shadow-lg transition">
                <div className="text-indigo-500 mb-4 text-5xl">📍</div>
                <h3 className="text-[#34656D] text-lg font-semibold mb-2">
                  Peta Lokasi
                </h3>
                <p className="text-gray-600 text-sm">
                  Sertakan peta interaktif agar tamu mudah menemukan lokasi
                  acara.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/*  Section Harga  */}
        <section id="harga" className="py-20 bg-white text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#34656D]">
            Paket Harga
          </h2>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
            Sesuaikan undangan impianmu dengan budget yang pas..
          </p>

          <div className="grid gap-8 md:grid-cols-2 max-w-3xl mx-auto">
            {[
              {
                name: "Basic",
                price: "Rp25.000",
                features: [
                  "✅Masa Aktif 1 Minggu",
                  "✅Gratis Pilih Template",
                  "❌Request Musik Latar",
                  "✅Countdown Timer",
                  "✅Cerita (Opsional)",
                  "✅Galeri (Max 10 Foto)",
                  "✅Cashless Gift",
                  "❌Reservasi Tamu",
                  "❌Buku Tamu",
                  "✅Peta Lokasi",
                ],
              },
              {
                name: "Premium",
                price: "Rp50.000",
                features: [
                  "✅Masa Aktif 1 Bulan",
                  "✅Gratis Pilih Template",
                  "✅Request Musik Latar",
                  "✅Countdown Timer",
                  "✅Cerita (Opsional)",
                  "✅Galeri (♾️ Foto & Video)",
                  "✅Cashless Gift",
                  "✅Reservasi Tamu",
                  "✅Buku Tamu",
                  "✅Peta Lokasi",
                ],
              },
          
            ].map((pkg, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl shadow hover:shadow-xl transition p-8 flex flex-col"
              >
                <h3 className="text-2xl font-semibold mb-2 text-[#34656D]">
                  {pkg.name}
                </h3>
                <p className="text-[#34656D] text-3xl font-bold mb-4">
                  {pkg.price}
                </p>
                <ul className="text-gray-600 flex-1 mb-6 space-y-2 text-left">
                  {pkg.features.map((f, i) => (
                    <li key={i}>{f}</li>
                  ))}
                </ul>
                <a
                  href="https://wa.me/6283897321220"
                  target="_blank"
                  className="bg-[#34656D] text-white py-3 rounded-lg font-medium hover:bg-black transition"
                >
                  Pesan Sekarang
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* ===== Section Kontak ===== */}
        <section id="kontak" className="py-20 bg-gray-50 text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#34656D]">
            Hubungi Kami
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Tanyakan detail atau pesan undangan online melalui kontak dibawah:
          </p>

          <div className="space-y-4 text-lg text-gray-700">
            <p>
              Instagram:{" "}
              <a
                href="https://instagram.com/username"
                className="text-[#34656D] hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                @Kyundang_invt
              </a>
            </p>
            <p>
              WhatsApp:{" "}
              <a
                href="https://wa.me/6283897321220"
                className="text-[#34656D] hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                +6283897321220
              </a>
            </p>
            <p>
              Email: <span className="text-[#34656D]">kyuundang@gmail.com</span>
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
