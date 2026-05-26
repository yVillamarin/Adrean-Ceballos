import { motion } from "framer-motion";
import { AlertTriangle } from "lucide-react";

export default function PainPoints() {
  const painPoints = [
    "¿Sientes que pierdes el tiempo publicando contenido que nadie compra?",
    "¿No sabes qué tipo de contenido atrae a tu cliente ideal?",
    "¿Tu perfil de redes sociales parece un catálogo, pero no genera ventas constantes?",
    "¿Te frustra ver a tu competencia crecer más rápido que tú?",
    "¿Estás cansado de las ventas a cuentagotas y de baja interacción?"
  ];

  return (
    <section className="py-16 md:py-24 bg-light-gray">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-display text-3xl md:text-5xl font-bold text-dark text-center mb-12">
            ¿Te identificas?
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="grid gap-4 md:gap-6">
              {painPoints.map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-4 md:p-6 rounded-2xl shadow-lg flex items-start gap-4 hover:shadow-xl transition-shadow"
                >
                  <AlertTriangle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <p className="text-dark text-base md:text-lg">{point}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="bg-dark p-6 md:p-10 rounded-3xl text-center flex flex-col justify-center"
            >
              <p className="text-white text-lg md:text-xl mb-6 leading-relaxed">
                ¡Ya basta! El problema no eres tú ni tu producto. Es la estrategia. En el taller <span className="text-accent font-bold">DOMINA TUS REDES Y VENDE COMO UN PRO</span> te daremos el Mapa de ruta exacto para que tus redes trabajen para ti.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-accent text-dark font-bold text-lg px-8 py-4 rounded-full hover:bg-accent-light transition-colors"
              >
                ¡Mira por qué el taller es tu próximo gran salto!
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
