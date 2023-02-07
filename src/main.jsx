import React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Outlet,
} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import { QueryClient, QueryClientProvider } from "react-query";
import "./main.css";
import ErrorPage from "./routes/ErrorPage";
import PokemonList from "./routes/PokemonList";
import PokemonDetails from "./routes/PokemonDetails";

const AppLayout = () => (
  <>
    <Navbar />
    <Outlet />
  </>
);

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <PokemonList />,
      },
      {
        path: "/pokemon/:id",
        element: <PokemonDetails />,
      },
    ],
  },
]);

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </>
);
