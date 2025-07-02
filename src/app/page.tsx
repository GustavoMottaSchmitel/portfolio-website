'use client'

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#081F3F] to-[#0C2B5C] overflow-hidden">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full flex justify-center py-4 bg-[#081F3F]/90 backdrop-blur-sm shadow-lg z-50">
        <div className="flex gap-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link
              href="/"
              className="text-gray-100 font-bold text-xl md:text-2xl transition-all duration-300 hover:scale-105 hover:text-[#34D399]"
            >
              Inicio
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link
              href="/projects"
              className="text-gray-100 font-bold text-xl md:text-2xl transition-all duration-300 hover:scale-105 hover:text-[#34D399]"
            >
              Projetos
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Link
              href="/about"
              className="text-gray-100 font-bold text-xl md:text-2xl transition-all duration-300 hover:scale-105 hover:text-[#34D399]"
            >
              Sobre
            </Link>
          </motion.div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container mx-auto px-4 h-screen flex flex-col md:flex-row items-center justify-between gap-8 pt-20">
        {/* Left Column - Text Content */}
        <motion.div
          className="md:w-1/2 space-y-6 md:space-y-8"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-2xl md:text-3xl text-gray-200"
          >
            Olá, eu sou o Gustavo 👋
          </motion.h2>

          {/* Animated Title */}
          <div className="relative">
            <motion.div
              className="relative inline-block"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <h3 className="text-4xl md:text-6xl font-extrabold text-white font-poppins">
                FullStack
              </h3>

              <motion.h3
                className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text font-poppins absolute top-0 left-0 w-full"
                initial={{
                  backgroundPosition: '100% 0%',
                  maskPosition: '100% 0%'
                }}
                animate={{
                  backgroundPosition: '-100% 0%',
                  maskPosition: '-100% 0%',
                  transition: {
                    duration: 4,
                    repeat: Infinity,
                    ease: "linear"
                  }
                }}
                style={{
                  backgroundImage: 'linear-gradient(90deg, transparent, #4ade80, transparent)',
                  backgroundSize: '200% 100%',
                  maskImage: 'linear-gradient(90deg, transparent, white 20%, white 80%, transparent)',
                  maskSize: '200% 100%',
                  WebkitMaskImage: 'linear-gradient(90deg, transparent, white 20%, white 80%, transparent)',
                  WebkitMaskSize: '200% 100%',
                }}
              >
                FullStack
              </motion.h3>
            </motion.div>

            <motion.h4
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="text-3xl md:text-5xl font-bold text-[#34D399] mt-2"
            >
              Developer Junior
            </motion.h4>
          </div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.0, duration: 2.5, ease: "easeInOut" }}
            className="text-lg md:text-xl text-gray-300 leading-relaxed"
          >
            {`Sou um entusiasta do desenvolvimento completo, apaixonado tanto pelo front-end quanto pelo back-end. Gosto de mergulhar na estrutura lógica por trás do código e, ao mesmo tempo, me dedico à criação de interfaces elegantes e funcionais.`.split('').map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  delay: 1.0 + index * 0.02,
                  duration: 0.1
                }}
              >
                {letter}
              </motion.span>
            ))}
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="flex flex-wrap gap-4 pt-4"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/about"
                className="block bg-[#34D399] hover:bg-[#2FBA8A] text-white font-bold py-3 px-8 rounded-lg transition-all duration-300"
              >
                Me conheça
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/projects"
                className="block border-2 border-[#34D399] text-[#34D399] hover:bg-[#34D399]/10 font-bold py-3 px-8 rounded-lg transition-all duration-300"
              >
                Projetos
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Right Column - Photo */}
        <motion.div
          className="hidden md:flex md:w-1/2 justify-center items-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full border-4 border-[#34D399]/50 overflow-hidden shadow-2xl">
            <Image
              src="/imagem.jpg"
              alt="Gustavo"
              width={500}
              height={500}
              className="object-cover w-full h-full"
              priority
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}