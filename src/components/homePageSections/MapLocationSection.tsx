import { memo } from "react";
import ScrapyardLocationMap from "../extra/ScrapYardLocation";

const MapLocationSection = () => {
  const locations = [
    {
      title: "Haradh Scrapyard",
      mapEmbedUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d466169.0012947134!2d48.751936312057055!3d24.103418221127576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e39129301b26b13%3A0x9a4ed3550c75008d!2sHaradh%20Saudi%20Arabia!5e0!3m2!1sen!2sin!4v1748595542018!5m2!1sen!2sin",
      mapLinkUrl: "https://maps.app.goo.gl/LnGWUw4cV7CVB3wz9",
    },
    {
      title: "Dammam Scrapyard",
      mapEmbedUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3456.849287938902!2d50.10324997560115!3d26.42068217730559!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e49e8a741c9b6e5%3A0xfaf4bb8ae645c179!2sDammam%2C%20Saudi%20Arabia!5e0!3m2!1sen!2sin!4v1748599999999!5m2!1sen!2sin",
      mapLinkUrl: "https://maps.app.goo.gl/dammam-link-example",
    },
    {
      title: "Jubail Scrapyard",
      mapEmbedUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d455098.2186566053!2d49.5481682!3d26.984158349999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e35a06654d8187d%3A0x210bf5bd13d2288f!2sAl%20Jubail%20Saudi%20Arabia!5e0!3m2!1sen!2sin!4v1748595641511!5m2!1sen!2sin",
      mapLinkUrl: "https://maps.app.goo.gl/WyhFnTyDaDYEEnzt8",
    },
  ];

  return (
    <div className="bg-base-200 flex flex-col lg:flex-row items-center justify-center gap-6 w-full px-4 py-8">
      {locations.map((loc, idx) => (
        <ScrapyardLocationMap
          key={idx}
          title={loc.title}
          mapEmbedUrl={loc.mapEmbedUrl}
          mapLinkUrl={loc.mapLinkUrl}
        />
      ))}
    </div>
  );
};

export default memo(MapLocationSection);
