const students = [
  {
    name: "Sophie Jansen",
    id: "123456",
    top: 0,
    icon: true,
    textTopClass: "top-0",
  },
  {
    name: "Milan de Vries",
    id: "123456",
    top: 57,
    icon: true,
    textTopClass: "top-0",
  },
  {
    name: "Noor Bakker",
    id: "123456",
    top: 104,
    icon: true,
    textTopClass: "top-0",
  },
  {
    name: "Lucas Smit",
    id: "123456",
    top: 151,
    icon: true,
    textTopClass: "top-0",
  },
  {
    name: "Emma van Dijk",
    id: "123456",
    top: 198,
    icon: true,
    textTopClass: "top-px",
  },
  {
    name: "Finn Mulder",
    id: "123456",
    top: 245,
    icon: true,
    textTopClass: "top-px",
  },
  {
    name: "Sara Meijer",
    id: "123456",
    top: 292,
    icon: true,
    textTopClass: "top-px",
  },
  {
    name: "Thomas Visser",
    id: "123456",
    top: 339,
    icon: true,
    textTopClass: "top-px",
  },
  {
    name: "Lotte de Bos",
    id: "123456",
    top: 386,
    icon: true,
    textTopClass: "top-0",
  },
  {
    name: "Ruben Kuipers",
    id: "123456",
    top: 433,
    icon: true,
    textTopClass: "top-0",
  },
  {
    name: "Julia Dekker",
    id: "123456",
    top: 480,
    icon: true,
    textTopClass: "top-px",
  },
];

const ActionIcon = (): JSX.Element => {
  return (
    <span
      aria-hidden="true"
      className="absolute top-[5px] left-[734px] block w-[29px] h-[29px] aspect-[1]"
    >
      <img
        className="absolute w-[68.75%] h-[59.38%] top-[40.62%] left-[31.25%]"
        alt=""
        src="/img/vector-102.svg"
      />
      <img
        className="absolute w-[84.37%] h-[93.75%] top-[6.25%] left-[15.63%]"
        alt=""
        src="/img/vector-103.svg"
      />
    </span>
  );
};

export const StudentCountSection = (): JSX.Element => {
  return (
    <section
      aria-labelledby="student-count-section-title"
      className="absolute top-[786px] left-[316px] w-[808px] h-[553px]"
    >
      <h2 id="student-count-section-title" className="sr-only">
        Leerlingen die de module hebben afgerond
      </h2>
      <img
        className="absolute top-0 -left-1 w-[816px] h-[561px]"
        alt=""
        aria-hidden="true"
        src="/img/rectangle-18-1.png"
      />
      <ul className="relative m-0 p-0 list-none">
        {students.map((student) => (
          <li
            key={`${student.name}-${student.top}`}
            className="absolute left-5 w-[769px] h-[39px]"
            style={{ top: `${student.top}px` }}
          >
            <button
              type="button"
              aria-label={`Bekijk gegevens van ${student.name} - ${student.id}`}
              className="relative block w-[769px] h-[39px] text-left cursor-pointer"
            >
              <span
                className={`absolute ${student.textTopClass} left-3 w-[737px] h-[39px] flex items-center [font-family:'Poppins',Helvetica] font-bold text-white text-xl tracking-[-0.44px] leading-[30px]`}
              >
                {student.name} - {student.id}
              </span>
              <div
                aria-hidden="true"
                className="absolute top-[39px] left-0 w-[767px] h-px bg-[url(/img/line-2-25.svg)] bg-cover bg-[50%_50%]"
              />
              {student.icon && <ActionIcon />}
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
};
