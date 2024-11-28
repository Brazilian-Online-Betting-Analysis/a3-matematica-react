import landingBackground from "../assets/landing-background.jpg";
import { BetFormDialog } from "./form-dialog";

export const Hero = () => {
  return (
    <>
      <img
        src={landingBackground}
        alt="Imagem de Apostas"
        className="absolute w-full h-full object-cover z-[-1]"
      />
      <div className="primary-text flex flex-col gap-4 md:gap-6 items-center justify-center text-center mx-4 md:mx-auto max-w-[700px] my-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight md:leading-snug">
          Descubra Suas Chances de Perder Tudo
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-white/90">
          Está preparado para conhecer o risco que corre? Preencha os campos
          abaixo e descubra em segundos qual a sua chance de perder tudo. Você
          pode se surpreender!
        </p>
        <div className="flex justify-center items-center pt-2 md:pt-4">
          <BetFormDialog />
        </div>
      </div>
    </>
  );
};
