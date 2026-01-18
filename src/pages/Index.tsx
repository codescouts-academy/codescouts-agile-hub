import { motion } from "framer-motion";
import { Code2, BookOpen, Users, Sparkles } from "lucide-react";
import Logo from "@/components/Logo";
import ServiceCard from "@/components/ServiceCard";

const services = [
  {
    title: "DoR - Definition of Ready",
    description:
      "Define los requisitos que debe cumplir una historia de usuario antes de ser trabajada. Asegura que el equipo tenga toda la información necesaria.",
    url: "https://dor.codescouts.academy/",
    icon: BookOpen,
  },
  {
    title: "DoD - Definition of Done",
    description:
      "Establece criterios claros y medibles para determinar cuándo una tarea está completamente terminada. Mejora la calidad y consistencia del equipo.",
    url: "https://dod.codescouts.academy/",
    icon: Code2,
  },

  {
    title: "USM - User Story Mapping",
    description:
      "Visualiza el producto completo organizando historias de usuario en un mapa que muestra el flujo del usuario y las prioridades de desarrollo.",
    url: "https://usm.codescouts.academy/",
    icon: Users,
  },
  {
    title: "Story - User Stories",
    description:
      "Crea historias de usuario efectivas que capturen las necesidades del usuario final y guíen el desarrollo hacia soluciones de valor real.",
    url: "https://story.codescouts.academy/",
    icon: Sparkles,
  },
];

const Index = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Image */}
      <div
        className="fixed inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://www.codescouts.academy/images/backgrounds/scoutsworking-front.jpg')",
        }}
      />

      {/* Dark Overlay */}
      <div className="fixed inset-0 bg-hero-overlay" />

      {/* Animated gradient orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ duration: 2 }}
          className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-accent/20 blur-3xl animate-pulse-slow"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          transition={{ duration: 2, delay: 0.5 }}
          className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-accent/10 blur-3xl animate-pulse-slow"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 py-16">
        <div className="w-full max-w-6xl">
          {/* Header */}
          <header className="mb-16 text-center">
            <Logo />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto"
            >
              Herramientas para equipos de desarrollo que buscan la excelencia
              técnica
            </motion.p>
          </header>

          {/* Services Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 auto-rows-fr"
          >
            {services.map((service, index) => (
              <ServiceCard
                key={service.title}
                {...service}
                delay={0.6 + index * 0.1}
              />
            ))}
          </motion.div>

          {/* Footer */}
          <motion.footer
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="mt-16 text-center"
          >
            <a
              href="https://www.codescouts.academy/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors duration-300"
            >
              <span>Visitar sitio principal</span>
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          </motion.footer>
        </div>
      </div>
    </div>
  );
};

export default Index;
