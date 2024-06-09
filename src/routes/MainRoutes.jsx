import React from "react";
import AdminPage from "../pages/AdminPage";
import { Route, Routes } from "react-router-dom";
import EditPage from "../pages/EditPage";
import HomePage from "../pages/HomePage";
import AnimePage from "../pages/AnimePage";
import AnimeDetails from "../components/product/AnimeDetails";
import RegisterPage from "../pages/RegisterPage";
import LoginPage from "../pages/LoginPage";
export const ADMIN_ROUTES = [
  { id: 1, link: "/admin", element: <AdminPage /> },
  { id: 2, link: "/edit/:id", element: <EditPage /> },
];

const PUBLIC_POUTES = [
  { id: 1, link: "/anime", element: <AnimePage /> },
  { id: 2, link: "/home", element: <HomePage /> },
  { id: 3, link: "/details/:id", element: <AnimeDetails /> },
  { id: 4, link: "/register", element: <RegisterPage /> },
  { id: 5, link: "/login", element: <LoginPage/> },
];

const MainRoutes = () => {
  return (
    <Routes>
      {ADMIN_ROUTES.map((elem) => (
        <Route path={elem.link} element={elem.element} key={elem.id} />
      ))}
      {PUBLIC_POUTES.map((elem) => (
        <Route path={elem.link} element={elem.element} key={elem.id} />
      ))}
    </Routes>
  );
};

export default MainRoutes;
