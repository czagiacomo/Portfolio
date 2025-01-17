function AnimatedCard() {
  return (
    <div className="card bg-base-100 w-96 shadow-xl">
        <div className="overflow-hidden relative w-full h-48">
        <div className="flex w-[300%] h-full animate-slide">
          <img
            src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp"
            alt="Image 1"
            className="w-1/3 h-full object-cover"
          />
          <img
            src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp"
            alt="Image 2"
            className="w-1/3 h-full object-cover"
          />
          <img
            src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp"
            alt="Image 3"
            className="w-1/3 h-full object-cover"
          />
        </div>
      </div>
      <div className="card-body">
        <h2 className="card-title">
          Shoes!
          <div className="badge badge-secondary">Java</div>
        </h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">Fashion</div>
          <div className="badge badge-outline">Products</div>
        </div>
      </div>
    </div>
  );
}

export default AnimatedCard;
