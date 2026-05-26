import { motion } from "framer-motion";
import { Check, Star } from "lucide-react";

// Constants for PricingPlans content
const PRICING_CONTENT = {
  title: "Planes de Gestión y Crecimiento Mensual",
  subtitle: "Elige el plan que mejor se adapte a tus necesidades",
  plans: [
    {
      name: "Plan Básico",
      duration: "Válido por 1 mes",
      price: "$140",
      features: [
        "6 contenidos al mes",
        "Diseño de 1 post estático",
        "2 carruseles",
        "3 reels",
        "1 campaña de Ads",
        "Asesoría de marca",
        "Enlace de WhatsApp"
      ],
      featured: false
    },
    {
      name: "Plan Emprendedor",
      duration: "Configuración Inicial",
      price: "$100",
      features: [
        "Apertura de cuentas en Instagram y TikTok",
        "Diseño y optimización de perfil",
        "Enlace de WhatsApp",
        "Diseño de 5 portadas para historias destacadas",
        "5 post en el feed/grilla de contenido",
        "Carruseles, reels orgánicos y post estáticos",
        "2 reels (edición de video y pauta de grabación)",
        "Gestión de cuentas",
        "Diseño de Fan page de Facebook"
      ],
      featured: false
    },
    {
      name: "Plan Intermedio",
      duration: "Gestión Completa",
      price: "$200",
      features: [
        "8 contenidos mensuales",
        "3 flyers o post",
        "1 carrusel",
        "4 reels (30 a 45 segundos)",
        "3 historias diarias",
        "Redacción de copies",
        "Estrategia orgánica y publicitaria",
        "Gestión de comentarios y DM",
        "Manejo general de la cuenta",
        "2 campañas publicitarias"
      ],
      featured: false
    },
    {
      name: "Plan Premium",
      duration: "Servicio VIP",
      price: "$300",
      features: [
        "12 contenidos mensuales",
        "8 reels y 4 post o carruseles",
        "Grabación y edición incluida",
        "Creación de contenido estratégico",
        "Sitio web con diversidad de enlaces",
        "Pauta de grabación",
        "Fotoproducto o sesión de fotos",
        "Portadas de historias destacadas",
        "Enlace de WhatsApp",
        "Historias de a dos diarias",
        "Gestión integral de la cuenta",
        "3 campañas publicitarias en Meta ADS"
      ],
      featured: true
    }
  ]
};

// Sub-component for featured badge
const FeaturedBadge = () => (
  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
    <div className="bg-dark px-5 py-2 rounded-full flex items-center gap-2 shadow-lg">
      <Star className="w-5 h-5 text-accent fill-accent" />
      <span className="text-accent text-sm font-bold">RECOMENDADO</span>
    </div>
  </div>
);

// Sub-component for pricing card
const PricingCard = ({ plan, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    viewport={{ once: true }}
    whileHover={{ scale: 1.03 }}
    style={{ flex: '1', minWidth: '220px' }}
    className={`relative p-6 rounded-2xl flex flex-col ${
      plan.featured 
        ? 'bg-accent border-4 border-accent' 
        : 'bg-dark-lighter border-2 border-accent/20'
    }`}
  >
    {plan.featured && <FeaturedBadge />}
    
    <h3 className={`text-display text-xl font-bold mb-2 ${
      plan.featured ? 'text-dark' : 'text-accent'
    }`}>
      {plan.name}
    </h3>
    <p className={`text-sm mb-4 ${
      plan.featured ? 'text-dark/80' : 'text-light-gray'
    }`}>
      {plan.duration}
    </p>
    <div className={`text-3xl font-bold mb-6 ${
      plan.featured ? 'text-dark' : 'text-white'
    }`}>
      {plan.price}
    </div>
    
    <ul className="space-y-3 mb-6 flex-grow">
      {plan.features.map((feature, idx) => (
        <li key={idx} className="flex items-start gap-2">
          <Check className={`w-4 h-4 flex-shrink-0 mt-0.5 ${
            plan.featured ? 'text-dark' : 'text-accent'
          }`} />
          <span className={`text-sm ${
            plan.featured ? 'text-dark' : 'text-light-gray'
          }`}>
            {feature}
          </span>
        </li>
      ))}
    </ul>
    
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => window.open('https://wa.me/584125497791?text=Hola%20Andrea%20✨%20Me%20interesa%20el%20plan%20' + encodeURIComponent(plan.name) + '%20💼%20¿Podrías%20darme%20más%20información%3F', '_blank')}
      className={`w-full font-bold py-4 text-lg rounded-full transition-colors mt-auto ${
        plan.featured
          ? 'bg-dark text-white hover:bg-dark-lighter'
          : 'bg-accent text-dark hover:bg-accent-light'
      }`}
    >
      Solicitar Plan
    </motion.button>
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
    <h2 className="text-display text-3xl md:text-5xl font-bold text-white mb-4">
      {PRICING_CONTENT.title}
    </h2>
    <p className="text-light-gray text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
      {PRICING_CONTENT.subtitle}
    </p>
  </motion.div>
);

export default function PricingPlans() {
  return (
    <section className="py-16 md:py-24 bg-dark">
      <div className="container mx-auto px-4">
        <SectionHeader />
        
        <style>{`
          @media (min-width: 768px) {
            .pricing-plans-container {
              display: grid !important;
              grid-template-columns: repeat(4, 1fr) !important;
              gap: 1.5rem !important;
            }
          }
        `}</style>
        <div className="pricing-plans-container grid grid-cols-1 gap-6">
          {PRICING_CONTENT.plans.map((plan, index) => (
            <PricingCard key={index} plan={plan} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
