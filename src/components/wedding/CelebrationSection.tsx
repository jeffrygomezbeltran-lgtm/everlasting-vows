import { motion } from "framer-motion";
import { MapPin, Calendar, PartyPopper } from "lucide-react";

const CelebrationSection = () => {
  const handleSaveDate = () => {
    const event = {
      title: "Boda Daniel & Fernanda - Celebración",
      start: "20251115T190000",
      end: "20251116T020000",
      location: "Hacienda Los Rosales, Camino Rural 456",
    };
    
    const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(event.title)}&dates=${event.start}/${event.end}&location=${encodeURIComponent(event.location)}`;
    window.open(googleCalendarUrl, "_blank");
  };

  const handleDirections = () => {
    window.open("https://maps.google.com/?q=Hacienda+Los+Rosales", "_blank");
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
              <PartyPopper className="w-10 h-10 text-primary" />
            </motion.div>
          </div>

          <h2 className="font-serif text-3xl md:text-5xl text-foreground mb-2">
            Celebración
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
            7:00 PM
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
              Hacienda Los Rosales
            </p>
            <p className="text-muted-foreground mb-6">
              Camino Rural 456, Ciudad
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

export default CelebrationSection;
