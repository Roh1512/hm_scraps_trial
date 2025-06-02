// make sure it's 'react-router-dom' not 'react-router'
import { motion } from "framer-motion";
import WhatsApp from "../icons/WhatsApp";
import { Phone } from "lucide-react";

const buttonVariants = {
  initial: { scale: 0, opacity: 0, y: 20 },
  animate: (i: number) => ({
    scale: 1,
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, type: "spring", stiffness: 300 },
  }),
  whileHover: { scale: 1.1 },
  whileTap: { scale: 0.95 },
};

const FloatingButtons = () => {
  return (
    <motion.div
      className="z-10 flex flex-col gap-4 items-end"
      initial="initial"
      animate="animate"
      style={{
        position: "fixed",
        bottom: 30,
        right: 15,
      }}
    >
      {[0, 1].map((_, index) => (
        <motion.div key={index} custom={index} variants={buttonVariants}>
          {index === 0 ? (
            <motion.a
              href="https://wa.me/966548581513"
              target="_blank"
              rel="noopener noreferrer"
              className="btn rounded-full bg-green-600 w-14 h-14 p-0 flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow duration-300"
              variants={buttonVariants}
              whileHover="whileHover"
              whileTap="whileTap"
              aria-label="WhatsApp"
            >
              <WhatsApp large={true} fill="white" />
            </motion.a>
          ) : (
            <motion.a
              href="tel:+966582500879"
              className="btn bg-green-500 rounded-full w-14 h-14 p-0 flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow duration-300"
              variants={buttonVariants}
              whileHover="whileHover"
              whileTap="whileTap"
            >
              <Phone
                className="text-primary-content w-6 h-6"
                aria-label="Mobile Number"
              />
            </motion.a>
          )}
        </motion.div>
      ))}
    </motion.div>
  );
};

export default FloatingButtons;
