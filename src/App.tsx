import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import Sobre from "./pages/about/Sobre";
import Team from "./pages/team/Team";
import Projects from "./pages/listprojects/ListProjects";
import BlogPessoal from "./pages/projects/BlogPessoal";
import CRM from "./pages/projects/CRM";
import Name from "./pages/projects/ProjectTemplate";
import UpButton from "./components/upbutton/UpButton";
import Portfolio from "./pages/projects/Portfolio";

import GenFit from "./pages/projects/GenFit";
import BootcampGeneration from "./pages/bootcamp/BootcampGeneration";
import ArticlePage from "./components/article/Article";

const ArticlePageWrapper = () => {
  const { slug } = useParams<{ slug: string }>();
  return <ArticlePage slug={slug!} />;
};

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="min-h-[80vh]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/time" element={<Team />} />
          <Route path="/projetos" element={<Projects />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/blogpessoal" element={<BlogPessoal />} />
          <Route path="/crm" element={<CRM />} />
          <Route path="/genfit" element={<GenFit />} />
          <Route path="/projecttemplate" element={<Name />} />
          <Route path="/genbrasil" element={<BootcampGeneration />} />
          <Route path="/artigo/:slug" element={<ArticlePageWrapper />} />
        </Routes>
      </div>
      <UpButton />
      <Footer />
    </BrowserRouter>
  );
}
