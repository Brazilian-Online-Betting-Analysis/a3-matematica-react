import { Helmet } from "react-helmet-async";

import mathImage from "@/assets/math.jpeg";

export const MathPage = () => {
  return (
    <>
      <Helmet>
        <title>Matemática</title>
      </Helmet>

      <main className="min-h-[calc(100vh-209px)] pb-32 flex flex-col gap-12">
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 py-32">
          <div className="container">
            <h1 className="text-5xl font-bold text-white mb-6">
              Matemática e Cálculos
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl">
              Entenda como os modelos estatísticos ajudam a explorar dados e a
              tomar decisões baseadas em análises matemáticas.
            </p>
          </div>
        </div>

        <section
          aria-labelledby="regression-linear-multiple"
          className="container flex flex-col gap-8"
        >
          <h2 id="regression-linear-multiple" className="text-4xl">
            Regressão Linear Múltipla: Entendendo os Fatores que Influenciam o
            Gasto em Apostas
          </h2>

          <section
            aria-labelledby="regression-linear-multiple-introduction"
            className="flex flex-col gap-4"
          >
            <h3
              id="regression-linear-multiple-introduction"
              className="text-2xl"
            >
              Introdução
            </h3>

            <p>
              Este estudo utiliza a <strong>regressão linear múltipla</strong>,
              uma ferramenta estatística poderosa, para investigar como
              variáveis socioeconômicas e comportamentais afetam o gasto mensal
              com apostas. Com um coeficiente de determinação (R2) de 0,94, o
              modelo apresenta alta capacidade explicativa, revelando
              importantes insights sobre o comportamento dos apostadores.
              Equação da regressão linear múltipla, representada por Ŷ:
            </p>

            <div className="py-4">
              <img src={mathImage} alt="Matemática" className="w-full" />
            </div>
          </section>

          <section
            aria-labelledby="analyzed-variables"
            className="container flex flex-col gap-4"
          >
            <h3 id="analyzed-variables" className="text-2xl">
              Variáveis analisadas
            </h3>

            <p>
              As variáveis independentes são as que inserimos no modelo para
              calcular o valor da variável dependente. Ou seja, as independentes
              são os inputs ou entradas, e a dependente é o resultado ou saída.
            </p>

            <p>O modelo considera cinco variáveis independentes principais:</p>

            <ul className="list-disc list-inside">
              <li>
                <strong>Idade</strong>: Faixa etária do apostador.
              </li>
              <li>
                <strong>Classe Social</strong>: Classificação econômica (A/B, C,
                D/E).
              </li>
              <li>
                <strong>Gênero</strong>: Masculino (0) ou Feminino (1).
              </li>
              <li>
                <strong>Frequência de Apostas</strong>: Número médio de apostas
                semanais.
              </li>
              <li>
                <strong>Renda Mensal</strong>: Capacidade financeira em reais.
              </li>
            </ul>

            <p>
              A variável dependente é o{" "}
              <strong>gasto mensal com apostas</strong>, representando a
              previsão do valor mensal gasto em apostas por cada participante.
            </p>
          </section>
          <section
            aria-labelledby="methodology"
            className="container flex flex-col gap-4"
          >
            <h3 id="methodology" className="text-2xl">
              Metodologia
            </h3>

            <p>Os dados foram divididos em dois conjuntos:</p>

            <ul className="list-disc list-inside">
              <li>
                <strong>Treinamento:</strong>: Para ajustar o modelo e estimar
                os coeficientes.
              </li>
              <li>
                <strong>Teste:</strong>: Para validar a precisão do modelo em
                novos dados.
              </li>
            </ul>

            <p>
              A abordagem garante que o modelo seja robusto e aplicável a
              situações reais, evitando o sobreajuste (overfitting).
            </p>
          </section>
          <section
            aria-labelledby="results-and-interpretation"
            className="container flex flex-col gap-4"
          >
            <h3 id="results-and-interpretation" className="text-2xl">
              Resultados e Interpretação
            </h3>

            <p>
              Com R2=0,94, o modelo explica{" "}
              <strong>94% da variação no gasto mensal</strong>, indicando que as
              variáveis escolhidas têm forte impacto no comportamento de
              apostas. Os coeficientes permitem concluir, por exemplo, que maior
              renda e frequência de apostas estão associadas a gastos mais
              altos, enquanto diferenças demográficas (idade, gênero e classe
              social) também desempenham papéis significativos.
            </p>
          </section>
          <section
            aria-labelledby="final-considerations"
            className="container flex flex-col gap-4"
          >
            <h3 id="final-considerations" className="text-2xl">
              Considerações Finais
            </h3>

            <p>
              A regressão linear múltipla demonstrou ser eficaz para entender
              padrões de consumo. Este método oferece subsídios valiosos para
              intervenções estratégicas, seja na criação de políticas públicas
              ou na elaboração de ações de conscientização para populações mais
              vulneráveis.
            </p>

            <p>
              Explore o poder da matemática para transformar dados em decisões
              informadas!
            </p>
          </section>
        </section>
      </main>
    </>
  );
};
