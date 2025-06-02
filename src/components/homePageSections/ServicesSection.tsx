import React, { memo, useRef } from "react";
import ServiceCard from "../extra/ServiceCard"; // Adjust the path as needed
import { useInView, motion } from "framer-motion";
import serviceImg1 from "../../assets/service_1.webp";
import serviceImg2 from "../../assets/service_2.webp";
import serviceImg3 from "../../assets/service_3.webp";

interface Service {
  id: number;
  image: string;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    id: 1,
    image: serviceImg1,
    title: "Scrap Iron Buying",
    description:
      "We purchase scrap iron in any form and offer competitive rates for your materials..",
  },
  {
    id: 2,
    image: serviceImg2,
    title: "Aluminium and stainless steel scrap purchase",
    description:
      "Turn your aluminum scrap into money with our hassle-free buying process and top-notch pricing.",
  },
  {
    id: 3,
    image: serviceImg3,
    title: "Copper and Brass Scrap Purchase",
    description:
      "We purchase copper and brass scrap at competitive rates, ensuring you get the best value for your materials.",
  },
];

const ServicesSection: React.FC = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-50px" });
  return (
    <section ref={sectionRef} className="bg-base-200 py-12 px-4 w-full h-full">
      <div className="container mx-auto w-full">
        <h2 className="text-4xl font-bold text-center text-primary mb-10">
          Our Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {services.map(({ id, image, title, description }) => (
            <motion.div
              key={id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: id * 0.1 }}
            >
              <ServiceCard
                image={image}
                title={title}
                description={description}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default memo(ServicesSection);
