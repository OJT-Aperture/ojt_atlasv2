import { Link } from "react-router-dom";
import { Footer } from "../../Components/Footer";
import { Linkernavigatie } from "../../Components/Linkernavigatie";
import { PageHeaderSection } from "./sections/PageHeaderSection/PageHeaderSection";
import { Topbar } from "../../Components/Topbar";
import { StudentListSection } from "./sections/StudentListSection/StudentListSection";

const profileLinkPositions = [
  341, 390, 439, 488, 537, 586, 635, 684, 733, 782, 831, 880, 929,
];

export const LeerlingScherm = (): JSX.Element => {
  return (
    <main
      className="relative w-[1440px] h-[1143px] bg-white"
      data-model-id="491:14"
      aria-label="Leerlingen overzicht"
    >
      <Topbar />
      <Linkernavigatie />
      <header className="absolute top-[130px] left-[281px] w-[1159px]">
        <h1 className="flex h-[73px] items-center justify-center [font-family:'Poppins',Helvetica] text-[40px] font-bold leading-[60px] tracking-[-0.88px] text-black">
          Leerlingen
        </h1>
        <Link
          to="/"
          className="absolute left-[35px] top-[43px] flex h-8 w-[73px] items-center [font-family:'Poppins',Helvetica] text-xl font-bold leading-[30px] tracking-[-0.44px] text-black whitespace-nowrap"
          aria-label="Terug"
        >
          &lt; Terug
        </Link>
      </header>
      <div
        className="absolute top-[205px] left-[302px] h-0.5 w-[1114px] bg-[#686868]"
        aria-hidden="true"
      />
      <section
        className="absolute left-[386px] top-[244px] w-[982px]"
        aria-labelledby="leerlingen-aantal"
      >
        <h2
          id="leerlingen-aantal"
          className="flex h-[54px] w-[532px] items-center [font-family:'Poppins',Helvetica] text-2xl font-bold leading-9 tracking-[-0.53px] text-black"
        >
          Aantal leerlingen: 26
        </h2>
        <StudentListSection />
        <nav aria-label="Leerling profielen">
          {profileLinkPositions.map((_top, index) => (
            <Link
              key={`profile-link-${index}`}
              className="absolute left-[800px] flex h-[74px] w-[182px]"
              style={{ top: `${97 + index * 49}px` }}
              to="/leerling-scherm2"
              aria-label={`Profiel bekijken van leerling ${index + 1}`}
            >
              <span className="flex w-[182px] flex-1 items-center [font-family:'Poppins',Helvetica] text-sm font-normal leading-[21px] tracking-[-0.31px] text-white">
                Profiel bekijken &gt;
              </span>
            </Link>
          ))}
        </nav>
      </section>
      <div className="absolute left-[1141px] top-[31px] flex h-28 w-[154px]">
        <div className="relative w-[156px] flex-1">
          <div className="absolute left-0 top-0 flex h-full w-[98.72%] items-center justify-center [font-family:'Poppins',Helvetica] text-center text-[15px] font-normal leading-[22.5px] tracking-[-0.33px] text-black">
            Modules
          </div>
          <div className="absolute left-[19.05%] top-[13px] h-3.5 w-[9.24%] aspect-[1] bg-[url(/img/vector-186.svg)] bg-[100%_100%]" />
        </div>
      </div>
      <Footer />
    </main>
  );
};

