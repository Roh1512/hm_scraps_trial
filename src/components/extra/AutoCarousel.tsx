import { useEffect, useRef, useState } from "react";
import img1 from "../../assets/hm_scrap_1.webp";
import img2 from "../../assets/hm_scrap_2.webp";
import img3 from "../../assets/hm_scrap_5.webp";
import img4 from "../../assets/hm_scrap_6.webp";
import img5 from "../../assets/service_1.webp";
import img6 from "../../assets/service_2.webp";
import img7 from "../../assets/service_3.webp";

const images = [img1, img2, img3, img4, img5, img6, img7];

const AutoCarousel = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const scrollSpeed = 0.5; // Smoothest experience

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    // Duplicate content should already be rendered
    const totalScrollWidth = carousel.scrollWidth / 2;

    let intervalId: number;

    const startScrolling = () => {
      intervalId = window.setInterval(() => {
        if (!carousel) return;
        if (carousel.scrollLeft >= totalScrollWidth) {
          // Reset scrollLeft back to start of original images
          carousel.scrollLeft = 0;
        } else {
          carousel.scrollLeft += scrollSpeed;
        }
      }, 16); // ~60fps
    };

    if (!isHovered) startScrolling();

    return () => clearInterval(intervalId);
  }, [isHovered]);

  return (
    <div
      ref={carouselRef}
      className="carousel w-full overflow-x-auto whitespace-nowrap scrollbar-hide space-x-6 p-4"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ scrollSnapType: "none", scrollBehavior: "auto" }}
    >
      {[...images, ...images].map((src, idx) => (
        <div
          key={idx}
          className="carousel-item inline-block flex-shrink-0 w-[75vw] sm:w-[60vw] md:w-[45vw] lg:w-[30vw]"
        >
          <img
            src={src}
            alt={`Scrap ${idx + 1}`}
            className="rounded-box object-cover w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] select-none"
            draggable={false}
            loading="lazy"
          />
        </div>
      ))}
    </div>
  );
};

export default AutoCarousel;
