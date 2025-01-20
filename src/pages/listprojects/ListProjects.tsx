import BlogPessoal from "../../components/projectcard/CardBlogPessoal";
import CRM from "../../components/projectcard/CardCRM";
import Name from "../../components/projectcard/CardProjectTemplate";
import Portfolio from "../../components/projectcard/CardPortfolio";

function Projects() {
  return (
    <>
      <div>
        <h1 className="text-center py-8 mb-8 mt-0 text-5xl font-medium leading-tight text-primary">
          Meus Projetos
        </h1>
      </div>
      <div className="container scale-95 mx-auto my-4 grid justify-items-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <Portfolio/>
        <BlogPessoal />
        <CRM />
        <Name />
      </div>
    </>
  );
}

export default Projects;
