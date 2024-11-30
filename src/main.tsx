import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./pages/page.tsx";
import { Layout } from "./pages/layout.tsx";
import { ResultPage } from "./pages/result/[resultId]/page.tsx";
import { DataPage } from "./pages/data/page.tsx";
import { RankingsPage } from "./pages/rankings/page.tsx";
import { OdsPage } from "./pages/ods/page.tsx";
import { MathPage } from "./pages/math/page.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/result/:resultId",
        element: <ResultPage />,
      },
      {
        path: "/data",
        element: <DataPage />,
      },
      {
        path: "/rankings",
        element: <RankingsPage />,
      },
      {
        path: "/ods",
        element: <OdsPage />,
      },
      {
        path: "/math",
        element: <MathPage />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
