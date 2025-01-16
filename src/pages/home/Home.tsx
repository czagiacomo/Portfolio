function Home() {
  return (
    <>
      {/*
            <div className="bg-indigo-900 flex justify-center">
                <div className='container grid grid-cols-2 text-white'>
                    <div className="flex flex-col gap-4 items-center justify-center py-4">
                        <h2 className='text-5xl font-bold'>
                            Seja Bem Vinde!
                        </h2>
                        <p className='text-xl'>
                            Expresse aqui seus pensamentos e opniões
                        </p>

                        <div className="flex justify-around gap-4">
                            <div className='rounded text-white 
                                            border-white border-solid border-2 py-2 px-4'
                                >
                                Nova Postagem
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center ">
                        <img
                            src="https://i.imgur.com/fyfri1v.png"
                            alt="Imagem Página Home"
                            className='w-2/3'
                        />
                    </div>
                </div>
            </div>*/}

      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse ml-12 p-8">
          <img
            src="https://czagiacomo.github.io/Portfolio/assets/img/profile_pic.png"
            className="max-w-sm rounded-full shadow-2xl scale-75"
          />
          <div>
            <h1 className="text-5xl font-bold">Meu Portfolio!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <a href= "https://linkedin.com/in/czagiacomo/" target="_blank"><button className="btn btn-primary">Fale comigo</button></a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
