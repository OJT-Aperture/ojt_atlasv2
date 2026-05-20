const students = [
  { name: "Jasper de Bos", id: "123456" },
  { name: "Daan Vermeulen", id: "123456" },
  { name: "Sophie Jansen", id: "123456" },
  { name: "Milan de Vries", id: "123456" },
  { name: "Noor Bakker", id: "123456" },
  { name: "Lucas Smit", id: "123456" },
  { name: "Emma van Dijk", id: "123456" },
  { name: "Finn Mulder", id: "123456" },
  { name: "Sara Meijer", id: "123456" },
  { name: "Thomas Visser", id: "123456" },
  { name: "Lotte de Bos", id: "123456" },
  { name: "Ruben Kuipers", id: "123456" },
  { name: "Julia Dekker", id: "123456" },
];

export const StudentListSection = (): JSX.Element => {
  return (
    <section
      aria-label="Studentenlijst"
      className="absolute left-[374px] top-[339px] h-[685px] w-[966px]"
    >
      <div className="relative h-full w-full">
        <img
          className="absolute -left-1 top-0 h-[693px] w-[974px]"
          alt=""
          src="/img/rectangle-18.png"
          aria-hidden="true"
        />
        <ul className="absolute left-6 top-[23px] m-0 list-none p-0">
          {students.map((student, index) => (
            <li
              key={`${student.name}-${index}`}
              className="absolute left-0 h-[41px] w-[919px]"
              style={{ top: `${index * 49}px` }}
            >
              <div className="relative h-full w-full">
                <div className="absolute left-3.5 top-0 flex h-[41px] w-[881px] items-center [font-family:'Poppins',Helvetica] text-xl font-bold leading-[30px] tracking-[-0.44px] text-white">
                  {student.name} - {student.id}
                </div>
                <a
                  href="#"
                  className="absolute right-3 top-[9px] [font-family:'Poppins',Helvetica] text-xs font-normal leading-[18px] text-white no-underline focus-visible:rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  aria-label={`Profiel bekijken van ${student.name}`}
                >
                  Profiel bekijken &gt;
                </a>
                <div
                  className="absolute left-0 top-[41px] h-px w-[917px] bg-[url(/img/line-2-12.svg)] bg-cover bg-[50%_50%]"
                  aria-hidden="true"
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
