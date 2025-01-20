import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import Sobre from "./pages/about/Sobre";
import Projects from "./pages/listprojects/ListProjects";
import BlogPessoal from "./pages/projects/BlogPessoal";
import CRM from "./pages/projects/CRM";
import Name from "./pages/projects/ProjectTemplate";
import UpButton from "./components/upbutton/UpButton";
import Portfolio from "./pages/projects/Portfolio";
import Test from "./pages/projects/Test";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="min-h-[80vh]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/projetos" element={<Projects />} />
          <Route path="/blogpessoal" element={<BlogPessoal />} />
          <Route path="/crm" element={<CRM />} />
          <Route path="/projecttemplate" element={<Name />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/test" element={<Test />} />
        </Routes>
      </div>
      <UpButton />
      <Footer />
    </BrowserRouter>
  );
}
