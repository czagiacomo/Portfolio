function Portfolio() {
  return (
    <div className="card bg-base-100 w-96 shadow-xl">
      <figure className="h-64 w-full">
        <img
          className="h-full w-full object-cover"
          src="https://i.imgur.com/rJms1lw.png"
          alt="Captura de Tela da Home do Portfolio"
        />
      </figure>
      <div className="card-body">
        <a href="/Portfolio">
          <h2 className="card-title">
            Portfolio
            <div className="badge badge-secondary">FrontEnd</div>
          </h2>
        </a>
        <p>Detalhes sobre o projeto desse Portfoliio</p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline border-primary text-primary">
            Autoral
          </div>
          <div className="badge border-accent text-secondary badge-outline">
            FrontEnd React + Tailwind
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
