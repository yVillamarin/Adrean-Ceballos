import { motion } from "framer-motion";
import { GraduationCap, BookOpen, Users, Target } from "lucide-react";

// Constants for Methodology content
const EDUCATION_CONTENT = {
  title: "Talleres y Formación",
  subtitle: "¿Prefieres aprender a hacerlo tú mismo o capacitar a tu equipo? Pregunta por mis Talleres exclusivos para emprendedores y domina las herramientas que están cambiando el mercado.",
  workshop: {
    title: "Taller Destacado",
    name: "Domina tus Redes y vende como un pro",
    cta: "Más Información"
  },
  benefits: [
    {
      icon: BookOpen,
      title: "Aprendizaje Práctico",
      description: "Herramientas reales que puedes aplicar inmediatamente en tu negocio"
    },
    {
      icon: Users,
      title: "Networking",
      description: "Conecta con otros emprendedores y comparte experiencias"
    },
    {
      icon: Target,
      title: "Resultados Medibles",
      description: "Estrategias comprobadas para aumentar tus ventas"
    }
  ]
};

// Sub-component for workshop banner
const WorkshopBanner = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: 0.2 }}
    viewport={{ once: true }}
    className="bg-accent p-8 md:p-12 rounded-3xl max-w-4xl mx-auto text-center mb-12"
  >
    <div className="flex items-center justify-center gap-3 mb-4">
      <GraduationCap className="w-8 h-8 text-dark" />
      <h3 className="text-display text-2xl md:text-3xl font-bold text-dark">
        {EDUCATION_CONTENT.workshop.title}
      </h3>
    </div>
    <p className="text-dark text-xl md:text-2xl font-bold mb-4">
      "{EDUCATION_CONTENT.workshop.name}"
    </p>
    {/* <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="bg-dark text-white font-bold text-lg px-8 py-4 rounded-full hover:bg-dark-lighter transition-colors"
    >
      {EDUCATION_CONTENT.workshop.cta}
    </motion.button> */}
  </motion.div>
);

// Sub-component for benefit card
const BenefitCard = ({ icon: Icon, title, description, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    viewport={{ once: true }}
    className="bg-white p-6 rounded-2xl shadow-lg text-center"
  >
    <Icon className="w-12 h-12 text-accent mx-auto mb-4" />
    <h3 className="text-display text-xl font-bold text-dark mb-2">
      {title}
    </h3>
    <p className="text-dark text-sm leading-relaxed">
      {description}
    </p>
  </motion.div>
);

// Sub-component for section header
const SectionHeader = () => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    className="text-center mb-12"
  >
    <h2 className="text-display text-3xl md:text-5xl font-bold text-dark mb-4">
      {EDUCATION_CONTENT.title}
    </h2>
    <p className="text-dark text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
      {EDUCATION_CONTENT.subtitle}
    </p>
  </motion.div>
);

export default function Methodology() {
  return (
    <section className="py-16 md:py-24 bg-light-gray">
      <div className="container mx-auto px-4">
        <SectionHeader />
        <WorkshopBanner />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {EDUCATION_CONTENT.benefits.map((benefit, index) => (
            <BenefitCard
              key={index}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              delay={0.3 + index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
