import CardBlogPessoal from "../../components/projectcard/CardBlogPessoal";
import CardCRM from "../../components/projectcard/CardCRM";
import CardName from "../../components/projectcard/CardProjectTemplate";
import CardPortfolio from "../../components/projectcard/CardPortfolio";
import CardGenFit from "../../components/projectcard/CardGenFit";

function Projects() {
  return (
    <>
      <div>
        <h1
          className="text-center py-8 mb-3 mt-2 text-5xl leading-tight text-primary
        font-viga"
        >
          Meus Projetos
        </h1>
      </div>
      <div className=" *:container scale-95 mx-auto my-4 grid justify-items-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <CardPortfolio />
        <CardBlogPessoal />
        <CardCRM />
        <CardGenFit />
      </div>
      <div className="m-12"></div>
    </>
  );
}

export default Projects;
