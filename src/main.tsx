import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  redirect,
  redirectDocument,
  RouterProvider,
} from "react-router-dom";
import { Home } from "./pages/home.tsx";
import { Layout } from "./pages/layout.tsx";
import { Profile } from "./pages/profile.tsx";
import { getProfileData } from "./services/save-profile-data.ts";

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
        path: "/profile",
        element: <Profile />,
        loader: () => {
          const userData = getProfileData();
          if (!userData) {
            return redirectDocument("/");
          }
          return userData;
        },
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
