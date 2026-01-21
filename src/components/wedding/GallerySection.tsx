import { motion } from "framer-motion";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";

const images = [
  { src: gallery1, alt: "Momento romántico" },
  { src: gallery2, alt: "Nuestras manos" },
  { src: gallery3, alt: "Caminando juntos" },
  { src: gallery4, alt: "Alegría compartida" },
  { src: gallery5, alt: "Momento especial" },
  { src: gallery6, alt: "Atardecer juntos" },
];

const GallerySection = () => {
  return (
    <section className="section-wedding bg-background">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-script text-4xl md:text-6xl text-primary mb-4">
            Retratos de nuestro amor
          </h2>
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="w-12 h-px bg-primary" />
            <span className="text-primary">✦</span>
            <span className="w-12 h-px bg-primary" />
          </div>
          <p className="text-muted-foreground italic font-light max-w-md mx-auto">
            Momentos que capturan la esencia de nuestro amor
          </p>
        </motion.div>

        <div className="gallery-grid">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="gallery-item"
            >
              <img src={image.src} alt={image.alt} />
              <div className="absolute inset-0 bg-black/0 hover:bg-black/20 transition-colors duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
