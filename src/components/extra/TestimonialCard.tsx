import { motion } from "framer-motion";
import { memo } from "react";

type Props = {
  name: string;
  message: string;
  image: string;
  rating: number; // Optional rating prop, default to 4 stars
};

const TestimonialCard = ({ name, message, image, rating }: Props) => {
  return (
    <motion.div
      className="card max-w-md bg-base-100 shadow-xl border border-base-200 h-full"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <figure className="px-10 pt-10">
        <img
          src={image}
          alt={name}
          className="rounded-full w-24 h-24 object-cover border-4 border-primary"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title text-primary">{name}</h2>
        <p className="text-sm text-base-content/80 italic">"{message}"</p>
        <div className="mt-4 rating">
          {[...Array(5)].map((_, i) => (
            <input
              key={i}
              type="radio"
              name={`rating-${name}`}
              className="mask mask-star-2 bg-primary"
              checked={i < rating} // Only the first 4 are active
              readOnly
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default memo(TestimonialCard);
