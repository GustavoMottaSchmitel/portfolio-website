'use client'

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function AboutPage() {
    const skills = [
        {
            name: "Java",
            level: 50,
            tag: "Framework de Especialização",
            tagColor: "bg-[#34D399]/10 text-[#34D399] border-[#34D399]/30"
        },
        {
            name: "TypeScript / JavaScript",
            level: 25,
            tag: "Em Adoção Progressiva",
            tagColor: "bg-cyan-500/10 text-cyan-400 border-cyan-500/30"
        },
        {
            name: "React/Next.js",
            level: 20,
            tag: "Trabalhando framework para ser especialização Front-End",
            tagColor: "bg-purple-500/10 text-purple-400 border-purple-500/30"
        },
        {
            name: "Node.js",
            level: 10,
            tag: "Em Desenvolvimento",
            tagColor: "bg-blue-500/10 text-blue-400 border-blue-500/30"
        },
        {
            name: "Tailwind CSS",
            level: 20,
            tag: "CSS Utility-First",
            tagColor: "bg-sky-500/10 text-sky-400 border-sky-500/30"
        },
    ];

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
            <main className="container mx-auto px-4 py-24 md:py-32">
                {/* Hero Section */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col md:flex-row items-center gap-12 mb-20"
                >
                    {/* Photo */}
                    <motion.div
                        initial={{ scale: 0.9 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                        className="relative w-64 h-64 md:w-80 md:h-80 rounded-full border-4 border-[#34D399]/50 overflow-hidden shadow-2xl"
                    >
                        <Image
                            src="/imagem.jpg"
                            alt="Gustavo"
                            width={500}
                            height={500}
                            className="object-cover w-full h-full"
                            priority
                        />
                    </motion.div>

                    {/* Introduction */}
                    <div className="flex-1">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.6 }}
                            className="text-4xl md:text-5xl font-bold text-[#34D399] mb-4"
                        >
                            Gustavo Motta
                        </motion.h1>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.6 }}
                            className="text-2xl md:text-3xl font-semibold text-white mb-6"
                        >
                            Aspirante a Desenvolvedor FullStack
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.6, duration: 0.8 }}
                            className="text-lg text-gray-300 leading-relaxed max-w-2xl"
                        >
                            Mesmo com poucos meses de experiência, já sou completamente apaixonado por transformar ideias em sistemas robustos, funcionais e com identidade única. Estou em constante evolução, e coloco dedicação total em cada projeto para entregar soluções de qualidade que realmente fazem a diferença.
                        </motion.p>
                    </div>
                </motion.div>

                {/* Skills Section */}
                <motion.section
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="mb-20"
                >
                    <h2 className="text-3xl font-bold text-white mb-8 text-center">Minhas Habilidades</h2>

                    <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                        {skills.map((skill, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                viewport={{ once: true }}
                                className="bg-[#081F3F]/50 p-6 rounded-xl backdrop-blur-sm"
                            >
                                <div className="flex justify-between mb-2">
                                    <span className="font-medium text-gray-100">{skill.name}</span>
                                    <span className="text-[#34D399]">{skill.level}%</span>
                                </div>
                                <div className="w-full bg-gray-700 rounded-full h-2.5 mb-3">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{ width: `${skill.level}%` }}
                                        transition={{ delay: index * 0.1 + 0.3, duration: 1 }}
                                        viewport={{ once: true }}
                                        className="h-2.5 rounded-full bg-[#34D399]"
                                    />
                                </div>

                                {/* Tag de status */}
                                {skill.tag && (
                                    <span className={`inline-block ${skill.tagColor} text-xs px-2 py-1 rounded-full border`}>
                                        {skill.tag}
                                    </span>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </motion.section>

                {/* Experience Section */}
                <motion.section
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="mb-20"
                >
                    <h2 className="text-3xl font-bold text-white mb-8 text-center">Experiência Profissional</h2>

                    <div className="space-y-8 max-w-4xl mx-auto">
                        {/* Estágio atual */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.6 }}
                            viewport={{ once: true }}
                            className="bg-[#081F3F]/50 p-6 rounded-xl backdrop-blur-sm border-l-4 border-[#34D399]"
                        >
                            <h3 className="text-xl font-bold text-[#34D399]">Estagiário de TI</h3>
                            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-3">
                                <span className="text-gray-100 font-medium">ATA Sistemas</span>
                                <span className="text-gray-400 text-sm">Nov 2024 - Presente (9 meses)</span>
                            </div>
                            <ul className="text-gray-300 space-y-2 list-disc list-inside">
                                <li>Suporte técnico como Call Desk para sistemas de ponto e cancela</li>
                                <li>Atendimento ao cliente e resolução de problemas técnicos</li>
                                <li>Configuração e manutenção de sistemas</li>
                                <li>Intermediar comunicação entre clientes e equipe de desenvolvimento</li>
                            </ul>
                        </motion.div>

                        {/* Busca por oportunidade */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.6 }}
                            viewport={{ once: true }}
                            className="bg-[#081F3F]/50 p-6 rounded-xl backdrop-blur-sm border-l-4 border-[#4ade80]"
                        >
                            <div className="flex items-start">
                                <div className="bg-[#4ade80]/20 p-3 rounded-lg mr-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#4ade80]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-[#4ade80] mb-2">Busca por Oportunidade</h3>
                                    <p className="text-gray-300">
                                        Estou em busca da minha primeira oportunidade como desenvolvedor, onde possa aplicar meus conhecimentos em
                                        <span className="text-[#4ade80] font-medium"> React, Next.js, Node.js, Java, JavaScript entre outros </span>
                                        e outras tecnologias que venho estudando intensivamente.
                                    </p>
                                    <p className="text-gray-300 mt-2">
                                        Minha experiência atual em suporte técnico me proporcionou habilidades valiosas em
                                        <span className="text-[#34D399] font-medium"> resolução de problemas, atendimento ao cliente </span>
                                        e compreensão de fluxos de sistemas, que seriam um diferencial em uma posição júnior.
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </motion.section>

                {/* Education Section */}
                <motion.section
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="mb-20"
                >
                    <h2 className="text-3xl font-bold text-white mb-8 text-center">Formação Acadêmica</h2>

                    <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                        {/* Ensino Médio */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.6 }}
                            viewport={{ once: true }}
                            className="bg-[#081F3F]/50 p-6 rounded-xl backdrop-blur-sm border-l-4 border-[#34D399]"
                        >
                            <div className="flex items-start mb-2">
                                <div className="bg-[#34D399] text-white p-2 rounded-lg mr-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-[#34D399]">Ensino Médio Completo</h3>
                                    <p className="text-gray-100 font-medium">Escola SESI/SENAI</p>
                                    <p className="text-gray-400">2020 - 2023</p>
                                </div>
                            </div>
                            <p className="text-gray-300 mt-2">
                                Formação técnica integrada ao ensino médio com foco em tecnologia e inovação.
                            </p>
                        </motion.div>

                        {/* Faculdade */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.6 }}
                            viewport={{ once: true }}
                            className="bg-[#081F3F]/50 p-6 rounded-xl backdrop-blur-sm border-l-4 border-[#4ade80]"
                        >
                            <div className="flex items-start mb-2">
                                <div className="bg-[#4ade80] text-white p-2 rounded-lg mr-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path d="M12 14l9-5-9-5-9 5 9 5z" />
                                        <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-[#4ade80]">Engenharia da Computação</h3>
                                    <p className="text-gray-100 font-medium">Faculdade Multivix</p>
                                    <p className="text-gray-400">2024 - 2029 (4º período)</p>
                                </div>
                            </div>
                            <div className="mt-4">
                                <div className="flex items-center mb-2">
                                    <span className="text-gray-300 mr-2">Progresso:</span>
                                    <span className="text-[#4ade80] font-medium">40%</span>
                                </div>
                                <div className="w-full bg-gray-700 rounded-full h-2">
                                    <div
                                        className="h-2 rounded-full bg-[#4ade80]"
                                        style={{ width: '40%' }}
                                    ></div>
                                </div>
                                <p className="text-gray-300 mt-2">
                                    Graduação em andamento com previsão de conclusão em 2029.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </motion.section>

                {/* Languages Section */}
                <motion.section
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="mb-20"
                >
                    <h2 className="text-3xl font-bold text-white mb-8 text-center">Idiomas</h2>

                    <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                        {/* Português */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.6 }}
                            viewport={{ once: true }}
                            className="bg-[#081F3F]/50 p-6 rounded-xl backdrop-blur-sm text-center"
                        >
                            <div className="flex justify-center mb-4">
                                <span className="text-4xl text-white">🇧🇷</span>
                            </div>
                            <h3 className="text-xl font-bold text-[#34D399] mb-2">Português</h3>
                            <div className="flex justify-center mb-3">
                                <span className="bg-[#34D399]/20 text-[#34D399] text-xs px-3 py-1 rounded-full">
                                    Fluente/Nativo
                                </span>
                            </div>
                            <p className="text-gray-300 text-sm">
                                Minha língua materna, com domínio completo da escrita e fala.
                            </p>
                        </motion.div>

                        {/* Inglês */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.6 }}
                            viewport={{ once: true }}
                            className="bg-[#081F3F]/50 p-6 rounded-xl backdrop-blur-sm text-center"
                        >
                            <div className="flex justify-center mb-4">
                                <span className="text-4xl text-white">🇺🇸</span>
                            </div>
                            <h3 className="text-xl font-bold text-[#4ade80] mb-2">Inglês</h3>
                            <div className="flex justify-center mb-3">
                                <span className="bg-[#4ade80]/20 text-[#4ade80] text-xs px-3 py-1 rounded-full">
                                    Em Profissionalização
                                </span>
                            </div>
                            <p className="text-gray-300 text-sm">
                                Estudando na Wizard, com foco em inglês técnico para desenvolvimento.
                            </p>
                            <div className="mt-4">
                                <div className="w-full bg-gray-700 rounded-full h-2">
                                    <div
                                        className="h-2 rounded-full bg-[#60a5fa]"
                                        style={{ width: '10%' }}
                                    ></div>
                                </div>
                                <span className="text-xs text-gray-400 mt-1">Iniciante (A1)</span>
                            </div>
                        </motion.div>

                        {/* Espanhol */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6, duration: 0.6 }}
                            viewport={{ once: true }}
                            className="bg-[#081F3F]/50 p-6 rounded-xl backdrop-blur-sm text-center"
                        >
                            <div className="flex justify-center mb-4">
                                <span className="text-4xl text-white">🇪🇸</span>
                            </div>
                            <h3 className="text-xl font-bold text-[#60a5fa] mb-2">Espanhol</h3>
                            <div className="flex justify-center mb-3">
                                <span className="bg-[#60a5fa]/20 text-[#60a5fa] text-xs px-3 py-1 rounded-full">
                                    Planejamento de Estudos
                                </span>
                            </div>
                            <p className="text-gray-300 text-sm">
                                Próximo idioma que desejo aprender, com foco em conversação básica.
                            </p>
                            <div className="mt-4">
                                <div className="w-full bg-gray-700 rounded-full h-2">
                                    <div
                                        className="h-2 rounded-full bg-[#60a5fa]"
                                        style={{ width: '10%' }}
                                    ></div>
                                </div>
                                <span className="text-xs text-gray-400 mt-1">Iniciante (A1)</span>
                            </div>
                        </motion.div>
                    </div>
                </motion.section>

            </main>
        </div>
    );
}