import { memo, useMemo } from "react";

type ClassCardData = {
  id: string;
  title: string;
  students: string;
  image: string;
};

type ClassCardProps = {
  title: string;
  students: string;
  image: string;
};

const ClassCard = memo(function ClassCard({
  title,
  students,
  image,
}: ClassCardProps): JSX.Element {
  return (
    <article
      className="w-[253px] overflow-hidden rounded-[20px] bg-[#f6f7f8] shadow-[0px_2px_4px_rgba(0,0,0,0.25)]"
      aria-label={`${title} - ${students}`}
    >
      <div
        className="h-[69px] w-full bg-[#74a2d1a6] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${image})` }}
        role="img"
        aria-label={title}
      />
      <div className="flex min-h-[56px] flex-col items-center justify-center px-4 py-[8px] text-center">
        <h2 className="font-['Poppins-Bold',Helvetica] text-xl font-bold leading-[30px] tracking-[-0.44px] text-black">
          {title}
        </h2>
        <p className="font-['Poppins-Regular',Helvetica] text-base font-normal leading-6 tracking-[-0.35px] text-black">
          {students}
        </p>
      </div>
    </article>
  );
});

export const Frame = (): JSX.Element => {
  const classes = useMemo<ClassCardData[]>(
    () => [
      {
        id: "klas-1a",
        title: "Klas 1A",
        students: "24 leerlingen",
        image: "/default.png",
      },
      {
        id: "klas-1b",
        title: "Klas 1B",
        students: "21 leerlingen",
        image: "/image.png",
      },
      {
        id: "klas-2a",
        title: "Klas 2A",
        students: "28 leerlingen",
        image: "/default-2.png",
      },
    ],
    [],
  );

  return (
    <section
      className="relative flex w-full max-w-[1003px] flex-wrap items-start justify-center gap-x-[44px] gap-y-6"
      aria-label="Klassenoverzicht"
    >
      {classes.map((classItem) => (
        <ClassCard
          key={classItem.id}
          title={classItem.title}
          students={classItem.students}
          image={classItem.image}
        />
      ))}
    </section>
  );
};
