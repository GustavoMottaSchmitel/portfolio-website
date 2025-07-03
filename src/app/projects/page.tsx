'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

type Project = {
  id: number
  title: string
  description: string
  shortDescription: string
  tags: string[]
  mainImage: string
  media: {
    type: 'image' | 'video'
    url: string
    alt?: string
  }[]
}

const projects: Project[] = [
  {
    id: 1,
    title: "Tela de login - Landing Page",
    description: "Apenas uma simples tela de login, para fins de estudos sobre estilização e marcação de texto",
    shortDescription: "Tela de login simples",
    tags: ["HTML", "CSS"],
    mainImage: "/projects/login-screen-1/imagem1.png",
    media: [
      { type: 'image', url: '/projects/login-screen-1/imagem1.png', alt: 'Tela inicial do login' }
    ]
  },
  {
    id: 2,
    title: "Tela de login - Landing Page",
    description: "Apenas uma simples tela de login, para fins de estudos sobre estilização e marcação de texto",
    shortDescription: "Tela de login simples",
    tags: ["HTML", "CSS"],
    mainImage: "/projects/login-screen-2/imagem1.png",
    media: [
      { type: 'image', url: '/projects/login-screen-2/imagem1.png', alt: 'Tela inicial do login' }
    ]
  },
  {
    id: 3,
    title: "Tela inicial do Youtube",
    description: "Uma tela simples do Youtube, para estudo do TailwindCss",
    shortDescription: "Tela inicial do youtube",
    tags: ["HTML", "CSS", "TAILWINDCSS"],
    mainImage: "/projects/youtube/imagem1.png",
    media: [
      { type: 'image', url: '/projects/youtube/imagem1.png', alt: 'Tela Youtube' }
    ]
  },
  {
    id: 4,
    title: "Mario Game",
    description: "Um projeto simples de jogo responsivo do mario",
    shortDescription: "Mario Game",
    tags: ["HTML", "CSS", "JAVASCRIPT"],
    mainImage: "/projects/mario-game/imagem.png",
    media: [
      { type: 'image', url: '/projects/mario-game/imagem.png', alt: 'Mario Game Imagem' },
      { type: 'video', url: '/projects/mario-game/video.mkv', alt: 'Mario Game Video' }
    ]
  },
  {
    id: 5,
    title: "Your Nail Design",
    description: "Página de apresentação moderna, pensada para destacar projetos e atrair clientes de pequenos negócios com profissionalismo e impacto visual.",
    shortDescription: "Your Nail Design - https://mottadeveloper.short.gy/YourNailDesign",
    tags: ["HTML", "CSS", "JAVASCRIPT", "TAILWINDCSS"],
    mainImage: "/projects/your-nail-design/imagem1.png",
    media: [
      { type: 'image', url: '/projects/your-nail-design/imagem1.png', alt: 'Your Nail Design Imagem1' },
      { type: 'image', url: '/projects/your-nail-design/imagem2.png', alt: 'Your Nail Design Imagem2' },
      { type: 'image', url: '/projects/your-nail-design/imagem3.png', alt: 'Your Nail Design Imagem3' },
      { type: 'image', url: '/projects/your-nail-design/imagem4.png', alt: 'Your Nail Design Imagem4' },
      { type: 'image', url: '/projects/your-nail-design/imagem5.png', alt: 'Your Nail Design Imagem5' },
      { type: 'image', url: '/projects/your-nail-design/imagem6.png', alt: 'Your Nail Design Imagem6' },
      { type: 'video', url: '/projects/your-nail-design/video1.mkv', alt: 'Your Nail Design Video' }
    ]
  },
  {
    id: 6,
    title: "MediFlux",
    description: "Página de apresentação moderna, pensada para destacar projetos e atrair clientes de pequenos negócios com profissionalismo e impacto visual.",
    shortDescription: "MediFlux -> https://mottadeveloper.short.gy/MediFlux",
    tags: ["HTML", "CSS", "JAVASCRIPT", "TAILWINDCSS"],
    mainImage: "/projects/mediflux/image1.png",
    media: [
      { type: 'image', url: '/projects/mediflux/image1.png', alt: 'MediFlux Image'},
      { type: 'video', url: '/projects/mediflux/video1.mkv', alt: 'Mediflux Video 1' },
      { type: 'video', url: '/projects/mediflux/video2.mkv', alt: 'MEdiFlux Video 2' }
    ]
  },
]

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full flex justify-center py-6 bg-[#081F3F] z-50 shadow-lg">
      <div className="flex gap-8">
        <Link href="/" className="text-gray-100 font-bold text-xl hover:text-[#34D399] transition">
          Início
        </Link>
        <Link href="/projects" className="text-gray-100 font-bold text-xl hover:text-[#34D399] transition">
          Projetos
        </Link>
        <Link href="/about" className="text-gray-100 font-bold text-xl hover:text-[#34D399] transition">
          Sobre
        </Link>
      </div>
    </nav>
  )
}

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0)

  const nextMedia = () => {
    if (selectedProject) {
      setCurrentMediaIndex(prev =>
        prev === selectedProject.media.length - 1 ? 0 : prev + 1
      )
    }
  }

  const prevMedia = () => {
    if (selectedProject) {
      setCurrentMediaIndex(prev =>
        prev === 0 ? selectedProject.media.length - 1 : prev - 1
      )
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#081F3F] to-[#0C2B5C]">
      {/* Navbar Fixa */}
      <Navbar />

      {/* Conteúdo Principal */}
      <div className="pt-32 pb-20 px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-[#34D399] mb-4">Meus Projetos</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Explore meus trabalhos mais recentes e projetos pessoais
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map(project => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -5 }}
              className="bg-[#081F3F]/50 rounded-xl overflow-hidden shadow-lg cursor-pointer backdrop-blur-sm"
              onClick={() => {
                setSelectedProject(project)
                setCurrentMediaIndex(0)
              }}
            >
              <div className="relative h-48 w-full">
                <Image
                  src={project.mainImage}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.shortDescription}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span
                      key={tag}
                      className="bg-[#34D399]/10 text-[#34D399] text-xs px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.9, y: 50 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 50 }}
                className="bg-[#0C2B5C] rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                onClick={e => e.stopPropagation()}
              >
                {/* Media Viewer */}
                <div className="relative h-64 md:h-96 w-full">
                  {selectedProject.media[currentMediaIndex].type === 'image' ? (
                    <Image
                      src={selectedProject.media[currentMediaIndex].url}
                      alt={selectedProject.media[currentMediaIndex].alt || selectedProject.title}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <video
                      src={selectedProject.media[currentMediaIndex].url}
                      controls
                      className="w-full h-full object-cover"
                    />
                  )}

                  {/* Navigation Arrows */}
                  {selectedProject.media.length > 1 && (
                    <>
                      <button
                        onClick={(e) => {
                          e.stopPropagation()
                          prevMedia()
                        }}
                        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 rounded-full p-2 hover:bg-black/75 transition"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation()
                          nextMedia()
                        }}
                        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 rounded-full p-2 hover:bg-black/75 transition"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </>
                  )}

                  {/* Media Indicators */}
                  <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                    {selectedProject.media.map((_, index) => (
                      <button
                        key={index}
                        onClick={(e) => {
                          e.stopPropagation()
                          setCurrentMediaIndex(index)
                        }}
                        className={`w-2 h-2 rounded-full transition ${index === currentMediaIndex ? 'bg-[#34D399]' : 'bg-white/50'}`}
                      />
                    ))}
                  </div>
                </div>

                {/* Project Details */}
                <div className="p-6">
                  <h2 className="text-2xl md:text-3xl font-bold text-[#34D399] mb-2">
                    {selectedProject.title}
                  </h2>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {selectedProject.tags.map(tag => (
                      <span
                        key={tag}
                        className="bg-[#34D399]/10 text-[#34D399] text-xs px-3 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <p className="text-gray-300 mb-6">{selectedProject.description}</p>

                  <div className="flex justify-end">
                    <button
                      onClick={() => setSelectedProject(null)}
                      className="bg-[#34D399] hover:bg-[#2FBA8A] text-white font-medium py-2 px-6 rounded-lg transition"
                    >
                      Fechar
                    </button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}