## Requisitos

- Node.js 18.0.0 ou superior
- NPM 9.0.0 ou superior

### Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:

```bash
VITE_PUBLIC_API_URL=http://localhost:3000
```

## Tecnologias

- React 18
- TypeScript
- Vite
- Recharts (para visualização de dados)
- Tailwind CSS (para estilização)

## Funcionalidades

- Visualização de dados demográficos dos apostadores:
  - Distribuição por idade
  - Distribuição por gênero
  - Distribuição por classe social
  - Nível de escolaridade

- Análise comportamental:
  - Frequência de apostas
  - Motivações para apostar
  - Resultados das apostas
  - Impacto no consumo

## Estrutura do Projeto

```
src/
  ├── components/     # Componentes reutilizáveis
  │   └── charts/    # Componentes de visualização de dados
  ├── pages/         # Páginas da aplicação
  │   ├── data/      # Visualização de dados estatísticos
  │   ├── ods/       # Objetivos de Desenvolvimento Sustentável
  │   └── result/    # Página de resultados individuais
  ├── services/      # Serviços e integrações
  ├── contexts/      # Contextos React
  └── assets/        # Recursos estáticos
```

## Desenvolvimento Local

1. Clone o repositório

```bash
git clone https://github.com/Brazilian-Online-Betting-Analysis/a3-matematica-react.git
cd a3-matematica-react
```

2. Instale as dependências:

```bash
npm install
```

3. Configure as variáveis de ambiente conforme descrito acima

4. Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

5. Acesse `http://localhost:5173`

## Fontes de Dados

Os dados apresentados nesta aplicação são provenientes de diversas fontes:
- Instituto DataSenado
- Strategy& - PWC
- Sociedade Brasileira de Varejo e Consumo (SBVC)

## Licença

MIT
