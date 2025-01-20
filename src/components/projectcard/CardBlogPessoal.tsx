function BlogPessoal() {
  return (
    <div className="card bg-base-100 w-96 shadow-xl">
      <figure className="h-64 w-full">
        <img
          className="h-full w-full object-cover"
          src="https://i.imgur.com/3TxdOXM.png"
          alt="Imagem da Página Inicial do Blog Pessoal"
        />
      </figure>
      <div className="card-body">
        <a href="/blogpessoal">
          <h2 className="card-title">
            Blog Pessoal
            <div className="badge badge-secondary">FullStack</div>
          </h2>
        </a>
        <p>Projeto FullStack desenvolvido utilizando React e Spring Framework</p>
        <div className="card-actions justify-end">
          <div className="badge border-[#2596be] text-[#2596be] badge-outline">
            Generation Brasil
          </div>
          <div className="badge badge-primary badge-outline"></div>
        </div>
      </div>
    </div>
  );
}

export default BlogPessoal;
