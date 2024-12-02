import { Hero } from "@/components/hero";
import { Helmet } from "react-helmet-async";
import dice from "../assets/dice.png";
import odsImage from "../assets/ods.png";
import { Link } from "react-router-dom";
import { ArrowRightIcon } from "lucide-react";
import { GroupWorkingIllustration } from "@/assets/group-working";
import { QuestionIllustration } from "@/assets/question";
import { MathIllustration } from "@/assets/math";

export function Home() {
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>

      <header
        id="top"
        className="-mt-16 flex flex-col h-[728px] justify-between relative after:content-[' '] after:absolute after:inset-0 after:z-[-1] after:bg-hero-fade text-white background-hero-fade"
      >
        <Hero />
      </header>
      <main className="flex flex-col gap-32 pb-[280px] pt-32 overflow-x-hidden">
        <div className="relative">
          <div className="container mx-auto">
            <div
              id="por-que"
              className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-32 relative z-10"
            >
              <div className="text-content flex flex-col gap-3 md:gap-4">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
                  Por que?
                </h2>
                <p className="text-base sm:text-lg">
                  Saber a probabilidade de quanto você pode perder em um jogo de
                  aposta é essencial para tomar decisões mais informadas e
                  gerenciar seu risco. Essa previsão ajuda a entender o valor
                  esperado das apostas e o quanto você está realmente disposto a
                  investir (ou perder) antes de alcançar seus objetivos
                  financeiros. Ela também pode ajudar a evitar perdas
                  significativas e descontrole financeiro, especialmente em
                  apostas que podem ser atraentes mas com pouca chance de
                  retorno. Em um contexto mais amplo, essa análise de
                  probabilidade pode apoiar a criação de estratégias de apostas
                  sustentáveis, definir limites de perda e até estabelecer um
                  orçamento para apostas, o que ajuda a evitar comportamentos de
                  risco ou viciantes.
                </p>
              </div>

              <QuestionIllustration />
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="container mx-auto">
            <div
              id="como"
              className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-32 relative z-10"
            >
              <MathIllustration />

              <div className="text-content flex flex-col gap-3 md:gap-4">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
                  Como
                </h2>
                <p className="text-base sm:text-lg">
                  O propósito é gerar insights e previsões sobre o perfil dos
                  apostadores, oferecendo uma base sólida para decisões
                  informadas em políticas públicas e conscientização do público.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div
            id="ods"
            className="container mx-auto flex items-center justify-between relative z-10 flex-col gap-12 md:gap-32 md:flex-row"
          >
            <div className="text-content flex flex-col gap-4">
              <h2 className="text-4xl">
                ODS (Objetivos de Desenvolvimento Sustentável)
              </h2>

              <ul className="list-disc list-inside pl-1">
                <li>Saúde e Bem Estar (3)</li>
                <li>Trabalho Decente e Crescimento Econômico (8)</li>
                <li>Consumo e Produção Responsáveis (12)</li>
                <li>Paz, Justiça e Instituições Eficazes (16)</li>
              </ul>

              <div>
                <Link
                  to="/ods"
                  className="flex items-center gap-2 text-primary-600 hover:text-primary-700 transition-colors duration-200 font-medium hover:underline"
                >
                  Saiba mais sobre os ODS do projeto
                  <ArrowRightIcon className="w-5 h-5 animate-bounce-x" />
                </Link>
              </div>
            </div>
            <img
              className="h-auto md:h-[450px] w-auto rounded-lg"
              src={odsImage}
              alt="ODS"
            />
          </div>
        </div>

        <div className="relative container">
          <div className="mx-auto max-w-4xl">
            <div
              id="time"
              className="flex items-center justify-between relative z-10 flex-col gap-8 md:gap-12"
            >
              <div className="text-content flex flex-col gap-3 md:gap-4 text-center">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
                  Nosso Time
                </h2>
                <p className="text-base sm:text-lg">
                  Somos um grupo de estudantes de Ciência da Computação da
                  Universidade IBMR, unidos pela paixão por tecnologia e dados.
                  Em nosso projeto atual, combinamos conhecimentos matemáticos e
                  habilidades de programação para desenvolver um modelo de
                  previsão de probabilidade de apostas. Nosso foco está em
                  analisar variáveis como faixa etária, classe social e gênero,
                  para oferecer insights que possam contribuir para a tomada de
                  decisões seguras e conscientes no setor de apostas.
                </p>
              </div>
              <div className="w-full md:max-w-[80%] flex justify-center items-center">
                <GroupWorkingIllustration />
              </div>
            </div>
          </div>

          <img
            src={dice}
            alt="dice"
            className="absolute top-2/3 -left-30 md:block hidden"
          />
        </div>
      </main>
    </>
  );
}
