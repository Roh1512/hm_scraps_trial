import React, { memo, useRef } from "react";
import { motion, useInView } from "framer-motion";
import AutoCarousel from "../extra/AutoCarousel";
import bgImg from "../../assets/hm_scrap_5.webp";

const AboutSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section
      ref={ref}
      className="relative bg-fixed bg-center bg-cover bg-no-repeat py-20 w-full"
      style={{
        backgroundImage: `url(${bgImg})`, // Replace with your image path
      }}
    >
      <div className="absolute inset-0 bg-black/60"></div>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative container mx-auto flex flex-col lg:flex-row items-center gap-12 bg-base-200 text-black rounded-lg p-8"
      >
        <AutoCarousel />

        {/* Text (Right on large screens) */}
        <div className="max-w-xl text-center lg:text-left px-4">
          <h2 className="text-4xl font-bold mb-6 text-primary">About Us</h2>
          <p className="text-lg leading-relaxed">
            HM Scraps is dedicated to making scrap collection simple,
            sustainable, and customer-friendly. From metal to electronics, we
            pick up and recycle responsibly—ensuring a cleaner environment and
            fair compensation for your materials.
          </p>
          <p className="mt-4 text-lg leading-relaxed">
            We aim to be your trusted scrap partner—prompt, honest, and
            eco-conscious. Let's work together for a greener future!
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default memo(AboutSection);
