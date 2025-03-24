import {
  GithubLogo,
  Globe,
  LinkedinLogo,
  StarFour,
} from '@phosphor-icons/react';

function BootcampGeneration() {
  return (
    <>
      <div className='bg-base-200'>
        <hr className='max-w-6xl mx-auto' />
        <div className='mt-[3rem]'>
          <img
            className='w-full h-[400px] object-cover object-[25%_15%] max-w-6xl mx-auto shadow-xl'
            src='https://i.imgur.com/YblIYoV.jpg'
            alt='Imagem das Turmas 77 e 78 - Generation Brasil'
          />
          {/*
      className="w-full max-w-6xl mx-auto"
      className="w-full h-[400px] object-cover"
      */}
        </div>
        <div className='max-w-4xl mx-auto my-6 px-6'>
          <h1 className='text-4xl font-bold mb-4 font-viga mt-10'>
            Bootcamp Generation Brasil - Java FullStack
          </h1>
          <div className='flex justify-between text-gray-600 text-sm mb-4'>
            <div>
              <b>Autora - Catharina Zagiacomo (Dev BackEnd)</b>
            </div>
            <div>15/02/2025</div>
          </div>

          <div className='flex space-x-3 mb-6 mt-6'>
            <a href='https://linkedin.com/in/czagiacomo/' target='_blank'>
              <LinkedinLogo size={32} color='#0e76a8 ' weight='fill' />
            </a>
            <a href='https://github.com/czagiacomo/Portfolio' target='_blank'>
              <GithubLogo size={30} weight='fill' />
            </a>
            <a href='https://brazil.generation.org' target='_blank'>
              <Globe size={30} weight='regular' color='#0d78d2' />
            </a>
          </div>
          <article>
            <section id='summary'>
              <hr className='max-w-6xl mx-auto h-px my-8 bg-primary border-0' />
              <ul
                role='list'
                className='marker:text-secondary list-inside pl-5 space-y-3 my-8 font-medium'
              >
                <li className='flex items-center'>
                  <StarFour
                    size={16}
                    weight='fill'
                    className='text-primary mr-2'
                  />
                  <a href='#intro'>Introdução</a>
                </li>
                <li className='flex items-center'>
                  <StarFour
                    size={16}
                    weight='fill'
                    className='text-secondary mr-2'
                  />
                  <a href='#detalhes'>Minha jornada durante o bootcamp</a>
                </li>{' '}
                <li className='flex items-center'>
                  <StarFour
                    size={16}
                    weight='fill'
                    className='text-accent mr-2'
                  />
                  <a href='#conteudo'>Conquistas</a>
                </li>
                <li className='flex items-center'>
                  <StarFour
                    size={16}
                    weight='fill'
                    className='text-primary mr-2'
                  />
                  <a href='#intro'>Projetos realizados</a>
                </li>
                <li className='flex items-center'>
                  <StarFour
                    size={16}
                    weight='fill'
                    className='text-secondary mr-2'
                  />
                  <a href='#detalhes'>Objetivos futuros</a>
                </li>
              </ul>
            </section>
            <section>
              <h2 id='intro' className='text-2xl font-bold text-primary mb-3 '>
                Introdução
              </h2>
              <p className='text-lg leading-7 mb-4  '>
                O bootcamp da Generation Brasil é um curso intensivo de mais de
                480h condesadas em um período aproximado de 3 meses, além do
                objetivo de ensinar de forma imersiva uma técnologia, o bootcamp
                também simula um ambiente de trabalho com uma carga horária de
                segunda a sexta, das 8h às 17h, reuniões síncronas e
                rigorosidade com o horário de presença.
              </p>
              <p className='text-lg leading-7 mb-4  '>
                Dentre os assuntos abordados durante o curso, pude aprender
                melhor sobre questões técnicas e reforçar outras habilidades
                comportamentais.
              </p>
              <h2
                id='detalhes'
                className='text-2xl font-bold text-primary mb-3'
              >
                Minha Jornada
              </h2>
              <p className='text-lg leading-7 mb-4  '>
                Eu decidi participar do bootcamp ainda no início de 2024 quando
                conheci a Generation Brasil, no mesmo dia de Agosto em que às
                inscrições abriram eu já me candidatei para iniciar as aulas
                apenas em Outubro. Durante o ano me dediquei a estudar
                programação de forma autodidata e complementando meus
                conhecimentos através da minha graduação em computação em nuvem,
                assim que as aulas iniciaram eu me investi em absorver tudo que
                o Generation tivesse para ensinar.
              </p>
              <p className='text-lg leading-7 mb-4  '>
                Foram três módulos de aulas práticas e teóricas, durante o
                primeiro módulo eu me candidatei a representante de sala e
                consegui o cargo através de uma eleição, em relação aos
                conteúdos técnicos foi ensinado sobre lógica de programação em
                Java intercalado com sessões de softskills e empregabilidade.
              </p>
              <p className='text-lg leading-7 mb-4  '>
                Durante o segundo módulo, nós foi apresentado o SpringBoot o que
                concretizou minha paixão pelo BackEnd, além de termos o primeiro
                Projeto Integrador. Nesse projeto, são separados grupos de
                acordo com a compatibilidade de cada participante e são
                distribuídos cargos como Dev, PO e Tester, foi nessa etapa que
                desenvolvemos o BackEnd da aplicação apresentada durante o
                GenDay.
              </p>
              <p className='text-lg leading-7 mb-4  '>
                Já no último módulo, aprendemos a mexer com FrontEnd utilizando
                React, Typescript, Tailwind e Vite. Me surpreendi positivamente
                com essa área da programação, me dei muito bem com FrontEnd e
                aprendi com facilidade, apesar disso, ainda tenho um cantinho
                especial em meu coração para BackEnd, porém acredito ser muito
                bom ter um domínio básico de ambas as “pontas” para desenvolver
                uma aplicação funcional;
              </p>
              <p className='text-lg leading-7 mb-4'>
                <h2
                  id='conteudo'
                  className='text-2xl font-bold text-primary mb-3'
                >
                  Conquistas
                </h2>
                <p className='text-lg leading-7 mb-4  '>
                  Graças a minha dedidação durante o bootcamp, eu fui agraciada
                  com alguns eventos que considero conquistas pessoais e
                  profissionais, dentre eles, minha finalização com uma nota
                  geral de 96,54%.
                </p>
                <p className='text-lg leading-7 mb-4  '>
                  Fiquei entre os quatro melhores alunos da minha turma, e como
                  forma de reconhecimentos ganhamos uma viagem de avião
                  patrocinada pela Gol, para Curitiba para participar do
                  GlobalGame Jam realizado pela PUC-PR.
                </p>
                <p className='text-lg leading-7 mb-4  '>
                  Durante dois projetos integradores tive a oportunidade de ser
                  colocada como PO, essa escolha foi feita de forma criteriosa
                  pela equipe interna da Generation Brasil com base no
                  desempenho do grupo. Acredito que devido minhas boas práticas
                  em programação + habilidade de comunicação e organização, pude
                  desfrutar da possibilidade de organizar minha equipe e
                  auxiliar os outros desenvolvedores com questões técnicas. Fico
                  feliz com isso, porque apesar de não ter codado durante dois
                  projetos, pude exercitar outras habilidades comportamentais
                  que agregaram muito ao meu aprendizado.
                </p>
                <p className='text-lg leading-7 mb-4  '>
                  Durante a formatura, fui eleita para ser a oradora e mestre de
                  cerimônias, meu colegas de turma reconheceram minha habilidade
                  em comunicação e como representante de sala. Considero tudo
                  isso um grande privilégio, além de uma excelente oportunidade
                  de crescimento.
                </p>
              </p>
              <p className='text-lg leading-7 mb-4'>
                <h2
                  id='conteudo'
                  className='text-2xl font-bold text-primary mb-3'
                >
                  Projetos Realizados
                </h2>
                <p className='text-lg leading-7 mb-4  '>
                  Eu realizei diversos projetos durante o bootcamp, os melhores
                  estão localizados na aba de Projetos aqui do portfólio, e caso
                  você queira ver o código na íntegra, cada artigo também possui
                  o link para o GitHub do projeto.
                </p>
              </p>
              <p className='text-lg leading-7 mb-4'>
                <h2
                  id='conteudo'
                  className='text-2xl font-bold text-primary mb-3 my-5'
                >
                  Objetivos Futuros
                </h2>
                <p className='text-lg leading-7 mb-4  '>
                  Espero que tenha gostado de conhecer mais um pouquinho do meu
                  trabalho.<br></br>
                  Se quiser saber mais ainda entre em contato comigo através das
                  minhas redes sociais!
                  <br></br> <br></br>
                </p>
                <div className='flex justify-end gap-4 text-base-content footer footer-center'>
                  <a href='https://linkedin.com/in/czagiacomo/' target='_blank'>
                    <LinkedinLogo size={48} color='#0e76a8 ' weight='fill' />
                  </a>
                  <a href='https://github.com/czagiacomo' target='_blank'>
                    <GithubLogo size={48} weight='fill' />
                  </a>
                  <a href='https://brazil.generation.org' target='_blank'>
                    <Globe size={48} weight='regular' color='#0d78d2' />
                  </a>
                </div>
              </p>
            </section>
          </article>
        </div>
        <hr className='max-w-6xl mx-auto' />
      </div>
    </>
  );
}

export default BootcampGeneration;
