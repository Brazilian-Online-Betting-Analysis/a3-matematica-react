import { Target } from "lucide-react";
import { Helmet } from "react-helmet-async";
import ods3Image from "@/assets/ods-3.png";
import ods8Image from "@/assets/ods-8.png";
import ods12Image from "@/assets/ods-12.png";
import ods16Image from "@/assets/ods-16.png";
import { Link } from "react-router-dom";

export function OdsPage() {
  return (
    <>
      <Helmet>
        <title>ODS</title>
      </Helmet>

      <main className="min-h-[calc(100vh-209px)] pb-32 flex flex-col gap-12 bg-gray-50">
        <div className="bg-gradient-to-r from-green-600 to-green-800 py-32">
          <div className="container">
            <h1 className="text-5xl font-bold text-white mb-8 items-center inline-flex gap-4">
              <Target className="size-14" />
              Impacto Social e ODS
            </h1>
            <p className="text-xl text-blue-50 max-w-2xl">
              Perceba como as apostas afetam a sociedade e como se relacionam
              com os objetivos de desenvolvimento sustentável (ODS) da ONU.
            </p>
          </div>
        </div>

        <section
          aria-labelledby="ods-intro"
          className="flex flex-col gap-6 container bg-white rounded-xl p-8 shadow-md"
        >
          <h2 id="ods-intro" className="text-4xl font-bold text-gray-800">
            Afinal, o que são ODS?
          </h2>

          <p className="text-lg text-gray-700 leading-relaxed">
            Conforme o site da ONU, os Objetivos de Desenvolvimento Sustentável
            (ODS) são 17 objetivos ambiciosos e interconectados que abordam os
            principais desafio de desenvolvimento enfrentados por pessoas, de
            forma global. Os ODS são um apelo global à ação para dar fim à
            pobreza, proteger o meio ambiente e o clima e garantir que todas as
            pessoas possam desfrutar de paz e prosperidade.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Precisamos entender como cada um dos ODS se relaciona com as
            apostas. Citamos alguns problemas sociais, e possíveis soluções para
            lidar com eles.
          </p>

          <span className="text-gray-600">
            Fonte:{" "}
            <Link
              className="text-blue-600 hover:underline hover:text-blue-700 transition-colors visited:hover:text-purple-600 visited:text-purple-600 visited:!underline"
              to="https://brasil.un.org/pt-br/sdgs"
              target="_blank"
            >
              https://brasil.un.org/pt-br/sdgs
            </Link>
          </span>
        </section>

        <section aria-labelledby="ods-3" className="container group">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 flex flex-col gap-6">
              <h2 className="text-4xl font-bold text-green-700" id="ods-3">
                Saúde e Bem Estar (3)
              </h2>
              <div className="flex flex-col gap-4">
                <h3 className="text-2xl font-semibold text-gray-800">
                  Problemas
                </h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Risco de vício em apostas (ludopatia)</li>
                  <li>Ansiedade e/ou estresse emocional</li>
                  <li>Distanciamento social</li>
                </ul>
              </div>
              <div className="flex flex-col gap-4">
                <h3 className="text-2xl font-semibold text-gray-800">
                  Soluções
                </h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Tratamentos para ludopatia</li>
                  <li>Campanhas de conscientização</li>
                </ul>
              </div>
            </div>

            <div className="flex justify-center items-center">
              <img
                src={ods3Image}
                alt="ODS 3"
                className="max-h-[325px] group-hover:scale-105 transition-transform duration-300 rounded-xl"
              />
            </div>
          </div>
        </section>

        <section aria-labelledby="ods-8" className="container group">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 flex flex-col gap-6">
              <h2 className="text-4xl font-bold text-red-700" id="ods-8">
                Trabalho Decente e Crescimento Econômico (8)
              </h2>
              <div className="flex flex-col gap-4">
                <h3 className="text-2xl font-semibold text-gray-800">
                  Problemas
                </h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Aumento do endividamento e instabilidade financeira</li>
                  <li>Crescimento da desigualdade econômica</li>
                  <li>Redistribuição econômica limitada</li>
                </ul>
              </div>
              <div className="flex flex-col gap-4">
                <h3 className="text-2xl font-semibold text-gray-800">
                  Soluções
                </h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
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

            <div className="flex justify-center items-center">
              <img
                src={ods8Image}
                alt="ODS 8"
                className="max-h-[325px] group-hover:scale-105 transition-transform duration-300 rounded-xl"
              />
            </div>
          </div>
        </section>

        <section aria-labelledby="ods-12" className="container group">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 flex flex-col gap-6">
              <h2 className="text-4xl font-bold text-yellow-600" id="ods-12">
                Consumo e Produção Responsáveis (12)
              </h2>
              <div className="flex flex-col gap-4">
                <h3 className="text-2xl font-semibold text-gray-800">
                  Problemas
                </h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Alteração dos hábitos de consumo</li>
                  <li>Propaganda intensa e acesso irrestrito</li>
                  <li>Efeito de normalização</li>
                </ul>
              </div>
              <div className="flex flex-col gap-4">
                <h3 className="text-2xl font-semibold text-gray-800">
                  Soluções
                </h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Campanhas de jogo responsável</li>
                  <li>Limitações publicitárias</li>
                </ul>
              </div>
            </div>

            <div className="flex justify-center items-center">
              <img
                src={ods12Image}
                alt="ODS 12"
                className="max-h-[325px] group-hover:scale-105 transition-transform duration-300 rounded-xl"
              />
            </div>
          </div>
        </section>

        <section aria-labelledby="ods-16" className="container group">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 flex flex-col gap-6">
              <h2 className="text-4xl font-bold text-blue-700" id="ods-16">
                Paz, Justiça e Instituições Eficazes (16)
              </h2>
              <div className="flex flex-col gap-4">
                <h3 className="text-2xl font-semibold text-gray-800">
                  Problemas
                </h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Criminalidade associada ao jogo</li>
                  <li>
                    Ausência de campanhas de conscientização sobre educação
                    financeira e apostas
                  </li>
                </ul>
              </div>
              <div className="flex flex-col gap-4">
                <h3 className="text-2xl font-semibold text-gray-800">
                  Soluções
                </h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
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

            <div className="flex justify-center items-center">
              <img
                src={ods16Image}
                alt="ODS 16"
                className="max-h-[325px] group-hover:scale-105 transition-transform duration-300 rounded-xl"
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
