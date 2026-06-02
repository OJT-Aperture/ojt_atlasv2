import { Link } from "react-router-dom";
import { Footer } from "../../Components/Footer";
import { Linkernavigatie } from "../../Components/Linkernavigatie";
import { Topbar } from "../../Components/Topbar";

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
      <Topbar />
      <Linkernavigatie />
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

      <Footer />
    </main>
  );
};
