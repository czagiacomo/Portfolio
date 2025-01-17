function CRM() {
  return (
    <div className="card bg-base-100 w-96 shadow-xl">
      <figure className="h-64 w-full">
        <img
          className="h-full w-full object-cover"
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <a href="/CRM">
          <h2 className="card-title">
            CRM
            <div className="badge badge-secondary">FullStack</div>
          </h2>
        </a>

        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <div className="badge border-[#0074b9] text-[#0074b9] badge-outline">
            Generation Brasil
          </div>
          <div className="badge badge-primary badge-outline">
            Projeto em Grupo
          </div>
        </div>
      </div>
    </div>
  );
}

export default CRM;
