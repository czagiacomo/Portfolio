import { useRef } from "react";

export default function Carousel() {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollCarousel = (direction: "next" | "prev") => {
    if (carouselRef.current) {
      if (direction === "next") {
        carouselRef.current.scrollBy({ left: 300, behavior: "smooth" });
      } else if (direction === "prev") {
        carouselRef.current.scrollBy({ left: -300, behavior: "smooth" });
      }
    }
  };

  return (
    <div className="relative">
      <div
        className="carousel carousel-center bg-neutral rounded-box max-w-md space-x-4 p-4"
        ref={carouselRef}
        onWheel={(e) => e.preventDefault()} // Desativa o scroll do mouse
      >
        <div className="carousel-item">
          <img
            src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp"
            className="rounded-box"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp"
            className="rounded-box"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp"
            className="rounded-box"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp"
            className="rounded-box"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.webp"
            className="rounded-box"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp"
            className="rounded-box"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.webp"
            className="rounded-box"
          />
        </div>
      </div>

      {/* Botões de navegação */}
      <div className="absolute top-1/2 left-0 transform -translate-y-1/2 px-2">
        <button
          className="carousel-prev btn btn-circle"
          onClick={() => scrollCarousel("prev")}
        >
          ❮
        </button>
      </div>
      <div className="absolute top-1/2 right-0 transform -translate-y-1/2 px-2">
        <button
          className="carousel-next btn btn-circle"
          onClick={() => scrollCarousel("next")}
        >
          ❯
        </button>
      </div>
    </div>
  );
}
