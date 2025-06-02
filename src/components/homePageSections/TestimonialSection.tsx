import { motion } from "framer-motion";
import TestimonialCard from "../extra/TestimonialCard";
import { memo } from "react";

const testimonials = [
  {
    image: "https://randomuser.me/api/portraits/women/32.jpg",
    name: "Mary",
    message:
      "The team was incredibly professional and efficient. They picked up my old car the same day I called — highly recommended!",
    rating: 4,
  },
  {
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    name: "John",
    message:
      "Great service and top prices for my scrap vehicle. The process was smooth and fast!",
    rating: 4,
  },
  {
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    name: "Fatima",
    message:
      "I really appreciated their eco-friendly approach. Plus, they were super transparent with pricing.",
    rating: 5,
  },
];

const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

const TestimonialSection = () => {
  return (
    <section className="bg-base-100 py-16 px-4 md:px-10 w-full h-full">
      <motion.div
        className="text-center mb-10"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold text-primary mb-2">
          What Our Customers Say
        </h2>
        <p className="text-base-content/70">
          Real feedback from people who’ve trusted us with their scrap needs.
        </p>
      </motion.div>

      <motion.div
        className="mx-auto max-w-6xl grid gap-6 sm:grid-cols-2 lg:grid-cols-3 justify-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {testimonials.map((t, index) => (
          <motion.div key={index} variants={itemVariants}>
            <TestimonialCard
              image={t.image}
              name={t.name}
              message={t.message}
              rating={t.rating}
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default memo(TestimonialSection);
