import { FormEvent, useId, useState } from "react";
import { Footer } from "../../Components/Footer";

const schoolOptions = [
  { value: "", label: "Schoolnaam" },
  { value: "atlas-college", label: "Atlas College" },
  { value: "ojt-academie", label: "OJT Academie" },
  { value: "design-labs", label: "Design Labs" },
];

export const LoginScherm = (): JSX.Element => {
  const schoolSelectId = useId();
  const usernameInputId = useId();
  const [selectedSchool, setSelectedSchool] = useState("");
  const [username, setUsername] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <main
      className="bg-[linear-gradient(118deg,rgba(224,255,219,1)_0%,rgba(224,255,219,1)_18%,rgba(116,162,209,1)_100%)] w-full min-w-[1440px] min-h-[1024px] relative flex flex-col"
      data-model-id="1626:9280"
    >
      <section
        aria-labelledby="login-scherm-heading"
        className="absolute top-[175px] left-[534px] w-[860px] h-[618px]"
      >
        <div className="absolute top-0 left-0 w-[860px] h-[618px] bg-white rounded-[39px] shadow-[0px_-1px_46px_4px_#00000040]" />
        <form className="absolute inset-0" onSubmit={handleSubmit} noValidate>
          <div className="absolute top-[151px] left-[113px] w-[635px] h-[58px]">
            <label htmlFor={schoolSelectId} className="sr-only">
              Schoolnaam
            </label>
            <div className="absolute top-0 left-0 w-[633px] h-[58px] rounded border border-solid border-[#bcbcbc]" />
            <img
              className="pointer-events-none absolute top-3.5 left-[21px] w-[33px] h-[33px] aspect-[1]"
              alt="Bxs institution"
              src="https://c.animaapp.com/9GGHZOtO/img/bxs-institution.svg"
            />
            <div className="pointer-events-none absolute top-[25px] left-[593px] w-6 h-3 flex items-center justify-center">
              <img
                className="w-6 h-3 aspect-[0.5]"
                alt="Weui arrow filled"
                src="https://c.animaapp.com/9GGHZOtO/img/weui-arrow-filled.svg"
              />
            </div>
            <select
              id={schoolSelectId}
              name="school"
              value={selectedSchool}
              onChange={(event) => setSelectedSchool(event.target.value)}
              aria-label="Schoolnaam"
              className={`absolute top-0 left-0 z-10 w-[633px] h-[58px] rounded border border-transparent pl-[82px] pr-12 [font-family:'Poppins',Helvetica] font-normal text-xl tracking-[-0.44px] leading-[30px] ${
                selectedSchool ? "text-[#434343]" : "text-transparent"
              }`}
            >
              {schoolOptions.map((option) => (
                <option
                  key={option.value || "placeholder"}
                  value={option.value}
                  disabled={option.value === ""}
                  hidden={option.value === ""}
                  style={{ color: option.value ? "#434343" : "transparent" }}
                >
                  {option.label}
                </option>
              ))}
            </select>
            {!selectedSchool && (
              <div className="pointer-events-none absolute top-3 left-[calc(50.00%_-_280px)] w-[198px] h-[35px] flex items-center justify-center [font-family:'Poppins',Helvetica] font-normal text-[#bbbbbb] text-xl text-center tracking-[-0.44px] leading-[30px] whitespace-nowrap">
                Schoolnaam
              </div>
            )}
          </div>
          <div className="absolute top-[241px] left-[113px] w-[635px] h-[58px]">
            <label htmlFor={usernameInputId} className="sr-only">
              Gebruikersnaam
            </label>
            <div className="absolute top-0 left-0 w-[633px] h-[58px] rounded border border-solid border-[#bcbcbc]" />
            <img
              className="pointer-events-none absolute top-[9px] left-[18px] w-[38px] h-[38px] aspect-[1]"
              alt="Mdi account outline"
              src="https://c.animaapp.com/9GGHZOtO/img/mdi-account-outline.svg"
            />
            <input
              id={usernameInputId}
              name="username"
              type="text"
              autoComplete="username"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
              aria-label="Gebruikersnaam"
              className="absolute top-0 left-0 z-10 w-[633px] h-[58px] rounded border border-transparent pl-[72px] pr-4 [font-family:'Poppins',Helvetica] font-normal text-xl tracking-[-0.44px] leading-[30px] text-[#434343] placeholder:text-[#bbbbbb]"
              placeholder="Gebruikersnaam"
            />
          </div>
          <div className="absolute top-[331px] left-[113px] w-[635px] h-[58px]">
            <button
              type="submit"
              className="absolute top-0 left-0 w-[633px] h-[58px] bg-[#87c889] rounded border border-solid border-[#949494]"
              aria-label="Aanmelden"
            >
              <span className="absolute top-3 left-[calc(50.00%_-_100px)] w-[198px] h-[35px] flex items-center justify-center [font-family:'Poppins',Helvetica] font-bold text-white text-xl text-center tracking-[-0.44px] leading-[30px] whitespace-nowrap">
                Aanmelden
              </span>
            </button>
          </div>
          <div className="absolute top-[421px] left-[113px] w-[627px] h-[23px] flex items-start">
            <img
              className="w-[295px] mt-3.5 h-px object-cover"
              alt="Line"
              src="https://c.animaapp.com/9GGHZOtO/img/line-12.svg"
            />
            <div className="flex items-center justify-center w-[19px] h-[23px] ml-3 [font-family:'Poppins',Helvetica] font-medium text-[#818181] text-xl text-center tracking-[-0.44px] leading-[30px] whitespace-nowrap">
              of
            </div>
            <img
              className="w-[289px] ml-2.5 mt-3.5 h-px object-cover"
              alt="Line"
              src="https://c.animaapp.com/9GGHZOtO/img/line-13.svg"
            />
          </div>
          <div className="absolute top-[476px] left-[113px] w-[635px] h-[58px]">
            <button
              type="button"
              className="absolute top-0 left-0 w-[633px] h-[58px] rounded border border-solid border-[#949494]"
              aria-label="Login in met Microsoft"
            >
              <span className="absolute top-3 left-[calc(50.00%_-_100px)] w-[225px] h-[35px] flex items-center justify-center [font-family:'Poppins',Helvetica] font-bold text-[#464646] text-xl text-center tracking-[-0.44px] leading-[30px] whitespace-nowrap">
                Login in met Microsoft
              </span>
              <img
                className="absolute top-[21px] left-[187px] w-4 h-4 aspect-[1]"
                alt="Logos microsoft icon"
                src="https://c.animaapp.com/9GGHZOtO/img/logos-microsoft-icon.svg"
              />
            </button>
          </div>
          <div className="absolute top-[558px] left-[259px] w-[343px] h-[23px] flex">
            <p className="flex items-center justify-center w-[341px] h-[23px] [font-family:'Poppins',Helvetica] font-medium text-transparent text-base text-center tracking-[-0.35px] leading-6 whitespace-nowrap">
              <span className="text-[#81818199] tracking-[-0.06px]">
                Geen account?{' '}
              </span>
              <a
                href="#registreren"
                className="text-[#74a2d1] tracking-[-0.06px]"
              >
                Registreer hier
              </a>
            </p>
          </div>
        </form>
      </section>
      <section
        aria-labelledby="login-scherm-heading"
        className="absolute top-[269px] left-[68px] w-[949px] h-[745px] flex flex-col"
      >
        <img
          className="ml-[49px] w-[321px] h-[319px] aspect-[1.01] object-cover"
          alt="Ojt logo"
          src="https://c.animaapp.com/9GGHZOtO/img/ojt-logo-2@2x.png"
        />
        <h1
          id="login-scherm-heading"
          className="ml-[-529px] h-[120px] w-[420px] self-center mt-11 [font-family:'Poppins',Helvetica] font-bold text-[#434343] text-[40px] text-center tracking-[0.80px] leading-[60px]"
        >
          Login in de Atlas
          <br />
          Dashboard
        </h1>
        <div className="flex items-center justify-center ml-[355px] h-6 w-[586px] self-center mt-[201px] [font-family:'Poppins',Helvetica] font-medium text-[#434343] text-base text-center tracking-[0.32px] leading-6">
          Made & powered by
        </div>
        <img
          className="ml-[630px] w-11 h-8 mt-[5px] aspect-[1.4]"
          alt="Logo design"
          src="https://c.animaapp.com/9GGHZOtO/img/logo-design-labs7-1@2x.png"
        />
      </section>
      <div className="h-[1100px]" />
      <Footer />
    </main>
  );
};
