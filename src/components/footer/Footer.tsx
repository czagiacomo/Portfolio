import { GithubLogo, Globe, LinkedinLogo } from "@phosphor-icons/react";

function Footer() {
  return (
    <>
      <footer className="footer footer-center bg-base-100 text-base-content rounded p-10 shadow-[0px_-1px_10px_rgba(0,0,0,0.2)]">
        <nav className="grid grid-flow-col gap-4">
          <a href="/" className="link link-hover">
            Home
          </a>
          <a href="/projetos" className="link link-hover">
            Projetos
          </a>
          <a href="/sobre" className="link link-hover">
            Sobre
          </a>
        </nav>
        <nav>
          <div className="grid grid-flow-col gap-4">
            <a href="https://linkedin.com/in/czagiacomo/" target="_blank">
              <LinkedinLogo size={48} weight="regular" />
            </a>
            <a href="https://github.com/czagiacomo" target="_blank">
              <GithubLogo size={48} weight="regular" />
            </a>
            <a href="https://www.czagiacomo.com" target="_blank">
              <Globe size={48} weight="regular" />
            </a>
          </div>
        </nav>
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by
            Catharina Zagiacomo
          </p>
        </aside>
      </footer>
      {/* <h3>Feito com ❤️ por Catharina Zagiacomo - 2025</h3> */}
    </>
  );
}

export default Footer;
