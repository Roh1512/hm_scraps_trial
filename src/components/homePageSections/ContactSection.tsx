import { motion } from "framer-motion";
import { Mail, MapPin, PhoneCall } from "lucide-react";
import ContactForm from "../contact/ContactForm";
import { Link } from "react-router";
import WhatsApp from "../icons/WhatsApp";
import { memo } from "react";
import bgImg from "../../assets/hm_scrap_6.webp"; // Replace with your actual image path

const ContactSection = () => {
  return (
    <section
      className="relative bg-fixed bg-center bg-cover bg-no-repeat py-20 w-full"
      style={{ backgroundImage: `url(${bgImg})` }} // Replace with your image path
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-xs"></div>
      <div className="relative container mx-auto px-4 z-5">
        <motion.h2
          className="text-4xl font-bold text-center mb-4 text-base-100"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
        >
          Contact Us
        </motion.h2>

        <motion.p
          className="text-center mb-6 text-lg text-base-100"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          We purchase all kinds of scraps — iron, aluminum, cable, battery,
          motor, and more.
        </motion.p>

        <motion.div
          className="grid md:grid-cols-2 gap-4 items-stretch content-center w-full"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Contact Info Box */}
          <motion.div
            className="bg-black/65 rounded-2xl shadow-lg p-8 flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl text-white font-semibold mb-4">
              Hadi Muhammed Hamad Al Adhan Trading Est
            </h2>

            <div className="flex flex-wrap justify-center gap-6 mb-6">
              {["Haradh", "Jubail", "Dammam"].map((city, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 text-gray-600"
                >
                  <MapPin className="w-5 h-5 text-blue-400" />
                  <span className="text-gray-400">{city}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-3 w-full">
              <Link
                to="tel:+966582500879"
                className="flex items-center justify-center gap-3 bg-black/60 text-white py-2.5 px-4 rounded-md transition"
              >
                <PhoneCall className="w-5 h-5 text-blue-500" />
                +966 582500879
              </Link>

              <Link
                to="https://wa.me/966548581513"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 bg-black/60 text-white py-2.5 px-4 rounded-md transition"
              >
                <WhatsApp />
                +966 548581513
              </Link>

              <Link
                to="mailto:ansarishams333@gmail.com"
                className="flex items-center justify-center gap-3 bg-black/60 text-white py-2.5 px-4 rounded-md transition"
              >
                <Mail className="w-5 h-5 text-blue-500" />
                ansarishams333@gmail.com
              </Link>
            </div>
          </motion.div>

          {/* Contact Form */}
          <ContactForm />
        </motion.div>
      </div>
    </section>
  );
};

export default memo(ContactSection);
