import { ChangeEvent, useMemo, useState } from "react";
import { Link } from "react-router-dom";

type AttentionPointRow = {
  id: number;
  studentName: string;
  studentNumber: string;
  className: string;
  attentionPoint: string;
  recommendedExercise: string;
  link?: string;
};

const rows: AttentionPointRow[] = [
  {
    id: 1,
    studentName: "Jasper de Bos",
    studentNumber: "123456",
    className: "1A",
    attentionPoint: "Werkt goed, focus sterk",
    recommendedExercise: "Mediteren + Ademhalen",
    link: "/leerling-scherm2",
  },
  {
    id: 2,
    studentName: "Daan Vermeulen",
    studentNumber: "123456",
    className: "1A",
    attentionPoint: "Werkt goed, toont doorzettingsvermogen",
    recommendedExercise: "Dagboekschrijven + Bewegen",
  },
  {
    id: 3,
    studentName: "Sophie Jansen",
    studentNumber: "123456",
    className: "1B",
    attentionPoint: "Stress bij lastige opdrachten",
    recommendedExercise: "Ademhalen + Mediteren",
  },
  {
    id: 4,
    studentName: "Milan de Vries",
    studentNumber: "123456",
    className: "2A",
    attentionPoint: "Werkt goed samen in groep",
    recommendedExercise: "Bewegen + Dagboekschrijven",
  },
  {
    id: 5,
    studentName: "Noor Bakker",
    studentNumber: "123456",
    className: "1B",
    attentionPoint: "Moeite met langere concentratie",
    recommendedExercise: "Mediteren + Ademhalen",
  },
  {
    id: 6,
    studentName: "Lucas Smit",
    studentNumber: "123456",
    className: "2A",
    attentionPoint: "Snel ontmoedigd bij fouten",
    recommendedExercise: "Dagboekschrijven + Mediteren",
  },
];

const rowTopPositions = [25, 94, 159, 223, 288, 357];
const separatorTopPositions = [84, 150, 215, 280, 345];

