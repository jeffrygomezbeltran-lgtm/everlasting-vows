import { motion } from "framer-motion";

interface WelcomeScreenProps {
  onEnter: () => void;
}

const WelcomeScreen = ({ onEnter }: WelcomeScreenProps) => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background"
    >
      {/* Decorative corner elements */}
      <div className="absolute top-8 left-8 w-16 h-16 border-l border-t border-primary opacity-40" />
      <div className="absolute top-8 right-8 w-16 h-16 border-r border-t border-primary opacity-40" />
      <div className="absolute bottom-8 left-8 w-16 h-16 border-l border-b border-primary opacity-40" />
      <div className="absolute bottom-8 right-8 w-16 h-16 border-r border-b border-primary opacity-40" />

      <div className="text-center px-6 max-w-lg">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-muted-foreground text-sm md:text-base tracking-[0.3em] uppercase mb-8"
        >
          Bienvenidos a la invitación de
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mb-6"
        >
          <span className="font-script text-6xl md:text-8xl text-gold-gradient">
            D & F
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="font-serif text-2xl md:text-4xl text-foreground mb-4 font-light tracking-wide"
        >
          Daniel & Fernanda
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="flex items-center justify-center gap-4 mb-10"
        >
          <span className="w-12 h-px bg-primary" />
          <span className="text-primary text-lg">♥</span>
          <span className="w-12 h-px bg-primary" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="text-muted-foreground text-xs md:text-sm mb-10 italic"
        >
          La música de fondo es parte de la experiencia
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.8 }}
          onClick={onEnter}
          className="btn-wedding"
        >
          Ingresar
        </motion.button>
      </div>
    </motion.div>
  );
};

export default WelcomeScreen;
