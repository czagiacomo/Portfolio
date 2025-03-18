function CardCRM() {
  return (
    <div className="card bg-base-100 w-96 shadow-xl">
      <figure className="h-64 w-full">
        <img
          className="h-full w-full object-cover bg-[#fef2e6]"
          src="https://i.imgur.com/pZNxwR7.png"
          alt="Imagem com a página inicial do projeto Gestão Gen"
        />

        {/*<div className="skeleton h-64 w-full"></div>*/}
      </figure>
      <div className="card-body">
        <div className="flex justify-between">
          <a href="/CRM">
            <h2 className="card-title">
              CRM - Gestão Gen
              <div className="badge badge-secondary">FullStack</div>
            </h2>
          </a>
          <div className="rating">
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
          </div>
        </div>
        <p>
          Projeto FullStack feito em grupo e desenvolvido utilizando React e
          Spring Framework
        </p>
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

export default CardCRM;
