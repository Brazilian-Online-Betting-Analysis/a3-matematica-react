import { Target } from "lucide-react";
import { Helmet } from "react-helmet-async";
import ods3Image from "@/assets/ods-3.png";
import ods8Image from "@/assets/ods-8.png";
import ods16Image from "@/assets/ods-16.png";
import { Link } from "react-router-dom";

export function OdsPage() {
  return (
    <>
      <Helmet>
        <title>ODS</title>
      </Helmet>

      <main className="min-h-[calc(100vh-209px)] pb-32 flex flex-col gap-12">
        <div className="bg-gradient-to-r from-green-600 to-green-800 py-32">
          <div className="container">
            <h1 className="text-5xl font-bold text-white mb-6 items-center inline-flex gap-4">
              <Target className="size-12" />
              Impacto Social e ODS
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl">
              Perceba como as apostas afetam a sociedade e como se relacionam
              com os objetivos de desenvolvimento sustentável (ODS) da ONU.
            </p>
          </div>
        </div>

        <section
          aria-labelledby="ods-intro"
          className="flex flex-col gap-4 container"
        >
          <h2 id="ods-intro" className="text-4xl">
            Afinal, o que são ODS?
          </h2>

          <p>
            Conforme o site da ONU, os Objetivos de Desenvolvimento Sustentável
            (ODS) são 17 objetivos ambiciosos e interconectados que abordam os
            principais desafio de desenvolvimento enfrentados por pessoas, de
            forma global. Os ODS são um apelo global à ação para dar fim à
            pobreza, proteger o meio ambiente e o clima e garantir que todas as
            pessoas possam desfrutar de paz e prosperidade.
          </p>
          <p>
            Precisamos entender como cada um dos ODS se relaciona com as
            apostas. Citamos alguns problemas sociais, e possíveis soluções para
            lidar com eles.
          </p>

          <span>
            Fonte:{" "}
            <Link
              className="text-blue-600 hover:underline visited:text-purple-600 visited:!underline"
              to="https://brasil.un.org/pt-br/sdgs"
              target="_blank"
            >
              https://brasil.un.org/pt-br/sdgs
            </Link>
          </span>
        </section>

        <section aria-labelledby="ods-3" className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white rounded-lg flex flex-col gap-4">
              <h2 className="text-4xl" id="ods-3">
                Saúde e Bem Estar (3)
              </h2>
              <div className="flex flex-col gap-2">
                <h3 className="text-2xl">Problemas</h3>
                <ul className="list-disc list-inside">
                  <li>Risco de vício em apostas (ludopatia)</li>
                  <li>Ansiedade e/ou stress emocional</li>
                  <li>Distanciamento social</li>
                </ul>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-2xl">Soluções</h3>
                <ul className="list-disc list-inside">
                  <li>Tratamentos para ludopatia</li>
                  <li>Campanhas de conscientização</li>
                </ul>
              </div>
            </div>

            <div className="flex justify-center">
              <img src={ods3Image} alt="ODS 3" className="max-h-[325px]" />
            </div>
          </div>
        </section>

        <section aria-labelledby="ods-8" className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white rounded-lg flex flex-col gap-4">
              <h2 className="text-4xl" id="ods-8">
                Trabalho Decente e Crescimento Econômico (8)
              </h2>
              <div className="flex flex-col gap-2">
                <h3 className="text-2xl">Problemas</h3>
                <ul className="list-disc list-inside">
                  <li>Aumento do endividamento e instabilidade financeira</li>
                  <li>Crescimento da desigualdade econômica</li>
                  <li>Redistribuição econômica limitada</li>
                </ul>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-2xl">Soluções</h3>
                <ul className="list-disc list-inside">
                  <li>
                    Arrecadação governamental aplicada em programas sociais
                  </li>
                  <li>
                    Fomento à empregos, incentivo a atividades econômicas
                    relacionadas
                  </li>
                  <li>Evita evasão fiscal</li>
                </ul>
              </div>
            </div>

            <div className="flex justify-center">
              <img src={ods8Image} alt="ODS 8" className="max-h-[325px]" />
            </div>
          </div>
        </section>
        <section aria-labelledby="ods-16" className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white rounded-lg flex flex-col gap-4">
              <h2 className="text-4xl" id="ods-16">
                Paz, Justiça e Instituições Eficazes (16)
              </h2>
              <div className="flex flex-col gap-2">
                <h3 className="text-2xl">Problemas</h3>
                <ul className="list-disc list-inside">
                  <li>Criminalidade associada ao jogo</li>
                  <li>
                    Ausência de campanhas de conscientização sobre educação
                    financeira e apostas
                  </li>
                </ul>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-2xl">Soluções</h3>
                <ul className="list-disc list-inside">
                  <li>Proteção ao consumidor</li>
                  <li>
                    Combate a lavagem de dinheiro, evasão de divisas e
                    manipulação de resultados esportivos
                  </li>
                  <li>
                    Criação de órgão de regulamentação independente e medidas de
                    fiscalização
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex justify-center">
              <img src={ods16Image} alt="ODS 16" className="max-h-[325px]" />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
