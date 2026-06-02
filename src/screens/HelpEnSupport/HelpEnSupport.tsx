import { ContactUsSection } from "./sections/ContactUsSection";
import { FaqSection } from "./sections/FaqSection";
import { Footer } from "../../Components/Footer";
import { Linkernavigatie } from "../../Components/Linkernavigatie";
import { Topbar } from "../../Components/Topbar";

const contactDetails = [
  {
    label: "E-mail",
    value: "jouwtoekomstkracht@gmail.com",
    valueClassName: "whitespace-nowrap",
  },
  {
    label: "Telefoonnummer",
    value: "06 111 2222 33",
    valueClassName: "whitespace-nowrap",
  },
  {
    label: "Adres",
    value: ["Adresstraat 67A", "1111AB Groningen"],
    valueClassName: "",
  },
];

export const HelpEnSupport = (): JSX.Element => {
  return (
    <main
      className="relative w-[1440px] min-h-[1851px] bg-white flex flex-col"
      data-model-id="491:15"
      aria-label="Help en support"
    >
      <Topbar />
      <Linkernavigatie />
      <header className="contents">
        <a
          href="#"
          className="absolute top-[159px] left-[316px] w-[73px] h-8 flex items-center [font-family:'Poppins',Helvetica] font-bold text-black text-xl tracking-[-0.44px] leading-[30px] whitespace-nowrap"
          aria-label="Ga terug"
        >
          &lt; Terug
        </a>
        <h1 className="absolute top-[118px] left-[281px] w-[1159px] h-[73px] flex items-center justify-center [font-family:'Poppins',Helvetica] font-bold text-black text-[40px] text-center tracking-[-0.88px] leading-[60px]">
          Veelgestelde vragen
        </h1>
        <div
          className="absolute top-[193px] left-[302px] w-[1114px] h-0.5 bg-[#686868]"
          aria-hidden="true"
        />
        <p className="absolute top-[234px] left-[589px] w-[532px] h-[54px] flex items-center justify-center [font-family:'Poppins',Helvetica] font-normal text-black text-xl text-center tracking-[-0.44px] leading-[30px]">
          Hier vind je antwoorden op de meest gestelde vragen over het gebruik
          van het dashboard.
        </p>
      </header>
      <section aria-label="Veelgestelde vragen">
        <FaqSection />
      </section>
      <section aria-label="Contact opnemen">
        <ContactUsSection />
      </section>
      <address className="not-italic flex flex-col w-80 items-start gap-5 absolute top-[843px] left-[1047px]">
        {contactDetails.map((item) => (
          <div
            key={item.label}
            className="items-start gap-2.5 relative self-stretch w-full flex-[0_0_auto] flex flex-col"
          >
            <div
              className={`relative flex items-center mt-[-1.00px] [font-family:'Poppins',Helvetica] font-bold text-[#74a2d1] text-xl tracking-[-0.44px] leading-[30px] whitespace-nowrap ${
                item.label === "E-mail"
                  ? "w-[69px]"
                  : item.label === "Telefoonnummer"
                    ? "w-[175px]"
                    : "w-[60px]"
              } h-[30px]`}
            >
              {item.label}
            </div>
            {Array.isArray(item.value) ? (
              <div className="relative self-stretch h-[53px] [font-family:'Poppins',Helvetica] font-normal text-black text-xl tracking-[-0.44px] leading-[30px]">
                {item.value.map((line, index) => (
                  <span key={line}>
                    {line}
                    {index < item.value.length - 1 && <br />}
                  </span>
                ))}
              </div>
            ) : (
              <div
                className={`relative flex items-center self-stretch h-[22px] [font-family:'Poppins',Helvetica] font-normal text-black text-xl tracking-[-0.44px] leading-[30px] ${item.valueClassName}`}
              >
                {item.value}
              </div>
            )}
          </div>
        ))}
      </address>
      <nav
        className="absolute top-[31px] left-[1141px] w-[154px] h-28 flex"
        aria-label="Snelle navigatie"
      >
        <div className="flex-1 w-[156px] relative">
          <div className="absolute w-[98.72%] h-full top-0 left-0 flex items-center justify-center [font-family:'Poppins',Helvetica] font-normal text-black text-[15px] text-center tracking-[-0.33px] leading-[22.5px]">
            Modules
          </div>
          <div
            className="absolute w-[9.24%] top-[13px] left-[19.05%] h-3.5 aspect-[1] bg-[url(/img/vector-186.svg)] bg-[100%_100%]"
            aria-hidden="true"
          />
        </div>
      </nav>
      <div className="h-[1900px]" />
      <Footer />
    </main>
  );
};