export const AttentionPointsTableSection = (): JSX.Element => {
  const [studentQuery, setStudentQuery] = useState("");
  const [classQuery, setClassQuery] = useState("");
  const [attentionTypeQuery, setAttentionTypeQuery] = useState("");

  const filteredRows = useMemo(() => {
    return rows.filter((row) => {
      const studentMatches =
        studentQuery.trim() === "" ||
        `${row.studentName} ${row.studentNumber}`
          .toLowerCase()
          .includes(studentQuery.toLowerCase());

      const classMatches =
        classQuery.trim() === "" ||
        row.className.toLowerCase().includes(classQuery.toLowerCase());

      const attentionMatches =
        attentionTypeQuery.trim() === "" ||
        row.attentionPoint
          .toLowerCase()
          .includes(attentionTypeQuery.toLowerCase()) ||
        row.recommendedExercise
          .toLowerCase()
          .includes(attentionTypeQuery.toLowerCase());

      return studentMatches && classMatches && attentionMatches;
    });
  }, [studentQuery, classQuery, attentionTypeQuery]);

  const handleStudentChange = (event: ChangeEvent<HTMLInputElement>) => {
    setStudentQuery(event.target.value);
  };

  const handleClassChange = (event: ChangeEvent<HTMLInputElement>) => {
    setClassQuery(event.target.value);
  };

  const handleAttentionTypeChange = (event: ChangeEvent<HTMLInputElement>) => {
    setAttentionTypeQuery(event.target.value);
  };

  return (
    <section
      className="absolute top-[488px] left-[401px] h-[519px] w-[881px] flex-col gap-2.5"
      aria-labelledby="attention-points-table-heading"
    >
      <div className="ml-[5px] inline-flex h-[31px] w-[592px] items-center gap-10">
        <label className="relative block h-[31px] w-[195px]">
          <span className="sr-only">Zoek leerling</span>
          <div className="absolute top-0 left-0 h-[31px] w-[193px] rounded-[20px] bg-[#ededed]" />
          <input
            type="search"
            value={studentQuery}
            onChange={handleStudentChange}
            placeholder="Zoek leerling..."
            aria-label="Zoek leerling"
            className="absolute top-0 left-0 h-[31px] w-[193px] rounded-[20px] pl-[45px] pr-3 [font-family:'Poppins',Helvetica] font-medium text-[#484848] text-[15px] tracking-[-0.33px] leading-[22.5px] placeholder:text-[#a4a4a4]"
          />
        </label>
        <label className="relative block h-[31px] w-[143px]">
          <span className="sr-only">Zoek klas</span>
          <div className="absolute top-0 left-0 h-[31px] w-[141px] rounded-[20px] bg-[#ededed]" />
          <input
            type="search"
            value={classQuery}
            onChange={handleClassChange}
            placeholder="Zoek klas..."
            aria-label="Zoek klas"
            className="absolute top-0 left-0 h-[31px] w-[141px] rounded-[20px] pl-[33px] pr-3 [font-family:'Poppins',Helvetica] font-medium text-[#484848] text-[15px] tracking-[-0.33px] leading-[22.5px] placeholder:text-[#a4a4a4]"
          />
        </label>
        <label className="relative mr-[-2.00px] block h-[31px] w-[180px]">
          <span className="sr-only">Zoek soort aandachtspunt</span>
          <div className="absolute top-0 left-0 h-[31px] w-[178px] rounded-[20px] bg-[#ededed]" />
          <input
            type="search"
            value={attentionTypeQuery}
            onChange={handleAttentionTypeChange}
            placeholder="Soort aandachtspunt"
            aria-label="Zoek soort aandachtspunt"
            className="absolute top-0 left-0 h-[31px] w-[178px] rounded-[20px] pl-[13px] pr-3 [font-family:'Poppins',Helvetica] font-medium text-[#484848] text-[15px] tracking-[-0.33px] leading-[22.5px] placeholder:text-[#a4a4a4]"
          />
        </label>
      </div>
      <div className="relative h-[478px] w-[889px]">
        <h2
          id="attention-points-table-heading"
          className="absolute top-0 left-0 flex h-9 w-[275px] items-center justify-center whitespace-nowrap text-center [font-family:'Poppins',Helvetica] text-xl font-bold leading-[30px] tracking-[-0.44px] text-black"
        >
          Leerling:
        </h2>
        <div className="absolute top-[3px] left-[278px] flex h-9 w-[86px] items-center justify-center whitespace-nowrap text-center [font-family:'Poppins',Helvetica] text-xl font-bold leading-[30px] tracking-[-0.44px] text-black">
          Klas:
        </div>
        <div className="absolute top-0 left-[365px] flex h-9 w-[264px] items-center justify-center whitespace-nowrap text-center [font-family:'Poppins',Helvetica] text-xl font-bold leading-[30px] tracking-[-0.44px] text-black">
          Aandachtspunt:
        </div>
        <div className="absolute top-0 left-[629px] flex h-9 w-[227px] items-center justify-center whitespace-nowrap text-center [font-family:'Poppins',Helvetica] text-xl font-bold leading-[30px] tracking-[-0.44px] text-black">
          Aanbevolen oefening:
        </div>
        <div className="absolute top-[53px] left-0 h-[425px] w-[919px] shadow-[0px_4px_4px_#00000040]">
          <div className="absolute top-0 left-0 h-[425px] w-[856px] rounded-[20px] bg-[#ededed]" />
          <div className="absolute top-0 left-[275px] h-[417px] w-0.5 bg-[#d1d1d1]" />
          <div className="absolute top-0 left-[363px] h-[417px] w-0.5 bg-[#d1d1d1]" />
          <div className="absolute top-0 left-[627px] h-[417px] w-0.5 bg-[#d1d1d1]" />
          {separatorTopPositions.map((top) => (
            <div
              key={top}
              className="absolute left-3.5 h-0.5 w-[830px] bg-[#d1d1d1]"
              style={{ top: `${top}px` }}
              aria-hidden="true"
            />
          ))}

          {filteredRows.slice(0, 6).map((row, index) => {
            const top = rowTopPositions[index];
            const studentContent = `${row.studentName} - ${row.studentNumber}`;

            return (
              <div key={row.id}>
                <div
                  className="absolute left-3.5 h-[50px] w-[50px] rounded-[25px] bg-white"
                  style={{ top: `${top}px` }}
                  aria-hidden="true"
                />
                <div
                  className="absolute left-3 flex h-[53px] w-[53px] aspect-[1]"
                  style={{ top: `${top - 1}px` }}
                  aria-hidden="true"
                >
                  <img
                    className="w-[50px] flex-1"
                    alt=""
                    src="/img/vector-182.svg"
                  />
                </div>
                {row.link ? (
                  <Link
                    to={row.link}
                    className="absolute left-[69px] flex h-[41px] w-[193px] items-center no-underline"
                    style={{ top: `${top + 12}px` }}
                    aria-label={`${row.studentName} ${row.studentNumber}`}
                  >
                    <span className="flex h-[23px] w-[191px] items-center [font-family:'Poppins',Helvetica] text-[15px] font-bold leading-[22.5px] tracking-[-0.33px] text-[#484848]">
                      {studentContent}
                    </span>
                  </Link>
                ) : (
                  <div
                    className="absolute left-[69px] flex h-[41px] w-[193px] items-center"
                    style={{ top: `${top + 5}px` }}
                  >
                    <div className="flex h-[41px] w-[191px] items-center [font-family:'Poppins',Helvetica] text-[15px] font-bold leading-[22.5px] tracking-[-0.33px] text-[#484848]">
                      {studentContent}
                    </div>
                  </div>
                )}

                <div
                  className="absolute left-[295px] flex h-[30px] w-[52px] items-center [font-family:'Poppins',Helvetica] text-xl font-bold leading-[30px] tracking-[-0.44px] text-[#484848]"
                  style={{ top: `${top + 5}px` }}
                >
                  {row.className}
                </div>
                <div
                  className="absolute left-[390px] flex h-[53px] w-[239px] items-center [font-family:'Poppins',Helvetica] text-base font-light leading-6 tracking-[-0.35px] text-black"
                  style={{ top: `${Math.max(18, top - 7)}px` }}
                >
                  {row.attentionPoint}
                </div>
                <div
                  className="absolute left-[642px] flex h-[53px] w-[209px] items-center [font-family:'Poppins',Helvetica] text-base font-light leading-6 tracking-[-0.35px] text-black"
                  style={{ top: `${Math.max(18, top - 7)}px` }}
                >
                  {row.recommendedExercise}
                </div>
              </div>
            );
          })}

          {filteredRows.length === 0 && (
            <div className="absolute top-[180px] left-0 flex w-[856px] items-center justify-center">
              <p className="[font-family:'Poppins',Helvetica] text-base font-medium leading-6 tracking-[-0.35px] text-[#484848]">
                Geen resultaten gevonden
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
