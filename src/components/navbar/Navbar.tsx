import { Plant } from "@phosphor-icons/react";

function Navbar() {
  return (
    <>
      <div className="navbar bg-base-100">
        <div className="flex-1 py-2 px-1">
          <Plant size={48} color="#3b8c3c" weight="duotone" alt="Home" />
          <a href="/" className="btn btn-ghost text-xl font-semibold">
            Catharina Zagiacomo
          </a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1 text-base">
            <li>
              <label className="flex cursor-pointer gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="5" />
                  <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
                </svg>
                <input
                  type="checkbox"
                  value="forest"
                  className="toggle theme-controller"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                </svg>
              </label>
            </li>
            <li>
              <a href="/contact" >Contato</a>
            </li>
            <li>
              <details>
                <summary>Projetos</summary>
                <ul className="bg-base-100 rounded-t-none p-2">
                  <li>
                    <a href="/" >Blog Pessoal</a>
                  </li>
                  <li>
                    <a href="/" >Link 2</a>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
      </div>
      {/* <div className="flex justify-between py-2 px-4">
        <a href="index.html" className="flex items-center">
          <Plant size={48} color="#3b8c3c" weight="duotone" alt="Home" />
          <span className="text-xl font-bold ml-2">Catharina Zagiacomo</span>
        </a>
        <nav className="flex items-center gap-4 ml-8">
          <a href="index.html" className="hover:underline">
            Home
          </a>
          <a href="projetos.html" className="hover:underline">
            Projetos
          </a>
          <a href="contato.html" className="hover:underline">
            Contato
          </a>
        </nav>
      </div>*/}
    </>
  );
}

export default Navbar;
