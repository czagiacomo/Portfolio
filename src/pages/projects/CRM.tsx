import { GithubLogo, LinkedinLogo } from "@phosphor-icons/react";

function CRM() {
  return (
    <>
      <div className="bg-base-200">
        <hr className="max-w-6xl mx-auto" />
        <div className="mt-[3rem]">
          <img
            className="w-full h-[400px] object-cover object-bottom max-w-6xl mx-auto shadow-xl"
            src="https://static.vecteezy.com/system/resources/previews/009/644/381/non_2x/banner-plant-and-leave-space-for-text-on-white-background-vector.jpg"
            alt="post-img"
          />
          {/*
        className="w-full max-w-6xl mx-auto"
        className="w-full h-[400px] object-cover"
        */}
        </div>

        <div className="max-w-4xl mx-auto my-6 px-6">
          <h1 className="text-4xl font-bold mb-4 font-viga mt-10">
            Projeto CRM - WIP
          </h1>
          <div className="flex justify-between text-gray-600 text-sm mb-4">
            <div>
              <b>Autora - Catharina Zagiacomo (Dev BackEnd)</b>
            </div>
            <div>00/00/0000</div>
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

export default CRM;
