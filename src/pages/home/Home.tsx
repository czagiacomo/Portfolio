function Home() {
  return (
    <>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse ml-12 p-8">
          <img
            src="https://i.imgur.com/ngAGW2E.png"
            className="max-w-sm rounded-full shadow-2xl scale-75"
          />
          <div>
            <h1 className="text-5xl font-bold">Meu Portfolio!</h1>
            <p className="py-6">
              Seja bem vindo ao meu portfolio. Me chamo Catharina Zagiacomo,
              tenho 25 anos, moro em São Paulo - SP.<br></br>
              Sou Desenvolvedora BackEnd Java e recém graduada em Computação em
              Nuvem, também possuo conhecimentos de FrontEnd e DevOps. Tenho
              diversos projetos em meu Github e outros disponibilizados online, caso
              queira conhecer esses projetos, eles estão expostos aqui no Portfolio.<br></br><br></br>
              Fique a vontade para me enviar uma mensagem e conhecer mais da minha trajetória!
            </p>
            <a href="https://linkedin.com/in/czagiacomo/" target="_blank">
              <button className="btn btn-primary w-5/12 py-2 mx-auto text-lg">Fale comigo</button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
