"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar, FileText, Users, CheckCircle, Mail, Phone, MapPin } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

export default function PPDBLandingPage() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <motion.header className="px-4 lg:px-6 h-16 flex items-center fixed w-full bg-white shadow-sm z-50" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <Link className="flex items-center justify-center" href="#">
          <Image src="/assets/logo.ico" width={40} height={40} alt="Logo" />
          <span className="ml-2 text-xl font-bold text-green-600">PPDB SDIT & TKIP AL-MADINAH</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:text-green-600 transition-colors" href="#tentang">
            Tentang
          </Link>
          <Link className="text-sm font-medium hover:text-green-600 transition-colors" href="#jadwal">
            Jadwal
          </Link>
          <Link className="text-sm font-medium hover:text-green-600 transition-colors" href="#persyaratan">
            Persyaratan
          </Link>
          <Link className="text-sm font-medium hover:text-green-600 transition-colors" href="#kontak">
            Kontak
          </Link>
        </nav>
      </motion.header>
      <main className="flex-1 pt-16">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-r from-green-600 via-teal-500 to-emerald-500">
          <div className="container px-4 md:px-6 mx-auto">
            <motion.div className="flex flex-col lg:flex-row items-center justify-between space-y-12 lg:space-y-0 lg:space-x-12" initial="initial" animate="animate" variants={stagger}>
              <motion.div className="space-y-4 text-center lg:text-left" variants={fadeIn}>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-white">Selamat Datang di PPDB SDIT & TKIP Al-Madinah 2025/2026</h1>
                <p className="max-w-[600px] text-gray-200 md:text-xl">Bergabunglah dengan kami untuk memulai perjalanan pendidikan yang luar biasa. Daftarkan diri Anda sekarang!</p>
                <div className="space-x-4">
                  <Button className="bg-white text-green-600 hover:bg-gray-100">Daftar Sekarang</Button>
                  <Button className="text-white border-white">Pelajari Lebih Lanjut</Button>
                </div>
              </motion.div>
              <motion.div variants={fadeIn} className="w-full max-w-md">
                <Image src="/assets/1.jpg" width={400} height={400} alt="Students" className="rounded-lg shadow-2xl" />
              </motion.div>
            </motion.div>
          </div>
        </section>
        <section id="tentang" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 mx-auto">
            <motion.h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
              Tentang PPDB 2024
            </motion.h2>
            <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-8" variants={stagger} initial="initial" whileInView="animate" viewport={{ once: true }}>
              <motion.div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-lg" variants={fadeIn}>
                <Calendar className="h-12 w-12 mb-4 text-green-600" />
                <h3 className="text-xl font-bold mb-2">Jadwal Fleksibel</h3>
                <p className="text-gray-600">Pilih waktu pendaftaran yang sesuai dengan kebutuhan Anda.</p>
              </motion.div>
              <motion.div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-lg" variants={fadeIn}>
                <FileText className="h-12 w-12 mb-4 text-green-600" />
                <h3 className="text-xl font-bold mb-2">Proses Mudah</h3>
                <p className="text-gray-600">Pendaftaran online yang sederhana dan cepat.</p>
              </motion.div>
              <motion.div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-lg" variants={fadeIn}>
                <Users className="h-12 w-12 mb-4 text-green-600" />
                <h3 className="text-xl font-bold mb-2">Dukungan Penuh</h3>
                <p className="text-gray-600">Tim kami siap membantu Anda selama proses pendaftaran.</p>
              </motion.div>
            </motion.div>
          </div>
        </section>
        <section id="jadwal" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6 mx-auto">
            <motion.h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
              Jadwal PPDB 2024
            </motion.h2>
            <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" variants={stagger} initial="initial" whileInView="animate" viewport={{ once: true }}>
              <motion.div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-green-600" variants={fadeIn}>
                <h3 className="text-xl font-bold mb-4">Pendaftaran Online</h3>
                <p className="text-gray-600">3 Januari 2025</p>
              </motion.div>
              <motion.div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-teal-500" variants={fadeIn}>
                <h3 className="text-xl font-bold mb-4">Seleksi Berkas</h3>
                <p className="text-gray-600">1 Juli 2024 - 7 Juli 2024</p>
              </motion.div>
              <motion.div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-red-500" variants={fadeIn}>
                <h3 className="text-xl font-bold mb-4">Pengumuman Hasil</h3>
                <p className="text-gray-600">15 Juli 2024</p>
              </motion.div>
              <motion.div className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-emerald-500" variants={fadeIn}>
                <h3 className="text-xl font-bold mb-4">Daftar Ulang</h3>
                <p className="text-gray-600">16 Juli 2024 - 20 Juli 2024</p>
              </motion.div>
            </motion.div>
          </div>
        </section>
        <section id="persyaratan" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 mx-auto">
            <motion.h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
              Persyaratan Pendaftaran
            </motion.h2>
            <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto" variants={stagger} initial="initial" whileInView="animate" viewport={{ once: true }}>
              <motion.div className="flex items-start space-x-4" variants={fadeIn}>
                <CheckCircle className="h-6 w-6 text-green-500 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Ijazah / Surat Keterangan Lulus</h3>
                  <p className="text-sm text-gray-600">Fotokopi yang telah dilegalisir</p>
                </div>
              </motion.div>
              <motion.div className="flex items-start space-x-4" variants={fadeIn}>
                <CheckCircle className="h-6 w-6 text-green-500 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Akta Kelahiran</h3>
                  <p className="text-sm text-gray-600">Fotokopi</p>
                </div>
              </motion.div>
              <motion.div className="flex items-start space-x-4" variants={fadeIn}>
                <CheckCircle className="h-6 w-6 text-green-500 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Kartu Keluarga</h3>
                  <p className="text-sm text-gray-600">Fotokopi</p>
                </div>
              </motion.div>
              <motion.div className="flex items-start space-x-4" variants={fadeIn}>
                <CheckCircle className="h-6 w-6 text-green-500 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Pas Foto</h3>
                  <p className="text-sm text-gray-600">Ukuran 3x4 (4 lembar)</p>
                </div>
              </motion.div>
              <motion.div className="flex items-start space-x-4" variants={fadeIn}>
                <CheckCircle className="h-6 w-6 text-green-500 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Surat Keterangan Sehat</h3>
                  <p className="text-sm text-gray-600">Dari dokter</p>
                </div>
              </motion.div>
              <motion.div className="flex items-start space-x-4" variants={fadeIn}>
                <CheckCircle className="h-6 w-6 text-green-500 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Rapor</h3>
                  <p className="text-sm text-gray-600">Fotokopi semester 1-5 (untuk SMP/SMA)</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>
        <section id="kontak" className="w-full py-12 md:py-24 lg:py-32 bg-green-600">
          <div className="container px-4 md:px-6 mx-auto">
            <motion.div className="flex flex-col lg:flex-row items-center justify-between space-y-12 lg:space-y-0 lg:space-x-12" initial="initial" whileInView="animate" variants={stagger} viewport={{ once: true }}>
              <motion.div className="space-y-4 text-center lg:text-left" variants={fadeIn}>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">Siap Untuk Mendaftar?</h2>
                <p className="max-w-[600px] text-gray-200 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">Jangan lewatkan kesempatan untuk bergabung dengan kami. Daftarkan diri Anda sekarang!</p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <Mail className="h-5 w-5 text-white" />
                    <span className="text-white">info@ppdb2024.com</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="h-5 w-5 text-white" />
                    <span className="text-white">+6282286085696</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-5 w-5 text-white" />
                    <span className="text-white">Jl. Ampi No.99 P.Marpoyan Kel.Air DIngin Kec.Bukit Raya</span>
                  </div>
                </div>
              </motion.div>
              <motion.div className="w-full max-w-md" variants={fadeIn}>
                <form className="space-y-4 bg-white p-6 rounded-lg shadow-xl">
                  <Input className="w-full" placeholder="Nama Lengkap" type="text" />
                  <Input className="w-full" placeholder="Email" type="email" />
                  <Input className="w-full" placeholder="Nomor Telepon" type="tel" />
                  <Button className="w-full bg-green-600 text-white hover:bg-green-700" type="submit">
                    Daftar Sekarang
                  </Button>
                  <p className="text-xs text-gray-500 text-center">Dengan mendaftar, Anda setuju dengan syarat dan ketentuan kami.</p>
                </form>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>
      <motion.footer className="py-6 w-full shrink-0 items-center px-4 md:px-6 border-t" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-gray-500">© 2024 PPDB. Hak Cipta Dilindungi.</p>
          <nav className="flex gap-4 sm:gap-6 mt-4 md:mt-0">
            <Link className="text-xs hover:underline underline-offset-4" href="#">
              Kebijakan Privasi
            </Link>
            <Link className="text-xs hover:underline underline-offset-4" href="#">
              Syarat dan Ketentuan
            </Link>
          </nav>
        </div>
      </motion.footer>
    </div>
  );
}
