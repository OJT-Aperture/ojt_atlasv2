import { Link } from "react-router-dom";

const noteItems = [
  {
    date: "26 maart 2026:",
    text: "Lorem ipsum dolor sit amet. Et omnis vero quo vero internos",
  },
  {
    date: "14 maart 2026:",
    text: "Lorem ipsum dolor sit amet. Et omnis vero quo vero internos",
  },
];

const statCards = [
  {
    key: "module-dagen",
    left: "604px",
    title: "Module dagen",
    value: "7 dagen",
    icon: (
      <>
        <img
          className="absolute w-[93.52%] h-[84.03%] top-[15.97%] left-[6.48%]"
          alt="Vector"
          src="/img/vector-138.svg"
        />
        <div className="absolute w-[57.34%] h-[75.63%] top-[24.37%] left-[42.66%] flex">
          <div className="mt-1.5 w-[15px] h-[15px] ml-[5.36%] mr-[85.71%] flex-1 flex aspect-[1]">
            <img
              className="flex-1 w-[12.5px]"
              alt="Vector"
              src="/img/vector-139.svg"
            />
          </div>
        </div>
      </>
    ),
    titleClass:
      "absolute w-[21.50%] h-[11.76%] top-[29.41%] left-[20.82%] flex items-center [font-family:'Poppins',Helvetica] font-normal text-white text-[9px] tracking-[-0.20px] leading-[13.5px] whitespace-nowrap",
    valueClass:
      "w-[92.19%] h-[109.52%] top-[-4.76%] left-0 justify-end font-bold text-white text-[15px] text-right tracking-[-0.33px] leading-[22.5px] absolute flex items-center [font-family:'Poppins',Helvetica] whitespace-nowrap",
  },
  {
    key: "afwezigheid",
    left: "795px",
    title: "Afwezigheid",
    value: "5 dagen",
    icon: (
      <>
        <div className="absolute w-[10.58%] top-[19px] left-[5.46%] h-[31px] flex overflow-hidden aspect-[1]">
          <div className="mt-[-3px] w-[34px] h-[34px] -ml-px flex aspect-[1]">
            <img
              className="flex-1 w-[28.33px]"
              alt="Vector"
              src="/img/vector-136.svg"
            />
          </div>
        </div>
        <div className="absolute w-[57.34%] h-[75.63%] top-[24.37%] left-[42.66%] flex">
          <div className="mt-1.5 w-[15px] h-[15px] ml-[5.36%] mr-[85.71%] flex-1 flex aspect-[1]">
            <img
              className="flex-1 w-[12.5px]"
              alt="Vector"
              src="/img/vector-139.svg"
            />
          </div>
        </div>
      </>
    ),
    titleClass:
      "absolute w-[18.09%] h-[11.76%] top-[29.41%] left-[20.82%] flex items-center [font-family:'Poppins',Helvetica] font-normal text-white text-[9px] tracking-[-0.20px] leading-[13.5px] whitespace-nowrap",
    valueClass:
      "w-[95.31%] h-[109.52%] top-[-4.76%] left-0 justify-end font-bold text-white text-[15px] text-right tracking-[-0.33px] leading-[22.5px] absolute flex items-center [font-family:'Poppins',Helvetica] whitespace-nowrap",
  },
  {
    key: "prestatie",
    left: "981px",
    title: "Prestatie",
    value: "10 dagen",
    icon: (
      <>
        <div className="absolute w-[10.58%] top-[19px] left-[5.46%] h-[31px] flex overflow-hidden aspect-[1]">
          <div className="-mt-1 w-[34px] h-[34px] -ml-px flex aspect-[1]">
            <img
              className="flex-1 w-[25.5px]"
              alt="Vector"
              src="/img/vector-134.svg"
            />
          </div>
        </div>
        <div className="absolute w-[57.34%] h-[75.63%] top-[24.37%] left-[42.66%] flex">
          <div className="mt-1.5 w-[15px] h-[15px] ml-[5.36%] mr-[85.71%] flex-1 flex aspect-[1]">
            <img
              className="flex-1 w-[12.5px]"
              alt="Vector"
              src="/img/vector-139.svg"
            />
          </div>
        </div>
      </>
    ),
    titleClass:
      "absolute w-[12.97%] h-[11.76%] top-[29.41%] left-[20.82%] flex items-center [font-family:'Poppins',Helvetica] font-normal text-white text-[9px] tracking-[-0.20px] leading-[13.5px] whitespace-nowrap",
    valueClass:
      "w-[103.12%] h-[109.52%] top-[-4.76%] left-0 justify-end font-bold text-white text-[15px] text-right tracking-[-0.33px] leading-[22.5px] absolute flex items-center [font-family:'Poppins',Helvetica] whitespace-nowrap",
  },
  {
    key: "gedrag",
    left: "1168px",
    title: "Gedrag",
    value: "7 dagen",
    icon: (
      <>
        <img
          className="absolute w-[93.52%] h-[84.03%] top-[15.97%] left-[6.48%]"
          alt="Vector"
          src="/img/vector-138.svg"
        />
        <div className="absolute w-[57.34%] h-[75.63%] top-[24.37%] left-[42.66%] flex">
          <div className="mt-1.5 w-[15px] h-[15px] ml-[5.36%] mr-[85.71%] flex-1 flex aspect-[1]">
            <img
              className="flex-1 w-[12.5px]"
              alt="Vector"
              src="/img/vector-139.svg"
            />
          </div>
        </div>
      </>
    ),
    titleClass:
      "absolute w-[11.60%] h-[11.76%] top-[29.41%] left-[20.82%] flex items-center [font-family:'Poppins',Helvetica] font-normal text-white text-[9px] tracking-[-0.20px] leading-[13.5px] whitespace-nowrap",
    valueClass:
      "w-[92.19%] h-[109.52%] top-[-4.76%] left-0 justify-end font-bold text-white text-[15px] text-right tracking-[-0.33px] leading-[22.5px] absolute flex items-center [font-family:'Poppins',Helvetica] whitespace-nowrap",
  },
];

