import {
  GithubLogo,
  Globe,
  LinkedinLogo,
  StarFour,
} from "@phosphor-icons/react";
import ArticlePage from "../../components/article/Article";

function BootcampGeneration() {
  return (
    <>
      <div className="bg-base-200">
        <hr className="max-w-6xl mx-auto" />
        <div className="mt-[3rem]">
          <img
            className="w-full h-[400px] object-cover object-[25%_15%] max-w-6xl mx-auto shadow-xl"
            src="https://i.imgur.com/YblIYoV.jpg"
            alt="Imagem das Turmas 77 e 78 - Generation Brasil"
          />
          {/*
      className="w-full max-w-6xl mx-auto"
      className="w-full h-[400px] object-cover"
      */}
        </div>

        <ArticlePage slug={"generation-brasil"} />
        <hr className="max-w-6xl mx-auto" />
        <p><a href="https://techjournal.czagiacomo.com/generation-brasil">Caso o artigo não esteja carregando, click aqui e acesso o artigo na integra.</a></p>


      </div>
    </>
  );
}

export default BootcampGeneration;
