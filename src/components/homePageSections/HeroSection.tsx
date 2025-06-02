import { motion } from "framer-motion";
import { Link } from "react-router";
// import HeroImg from "../../assets/hm_scrap_1.webp";
import { memo, useState } from "react";

const HeroSection = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <section className="bg-base-100 w-full flex items-center mb-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col-reverse md:flex-row items-center gap-12">
          <motion.div
            className="w-full md:w-1/2 text-center md:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: imageLoaded ? 1 : 0, x: imageLoaded ? 0 : -50 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-neutral mb-4">
              Turning Scrap into Opportunity
            </h1>
            <p className="text-lg md:text-xl text-neutral mb-6">
              HM Scraps is a trusted name in buying and selling all kinds of
              scrap—metal, steel, industrial waste, and more. We ensure reliable
              service, fair pricing, and eco-friendly recycling solutions for
              businesses and households.
            </p>
            <Link to="/contact" className="btn btn-primary btn-lg">
              Get a Quote
            </Link>
          </motion.div>

          <motion.div
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: imageLoaded ? 1 : 0, x: imageLoaded ? 0 : 50 }}
            transition={{ duration: 0.2, ease: "easeOut", delay: 0.1 }}
          >
            <img
              src="https://res.cloudinary.com/rohithashok/image/upload/q_auto,f_auto/v1748675323/hm_scraps/hm_scrap_1_gpmwhf.webp"
              alt="Scrap collection service"
              loading="eager"
              className="rounded-box shadow-xl w-full max-h-[500px] object-cover"
              onLoad={() => setImageLoaded(true)}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default memo(HeroSection); // ✅ can stay memoized
