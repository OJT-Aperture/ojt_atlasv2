import { Link } from "react-router-dom";

type LineItem = {
  src: string;
  alt: string;
  className: string;
};

type StudentLabel = {
  id: string;
  className: string;
  widthClassName?: string;
  innerClassName?: string;
  firstName?: string;
  lastName?: string;
  fullName?: string;
  studentId: string;
};

const lineItems: LineItem[] = [
  {
    src: "/img/line-22.svg",
    alt: "Line",
    className: "absolute top-[936px] left-[494px] w-8 h-[3px]",
  },
  {
    src: "/img/line-46.svg",
    alt: "Line",
    className: "absolute top-[916px] left-[646px] w-[94px] h-[3px]",
  },
  {
    src: "/img/line-46.svg",
    alt: "Line",
    className: "absolute top-[781px] left-[981px] w-[94px] h-[3px]",
  },
  {
    src: "/img/line-54.svg",
    alt: "Line",
    className: "absolute top-[635px] left-[997px] w-[97px] h-[3px]",
  },
  {
    src: "/img/line-54.svg",
    alt: "Line",
    className: "absolute top-[504px] left-[997px] w-[97px] h-[3px]",
  },
  {
    src: "/img/line-30.svg",
    alt: "Line",
    className: "absolute top-[851px] left-[431px] w-[3px] h-6",
  },
  {
    src: "/img/line-43.svg",
    alt: "Line",
    className: "absolute top-[567px] left-[451px] w-[3px] h-7",
  },
  {
    src: "/img/line-49.svg",
    alt: "Line",
    className: "absolute top-[553px] left-[934px] w-[3px] h-[19px]",
  },
  {
    src: "/img/line-40.svg",
    alt: "Line",
    className: "absolute top-[678px] left-[800px] w-[3px] h-[45px]",
  },
  {
    src: "/img/line-56.svg",
    alt: "Line",
    className: "absolute top-[567px] left-[1155px] w-[3px] h-[23px]",
  },
  {
    src: "/img/line-56.svg",
    alt: "Line",
    className: "absolute top-[567px] left-[1267px] w-[3px] h-[23px]",
  },
  {
    src: "/img/line-27.svg",
    alt: "Line",
    className: "absolute top-[781px] left-[843px] w-9 h-[3px]",
  },
  {
    src: "/img/line-33.svg",
    alt: "Line",
    className: "absolute top-[808px] left-[1192px] w-8 h-[3px]",
  },
  {
    src: "/img/line-33.svg",
    alt: "Line",
    className: "absolute top-[647px] left-[1198px] w-8 h-[3px]",
  },
  {
    src: "/img/line-33.svg",
    alt: "Line",
    className: "absolute top-[936px] left-[1192px] w-8 h-[3px]",
  },
  {
    src: "/img/line-34.svg",
    alt: "Line",
    className: "absolute top-[847px] left-[1131px] w-[3px] h-8",
  },
  {
    src: "/img/line-28.svg",
    alt: "Line",
    className: "absolute top-[844px] left-[914px] w-[3px] h-[15px]",
  },
  {
    src: "/img/line-37.svg",
    alt: "Line",
    className: "absolute top-[851px] left-[583px] w-[3px] h-6",
  },
  {
    src: "/img/line-37.svg",
    alt: "Line",
    className: "absolute top-[851px] left-[1281px] w-[3px] h-6",
  },
  {
    src: "/img/line-37.svg",
    alt: "Line",
    className: "absolute top-[851px] left-[1281px] w-[3px] h-6",
  },
  {
    src: "/img/line-51.svg",
    alt: "Line",
    className: "absolute top-[710px] left-[1131px] w-[3px] h-[37px]",
  },
  {
    src: "/img/line-38.svg",
    alt: "Line",
    className: "absolute top-[676px] left-[914px] w-[3px] h-[53px]",
  },
  {
    src: "/img/line-42.svg",
    alt: "Line",
    className: "absolute top-[714px] left-[431px] w-[3px] h-[33px]",
  },
  {
    src: "/img/line-42.svg",
    alt: "Line",
    className: "absolute top-[566px] left-[565px] w-[3px] h-[33px]",
  },
  {
    src: "/img/line-45.svg",
    alt: "Line",
    className: "absolute top-[553px] left-[784px] w-[3px] h-[19px]",
  },
  {
    src: "/img/line-22.svg",
    alt: "Line",
    className: "absolute top-[654px] left-[494px] w-8 h-[3px]",
  },
  {
    src: "/img/line-44.svg",
    alt: "Line",
    className: "absolute top-[654px] left-[630px] w-[97px] h-[3px]",
  },
  {
    src: "/img/line-22.svg",
    alt: "Line",
    className: "absolute top-[506px] left-[494px] w-8 h-[3px]",
  },
  {
    src: "/img/line-44.svg",
    alt: "Line",
    className: "absolute top-[506px] left-[630px] w-[97px] h-[3px]",
  },
  {
    src: "/img/line-23.svg",
    alt: "Line",
    className: "absolute top-[506px] left-[843px] w-[39px] h-[3px]",
  },
  {
    src: "/img/line-24.svg",
    alt: "Line",
    className: "absolute top-[506px] left-[1198px] w-8 h-[3px]",
  },
  {
    src: "/img/line-25.svg",
    alt: "Line",
    className: "absolute top-[814px] left-[494px] w-8 h-[3px]",
  },
  {
    src: "/img/line-48.svg",
    alt: "Line",
    className: "absolute top-[635px] left-[847px] w-[30px] h-[3px]",
  },
  {
    src: "/img/line-41.svg",
    alt: "Line",
    className: "absolute top-[715px] left-[583px] w-[3px] h-8",
  },
  {
    src: "/img/line-52.svg",
    alt: "Line",
    className: "absolute top-[710px] left-[1281px] w-[3px] h-[37px]",
  },
  {
    src: "/img/line-36.svg",
    alt: "Line",
    className: "absolute top-[781px] left-[642px] w-[99px] h-[3px]",
  },
  {
    src: "/img/line-53.svg",
    alt: "Line",
    className: "absolute top-[916px] left-[981px] w-[91px] h-[3px]",
  },
  {
    src: "/img/line-25.svg",
    alt: "Line",
    className: "absolute top-[916px] left-[845px] w-8 h-[3px]",
  },
  {
    src: "/img/line-26.svg",
    alt: "Line",
    className: "absolute top-[843px] left-[802px] w-[3px] h-4",
  },
];

