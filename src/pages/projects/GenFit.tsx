import { GithubLogo, LinkedinLogo, StarFour } from "@phosphor-icons/react";

function GenFit() {
  return (
    <>
      <div className="bg-base-200">
        <hr className="max-w-6xl mx-auto" />
        <div className="mt-[3rem]">
          <img
            className="w-full h-[400px] object-cover object-top max-w-6xl mx-auto shadow-xl"
            src="https://i.imgur.com/58UtxBk.png"
            alt="Imagem da tela inicial do Projeto GenFit"
          />
          {/*
        className="w-full max-w-6xl mx-auto"
        className="w-full h-[400px] object-cover"
        */}
        </div>

        <div className="max-w-4xl mx-auto my-6 px-6">
          <h1 className="text-4xl font-bold mb-4 font-viga mt-10">
            Projeto GenFit
          </h1>
          <div className="flex justify-between text-gray-600 text-sm mb-4">
            <div>
              <b>Autora - Catharina Zagiacomo (Dev BackEnd)</b>
            </div>
            <div>30/01/2025</div>
          </div>

          <div className="flex space-x-3 mb-6 mt-6">
            <a href="https://linkedin.com/in/czagiacomo/" target="_blank">
              <LinkedinLogo size={32} color="#0e76a8 " weight="fill" />
            </a>
            <a
              href="https://github.com/GenBrGrupo02/GenFit_02/"
              target="_blank"
            >
              <GithubLogo size={30} weight="fill" />
            </a>
          </div>
          <article>
            <p className="text-lg leading-7 mb-4">
              Eu ainda estou trabalhando nesse artigo...
            </p>
            <img
              className=" object-cover object-bottom max-w-6xl mx-auto"
              src="https://cdn.sanity.io/images/do2rqv0h/production/3356021b2d743e60cb89b0b97196fb2b2b0b44a0-800x800.gif?w=1116&fit=max&auto=format"
              alt="post-img"
            />
          </article>
        </div>
        <hr className="max-w-6xl mx-auto" />
      </div>
    </>
  );
}

export default GenFit;
