import placeholder from "../assets/placeholder.jpg";
import { Hero } from "@/components/hero";
import { FeatureSection } from "@/components/feature-section";
import { Helmet } from "react-helmet-async";

export function Home() {
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>

      <header className="-mt-16 flex flex-col h-[600px] justify-between relative after:content-[' '] after:absolute after:inset-0 after:z-[-1] after:bg-hero-fade text-white background-hero-fade">
        <Hero />
      </header>
      <main className="flex flex-col gap-16 container mx-auto py-12">
        <FeatureSection
          id="por-que"
          direction="row"
          title="Por que?"
          description="Saber a probabilidade de quanto você pode perder em um jogo de aposta é essencial para tomar decisões mais informadas e gerenciar seu risco. Essa previsão ajuda a entender o valor esperado das apostas e o quanto você está realmente disposto a investir (ou perder) antes de alcançar seus objetivos financeiros. Ela também pode ajudar a evitar perdas significativas e descontrole financeiro, especialmente em apostas que podem ser atraentes mas com pouca chance de retorno. Em um contexto mais amplo, essa análise de probabilidade pode apoiar a criação de estratégias de apostas sustentáveis, definir limites de perda e até estabelecer um orçamento para apostas, o que ajuda a evitar comportamentos de risco ou viciantes."
          image={placeholder}
        />
        <FeatureSection
          id="como"
          direction="row"
          isInverted
          title="Como?"
          description="Saber a probabilidade de quanto você pode perder em um jogo de aposta é essencial para tomar decisões mais informadas e gerenciar seu risco. Essa previsão ajuda a entender o valor esperado das apostas e o quanto você está realmente disposto a investir (ou perder) antes de alcançar seus objetivos financeiros. Ela também pode ajudar a evitar perdas significativas e descontrole financeiro, especialmente em apostas que podem ser atraentes mas com pouca chance de retorno. Em um contexto mais amplo, essa análise de probabilidade pode apoiar a criação de estratégias de apostas sustentáveis, definir limites de perda e até estabelecer um orçamento para apostas, o que ajuda a evitar comportamentos de risco ou viciantes."
          image={placeholder}
        />
        <FeatureSection
          id="time"
          direction="column"
          title="Nosso Time"
          description="Somos um grupo de estudantes de Ciência da Computação da Universidade IBMR, unidos pela paixão por tecnologia e dados. Em nosso projeto atual, combinamos conhecimentos matemáticos e habilidades de programação para desenvolver um modelo de previsão de probabilidade de apostas. Nosso foco está em analisar variáveis ​​como faixa etária, classe social e gênero, para oferecer insights que possam contribuir para a tomada de decisões seguras e conscientes no setor de apostas."
          image={placeholder}
          shouldCentralizeText
        />
      </main>
      <footer className="border-t border-t-zinc-200 h-20 flex items-center">
        <div className="container mx-auto flex justify-between">
          <p>IBMR</p>
          <p>2024</p>
        </div>
      </footer>
    </>
  );
}
