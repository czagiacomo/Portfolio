function CardName() {
  return (
    <div className="card bg-base-100 w-96 shadow-xl">
      <figure className="h-64 w-full">
        <img
          className="h-full w-full object-cover bg-[#fef2e6]"
          src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExc3M5YTd6MDlnN3M2bWl4NTdkaTNyMGs0YXI4ZWU1MXp2b2Rkb25mYSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/nwbkrnv2K89UrHDRRy/giphy.gif"
          alt="Imagem com fundo amarelo e escrito em preto dizendo 'Work in Progress'"
        />
      </figure>
      <div className="card-body">
        <a href="/ProjectTemplate">
          <h2 className="card-title">
            Name
            <div className="badge badge-secondary">NEW</div>
          </h2>
        </a>
        <div className="flex justify-between">
          <a href="/blogpessoal">
            <h2 className="card-title">
              Name with Star
              <div className="badge badge-secondary">STAR</div>
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

export default CardName;
