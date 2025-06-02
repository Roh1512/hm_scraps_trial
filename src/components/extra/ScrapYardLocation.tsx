import { motion } from "framer-motion";
import { memo } from "react";

interface ScrapyardLocationMapProps {
  title: string;
  mapEmbedUrl: string;
  mapLinkUrl: string;
  aspectRatio?: string; // optional, default to "4 / 3"
}

const ScrapyardLocationMap: React.FC<ScrapyardLocationMapProps> = ({
  title,
  mapEmbedUrl,
  mapLinkUrl,
  aspectRatio = "4 / 3",
}) => {
  return (
    <motion.div
      className="card bg-base-100 shadow-lg rounded-lg overflow-hidden max-w-xl mx-auto p-4 flex-1 min-w-2xs w-full h-full"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      title={title}
    >
      <a
        href={mapLinkUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full rounded-lg border border-base-300 hover:shadow-xl transition-shadow duration-300"
        style={{ aspectRatio }}
      >
        <iframe
          src={mapEmbedUrl}
          style={{ border: 0, width: "100%", height: "100%" }}
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </a>
    </motion.div>
  );
};

export default memo(ScrapyardLocationMap);
