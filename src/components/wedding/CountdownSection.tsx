import { motion } from "framer-motion";

const CountdownSection = () => {
  return (
    <section className="section-wedding bg-white">
      {" "}
      <div className="max-w-4xl mx-auto text-center">
        {/* Título */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="font-serif text-3xl md:text-5xl text-foreground mb-4">
            Código de Vestimenta
          </h2>

          <div className="flex items-center justify-center gap-4 mb-12">
            <span className="w-12 h-px bg-primary" />
            <span className="text-primary">✦</span>
            <span className="w-12 h-px bg-primary" />
          </div>
        </motion.div>

        {/* Contenido */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <h3 className="font-serif text-2xl md:text-3xl text-primary mb-6 tracking-wide">
            Beach Formal
          </h3>

          <p className="text-muted-foreground text-lg md:text-xl leading-relaxed mb-6">
            Queremos que nos acompañes con un estilo fresco y elegante, ideal
            para una celebración frente al mar.
          </p>

          <p className="italic text-muted-foreground font-light">
            Colores sugeridos: tonos tierra, beige, terracota, champagne y
            blanco.
          </p>
          <motion.a
            href="https://pin.it/39SNhLiGw"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="inline-block mt-10 px-8 py-3 border border-primary text-primary rounded-full tracking-wide text-sm md:text-base hover:bg-primary hover:text-white transition-all duration-300"
          >
            Ver inspiración ✦
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default CountdownSection;
