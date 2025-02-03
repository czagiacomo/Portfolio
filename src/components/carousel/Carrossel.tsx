import React, { useState } from "react";

const images = [
  "https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp",
  "https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp",
  "https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp",
  "https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp",
];

function Carrossel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="w-full flex flex-col items-center">
      {/* Carrossel */}
      <div className="carousel w-full relative">
        {images.map((img, index) => (
          <div
            key={index}
            className={`carousel-item w-full transition-opacity duration-700 ${
              index === activeIndex ? "opacity-100" : "opacity-0 absolute"
            }`}
          >
            <img src={img} className="w-full rounded-lg" alt={`Slide ${index + 1}`} />
          </div>
        ))}
        
        {/* Botões de navegação */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800/50 text-white p-2 rounded-full"
        >
          ❮
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800/50 text-white p-2 rounded-full"
        >
          ❯
        </button>
      </div>

      {/* Indicadores */}
      <div className="flex gap-2 py-4">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`btn btn-xs ${index === activeIndex ? "btn-primary" : "btn-outline"}`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Carrossel;
