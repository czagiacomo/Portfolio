function CardGenFit() {
    return (
      <div className="card bg-base-100 w-96 shadow-xl">
        <figure className="h-64 w-full">
          <img
            className="h-full w-full object-cover "
            src="https://i.imgur.com/58UtxBk.png"
            alt="Imagem com fundo amarelo e escrito em preto dizendo 'Work in Progress'"
          />
          {/*<div className="skeleton h-64 w-full"></div>*/}
        </figure>
        <div className="card-body">
          <div className="flex justify-between">
            <a href="/GenFit">
              <h2 className="card-title">
                GenFit
                <div className="badge badge-secondary">FullStack</div>
              </h2>
            </a>
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
  
  export default CardGenFit;
  