const students = [
  { id: "123456", name: "Jasper de Bos" },
  { id: "123456", name: "Daan Vermeulen" },
];

export const StudentCountValueSection = (): JSX.Element => {
  return (
    <section
      aria-label="Leerlingen"
      className="absolute top-[501px] left-[316px] w-[808px] h-[138px]"
    >
      <div className="relative w-full h-full">
        <img
          className="absolute top-0 -left-1 w-[816px] h-[146px] pointer-events-none select-none"
          alt=""
          aria-hidden="true"
          src="/img/rectangle-18-2.png"
        />
        <ul className="absolute top-[22px] left-5 w-[769px] list-none m-0 p-0">
          {students.map((student, index) => (
            <li
              key={`${student.name}-${index}`}
              className={`absolute left-0 w-[769px] h-[39px] ${
                index === 0 ? "top-0" : "top-[47px]"
              }`}
            >
              <div className="absolute top-0 left-3 w-[737px] h-[39px] flex items-center [font-family:'Poppins',Helvetica] font-bold text-white text-xl tracking-[-0.44px] leading-[30px]">
                {student.name} - {student.id}
              </div>
              <div className="absolute top-0 right-0 w-4 h-[39px] flex items-center justify-center [font-family:'Poppins',Helvetica] font-bold text-white text-xl tracking-[-0.44px] leading-[30px]">
                (•)
              </div>
              <div className="absolute top-[39px] left-0 w-[767px] h-px bg-[url(/img/line-2-25.svg)] bg-cover bg-[50%_50%]" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
