import placeholder from "../assets/placeholder.jpg";
import imgComo from "../assets/Imagem-como.jpg";
import grupoimg from "../assets/grupo-de-facebook.jpg";
import { Hero } from "@/components/hero";
import { FeatureSection } from "@/components/feature-section";
import { Helmet } from "react-helmet-async";
import blobTopRight from "../assets/blob-top-right.png";
import blobLeft from "../assets/blob-left.png";
import dice from "../assets/dice.png";
import odsImage from "../assets/ods.png";

export function Home() {
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>

      <header
        id="top"
        className="-mt-16 flex flex-col h-[600px] justify-between relative after:content-[' '] after:absolute after:inset-0 after:z-[-1] after:bg-hero-fade text-white background-hero-fade"
      >
        <Hero />
      </header>
      <main className="flex flex-col gap-32 pb-[280px] pt-32 overflow-x-hidden">
        <div className="relative">
          <div className="container mx-auto">
            <FeatureSection
              id="por-que"
              direction="row"
              title="Por que?"
              description="Saber a probabilidade de quanto você pode perder em um jogo de aposta é essencial para tomar decisões mais informadas e gerenciar seu risco. Essa previsão ajuda a entender o valor esperado das apostas e o quanto você está realmente disposto a investir (ou perder) antes de alcançar seus objetivos financeiros. Ela também pode ajudar a evitar perdas significativas e descontrole financeiro, especialmente em apostas que podem ser atraentes mas com pouca chance de retorno. Em um contexto mais amplo, essa análise de probabilidade pode apoiar a criação de estratégias de apostas sustentáveis, definir limites de perda e até estabelecer um orçamento para apostas, o que ajuda a evitar comportamentos de risco ou viciantes."
              image={placeholder}
              imageWithShadow
            />
          </div>

          <img
            src={blobTopRight}
            alt="blob"
            className="absolute -top-20 -right-10"
          />
        </div>
        <div className="relative">
          <div className="container mx-auto">
            <FeatureSection
              id="como"
              direction="row"
              isInverted
              title="Como?"
              description="O propósito é gerar insights e previsões sobre o perfil dos apostadores, oferecendo uma base sólida para decisões informadas em políticas públicas e conscientização do público."
              image={imgComo}
              imageWithShadow
            />
          </div>

          <img
            src={blobLeft}
            alt="blob"
            className="absolute top-1/2 -translate-y-1/2 -left-64"
          />
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
            </div>
            <img
              className="h-[450px] w-auto rounded-lg"
              src={odsImage}
              alt="ODS"
            />
          </div>
        </div>

        <div className="relative">
          <div className="container mx-auto max-w-4xl">
            <FeatureSection
              id="time"
              direction="column"
              title="Nosso Time"
              description="Somos um grupo de estudantes de Ciência da Computação da Universidade IBMR, unidos pela paixão por tecnologia e dados. Em nosso projeto atual, combinamos conhecimentos matemáticos e habilidades de programação para desenvolver um modelo de previsão de probabilidade de apostas. Nosso foco está em analisar variáveis ​​como faixa etária, classe social e gênero, para oferecer insights que possam contribuir para a tomada de decisões seguras e conscientes no setor de apostas."
              image={grupoimg}
              shouldCentralizeText
              imageWithShadow
            />
          </div>

          <img src={dice} alt="dice" className="absolute top-2/3 left-0" />
        </div>
      </main>
    </>
  );
}
