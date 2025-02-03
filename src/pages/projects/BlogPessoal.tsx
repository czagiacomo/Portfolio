import {
  GithubLogo,
  Globe,
  LinkedinLogo,
  StarFour,
} from "@phosphor-icons/react";
import FerramentasFront from "../../components/blogpessoal/FerramentasFront";
import FerramentasBack from "../../components/blogpessoal/FerramentasBack";
import FerramentasDeploy from "../../components/blogpessoal/FerramentasDeploy";
import Carrossel from "../../components/carousel/Carrossel";

function BlogPessoal() {
  return (
    <>
      <div className="bg-base-200">
        <hr className="max-w-6xl mx-auto" />
        <div className="mt-[3rem]">
          <img
            className="w-full h-[400px] object-cover object-[25%_75%] max-w-6xl mx-auto shadow-xl"
            src="https://i.imgur.com/5tSzbgM.png"
            alt="post-img"
          />
          {/*
        className="w-full max-w-6xl mx-auto"
        className="w-full h-[400px] object-cover"
        */}
        </div>

        <div className="max-w-4xl mx-auto my-6 px-6">
          <h1 className="text-4xl font-bold mb-4 font-viga mt-10">
            Blog Pessoal
          </h1>
          <div className="flex justify-between text-gray-600 text-sm mb-4">
            <div>
              <b>Autora - Catharina Zagiacomo (Dev BackEnd)</b>
            </div>
            <div>01/02/2025</div>
          </div>

          <div className="flex space-x-3 mb-6 mt-6">
            <a href="https://linkedin.com/in/czagiacomo/" target="_blank">
              <LinkedinLogo size={32} color="#0e76a8 " weight="fill" />
            </a>

            <a href="https://github.com/czagiacomo" target="_blank">
              <GithubLogo size={30} weight="fill" />
            </a>
            <a href="https://blog.czagiacomo.com" target="_blank">
              <Globe size={30} weight="regular" color="#0d78d2" />
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
                  <a href="#detalhes">Detalhes Técnicos</a>
                </li>{" "}
                <li className="flex items-center">
                  <StarFour
                    size={16}
                    weight="fill"
                    className="text-accent mr-2"
                  />
                  <a href="#conteudo">Conteúdo do Projeto</a>
                </li>
              </ul>
            </section>
            <section>
              <h2 id="intro" className="text-2xl font-bold text-primary mb-3">
                Introdução
              </h2>
              <p className="text-lg leading-7 mb-4">
                Para esse projeto, eu tive o apoio e instrução da Generation
                Brasil, que me auxiliou durante a construção do Blog Pessoal.
              </p>
              <h2
                id="detalhes"
                className="text-2xl font-bold text-primary mb-3"
              >
                Detalhes Técnicos
              </h2>
              <div className="text-lg leading-7 mb-4">
                <p></p>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h3 className="mt-3 mx-2 font-medium text-secondary">
                      Ferramentas utilizadas no Frontend:
                    </h3>
                    <FerramentasFront />
                  </div>
                  <div>
                    <h3 className="mt-3 mx-2 font-medium text-secondary">
                      Ferramentas utilizadas no Backend:
                    </h3>
                    <FerramentasBack />
                  </div>
                </div>
              </div>
              <p className="text-lg leading-7 mb-4">
                <h2
                  id="conteudo"
                  className="text-2xl font-bold text-primary mb-3"
                >
                  Conteúdo do Projeto
                </h2>
                Em construção para entregar o minha melhor documentação para
                você!
                <br></br>
                <br></br>
                <span className="italic">
                  {" "}
                  Você já pode conhecer o projeto finalizado e funcional
                  utilizando o botão no final da página!
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
                minhas redes sociais, e acesse o link para o blog para testa-lo!
                <br></br>
                <div className="mx-2 w-1/3">
                  <a href="https://blog.czagiacomo.com" target="_blank">
                    <button className="btn btn-secondary my-10 w-full">
                      Conheça meu Blog Pessoal!
                    </button>
                  </a>
                  <br></br>
                </div>
                <div className="flex justify-end gap-4 text-base-content footer footer-center">
                  <a href="https://linkedin.com/in/czagiacomo/" target="_blank">
                    <LinkedinLogo size={48} color="#0e76a8 " weight="fill" />
                  </a>
                  <a href="https://github.com/czagiacomo" target="_blank">
                    <GithubLogo size={48} weight="fill" />
                  </a>
                  <a href="https://blog.czagiacomo.com" target="_blank">
                    <Globe size={48} weight="regular" color="#0d78d2" />
                  </a>
                </div>
              </p>
            </section>
          </article>
        </div>
        <hr className="max-w-6xl mx-auto" />
      </div>
    </>
  );
}

export default BlogPessoal;
