const people = [
  {
    name: "Catharina Zagiacomo",
    role: "Fundadora | CEO",
    imageUrl:
      "https://i.imgur.com/NQbA7Go.jpg",
  },
  {
    name: "Zagia",
    role: "Backend Dev",
    imageUrl:
      "https://i.imgur.com/ngAGW2E.png",
  },
  {
    name: "CZagia",
    role: "FrontEnd Dev | UI/UX",
    imageUrl:
      "https://i.imgur.com/bWy25Xu.jpg",
  },
  {
    name: "Caca",
    role: "Especialista em QA",
    imageUrl:
      "https://i.imgur.com/q3iwryt.jpg",
  },
  {
    name: "Rina DeZagiacomo",
    role: "Social Media Mananger",
    imageUrl:
      "https://i.imgur.com/jpjJtch.jpg",
  },
  {
    name: "Tatai",
    role: "Mascote",
    imageUrl:
      "https://i.imgur.com/fKKer46.jpg",
  },
  
];

export default function Team() {
  return (
    <div className="bg-base-200 py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-20 px-6 lg:px-8 xl:grid-cols-3">
        <div className="max-w-xl">
          <h2 className="text-pretty text-3xl font-semibold tracking-tight text-primary sm:text-4xl">
            Conheça nosso Time!
          </h2>
          <p className="mt-6 text-lg/8 about-me-text-color">
            Nós somos um time feminino e apaixonado pela área de tecnologia,
            buscamos sempre evoluir cada vez mais em nossas habilidades,
            procurando sempre trazer os melhores resultados de forma prática e
            eficiente.
          </p>
        </div>
        <ul
          role="list"
          className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2"
        >
          {people.map((person) => (
            <li key={person.name}>
              <div className="flex items-center gap-x-6">
                <img
                  alt=""
                  src={person.imageUrl}
                  className="size-16 rounded-full"
                />
                <div>
                  <h3 className="text-base/7 font-semibold tracking-tight text-secondary">
                    {person.name}
                  </h3>
                  <p className="text-sm/6 font-semibold text-indigo-500">
                    {person.role}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
