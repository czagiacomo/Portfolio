import { GithubLogo, LinkedinLogo, StarFour } from "@phosphor-icons/react";

function Portfolio() {
  return (
    <>
      <div className="bg-base-200">
        <hr className="max-w-6xl mx-auto" />
        <div className="mt-[3rem]">
          <img
            className="w-full h-[400px] object-cover max-w-6xl mx-auto shadow-xl"
            src="https://i.imgur.com/rJms1lw.png"
            alt="post-img"
          />
          {/*
        className="w-full max-w-6xl mx-auto"
        className="w-full h-[400px] object-cover"
        */}
        </div>

        <div className="max-w-4xl mx-auto my-6 px-6">
          <h1 className="text-4xl font-bold mb-4">Meu Portfolio!</h1>
          <div className="flex justify-between text-gray-600 text-sm mb-4">
            <div>
              <b>Autora - Catharina Zagiacomo (Dev BackEnd)</b>
            </div>
            <div>19/01/2025</div>
          </div>

          <div className="flex space-x-3 mb-6 mt-6">
            <a href="https://linkedin.com/in/czagiacomo/" target="_blank">
              <LinkedinLogo size={32} color="#0e76a8 " weight="fill" />
            </a>
            <a href="https://github.com/czagiacomo" target="_blank">
              <GithubLogo size={30} weight="fill" />
            </a>
          </div>
          <article>
            <section id="summary">
              <hr className="max-w-6xl mx-auto h-px my-8 bg-primary border-0" />
              <ul
                role="list"
                className="marker:text-secondary list-inside pl-5 space-y-3 my-8 font-medium"
              >
                <li className="flex items-center">
                  <StarFour
                    size={16}
                    weight="fill"
                    className="text-primary mr-2"
                  />
                  <a href="#intro">Introdução</a>
                </li>
                <li className="flex items-center">
                  <StarFour
                    size={16}
                    weight="fill"
                    className="text-secondary mr-2"
                  />
                  <a href="#detalhes">Detalhes do Projeto</a>
                </li>{" "}
                <li className="flex items-center">
                  <StarFour
                    size={16}
                    weight="fill"
                    className="text-accent mr-2"
                  />
                  <a href="#conteudo">Conteúdo do Portfolio</a>
                </li>
              </ul>
            </section>
            <section>
              <h2 id="intro" className="text-2xl font-bold text-primary mb-3">
                Introdução
              </h2>
              <p className="text-lg leading-7 mb-4">
                Esse artigo é apenas para detalhar e contar mais sobre como foi
                desenvolvido o projeto do meu portifolio, quais ferramentas
                foram utilizadas e outros detalhes dos bastidores do
                desenvolvimento.
              </p>
              <h2
                id="detalhes"
                className="text-2xl font-bold text-primary mb-3"
              >
                Detalhes do Projeto
              </h2>
              <p className="text-lg leading-7 mb-4">
                Meu portfolio é uma aplicação FrontEnd simples, apenas para
                expor meus outros projetos de uma forma mais amigável e
                agradável para o usuário. <br></br>
                <h3 className="mt-3 mx-2 font-medium text-secondary">
                  Ferramentas Utilizadas:
                </h3>
                <ul
                  role="list"
                  className="marker:text-secondary list-inside pl-5 space-y- my-2"
                >
                  <li className="flex items-center">
                    <StarFour
                      size={12}
                      weight="fill"
                      className="text-primary mr-2"
                    />
                    React
                  </li>
                  <li className="flex items-center">
                    <StarFour
                      size={12}
                      weight="fill"
                      className="text-secondary mr-2"
                    />
                    TypeScript
                  </li>{" "}
                  <li className="flex items-center">
                    <StarFour
                      size={12}
                      weight="fill"
                      className="text-accent mr-2"
                    />
                    Vite
                  </li>
                  <li className="flex items-center">
                    <StarFour
                      size={12}
                      weight="fill"
                      className="text-primary mr-2"
                    />
                    TailwindCSS
                  </li>
                  <li className="flex items-center">
                    <StarFour
                      size={12}
                      weight="fill"
                      className="text-secondary mr-2"
                    />
                    DaisyUI
                  </li>{" "}
                  <li className="flex items-center">
                    <StarFour
                      size={12}
                      weight="fill"
                      className="text-accent mr-2"
                    />
                    Vercel
                  </li>
                </ul>
              </p>
              <p className="text-lg leading-7 mb-4">
                <h2
                  id="conteudo"
                  className="text-2xl font-bold text-primary mb-3"
                >
                  Conteúdo do Portfolio
                </h2>
                Aqui no portfolio existem algumas funcionalidades interessantes.
                <br></br>
                No canto superior direito, dentro da barra de nagevação, estão:
                O botão de mudança de tema; A aba "Sobre" para mais informações
                sobre mim; E, por fim, a bandeja de links para meus projetos.
                Entrando na opção "Ver todos" na aba projetos, abrirá uma lista
                com os cards de todos meus projetos (ou pelo menos meus
                favoritos), cada um possui uma Tag que indica alguma
                característica relevante sobre o projeto em si.<br></br>
                <br></br>
                <span className="italic">
                  Essa aba será atualizada sempre que um novo projeto for
                  criado.
                </span>
              </p>
              <p className="text-lg leading-7 mb-4">
                <h2
                  id="conteudo"
                  className="text-2xl font-bold text-primary mb-3 my-5"
                >
                  Finalização
                </h2>
                Espero que tenha gostado de conhecer mais um pouquinho do meu
                trabalho.<br></br>
                Se quiser saber mais ainda entre em contato comigo através das
                minhas redes sociais!
                <br></br> <br></br>
                <div className="flex justify-end gap-4 text-base-content footer footer-center">
                  <a href="https://linkedin.com/in/czagiacomo/" target="_blank">
                    <LinkedinLogo size={48} color="#0e76a8 " weight="fill" />
                  </a>
                  <a href="https://github.com/czagiacomo" target="_blank">
                    <GithubLogo size={48} weight="fill" />
                  </a>
                </div>
              </p>
            </section>
          </article>
        </div>
        <hr className="max-w-6xl mx-auto my-6" />
      </div>
    </>
  );
}

export default Portfolio;