const quickCards = [
  {
    title: "Modules resultaten",
    left: "378px",
    top: "887px",
    icon: (
      <div className="relative w-[99px] h-[99px] aspect-[1]">
        <img
          className="absolute w-[95.83%] h-[95.83%] top-[4.17%] left-[4.17%]"
          alt="Vector"
          src="/img/vector-141.svg"
        />
      </div>
    ),
    innerClass:
      "mt-[19px] w-[247px] h-[143px] ml-[29px] relative items-center justify-center gap-3 flex flex-col",
  },
  {
    title: "T-Meting vooruitgang",
    left: "710px",
    top: "886px",
    icon: (
      <div className="relative w-[103px] h-[103px] aspect-[1]">
        <img
          className="absolute w-[87.50%] h-[87.50%] top-[12.50%] left-[12.50%]"
          alt="Vector"
          src="/img/vector-142.svg"
        />
      </div>
    ),
    innerClass:
      "h-[147px] flex mt-[19px] w-[247px] ml-[29px] relative flex-col items-center justify-center gap-3",
  },
  {
    title: "Aandachtspunten",
    left: "1042px",
    top: "887px",
    icon: (
      <div className="relative w-[95px] h-[95px] aspect-[1]">
        <img
          className="absolute w-[91.18%] h-[91.19%] top-[8.81%] left-[8.82%]"
          alt="Vector"
          src="/img/vector-143.svg"
        />
      </div>
    ),
    innerClass:
      "h-[139px] flex mt-[19px] w-[247px] ml-[29px] relative flex-col items-center justify-center gap-3",
  },
];

