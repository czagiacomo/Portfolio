function BlogPessoal() {
  return (
    <div className="card bg-base-100 w-96 shadow-xl">
      <figure className="h-64 w-full">
        <img
          className="h-full w-full object-cover"
          src="https://i.imgur.com/5tSzbgM.png"
          alt="Imagem da Página Inicial do Blog Pessoal"
        />
      </figure>
      <div className="card-body">
        <div className="flex justify-between">
          <a href="/blogpessoal">
            <h2 className="card-title">
              Blog Pessoal
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
          Projeto FullStack desenvolvido utilizando React e Spring Framework
        </p>
        <div className="card-actions justify-end">
          <div className="badge border-[#2596be] text-[#2596be] badge-outline">
            Generation Brasil
          </div>
          <div className="badge badge-primary badge-outline">
            React + Spring Framework
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogPessoal;
