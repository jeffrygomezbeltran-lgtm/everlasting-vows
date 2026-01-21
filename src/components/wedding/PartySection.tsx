import { useState } from "react";
import { motion } from "framer-motion";
import { Music, Send, CheckCircle } from "lucide-react";
import { toast } from "sonner";

const PartySection = () => {
  const [songName, setSongName] = useState("");
  const [artistName, setArtistName] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!songName.trim()) {
      toast.error("Por favor ingresa el nombre de la canción");
      return;
    }
    
    // Simulate form submission
    setIsSubmitted(true);
    toast.success("¡Gracias por tu sugerencia!");
    setTimeout(() => {
      setSongName("");
      setArtistName("");
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <section className="section-wedding bg-secondary">
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Icon */}
          <div className="mb-8">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="inline-flex items-center justify-center w-20 h-20 rounded-full border border-primary"
            >
              <Music className="w-10 h-10 text-primary" />
            </motion.div>
          </div>

          <h2 className="font-serif text-3xl md:text-5xl text-foreground mb-2">
            Fiesta
          </h2>
          
          <div className="flex items-center justify-center gap-4 mb-8">
            <span className="w-12 h-px bg-primary" />
            <span className="text-primary">♪</span>
            <span className="w-12 h-px bg-primary" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="decorative-frame bg-card"
        >
          <p className="text-foreground mb-8 font-light leading-relaxed">
            Queremos que esta noche sea inolvidable y la música es fundamental. 
            Ayúdanos a crear la playlist perfecta para celebrar juntos.
          </p>

          <div className="border-t border-border pt-8">
            <p className="font-serif text-xl md:text-2xl text-foreground mb-6">
              ¿Cuál es la canción que no debe faltar en la playlist de la fiesta?
            </p>

            {isSubmitted ? (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="flex flex-col items-center gap-4 py-8"
              >
                <CheckCircle className="w-16 h-16 text-green-500" />
                <p className="text-lg text-foreground">¡Gracias por tu sugerencia!</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="text"
                    value={songName}
                    onChange={(e) => setSongName(e.target.value)}
                    placeholder="Nombre de la canción *"
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-center"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    value={artistName}
                    onChange={(e) => setArtistName(e.target.value)}
                    placeholder="Artista (opcional)"
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-center"
                  />
                </div>
                <button
                  type="submit"
                  className="btn-wedding w-full md:w-auto inline-flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  Sugerir canción
                </button>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PartySection;
