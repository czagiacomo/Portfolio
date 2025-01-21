import Accordion from "../../components/accordion/Accordion";

function Sobre() {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row mx-28 p-8">
        <img
          src="https://i.imgur.com/atZsYuw.jpg"
          className="max-w-sm rounded-lg shadow-2xl mask-paint-custom scale-150 pr-3"
        />
        <div className="py-6 pl-32">
          <h1 className="text-5xl font-bold">Sobre mim</h1>
          <p className="py-6 ">
            Eu irei contar um pouco da minha história de vida, o que me inspira,
            o que me incentiva todos os dias, quais habilidades eu mais me
            orgulho, e por fim, o link para o meu currículo!
          </p>
          <div className="p-4 bg-base-300 rounded-lg scale-105">
            <div className="indent-8">
              <Accordion
                title="Início da minha história"
                answer={
                  <>
                    <p>
                      Eu desde criança sempre fui apaixonada por aprender coisas
                      novas, a minha fase mais comum era o famoso 'mas por
                      quê?', e graças a essa curiosidade, eu explorava muito as
                      diversas ciências que a vida tem a oferecer, uma delas,
                      foi tecnologia.
                    </p>
                    <p>
                      Movida já por um certo interesse, eu ficava curiosa para
                      entender como cada pedacinho do mundo virtual funcionava,
                      como cada peça se encaixava. Isso me levou a explorar
                      diversas áreas, logística, direito, jogos digitais, até
                      aterrizar finalmente em computação em nuvem, onde
                      finalmente poderia entender os detalhes de como a nossa
                      rede de internet funciona.
                    </p>
                    <p>
                      A faculdade de computação em nuvem me possibilitou
                      reencontrar aquela minha velha paixão de infância, os
                      bastidores do nosso mundo atual, os detalhes de como a
                      internet funciona...
                    </p>
                    <p className="italic text-primary ">
                      Por isso, hoje em dia, dedico meu tempo a transformar
                      disso minha profissão.
                    </p>
                  </>
                }
              />
            </div>
            <div>
              <Accordion
                title="Minhas principais habilidades"
                answer={
                  <>
                    <p className="indent-8">
                      A habilidade que eu mais me orgulho é com certeza minha
                      capacidade de aprendizado. Ela me permitiu chegar onde eu
                      estou hoje, acumulando diversos tipos de conhecimentos
                      úteis, dentre eles:
                    </p>
                    <div>
                      <ul className="list-disc pl-6">
                        <li>Inglês Fluente</li>
                        <li>Alemão e Espanhol Básico</li>
                        <li>
                          Python, C#, Cypress, .NET, Azure, AWS, Cybersecurity
                        </li>
                        <li>
                          Java, Spring, React e Tailwind são as mais
                          aperfeiçoadas.
                        </li>
                      </ul>
                      <p className="indent-8">
                        Além de habilidades comportamentais, as três principais
                        são comunicação, responsabilidade pessoal e
                        persistência.
                      </p>
                    </div>
                  </>
                }
              />
            </div>
            <div className="indent-8">
              <Accordion
                title="Minhas paixões"
                answer={
                  <>
                    <p>
                      Além dos meus cachorros, eu diria que sou apaixonada por
                      explorar o mundo, seja viajando, entrando em contato com
                      diversas culturas e experiências.
                    </p>
                    <p>
                      Isso fácilmente se conecta com a minha base:{" "}
                      <span className="italic text-primary">
                        Aprender coisas novas.
                      </span>
                    </p>
                    <p>
                      Outra paixão muito presente no meu dia a dia é a eterna
                      oportunidade de melhorar, evoluir e claro, me desafiar.
                    </p>
                    <p>
                      A cada desafio que concluo, cada passo que dou e cada
                      etapa que evoluo, sinto que novas portas se abrem diante
                      de mim, e com essas portas, a oportunidade de ser uma
                      pessoa melhor.
                    </p>
                  </>
                }
              />
            </div>
            <div className="indent-8">
              <Accordion
                title="Meus objetivos a longo prazo"
                answer={
                  <>
                    <p>
                      Meu maior objetivo a longo prazo é minha independência
                      financeira e geográfica, eu diria que minha indepedência
                      me motiva todos os dias a me dedicar mais a minha área de
                      estudos.
                    </p>
                    <p>
                      De um ponto de vista menos profissional e mais pessoal,
                      meu objetivo é ter a possibilidade de ajudar outras
                      mulheres a entrarem no mercado de tecnologia e também
                      conquistarem sua tão sonhada vaga.
                    </p>
                  </>
                }
              />
            </div>
          </div>
          <div className="pt-8">
            <a
              href="https://drive.google.com/file/d/1O6Wp8niz2x-9eEiiGwWfJksF42ZIXJGV/"
              target="_blank"
            >
              <button className="btn btn-primary">Veja meu currículo</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sobre;