export const LeerlingSchermScreen = (): JSX.Element => {
  return (
    <main
      className="relative w-[1440px] h-[1312px] bg-white overflow-hidden"
      data-model-id="582:1440"
    >
      <section
        aria-label="Top navigation"
        className="flex w-[1084px] h-[100px] items-center justify-center gap-10 absolute top-0 left-[316px]"
      >
        <div className="flex w-[181px] items-center justify-center gap-[15px] relative">
          <div className="relative w-[26px] h-[26px] ml-[-1.50px] aspect-[1]">
            <img
              className="absolute w-[95.00%] h-[89.91%] top-[10.09%] left-[5.00%]"
              alt="Vector"
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
          <label htmlFor="leerling-zoeken" className="sr-only">
            Zoeken naar klas, leerling, module
          </label>
          <div className="absolute top-0 left-0 w-[532px] h-[49px] bg-[#ededed] rounded-[20px]" />
          <input
            id="leerling-zoeken"
            type="search"
            placeholder="Zoeken naar klas, leerling, module..."
            className="absolute top-0 left-0 w-[532px] h-[49px] pl-[17px] pr-[52px] [font-family:'Poppins',Helvetica] font-normal text-black text-base tracking-[-0.35px] leading-6 placeholder:text-[#00000066]"
          />
          <button
            type="submit"
            aria-label="Zoeken"
            className="absolute top-2 left-[487px] w-[34px] h-[34px] flex aspect-[1] items-center justify-center cursor-pointer"
          >
            <img
              className="w-[24.8px]"
              alt="Vector"
              src="/img/vector-174.svg"
            />
          </button>
        </form>
        <div className="relative w-[88px] h-[84px]" />
        <div className="absolute top-[31px] left-[825px] w-[154px] h-28 flex">
          <div className="flex-1 w-[156px] relative">
            <div className="absolute w-[98.72%] h-full top-0 left-0 flex items-center justify-center [font-family:'Poppins',Helvetica] font-normal text-black text-[15px] text-center tracking-[-0.33px] leading-[22.5px]">
              Modules
            </div>
            <div className="absolute w-[9.24%] top-[13px] left-[19.05%] h-3.5 aspect-[1] bg-[url(/img/vector-186.svg)] bg-[100%_100%]" />
          </div>
        </div>
        <img
          className="relative w-[66px] h-[66px] object-cover"
          alt="Ellipse"
          src="/img/ellipse-1-6.svg"
        />
      </section>
      <header className="absolute top-[130px] left-[281px] w-[1159px]">
        <h1 className="w-[1159px] h-[73px] flex items-center justify-center [font-family:'Poppins',Helvetica] font-bold text-black text-[40px] text-center tracking-[-0.88px] leading-[60px]">
          Leerlingen
        </h1>
        <div className="absolute top-[75px] left-[21px] w-[1114px] h-0.5 bg-[#686868]" />
      </header>
      <Link
        className="absolute top-[173px] left-[316px] w-[73px] h-8 flex items-center [font-family:'Poppins',Helvetica] font-bold text-black text-xl tracking-[-0.44px] leading-[30px] whitespace-nowrap"
        to="/leerling-scherm"
      >
        &lt; Terug
      </Link>
      <section
        aria-labelledby="leerling-gegevens-heading"
        className="absolute top-[277px] left-[371px] w-[974px] h-[261px]"
      >
        <img
          className="absolute top-0 left-0 w-[974px] h-[261px]"
          alt="Rectangle"
          src="/img/rectangle-12.png"
        />
        <h2
          id="leerling-gegevens-heading"
          className="absolute top-[17px] left-[31px] h-9 flex items-center justify-center [font-family:'Poppins',Helvetica] font-bold text-black text-2xl text-center tracking-[-0.53px] leading-9 whitespace-nowrap"
        >
          Leerling gegevens:
        </h2>
        <img
          className="absolute top-[72px] left-[62px] w-[106px] h-[106px]"
          alt="Ellipse"
          src="/img/ellipse-9.png"
        />
        <div className="absolute top-[187px] left-[48px] w-[194px] h-[21px] flex items-center [font-family:'Poppins',Helvetica] font-bold text-black text-xl tracking-[-0.44px] leading-[30px] whitespace-nowrap">
          Jasper de Bos
        </div>
        <div className="absolute top-[206px] left-[48px] h-6 flex items-center [font-family:'Poppins',Helvetica] font-normal text-black text-base tracking-[-0.35px] leading-6 whitespace-nowrap">
          12 jaar
        </div>
        <dl className="absolute top-[73px] left-[233px] w-[738px] h-12">
          <div className="absolute top-px left-px w-[167px] h-6">
            <dt className="w-[167px] h-6 flex items-center justify-center [font-family:'Poppins',Helvetica] font-bold text-black text-xl text-center tracking-[-0.44px] leading-[30px] whitespace-nowrap">
              Student ID
            </dt>
            <dd className="absolute top-[22px] left-[33px] w-[101px] h-6 flex items-center justify-center [font-family:'Poppins',Helvetica] font-normal text-black text-base text-center tracking-[-0.35px] leading-6">
              123456
            </dd>
          </div>
          <div className="absolute top-px left-[185px] w-[166px] h-6">
            <dt className="w-[166px] h-6 flex items-center justify-center [font-family:'Poppins',Helvetica] font-bold text-black text-xl text-center tracking-[-0.44px] leading-[30px] whitespace-nowrap">
              E-mail
            </dt>
            <dd className="absolute top-6 left-0 w-[166px] h-6 flex items-center justify-center [font-family:'Poppins',Helvetica] font-normal text-black text-base text-center tracking-[-0.35px] leading-6 whitespace-nowrap">
              123456@gmail.com
            </dd>
          </div>
          <div className="absolute top-px left-[370px] w-[167px] h-6">
            <dt className="w-[167px] h-6 flex items-center justify-center [font-family:'Poppins',Helvetica] font-bold text-black text-xl text-center tracking-[-0.44px] leading-[30px] whitespace-nowrap">
              Telefoon
            </dt>
            <dd className="absolute top-6 left-0 w-[167px] h-6 flex items-center justify-center [font-family:'Poppins',Helvetica] font-normal text-black text-base text-center tracking-[-0.35px] leading-6 whitespace-nowrap">
              (06) 123-456789
            </dd>
          </div>
          <div className="absolute top-px left-[555px] w-[167px] h-6">
            <dt className="w-[167px] h-6 flex items-center justify-center [font-family:'Poppins',Helvetica] font-bold text-black text-xl text-center tracking-[-0.44px] leading-[30px] whitespace-nowrap">
              Adres
            </dt>
            <dd className="absolute top-6 left-0 w-[167px] h-6 flex items-center justify-center [font-family:'Poppins',Helvetica] font-normal text-black text-base text-center tracking-[-0.35px] leading-6 whitespace-nowrap">
              Hoofdstraat 123
            </dd>
          </div>
        </dl>
        {statCards.map((card) => (
          <article
            key={card.key}
            className="absolute top-[149px] w-[293px] h-[119px]"
            style={{ left: card.left }}
          >
            <img
              className="absolute w-full h-full top-0 left-0"
              alt="Rectangle"
              src="/img/rectangle-12-4.svg"
            />
            {card.icon}
            <div className={card.titleClass}>{card.title}</div>
            <div className="absolute w-[21.84%] h-[17.65%] top-[12.61%] left-[20.82%]">
              <div className={card.valueClass}>{card.value}</div>
            </div>
          </article>
        ))}
      </section>
      <section
        aria-labelledby="aantekening-heading"
        className="absolute top-[573px] left-[374px] w-[974px] h-[261px]"
      >
        <img
          className="absolute top-0 left-0 w-[974px] h-[261px]"
          alt="Rectangle"
          src="/img/rectangle-12.png"
        />
        <h2
          id="aantekening-heading"
          className="absolute top-[17px] left-[28px] h-9 flex items-center [font-family:'Poppins',Helvetica] font-bold text-black text-2xl tracking-[-0.53px] leading-9 whitespace-nowrap"
        >
          Aantekening
        </h2>
        <form className="absolute top-[72px] left-[32px] w-[601px] h-[157px]">
          <label htmlFor="aantekeningen" className="sr-only">
            Voeg je aantekeningen toe
          </label>
          <div className="absolute top-0 left-0 w-[599px] h-[157px] bg-white rounded-[20px]" />
          <textarea
            id="aantekeningen"
            className="absolute top-0 left-0 w-[599px] h-[157px] rounded-[20px] px-[21px] pt-3 pb-10 resize-none [font-family:'Poppins',Helvetica] font-normal text-black text-base tracking-[-0.35px] leading-6 placeholder:text-[#00000099]"
            placeholder="Voeg je aantekeningen toe"
          />
          <button
            type="submit"
            aria-label="Aantekening opslaan"
            className="absolute top-[125px] left-[557px] w-6 h-6 flex aspect-[1] items-center justify-center cursor-pointer"
          >
            <img className="w-[18px]" alt="Vector" src="/img/vector-140.svg" />
          </button>
        </form>
        {noteItems.map((item, index) => (
          <article
            key={item.date}
            className="absolute left-[770px] w-[177px] h-[89px] flex flex-col"
            style={{ top: index === 0 ? "18px" : "124px" }}
          >
            <h3 className="flex items-center w-[166.27px] h-[23.99px] [font-family:'Poppins',Helvetica] font-bold text-black text-sm tracking-[-0.31px] leading-[21px] whitespace-nowrap">
              {item.date}
            </h3>
            <p className="flex items-center w-[173px] h-9 mt-[6.0px] [font-family:'Poppins',Helvetica] font-normal text-black text-xs tracking-[-0.26px] leading-[18px]">
              {item.text}
            </p>
            <Link
              to="/leerling-scherm"
              className="ml-[132px] w-[43px] h-3 relative mt-[11px] block"
            >
              <span className="absolute top-0 left-0 h-3 flex items-center [font-family:'Poppins',Helvetica] font-bold text-[#74a2d1] text-[8px] tracking-[-0.18px] leading-3 whitespace-nowrap">
                Lees meer
              </span>
              <img
                className="absolute top-[11px] left-0 w-10 h-px object-cover"
                alt="Line"
                src="/img/line-3-1.svg"
              />
            </Link>
          </article>
        ))}
      </section>
      {quickCards.map((card) => (
        <button
          key={card.title}
          type="button"
          className="absolute w-[305px] h-[180px] flex bg-[#74a2d1] rounded-[20px] cursor-pointer"
          style={{ left: card.left, top: card.top }}
          aria-label={card.title}
        >
          <div className={card.innerClass}>
            <div className="self-stretch h-8 mt-[-1.00px] [font-family:'Poppins',Helvetica] font-bold text-white text-xl text-center tracking-[-0.44px] leading-[30px] whitespace-nowrap">
              {card.title}
            </div>
            {card.icon}
          </div>
        </button>
      ))}

      <button
        type="button"
        className="absolute top-[1128px] left-[1160px] w-[187px] h-[46px] bg-[#74a2d1] rounded-[20px] cursor-pointer"
      >
        <span className="absolute w-full h-[52.17%] top-[21.74%] left-0 flex items-center justify-center [font-family:'Poppins',Helvetica] font-bold text-white text-[15px] text-center tracking-[-0.33px] leading-[22.5px] whitespace-nowrap">
          Gegevens invoeren
        </span>
      </button>
      <footer className="absolute top-[1250px] left-0 w-[1440px] h-[62px] flex bg-[#74a2d1] rounded-sm overflow-hidden shadow-[0px_-6px_13px_#00000040]">
        <div className="mt-1.5 w-[161px] ml-[766px] flex gap-[13px]">
          <div className="flex items-center mt-4 w-[75px] h-5 [font-family:'Poppins',Helvetica] font-bold text-black text-[13px] tracking-[-0.29px] leading-[19.5px] whitespace-nowrap">
            Powered by
          </div>
          <img
            className="w-[71px] h-[51px] aspect-[1.4]"
            alt="Logo design"
            src="/img/logo-design-labs7-1-8.png"
          />
        </div>
      </footer>
      <aside className="fixed top-0 left-0 w-[276px] h-[1022px] rounded-[0px_20px_20px_0px] shadow-[0px_4px_4px_#00000080]">
        <div className="absolute top-0 left-0 w-[276px] h-[1024px] bg-[#e0ffdb] rounded-[0px_20px_20px_0px]" />
        <div className="w-[216px] h-[479px] items-start gap-10 absolute top-[22px] left-[30px] flex flex-col">
          <div className="relative w-[216px] h-[284px]">
            <img
              className="absolute top-0 left-4 w-[184px] h-[182px] aspect-[1.01] object-cover"
              alt="Ojt logo"
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
          <nav
            aria-label="Sidebar navigation"
            className="flex flex-col items-start gap-20 relative self-stretch w-full flex-[0_0_auto] mb-[-197.00px]"
          >
            <div className="flex flex-col items-start gap-5 relative self-stretch w-full flex-[0_0_auto]">
              <div className="relative flex items-center self-stretch h-4 mt-[-1.00px] [font-family:'Poppins',Helvetica] font-bold text-black text-xl tracking-[-0.44px] leading-[30px] whitespace-nowrap">
                Main menu
              </div>
              <div className="flex flex-col w-[167px] items-start gap-4 relative flex-[0_0_auto]">
                <Link
                  className="flex items-center gap-2.5 relative self-stretch w-full flex-[0_0_auto]"
                  to="/"
                >
                  <div className="relative w-6 h-6 aspect-[1]">
                    <img
                      className="absolute w-[83.33%] h-[85.42%] top-[14.58%] left-[16.67%]"
                      alt="Vector"
                      src="/img/vector-187.svg"
                    />
                  </div>
                  <div className="relative flex items-center w-[137px] h-4 mr-[-4.00px] [font-family:'Poppins',Helvetica] font-normal text-black text-xl tracking-[-0.44px] leading-[30px] whitespace-nowrap">
                    Main menu
                  </div>
                </Link>
                <Link
                  className="flex items-center gap-2.5 relative self-stretch w-full flex-[0_0_auto]"
                  to="/u40u45klassenu41-informatie-scherm-u61-resulaten"
                >
                  <div className="relative w-6 h-6 aspect-[1]">
                    <div className="relative w-[78.45%] h-[90.18%] top-[9.05%] left-[12.50%] flex">
                      <img
                        className="flex-1 w-[18.83px]"
                        alt="Vector"
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
                      alt="Vector"
                      src="/img/vector-189.svg"
                    />
                  </div>
                  <div className="flex items-center w-[137px] h-4 mr-[-4.00px] font-normal text-black relative [font-family:'Poppins',Helvetica] text-xl tracking-[-0.44px] leading-[30px] whitespace-nowrap">
                    Modules
                  </div>
                </Link>
                <Link
                  className="flex items-center gap-2.5 relative self-stretch w-full flex-[0_0_auto]"
                  to="/leerling-scherm"
                  aria-current="page"
                >
                  <div className="relative w-6 h-6 aspect-[1]">
                    <img
                      className="absolute w-[95.83%] h-[79.17%] top-[20.83%] left-[4.17%]"
                      alt="Vector"
                      src="/img/vector-190.svg"
                    />
                  </div>
                  <div className="relative flex items-center w-[137px] h-4 mr-[-4.00px] [font-family:'Poppins',Helvetica] font-normal text-black text-xl tracking-[-0.44px] leading-[30px] whitespace-nowrap">
                    Leerlingen
                  </div>
                </Link>
              </div>
            </div>
            <div className="flex flex-col items-start gap-5 relative self-stretch w-full flex-[0_0_auto]">
              <div className="relative flex items-center self-stretch h-4 mt-[-1.00px] [font-family:'Poppins',Helvetica] font-bold text-black text-xl tracking-[-0.44px] leading-[30px] whitespace-nowrap">
                Instellingen
              </div>
              <div className="flex flex-col w-44 items-start gap-4 relative flex-[0_0_auto]">
                <Link
                  className="flex items-center gap-2.5 relative self-stretch w-full flex-[0_0_auto]"
                  to="/instellingen"
                >
                  <img
                    className="relative w-5 h-5"
                    alt="Vector"
                    src="/img/vector-191.svg"
                  />
                  <div className="relative flex items-center w-[137px] h-4 [font-family:'Poppins',Helvetica] font-normal text-black text-xl tracking-[-0.44px] leading-[30px] whitespace-nowrap">
                    Instellingen
                  </div>
                </Link>
                <Link
                  className="flex items-center gap-2.5 relative self-stretch w-full flex-[0_0_auto]"
                  to="/help-en-support-scherm"
                >
                  <div className="relative w-5 h-5 aspect-[1]">
                    <img
                      className="absolute w-[53.47%] h-[94.44%] top-[5.56%] left-[46.53%]"
                      alt="Vector"
                      src="/img/vector-192.svg"
                    />
                    <img
                      className="absolute w-[70.46%] h-[66.91%] top-[33.09%] left-[29.54%]"
                      alt="Vector"
                      src="/img/vector-193.svg"
                    />
                  </div>
                  <div className="relative flex items-center w-[137px] h-4 [font-family:'Poppins',Helvetica] font-normal text-black text-xl tracking-[-0.44px] leading-[30px] whitespace-nowrap">
                    Help
                  </div>
                </Link>
              </div>
            </div>
          </nav>
        </div>
        <div className="absolute w-[9.81%] h-[2.32%] top-[49.77%] left-[78.11%] rotate-[-90.00deg]">
          <img
            className="absolute w-[63.89%] h-[72.91%] top-[27.09%] left-[36.11%] rotate-[90.00deg]"
            alt="Vector"
            src="/img/vector-152.svg"
          />
          <img
            className="absolute w-[79.40%] h-[128.64%] top-[-28.64%] left-[20.60%] rotate-[90.00deg]"
            alt="Vector"
            src="/img/vector-153.svg"
          />
        </div>
      </aside>
    </main>
  );
};