const studentLabels: StudentLabel[] = [
  {
    id: "jasper-de-bos",
    className: "absolute top-[618px] left-[741px] w-[92px] h-10 flex",
    innerClassName:
      "flex-1 w-[92px] [font-family:'Poppins',Helvetica] font-bold text-white text-[13px] text-center tracking-[-0.29px] leading-[normal]",
    fullName: "Jasper de bos",
    studentId: "123456",
  },
  {
    id: "noor-bakker-1",
    className: "absolute top-[737px] left-[771px] w-16 h-[91px]",
    widthClassName:
      "absolute w-[71.88%] h-[65.93%] top-[16.48%] left-[14.06%] [font-family:'Poppins',Helvetica] font-bold text-white text-[13px] text-center tracking-[-0.29px] leading-[normal]",
    firstName: "Noor",
    lastName: "Bakker",
    studentId: "123456",
  },
  {
    id: "noor-bakker-2",
    className: "absolute top-[463px] left-[422px] w-16 h-[91px]",
    widthClassName:
      "absolute w-[71.88%] h-[65.93%] top-[16.48%] left-[14.06%] [font-family:'Poppins',Helvetica] font-bold text-white text-[13px] text-center tracking-[-0.29px] leading-[normal]",
    firstName: "Noor",
    lastName: "Bakker",
    studentId: "123456",
  },
  {
    id: "noor-bakker-3",
    className: "absolute top-[463px] left-[534px] w-16 h-[91px]",
    widthClassName:
      "absolute w-[71.88%] h-[65.93%] top-[16.48%] left-[14.06%] [font-family:'Poppins',Helvetica] font-bold text-white text-[13px] text-center tracking-[-0.29px] leading-[normal]",
    firstName: "Noor",
    lastName: "Bakker",
    studentId: "123456",
  },
  {
    id: "noor-bakker-4",
    className: "absolute top-[612px] left-[534px] w-16 h-[91px]",
    widthClassName:
      "absolute w-[71.88%] h-[65.93%] top-[16.48%] left-[14.06%] [font-family:'Poppins',Helvetica] font-bold text-white text-[13px] text-center tracking-[-0.29px] leading-[normal]",
    firstName: "Noor",
    lastName: "Bakker",
    studentId: "123456",
  },
  {
    id: "noor-bakker-5",
    className: "absolute top-[604px] left-[1126px] w-16 h-[91px]",
    widthClassName:
      "absolute w-[71.88%] h-[65.93%] top-[16.48%] left-[14.06%] [font-family:'Poppins',Helvetica] font-bold text-white text-[13px] text-center tracking-[-0.29px] leading-[normal]",
    firstName: "Noor",
    lastName: "Bakker",
    studentId: "123456",
  },
  {
    id: "noor-bakker-6",
    className: "absolute top-[461px] left-[1126px] w-16 h-[91px]",
    widthClassName:
      "absolute w-[71.88%] h-[65.93%] top-[16.48%] left-[14.06%] [font-family:'Poppins',Helvetica] font-bold text-white text-[13px] text-center tracking-[-0.29px] leading-[normal]",
    firstName: "Noor",
    lastName: "Bakker",
    studentId: "123456",
  },
  {
    id: "noor-bakker-7",
    className: "absolute top-[463px] left-[1238px] w-16 h-[91px]",
    widthClassName:
      "absolute w-[71.88%] h-[65.93%] top-[16.48%] left-[14.06%] [font-family:'Poppins',Helvetica] font-bold text-white text-[13px] text-center tracking-[-0.29px] leading-[normal]",
    firstName: "Noor",
    lastName: "Bakker",
    studentId: "123456",
  },
  {
    id: "noor-bakker-8",
    className: "absolute top-[604px] left-[1238px] w-16 h-[91px]",
    widthClassName:
      "absolute w-[71.88%] h-[65.93%] top-[16.48%] left-[14.06%] [font-family:'Poppins',Helvetica] font-bold text-white text-[13px] text-center tracking-[-0.29px] leading-[normal]",
    firstName: "Noor",
    lastName: "Bakker",
    studentId: "123456",
  },
  {
    id: "noor-bakker-9",
    className: "absolute top-[612px] left-[422px] w-16 h-[91px]",
    widthClassName:
      "absolute w-[71.88%] h-[65.93%] top-[16.48%] left-[14.06%] [font-family:'Poppins',Helvetica] font-bold text-white text-[13px] text-center tracking-[-0.29px] leading-[normal]",
    firstName: "Noor",
    lastName: "Bakker",
    studentId: "123456",
  },
  {
    id: "emma-van-dijk",
    className: "absolute top-[873px] left-[773px] w-16 h-[91px]",
    widthClassName:
      "absolute w-[81.25%] h-[65.93%] top-[16.48%] left-[9.38%] [font-family:'Poppins',Helvetica] font-bold text-white text-[13px] text-center tracking-[-0.29px] leading-[normal]",
    firstName: "Emma",
    lastName: "van Dijk",
    studentId: "123456",
  },
  {
    id: "finn-mulder",
    className:
      "absolute w-[3.19%] h-[4.56%] top-[67.55%] left-[62.08%] [font-family:'Poppins',Helvetica] font-bold text-white text-[13px] text-center tracking-[-0.29px] leading-[normal]",
    firstName: "Finn",
    lastName: "Mulder",
    studentId: "123456",
  },
  {
    id: "lucas-smit",
    className: "absolute top-[738px] left-[885px] w-16 h-[91px]",
    widthClassName:
      "absolute w-[70.31%] h-[65.93%] top-[16.48%] left-[15.62%] [font-family:'Poppins',Helvetica] font-bold text-white text-[13px] text-center tracking-[-0.29px] leading-[normal]",
    firstName: "Lucas",
    lastName: "Smit",
    studentId: "123456",
  },
  {
    id: "daan-vermeulen",
    className: "absolute top-[618px] left-[893px] w-[92px] h-10 flex",
    innerClassName:
      "ml-[-9.78%] w-[110px] mr-[-9.78%] flex-1 [font-family:'Poppins',Helvetica] font-bold text-white text-[13px] text-center tracking-[-0.29px] leading-[normal]",
    fullName: "Daan Vermeulen",
    studentId: "123456",
  },
  {
    id: "sara-meijer",
    className: "absolute top-[791px] left-[1088px] w-[92px] h-10 flex",
    innerClassName:
      "ml-[10.87%] w-[73px] mr-[9.78%] flex-1 [font-family:'Poppins',Helvetica] font-bold text-white text-[13px] text-center tracking-[-0.29px] leading-[normal]",
    fullName: "Sara Meijer",
    studentId: "123456",
  },
  {
    id: "julia-dekker-1",
    className: "absolute top-[791px] left-[540px] w-[92px] h-10 flex",
    innerClassName:
      "ml-[6.52%] w-20 mr-[6.52%] flex-1 [font-family:'Poppins',Helvetica] font-bold text-white text-[13px] text-center tracking-[-0.29px] leading-[normal]",
    fullName: "Julia Dekker",
    studentId: "123456",
  },
  {
    id: "julia-dekker-2",
    className: "absolute top-[791px] left-[388px] w-[92px] h-10 flex",
    innerClassName:
      "ml-[6.52%] w-20 mr-[6.52%] flex-1 [font-family:'Poppins',Helvetica] font-bold text-white text-[13px] text-center tracking-[-0.29px] leading-[normal]",
    fullName: "Julia Dekker",
    studentId: "123456",
  },
  {
    id: "julia-dekker-3",
    className: "absolute top-[919px] left-[388px] w-[92px] h-10 flex",
    innerClassName:
      "ml-[6.52%] w-20 mr-[6.52%] flex-1 [font-family:'Poppins',Helvetica] font-bold text-white text-[13px] text-center tracking-[-0.29px] leading-[normal]",
    fullName: "Julia Dekker",
    studentId: "123456",
  },
  {
    id: "julia-dekker-4",
    className: "absolute top-[919px] left-[540px] w-[92px] h-10 flex",
    innerClassName:
      "ml-[6.52%] w-20 mr-[6.52%] flex-1 [font-family:'Poppins',Helvetica] font-bold text-white text-[13px] text-center tracking-[-0.29px] leading-[normal]",
    fullName: "Julia Dekker",
    studentId: "123456",
  },
  {
    id: "lotte-de-bos",
    className: "absolute top-[919px] left-[1086px] w-[92px] h-10 flex",
    innerClassName:
      "ml-[8.7%] w-[77px] mr-[7.61%] flex-1 [font-family:'Poppins',Helvetica] font-bold text-white text-[13px] text-center tracking-[-0.29px] leading-[normal]",
    fullName: "Lotte de Bos",
    studentId: "123456",
  },
  {
    id: "ruben-kuipers",
    className:
      "w-[6.53%] top-[69.83%] left-[85.83%] absolute h-[3.04%] [font-family:'Poppins',Helvetica] font-bold text-white text-[13px] text-center tracking-[-0.29px] leading-[normal]",
    fullName: "Ruben Kuipers",
    studentId: "123456",
  },
  {
    id: "thomas-visser",
    className:
      "w-[6.67%] top-[60.11%] left-[85.76%] absolute h-[3.04%] [font-family:'Poppins',Helvetica] font-bold text-white text-[13px] text-center tracking-[-0.29px] leading-[normal]",
    fullName: "Thomas Visser",
    studentId: "123456",
  },
  {
    id: "sophie-jansen",
    className: "absolute top-[489px] left-[894px] w-[92px] h-10 flex",
    innerClassName:
      "ml-[-1.09%] w-[95px] mr-[-2.17%] flex-1 [font-family:'Poppins',Helvetica] font-bold text-white text-[13px] text-center tracking-[-0.29px] leading-[normal]",
    fullName: "Sophie Jansen",
    studentId: "123456",
  },
  {
    id: "milan-de-vries",
    className: "absolute top-[489px] left-[744px] w-[92px] h-10 flex",
    innerClassName:
      "ml-[1.09%] w-[90px] mr-[1.09%] flex-1 [font-family:'Poppins',Helvetica] font-bold text-white text-[13px] text-center tracking-[-0.29px] leading-[normal]",
    fullName: "Milan de Vries",
    studentId: "123456",
  },
];

