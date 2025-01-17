function CRM() {
  return (
    <div className="card bg-base-100 w-96 shadow-xl">
      <figure className="h-64 w-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="128"
          height="128"
          fill="#000000"
          viewBox="0 0 256 256"
        >
          <path d="M69.12,94.15,28.5,128l40.62,33.85a8,8,0,1,1-10.24,12.29l-48-40a8,8,0,0,1,0-12.29l48-40a8,8,0,0,1,10.24,12.3Zm176,27.7-48-40a8,8,0,1,0-10.24,12.3L227.5,128l-40.62,33.85a8,8,0,1,0,10.24,12.29l48-40a8,8,0,0,0,0-12.29ZM162.73,32.48a8,8,0,0,0-10.25,4.79l-64,176a8,8,0,0,0,4.79,10.26A8.14,8.14,0,0,0,96,224a8,8,0,0,0,7.52-5.27l64-176A8,8,0,0,0,162.73,32.48Z"></path>
        </svg>

        {/*<div className="skeleton h-64 w-full"></div>*/}
      </figure>
      <div className="card-body">
        <a href="/CRM">
          <h2 className="card-title">
            CRM
            <div className="badge badge-secondary">FullStack</div>
          </h2>
        </a>

        <p>Projeto FullStack feito em grupo e desenvolvido utilizando React e Spring Framework</p>
        <div className="card-actions justify-end">
          <div className="badge border-[#0074b9] text-[#0074b9] badge-outline">
            Generation Brasil
          </div>
          <div className="badge badge-primary badge-outline">
            Projeto em Grupo
          </div>
        </div>
      </div>
    </div>
  );
}

export default CRM;
