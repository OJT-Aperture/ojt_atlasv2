import { FormEvent, useId, useState } from "react";

export const ContactUsSection = (): JSX.Element => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    consent: false,
  });

  const nameId = useId();
  const emailId = useId();
  const messageId = useId();
  const consentId = useId();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <section
      aria-labelledby="contact-us-heading"
      className="absolute top-[844px] left-80 flex h-[848px] w-[687px] rounded-[20px] bg-[linear-gradient(180deg,rgba(116,162,209,1)_0%,rgba(255,255,255,1)_100%)]"
    >
      <form
        onSubmit={handleSubmit}
        className="relative ml-16 mt-[34px] flex h-[759px] w-[559px] flex-col items-center gap-10"
      >
        <div className="relative flex w-full flex-[0_0_auto] flex-col items-center gap-5 self-stretch">
          <header className="relative mr-[-4.00px] h-[74px] w-[563px]">
            <h2
              id="contact-us-heading"
              className="absolute left-0 top-0 flex h-[39px] w-[553px] items-center justify-center whitespace-nowrap text-center [font-family:'Poppins',Helvetica] text-[32px] font-bold leading-[48px] tracking-[-0.70px] text-white"
            >
              Neem contact met ons op
            </h2>
            <p className="absolute left-1.5 top-[39px] flex h-[35px] w-[553px] items-center justify-center whitespace-nowrap text-center [font-family:'Poppins',Helvetica] text-xl font-normal leading-[30px] tracking-[-0.44px] text-white">
              Heb je vragen of hulp nodig? Wij zijn er voor je.
            </p>
          </header>
          <div className="relative h-[45px] w-[529px] rounded-[20px] bg-white">
            <label htmlFor={nameId} className="sr-only">
              Vul je naam in
            </label>
            <input
              id={nameId}
              name="name"
              type="text"
              autoComplete="name"
              value={formData.name}
              onChange={(event) =>
                setFormData((current) => ({
                  ...current,
                  name: event.target.value,
                }))
              }
              placeholder="Vul je naam in"
              aria-label="Vul je naam in"
              className="absolute left-0 top-0 h-full w-full rounded-[20px] px-[13px] [font-family:'Poppins',Helvetica] text-xl font-normal leading-[30px] tracking-[-0.44px] text-black placeholder:text-[#00000080]"
            />
          </div>
          <div className="relative flex w-[529px] flex-[0_0_auto] flex-col items-start gap-5">
            <div className="relative h-[45px] w-[529px] rounded-[20px] bg-white">
              <label htmlFor={emailId} className="sr-only">
                Vul je e-mail adres in
              </label>
              <input
                id={emailId}
                name="email"
                type="email"
                autoComplete="email"
                value={formData.email}
                onChange={(event) =>
                  setFormData((current) => ({
                    ...current,
                    email: event.target.value,
                  }))
                }
                placeholder="Vul je e-mail adres in"
                aria-label="Vul je e-mail adres in"
                className="absolute left-0 top-0 h-full w-full rounded-[20px] px-[13px] [font-family:'Poppins',Helvetica] text-xl font-normal leading-[30px] tracking-[-0.44px] text-black placeholder:text-[#00000080]"
              />
            </div>
            <div className="relative h-[395px] w-[529px] rounded-[20px] bg-white">
              <label htmlFor={messageId} className="sr-only">
                Beschrijf je vraag of probleem
              </label>
              <textarea
                id={messageId}
                name="message"
                value={formData.message}
                onChange={(event) =>
                  setFormData((current) => ({
                    ...current,
                    message: event.target.value,
                  }))
                }
                placeholder="Beschrijf je vraag/probleem"
                aria-label="Beschrijf je vraag of probleem"
                className="absolute left-0 top-0 h-full w-full resize-none rounded-[20px] px-[13px] py-0 [font-family:'Poppins',Helvetica] text-xl font-normal leading-[30px] tracking-[-0.44px] text-black placeholder:text-[#00000080]"
              />
            </div>
            <div className="relative mr-[-2.00px] h-[34px] w-[531px]">
              <input
                id={consentId}
                name="consent"
                type="checkbox"
                checked={formData.consent}
                onChange={(event) =>
                  setFormData((current) => ({
                    ...current,
                    consent: event.target.checked,
                  }))
                }
                className="absolute left-0 top-[3px] h-7 w-[27px] rounded-[13.66px/14px] border border-solid border-black bg-transparent"
              />
              <label
                htmlFor={consentId}
                className="absolute left-[39px] top-0 flex h-[34px] w-[490px] items-center [font-family:'Poppins',Helvetica] text-sm font-normal leading-[21px] tracking-[-0.31px] text-black"
              >
                Je geeft akkoord dat wij je via de mail contacteren met
                betrekking tot je vraag/probleem
              </label>
            </div>
          </div>
        </div>
        <button
          type="submit"
          className="relative h-[46px] w-[187px] rounded-[20px] bg-[#74a2d1]"
        >
          <span className="absolute left-0 top-[21.74%] flex h-[52.17%] w-full items-center justify-center whitespace-nowrap text-center [font-family:'Poppins',Helvetica] text-[15px] font-bold leading-[22.5px] tracking-[-0.33px] text-white">
            Verstuur
          </span>
        </button>
      </form>
    </section>
  );
};
