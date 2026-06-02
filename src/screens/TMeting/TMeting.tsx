import { DashboardActionTilesSection } from "./sections/DashboardActionTilesSection";
import { LearnerCarouselSection } from "./sections/LearnerCarouselSection";
import { MeetingStatusSection } from "./sections/MeetingStatusSection";
import { Footer } from "../../Components/Footer";
import { Linkernavigatie } from "../../Components/Linkernavigatie";
import { Topbar } from "../../Components/Topbar";

const agendaItems = [
  {
    title: "Vandaag 18 mei:",
    todoLabel: "To do:",
    lines: ["Module D", "Ademhalen", "Yoga"],
  },
  {
    title: "Morgen 19 mei:",
    todoLabel: "To do:",
    lines: ["Module D", "Ademhalen", "Yoga"],
  },
  {
    title: "Donderdag 21 mei:",
    todoLabel: "To do:",
    lines: ["Module D", "Ademhalen", "Yoga"],
  },
];

export const TMeting = (): JSX.Element => {
  return (
    <main
      className="bg-[#f6f7f8] overflow-hidden w-full min-w-[1440px] h-[1562px] relative"
      data-model-id="1673:2054"
    >
      <Topbar />
      <Linkernavigatie />
      <header className="absolute top-[118px] left-[281px] w-[1159px]" aria-label="T-meting header">
        <a
          href="#"
          className="absolute top-0 left-0 w-[73px] h-8 flex items-center [font-family:'Poppins',Helvetica] font-bold text-black text-xl tracking-[-0.44px] leading-[30px] whitespace-nowrap"
          aria-label="Terug"
        >
          &lt; Terug
        </a>
        <h1 className="absolute top-[20px] left-0 w-full h-[73px] flex items-center justify-center [font-family:'Poppins',Helvetica] font-bold text-black text-[40px] text-center tracking-[-0.88px] leading-[60px]">
          T-Meting: klas 1B
        </h1>
        <div className="absolute top-[93px] left-0 w-[1114px] h-0.5 bg-[#686868]" aria-hidden="true" />
      </header>
      <section
        aria-label="T-meting status"
        className="absolute top-[260px] left-[247px] w-[873px] h-[451px]"
      >
        <div
          className="absolute inset-0 bg-center bg-no-repeat bg-contain rounded-md"
          style={{ backgroundImage: "url(https://c.animaapp.com/tNip9Jvr/img/rectangle-269.png)" }}
          aria-hidden="true"
        />
        <MeetingStatusSection />
        <div className="absolute top-[337px] left-[40px] w-[467px] h-[30px] flex items-center [font-family:'Poppins',Helvetica] font-bold text-black text-xl tracking-[-0.44px] leading-[30px]">
          Notificaties
        </div>
        <div className="absolute top-[371px] left-[33px] flex items-start">
          <div
            className="ml-[3px] w-[474px] [font-family:'Poppins',Helvetica] font-normal text-black text-base tracking-[-0.35px] leading-[normal] flex items-center"
            role="note"
            aria-label="Rond module D af om de volgende T-Meting te kunnen doen"
          >
            <img
              src="https://c.animaapp.com/tNip9Jvr/img/vector-3.svg"
              alt=""
              aria-hidden="true"
              className="w-5 h-5 mr-2 flex-shrink-0"
            />
            <span>Rond module D af om de volgende T-Meting te kunnen doen</span>
          </div>
        </div>
        <button
          type="button"
          className="absolute top-[362px] left-[674px] w-[170px] h-[42px] bg-[#aaaaaa] rounded-[10px]"
          aria-label="Start T-Meting"
        >
          <span className="absolute w-[73.33%] h-[50.00%] top-[26.19%] left-[13.33%] [font-family:'Poppins',Helvetica] font-bold text-white text-sm text-center tracking-[-0.31px] leading-[normal]">
            Start T-Meting
          </span>
        </button>
      </section>
      <DashboardActionTilesSection />
      <aside
        aria-label="Agenda"
        className="absolute top-[266px] left-[1160px] w-60 h-[727px]"
      >
        <div className="absolute top-0 left-0 w-60 h-[727px] flex shadow-[0px_4px_4px_#00000040]">
          <img
            className="w-[248px] h-[735px] -ml-1"
            alt=""
            aria-hidden="true"
            src="https://c.animaapp.com/tNip9Jvr/img/rectangle-269-1.png"
          />
        </div>
        <div className="absolute top-[-4px] left-0 w-60 h-[63px] bg-[#74a2d1] rounded-[15px_15px_0px_0px]" />
        <p className="absolute top-[7px] left-[21px] w-[170px] h-[42px] [font-family:'Poppins',Helvetica] font-normal text-white text-xl tracking-[-0.44px] leading-[30px]">
          <span className="font-bold tracking-[-0.09px]">
            Agenda <br />
          </span>
          <span className="text-base tracking-[-0.06px] leading-6">
            Ma 18 mei
          </span>
        </p>
        {agendaItems.map((item, index) => {
          const topPositions = [58, 240, 421];
          const titleTopPositions = [81, 263, 444];
          const todoTopPositions = [117, 299, 480];
          const lineTopPositions = [202, 384, 565];
          const contentTopPositions = [160, 342, 523];

          return (
            <div key={item.title}>
              <div
                className="absolute left-[-1px] w-[242px] h-[184px] bg-white border-t [border-top-style:solid] border-b [border-bottom-style:solid] border-[#81818166]"
                style={{ top: `${topPositions[index]}px` }}
              />
              <h2
                className="absolute left-[21px] h-6 flex items-center [font-family:'Poppins',Helvetica] font-bold text-black text-base tracking-[-0.35px] leading-6 whitespace-nowrap"
                style={{ top: `${titleTopPositions[index]}px` }}
              >
                {item.title}
              </h2>
              <div
                className="absolute left-[21px] w-[50px] h-[21px] [font-family:'Poppins',Helvetica] font-normal text-black text-base tracking-[-0.35px] leading-6 whitespace-nowrap"
                style={{ top: `${todoTopPositions[index]}px` }}
              >
                <br />
                {item.todoLabel}
              </div>
              <img
                className="absolute left-[21px] w-[131px] h-px object-cover"
                style={{ top: `${lineTopPositions[index]}px` }}
                alt=""
                aria-hidden="true"
                src="https://c.animaapp.com/tNip9Jvr/img/line-107.svg"
              />
              <div
                className="absolute left-[21px] w-[152px] h-[53px] [font-family:'Poppins',Helvetica] font-normal text-[#686868] text-sm tracking-[-0.31px] leading-[21px]"
                style={{ top: `${contentTopPositions[index]}px` }}
              >
                {item.lines.map((line, lineIndex) => (
                  <span key={`${item.title}-${lineIndex}`}>
                    {line}
                    <br />
                  </span>
                ))}
              </div>
            </div>
          );
        })}

        <button
          type="button"
          className="absolute w-[11.94%] h-[2.69%] top-[54.61%] left-[82.78%]"
          aria-label="Volledige agenda"
        >
          <div className="absolute w-[98.84%] h-full top-0 left-0 bg-[#74a2d1] rounded-[10px]" />
          <div className="absolute w-[72.48%] h-[50.00%] top-[26.19%] left-[13.18%] [font-family:'Poppins',Helvetica] font-bold text-white text-sm text-center tracking-[-0.31px] leading-[normal]">
            Volledige agenda
          </div>
        </button>
      </aside>
      <LearnerCarouselSection />
      <button
        type="button"
        className="absolute w-[11.94%] h-[2.69%] top-[88.35%] left-[82.78%]"
        aria-label="Volledige lijst"
      >
        <div className="absolute w-[98.84%] h-full top-0 left-0 bg-[#74a2d1] rounded-[10px]" />
        <div className="absolute w-[72.48%] h-[50.00%] top-[26.19%] left-[13.18%] [font-family:'Poppins',Helvetica] font-bold text-white text-sm text-center tracking-[-0.31px] leading-[normal]">
          Volledige lijst
        </div>
      </button>
      
      <Footer />
    </main>
  );
};
