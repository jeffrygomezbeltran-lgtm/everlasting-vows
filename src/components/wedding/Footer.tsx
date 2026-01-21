import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="py-12 px-4 bg-foreground text-background">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span className="font-script text-4xl md:text-5xl text-gold-light block mb-4">
            D & F
          </span>
          
          <p className="text-sm text-background/70 mb-6">
            15 de Noviembre, 2025
          </p>
          
          <div className="flex items-center justify-center gap-4 mb-8">
            <span className="w-8 h-px bg-gold-light/50" />
            <span className="text-gold-light">♥</span>
            <span className="w-8 h-px bg-gold-light/50" />
          </div>
          
          <p className="text-xs text-background/50">
            Con amor, Daniel & Fernanda
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
