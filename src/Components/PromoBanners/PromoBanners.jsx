import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const PromoSection = () => {
  const promos = [
    {
      slides: [
        {
          title: "Stay Hydrated!",
          subtitle: "Grab refreshing drinks ➤",
          image: "/ice-cream.png",
        },
        {
          title: "Chill With Juicy Flavors",
          subtitle: "Order now ➤",
          image: "/juices.png",
        },
        {
          title: "Pure Water. Pure Life.",
          subtitle: "Shop bottles ➤",
          image: "/water.png",
        },
      ],
      position: "translate-y-0 z-30",
    },
    {
      slides: [
        {
          title: "Beat The Heat With A Cool Treat",
          subtitle: "Cool off today ➤",
          image: "/water.png",
        },
        {
          title: "Icy Delights Await",
          subtitle: "Browse our selection ➤",
          image: "/ice-cream.png",
        },
        {
          title: "Juice Up Your Day",
          subtitle: "Taste the freshness ➤",
          image: "/juices.png",
        },
      ],
      position: "translate-y-4 z-20",
    },
    {
      slides: [
        {
          title: "Flavors To Please Every Taste",
          subtitle: "Try something new ➤",
          image: "/juices.png",
        },
        {
          title: "Stay Refreshed Anytime",
          subtitle: "Hydration essentials ➤",
          image: "/water.png",
        },
        {
          title: "Frozen Treats You’ll Love",
          subtitle: "View all now ➤",
          image: "/ice-cream.png",
        },
      ],
      position: "translate-y-0 z-10",
    },
  ];

  const [slideIndexes, setSlideIndexes] = useState([0, 0, 0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndexes((prev) =>
        prev.map((index, i) => (index + 1) % promos[i].slides.length)
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[#fff4f4] py-10 px-4 md:px-14">
      <h2 className="text-3xl font-bold text-center mb-10 text-red-600 tracking-tight">
        New Arrivals
      </h2>

      <div className="flex justify-center items-start relative max-w-7xl mx-auto">
        {promos.map((promo, index) => {
          const currentSlide = promo.slides[slideIndexes[index]];

          return (
            <div
              key={index}
              className={`relative w-[300px] md:w-[400px] h-[220px] md:h-[240px] rounded-xl overflow-hidden shadow-xl ${promo.position}`}
              style={{
                marginLeft: index !== 0 ? "-10px" : "0px",
              }}
            >
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentSlide.image}
                  src={currentSlide.image}
                  alt={currentSlide.title}
                  className="absolute inset-0 w-full h-full object-cover"
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  transition={{ duration: 0.8 }}
                />
              </AnimatePresence>

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/40 to-transparent z-10" />

              {/* Text Overlay */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide.title}
                  className="relative z-20 h-full w-full px-6 py-4 flex flex-col justify-center text-white"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                >
                  <h3 className="text-lg font-extrabold leading-snug drop-shadow-md">
                    {currentSlide.title}
                  </h3>
                  <p className="text-base md:text-xl mt-2 drop-shadow-md">
                    {currentSlide.subtitle}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PromoSection;