const renderStudentText = (student: StudentLabel) => {
  if (student.fullName) {
    return (
      <>
        {student.fullName}
        <br />
        {student.studentId}
      </>
    );
  }

  return (
    <>
      {student.firstName}
      <br />
      {student.lastName}
      <br />
      {student.studentId}
    </>
  );
};

export const UltimateClassroom = (): JSX.Element => {
  return (
    <main
      className="relative w-[1440px] h-[1316px] bg-white overflow-hidden"
      data-model-id="650:1679"
    >
      <header className="flex w-[1084px] h-[100px] items-center justify-center gap-10 absolute top-0 left-[316px]">
        <div className="flex w-[181px] items-center justify-center gap-[15px] relative">
          <div className="relative w-[26px] h-[26px] ml-[-1.50px] aspect-[1]">
            <img
              className="absolute w-[95.00%] h-[89.91%] top-[10.09%] left-[5.00%]"
              alt="School icon"
              src="/img/vector-173.svg"
            />
          </div>
          <div className="relative flex items-center justify-center w-[143px] h-[19px] mr-[-1.50px] [font-family:'Poppins',Helvetica] font-medium text-black text-xl text-center tracking-[-0.44px] leading-[30px] whitespace-nowrap">
            Harenslyceum
          </div>
        </div>
        <form
          className="relative w-[534px] h-[49px] shadow-[0px_4px_4px_#00000033]"
          role="search"
          aria-label="Zoeken"
        >
          <label htmlFor="ultimate-classroom-search" className="sr-only">
            Zoeken naar klas, leerling, module
          </label>
          <div className="absolute top-0 left-0 w-[532px] h-[49px] bg-[#ededed] rounded-[20px]" />
          <input
            id="ultimate-classroom-search"
            type="search"
            placeholder="Zoeken naar klas, leerling, module..."
            className="absolute top-0 left-0 w-[532px] h-[49px] pl-[17px] pr-[58px] [font-family:'Poppins',Helvetica] font-normal text-[#00000066] text-base tracking-[-0.35px] leading-6 placeholder:text-[#00000066]"
          />
          <button
            type="submit"
            aria-label="Zoeken"
            className="absolute top-2 left-[487px] w-[34px] h-[34px] flex aspect-[1] items-center justify-center cursor-pointer"
          >
            <img
              className="flex-1 w-[24.8px]"
              alt="Search"
              src="/img/vector-174.svg"
            />
          </button>
        </form>
        <nav aria-label="Topnavigatie" className="relative w-[88px] h-[84px]" />
        <img
          className="relative w-[66px] h-[66px] object-cover"
          alt="User profile"
          src="/img/ellipse-1-5.svg"
        />
      </header>
      <h1 className="absolute top-[147px] left-[589px] w-[532px] h-[60px] flex items-center justify-center [font-family:'Poppins',Helvetica] font-bold text-black text-[40px] text-center tracking-[-0.88px] leading-[60px]">
        Ultimate Classroom 1A
      </h1>
      <Link
        className="absolute top-[174px] left-[317px] w-[73px] h-8 flex items-center [font-family:'Poppins',Helvetica] font-bold text-black text-xl tracking-[-0.44px] leading-[30px] whitespace-nowrap"
        to="/u40u45klassenu41-informatie-scherm-u61-resulaten"
      >
        &lt; Terug
      </Link>
      <div className="absolute top-[205px] left-[302px] w-[1114px] h-0.5 bg-[#686868]" />
      <div className="absolute top-[205px] left-[302px] w-[1114px] h-0.5 bg-[#686868]" />
      <section
        className="absolute top-[382px] left-[297px] w-[1122px] h-[810px] rounded-[15px] border-4 border-solid border-[#4cb04f]"
        aria-label="Klaslokaalindeling"
      />
      {lineItems.map((line, index) => (
        <img
          key={`${line.src}-${index}`}
          className={line.className}
          alt={line.alt}
          src={line.src}
        />
      ))}

      <div className="absolute top-[447px] left-[374px] w-[970px] h-[712px]">
        <img
          className="h-[532px] left-[698px] absolute w-[272px] top-0"
          alt="Tafelgroep"
          src="/img/tafelgroep-3.png"
        />
        <div className="h-[712px] left-[353px] absolute w-[272px] top-0">
          <div className="absolute top-[276px] left-[13px] w-[241px] h-[436px]">
            <div className="top-[156px] left-[117px] rotate-[-90.00deg] absolute w-[120px] h-20 bg-[#74a2d1] rounded-[15px] border-[3px] border-solid" />
            <div className="top-[169px] left-[217px] w-6 rounded-[0px_5px_5px_0px] absolute h-[53px] bg-[#d9d9d9] border border-solid border-black" />
            <div className="top-[156px] left-[5px] rotate-[-90.00deg] absolute w-[120px] h-20 bg-[#74a2d1] rounded-[15px] border-[3px] border-solid" />
            <div className="top-[169px] left-px w-6 rounded-[5px_0px_0px_5px] absolute h-[53px] bg-[#d9d9d9] border border-solid border-black" />
            <div className="top-[398px] left-[108px] w-6 rounded-[5px_0px_0px_5px] -rotate-90 absolute h-[53px] bg-[#d9d9d9] border border-solid border-black" />
            <div className="top-[21px] left-[117px] -rotate-90 absolute w-[120px] h-20 bg-[#74a2d1] rounded-[15px] border-[3px] border-solid" />
            <div className="top-[34px] left-[217px] w-6 rounded-[0px_5px_5px_0px] absolute h-[53px] bg-[#d9d9d9] border border-solid border-black" />
            <div className="top-5 left-[3px] -rotate-90 absolute w-[120px] h-20 bg-[#74a2d1] rounded-[15px] border-[3px] border-solid" />
            <div className="top-[33px] left-0 w-6 rounded-[5px_0px_0px_5px] absolute h-[53px] bg-[#d9d9d9] border border-solid border-black" />
          </div>
          <div className="absolute top-0 left-0 w-[272px] h-[231px]">
            <div className="top-[151px] left-[150px] absolute w-[120px] h-20 bg-[#74a2d1] rounded-[15px] border-[3px] border-solid" />
            <div className="top-28 left-[196px] w-[26px] rounded-[0px_5px_5px_0px] -rotate-90 absolute h-[53px] bg-[#d9d9d9] border border-solid border-black" />
            <div className="top-28 left-[46px] w-[26px] rounded-[0px_5px_5px_0px] -rotate-90 absolute h-[53px] bg-[#d9d9d9] border border-solid border-black" />
            <div className="top-[26px] left-[152px] absolute w-[120px] h-20 bg-[#74a2d1] rounded-[15px] border-[3px] border-solid" />
            <div className="top-[-13px] left-[196px] w-[26px] rounded-[0px_5px_5px_0px] -rotate-90 absolute h-[53px] bg-[#d9d9d9] border border-solid border-black" />
            <div className="top-[26px] left-0 absolute w-[120px] h-20 bg-[#74a2d1] rounded-[15px] border-[3px] border-solid" />
            <div className="top-[-13px] left-[49px] w-[26px] rounded-[0px_5px_5px_0px] -rotate-90 absolute h-[53px] bg-[#d9d9d9] border border-solid border-black" />
          </div>
          <div className="absolute top-[151px] left-0 w-[120px] h-20 bg-[#74a2d1] rounded-[15px]" />
        </div>
        <img
          className="h-[532px] left-0 absolute w-[272px] top-0"
          alt="Tafelgroep"
          src="/img/tafelgroep-1.png"
        />
        <div className="absolute top-[620px] left-[351px] w-[272px] h-20 bg-[#74a2d1] rounded-[15px]" />
      </div>
      <div className="absolute top-[1101px] left-[340px] w-[262px] h-6 bg-[#ffffffa1] rounded-[39px]" />
      <div className="absolute top-[1107px] left-[325px] w-[274px] h-3 flex items-center justify-center [font-family:'Poppins',Helvetica] font-bold text-black text-xl text-center tracking-[-0.44px] leading-[30px] whitespace-nowrap">
        Klassenscore: 83%
      </div>
      {studentLabels.map((student) => {
        if (student.innerClassName) {
          return (
            <div key={student.id} className={student.className}>
              <div className={student.innerClassName}>
                {renderStudentText(student)}
              </div>
            </div>
          );
        }

        if (student.widthClassName) {
          return (
            <div key={student.id} className={student.className}>
              <div className={student.widthClassName}>
                {renderStudentText(student)}
              </div>
            </div>
          );
        }

        return (
          <div key={student.id} className={student.className}>
            {renderStudentText(student)}
          </div>
        );
      })}

      <footer className="absolute top-[1256px] left-0 w-[1440px] h-[62px] flex bg-[#74a2d1] rounded-sm overflow-hidden shadow-[0px_-6px_13px_#00000040]">
        <div className="mt-1.5 w-[161px] ml-[766px] flex gap-[13px]">
          <div className="flex items-center mt-4 w-[75px] h-5 [font-family:'Poppins',Helvetica] font-bold text-black text-[13px] tracking-[-0.29px] leading-[19.5px] whitespace-nowrap">
            Powered by
          </div>
          <img
            className="w-[71px] h-[51px] aspect-[1.4]"
            alt="Logo design labs"
            src="/img/logo-design-labs7-1-8.png"
          />
        </div>
      </footer>
      <div className="inline-flex items-center top-[316px] left-[655px] gap-10 absolute">
        <button
          type="button"
          className="relative w-[187px] h-[46px] bg-[#aaaaaa] rounded-[20px]"
          aria-pressed="false"
        >
          <div className="absolute w-full h-[52.17%] top-[21.74%] left-0 flex items-center justify-center [font-family:'Poppins',Helvetica] font-bold text-white text-[15px] text-center tracking-[-0.33px] leading-[22.5px] whitespace-nowrap">
            Informatie
          </div>
        </button>
        <button
          type="button"
          className="relative w-[187px] h-[46px] bg-[#aaaaaa] rounded-[20px]"
          aria-pressed="false"
        >
          <div className="absolute w-full h-[52.17%] top-[21.74%] left-0 flex items-center justify-center [font-family:'Poppins',Helvetica] font-bold text-white text-[15px] text-center tracking-[-0.33px] leading-[22.5px] whitespace-nowrap">
            Alternatieve opstelling
          </div>
        </button>
      </div>
      <div className="absolute top-[1089px] left-[809px] w-[103px] [font-family:'Poppins',Helvetica] font-bold text-white text-2xl text-center tracking-[-0.53px] leading-[normal]">
        Docent
      </div>
      <div className="absolute top-[31px] left-[1141px] w-[154px] h-28 flex">
        <div className="flex-1 w-[156px] relative">
          <div className="absolute w-[98.72%] h-full top-0 left-0 flex items-center justify-center [font-family:'Poppins',Helvetica] font-normal text-black text-[15px] text-center tracking-[-0.33px] leading-[22.5px]">
            Modules
          </div>
          <div className="absolute w-[9.24%] top-[13px] left-[19.05%] h-3.5 aspect-[1] bg-[url(/img/vector-186.svg)] bg-[100%_100%]" />
        </div>
      </div>
      <aside className="fixed top-0 left-0 w-[276px] h-[1024px] bg-[#e0ffdb] rounded-[0px_20px_20px_0px] shadow-[0px_4px_4px_#00000080]">
        <div className="flex flex-col w-[216px] h-[479px] items-start top-[22px] left-[30px] gap-10 absolute">
          <div className="relative w-[216px] h-[284px]">
            <img
              className="absolute top-0 left-4 w-[184px] h-[182px] aspect-[1.01] object-cover"
              alt="OJT logo"
              src="/img/ojt-logo-2-8.png"
            />
            <div className="absolute top-[222px] left-0 w-[218px] h-[62px] flex flex-col gap-4">
              <div className="flex items-center justify-center w-[216px] h-11 [font-family:'Poppins',Helvetica] font-bold text-black text-[32px] text-center tracking-[-0.70px] leading-[28.8px]">
                Kracht Atlas dashboard
              </div>
              <img
                className="-ml-px w-[218px] h-[3px]"
                alt="Line"
                src="/img/line-1-7.svg"
              />
            </div>
          </div>
          <div className="flex flex-col items-start gap-20 relative self-stretch w-full flex-[0_0_auto] mb-[-197.00px]">
            <nav
              className="flex flex-col items-start gap-5 relative self-stretch w-full flex-[0_0_auto]"
              aria-label="Main menu"
            >
              <div className="relative flex items-center self-stretch h-4 mt-[-1.00px] [font-family:'Poppins',Helvetica] font-bold text-black text-xl tracking-[-0.44px] leading-[30px] whitespace-nowrap">
                Main menu
              </div>
              <div className="flex flex-col w-[167px] items-start gap-4 relative flex-[0_0_auto]">
                <div className="flex items-center gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
                  <div className="relative w-6 h-6 aspect-[1]">
                    <img
                      className="absolute w-[83.33%] h-[85.42%] top-[14.58%] left-[16.67%]"
                      alt="Main menu icon"
                      src="/img/vector-187.svg"
                    />
                  </div>
                  <div className="relative flex items-center w-[137px] h-4 mr-[-4.00px] [font-family:'Poppins',Helvetica] font-normal text-black text-xl tracking-[-0.44px] leading-[30px] whitespace-nowrap">
                    Main menu
                  </div>
                </div>
                <Link
                  className="flex items-center gap-2.5 relative self-stretch w-full flex-[0_0_auto]"
                  to="/u40u45klassenu41-informatie-scherm-u61-resulaten"
                >
                  <div className="relative w-6 h-6 aspect-[1]">
                    <div className="relative w-[78.45%] h-[90.18%] top-[9.05%] left-[12.50%] flex">
                      <img
                        className="flex-1 w-[18.83px]"
                        alt="Klassen icon"
                        src="/img/vector-188.svg"
                      />
                    </div>
                  </div>
                  <div className="relative flex items-center w-[137px] h-4 mr-[-4.00px] [font-family:'Poppins',Helvetica] font-normal text-black text-xl tracking-[-0.44px] leading-[30px] whitespace-nowrap">
                    Klassen
                  </div>
                </Link>
                <Link
                  className="flex items-center gap-2.5 relative self-stretch w-full flex-[0_0_auto]"
                  to="/module-scherm"
                >
                  <div className="relative w-6 h-6 aspect-[1]">
                    <img
                      className="absolute w-[94.17%] h-[94.48%] top-[5.52%] left-[5.83%]"
                      alt="Modules icon"
                      src="/img/vector-189.svg"
                    />
                  </div>
                  <div className="relative flex items-center w-[137px] h-4 mr-[-4.00px] [font-family:'Poppins',Helvetica] font-normal text-black text-xl tracking-[-0.44px] leading-[30px] whitespace-nowrap">
                    Modules
                  </div>
                </Link>
                <Link
                  className="flex items-center gap-2.5 relative self-stretch w-full flex-[0_0_auto]"
                  to="/leerling-scherm"
                >
                  <div className="relative w-6 h-6 aspect-[1]">
                    <img
                      className="absolute w-[95.83%] h-[79.17%] top-[20.83%] left-[4.17%]"
                      alt="Leerlingen icon"
                      src="/img/vector-190.svg"
                    />
                  </div>
                  <div className="relative flex items-center w-[137px] h-4 mr-[-4.00px] [font-family:'Poppins',Helvetica] font-normal text-black text-xl tracking-[-0.44px] leading-[30px] whitespace-nowrap">
                    Leerlingen
                  </div>
                </Link>
              </div>
            </nav>
            <nav
              className="flex flex-col items-start gap-5 relative self-stretch w-full flex-[0_0_auto]"
              aria-label="Instellingen"
            >
              <div className="relative flex items-center self-stretch h-4 mt-[-1.00px] [font-family:'Poppins',Helvetica] font-bold text-black text-xl tracking-[-0.44px] leading-[30px] whitespace-nowrap">
                Instellingen
              </div>
              <div className="flex flex-col w-44 items-start gap-4 relative flex-[0_0_auto]">
                <div className="flex items-center gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
                  <img
                    className="relative w-5 h-5"
                    alt="Instellingen icon"
                    src="/img/vector-191.svg"
                  />
                  <div className="relative flex items-center w-[137px] h-4 [font-family:'Poppins',Helvetica] font-normal text-black text-xl tracking-[-0.44px] leading-[30px] whitespace-nowrap">
                    Instellingen
                  </div>
                </div>
                <div className="flex items-center gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
                  <div className="relative w-5 h-5 aspect-[1]">
                    <img
                      className="absolute w-[53.47%] h-[94.44%] top-[5.56%] left-[46.53%]"
                      alt="Help icon part one"
                      src="/img/vector-192.svg"
                    />
                    <img
                      className="absolute w-[70.46%] h-[66.91%] top-[33.09%] left-[29.54%]"
                      alt="Help icon part two"
                      src="/img/vector-193.svg"
                    />
                  </div>
                  <div className="relative flex items-center w-[137px] h-4 [font-family:'Poppins',Helvetica] font-normal text-black text-xl tracking-[-0.44px] leading-[30px] whitespace-nowrap">
                    Help
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
        <div className="absolute w-[9.83%] h-[2.32%] top-[49.78%] left-[78.10%] rotate-[-90.00deg]">
          <img
            className="absolute w-[63.87%] h-[73.02%] top-[26.98%] left-[36.13%] rotate-[90.00deg]"
            alt="Collapse icon part one"
            src="/img/vector-194.svg"
          />
          <img
            className="absolute w-[79.35%] h-[128.75%] top-[-28.75%] left-[20.65%] rotate-[90.00deg]"
            alt="Collapse icon part two"
            src="/img/vector-195.svg"
          />
        </div>
      </aside>
    </main>
  );
};
