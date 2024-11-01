import landingBackground from "../assets/landing-background.jpg";

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
          <button className="flex text-sm gap-2 items-center justify-start bg-white border border-zinc-100 rounded-lg px-4 py-2 text-gray-400">
            Insira seu nome para começar
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="#000000"
              viewBox="0 0 256 256"
            >
              <path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"></path>
            </svg>
          </button>
        </div>
      </div>
    </>
  );
};
