import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import WelcomeScreen from "@/components/wedding/WelcomeScreen";
import HeroSection from "@/components/wedding/HeroSection";
import CountdownSection from "@/components/wedding/CountdownSection";
import CeremonySection from "@/components/wedding/CeremonySection";
import CelebrationSection from "@/components/wedding/CelebrationSection";
import GallerySection from "@/components/wedding/GallerySection";
import PartySection from "@/components/wedding/PartySection";
import MusicPlayer from "@/components/wedding/MusicPlayer";
import Footer from "@/components/wedding/Footer";

const Index = () => {
  const [showWelcome, setShowWelcome] = useState(true);

  const handleEnter = () => {
    setShowWelcome(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <AnimatePresence>
        {showWelcome && <WelcomeScreen onEnter={handleEnter} />}
      </AnimatePresence>

      {!showWelcome && (
        <>
          <MusicPlayer />
          <main>
            <HeroSection />
            <CeremonySection />
            <CelebrationSection />
            <GallerySection />
            <PartySection />
            <CountdownSection />
          </main>
          <Footer />
        </>
      )}
    </div>
  );
};

export default Index;
