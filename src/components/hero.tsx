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
      <div className="primary-text flex flex-col gap-2 items-center justify-center text-center m-auto max-w-[700px]">
        <h1 className="text-6xl font-bold text-white leading-snug">
          Descubra Suas Chances de Perder Tudo
        </h1>
        <p className="text-xl">
          Está preparado para conhecer o risco que corre? Preencha os campos
          abaixo e descubra em segundos qual a sua chance de perder tudo. Você
          pode se surpreender!
        </p>
        <div className="flex justify-center items-center pt-4">
          <BetFormDialog />
        </div>
      </div>
    </>
  );
};
