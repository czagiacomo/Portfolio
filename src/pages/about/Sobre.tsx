import { DownloadSimple } from "@phosphor-icons/react";
import Accordion from "../../components/accordion/Accordion";
import Paixoes from "../../components/sobre/Paixoes";
import InicioHistoria from "../../components/sobre/InicioHistoria";
import Habilidades from "../../components/sobre/Habilidades";
import BootcampGen from "../../components/sobre/BootcampGen";
import Objetivos from "../../components/sobre/Objetivos";

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
          <div className="p-4 bg-base-300 rounded-lg scale-105 text-secondary">
            <div className="indent-8">
              <Accordion
                title="Início da minha história"
                answer={<InicioHistoria />}
              />
            </div>
            <div className="indent-8">
              <Accordion
                title="Bootcamp da Generation Brasil"
                answer={<BootcampGen />}
              />
            </div>
            <div>
              <Accordion
                title="Minhas principais habilidades"
                answer={<Habilidades />}
              />
            </div>
            <div className="indent-8">
              <Accordion title="Minhas paixões" answer={<Paixoes />} />
            </div>
            <div className="indent-8">
              <Accordion
                title="Meus objetivos a longo prazo"
                answer={<Objetivos />}
              />
            </div>
          </div>
          <div className="pt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <a
              href="https://drive.google.com/file/d/1O6Wp8niz2x-9eEiiGwWfJksF42ZIXJGV/"
              target="_blank"
            >
              <button className="btn btn-primary w-full py-4 mx-auto flex justify-center">
                Veja meu currículo
              </button>
            </a>
            <a
              href="https://drive.google.com/uc?export=download&id=1O6Wp8niz2x-9eEiiGwWfJksF42ZIXJGV"
              target="_blank"
              download
            >
              <button className="btn btn-primary w-full  mx-auto flex justify-center">
                <DownloadSimple size={24} className="" />
                Download
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sobre;
