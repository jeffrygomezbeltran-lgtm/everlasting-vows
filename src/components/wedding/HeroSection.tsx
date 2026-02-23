import { motion } from "framer-motion";
import heroImage from "@/assets/hero-couple.jpg";
import Ornament1 from "@/assets/Ornamentado-Izquierda.svg";
import Ornament2 from "@/assets/Ornamentado-Derecha.svg";

const HeroSection = () => {
  return (
    <section className="font-Manstein relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Daniel & Fernanda"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 py-20">
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="font-Manstein text-cream/90 text-xl md:text-3xl mb-4 -mr-12"
        >
            Nuestra Boda
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className=""
        >
          <span className=" text-7xl md:text-8xl text-cream drop-shadow-lg tracking-[-0.04em]">
            D&J
          </span>
        </motion.div>

        <motion.div
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ duration: 0.8, delay: 0.6 }}
  viewport={{ once: true }}
  className="flex items-center justify-center mb-20"
>
  {/* Ornamento izquierdo */}
  <img
    src={Ornament1}
    className="w-32 md:w-44 -mr-11"
    alt="ornament1"
  />

  {/* Texto */}
  <span className="font-playfair text-cream text-xl md:text-2xl">
    David & July
  </span>

  {/* Ornamento derecho */}
  <img
    src={Ornament2}
    className="w-32 md:w-44 -ml-11"
    alt="ornament2"
  />
</motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="font-serif text-2xl md:text-4xl text-gold-light mb-6"
        >
          01 de Agosto, 2026
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          viewport={{ once: true }}
          className=" font-Aptos text-cream/80 text-base md:text-lg italic max-w-md mx-auto font-light"
        >
          "El amor es una decisión que se toma todos los días."
        </motion.p>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-cream/50 rounded-full flex items-start justify-center p-2"
        >
          <div className="w-1 h-2 bg-cream/70 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
