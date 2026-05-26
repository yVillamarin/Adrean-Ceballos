import { motion } from "framer-motion";
import { Target, Magnet, Lightbulb, User, Clock } from "lucide-react";

export default function Benefits() {
  const benefits = [
    {
      icon: Target,
      title: "Ventas predecibles",
      description: "Aprenderás a crear un embudo de ventas simple que convierte seguidores en clientes de forma constante."
    },
    {
      icon: Magnet,
      title: "Contenido Imán",
      description: "Dominarás la fórmula para crear contenido que detiene el scroll y genera interacción y confianza."
    },
    {
      icon: Lightbulb,
      title: "Adiós Bloqueo creativo",
      description: "Tendrás el paso a paso para comenzar a crear contenido de valor."
    },
    {
      icon: User,
      title: "Perfil Irresistible",
      description: "Optimizarás tu biografía y tus destacados para que hablen directamente a la necesidad de tu cliente ideal."
    },
    {
      icon: Clock,
      title: "Ahorro de Tiempo",
      description: "Dejarás de improvisar y usarás herramientas de planificación para acelerar tu proceso."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-dark">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-display text-3xl md:text-5xl font-bold text-white mb-4">
            ¿Qué vas a lograr al finalizar el taller?
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
              className="bg-dark-lighter p-6 md:p-8 rounded-2xl border-2 border-accent/20 hover:border-accent transition-all"
            >
              <div className="w-14 h-14 bg-accent rounded-full flex items-center justify-center mb-4">
                <benefit.icon className="w-7 h-7 text-dark" />
              </div>
              <h3 className="text-display text-xl md:text-2xl font-bold text-accent mb-3">
                {benefit.title}
              </h3>
              <p className="text-light-gray text-base leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
