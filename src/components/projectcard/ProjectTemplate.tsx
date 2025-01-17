function Name() {
  return (
    <div className="card bg-base-100 w-96 shadow-xl">
      <figure className="h-64 w-full">
        <img
          className="h-full w-full object-cover"
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          alt="Alt"
        />
      </figure>
      <div className="card-body">
        <a href="/ProjectTemplate">
          <h2 className="card-title">
            Name
            <div className="badge badge-secondary">NEW</div>
          </h2>
        </a>
        <p>Frase</p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">Badge</div>
          <div className="badge border-[#0074b9] text-[#0074b9] badge-outline">
            Badgeborder-[#2596be] text-[#2596be]
          </div>
        </div>
      </div>
    </div>
  );
}

export default Name;
