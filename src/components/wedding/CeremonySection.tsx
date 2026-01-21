import { motion } from "framer-motion";
import { MapPin, Calendar } from "lucide-react";

const CeremonySection = () => {
  const handleSaveDate = () => {
    const event = {
      title: "Boda Daniel & Fernanda - Ceremonia",
      start: "20251115T160000",
      end: "20251115T180000",
      location: "Parroquia San José, Av. Principal 123",
    };
    
    const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(event.title)}&dates=${event.start}/${event.end}&location=${encodeURIComponent(event.location)}`;
    window.open(googleCalendarUrl, "_blank");
  };

  const handleDirections = () => {
    window.open("https://maps.google.com/?q=Parroquia+San+Jose", "_blank");
  };

  return (
    <section className="section-wedding bg-background">
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
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="w-10 h-10 text-primary"
              >
                <circle cx="9" cy="9" r="4" />
                <circle cx="15" cy="9" r="4" />
                <path d="M5 9c0 5 4 9 7 12 3-3 7-7 7-12" />
              </svg>
            </motion.div>
          </div>

          <h2 className="font-serif text-3xl md:text-5xl text-foreground mb-2">
            Ceremonia
          </h2>
          
          <div className="flex items-center justify-center gap-4 mb-8">
            <span className="w-12 h-px bg-primary" />
            <span className="text-primary">✦</span>
            <span className="w-12 h-px bg-primary" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="decorative-frame bg-card mb-8"
        >
          <p className="font-serif text-2xl md:text-3xl text-foreground mb-2">
            Sábado, 15 de Noviembre
          </p>
          <p className="text-xl md:text-2xl text-primary font-light mb-6">
            4:00 PM
          </p>
          
          <button
            onClick={handleSaveDate}
            className="btn-wedding-outline mb-6 inline-flex items-center gap-2"
          >
            <Calendar className="w-4 h-4" />
            Guardar fecha
          </button>

          <div className="border-t border-border pt-6">
            <p className="text-muted-foreground text-sm uppercase tracking-widest mb-2">
              Lugar
            </p>
            <p className="font-serif text-xl md:text-2xl text-foreground mb-4">
              Parroquia San José
            </p>
            <p className="text-muted-foreground mb-6">
              Av. Principal 123, Ciudad
            </p>
            
            <button
              onClick={handleDirections}
              className="btn-wedding inline-flex items-center gap-2"
            >
              <MapPin className="w-4 h-4" />
              ¿Cómo llegar?
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CeremonySection;
