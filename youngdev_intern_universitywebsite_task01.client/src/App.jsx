import { useEffect, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// Components
import Header from "./components/Header";
import Footer from "./components/Footer";

import "./App.css";
// Pages
import VisitorHome from "./pages/Visitor/Home";
import VisitorContact from "./pages/Visitor/Contact/Contact";
import VisitorAbout from "./pages/Visitor/About/About";

function App() {
  // University Layout Design Starts Here
  // Router Dom
  const router = createBrowserRouter([
    { path: "/", element: <VisitorHome /> },
    { path: "/home", element: <VisitorHome /> },
    { path: "/contact", element: <VisitorContact /> },
    { path: "/about", element: <VisitorAbout /> },
  ]);
  return (
    <>
      <Header />
      <RouterProvider router={router} />
      <Footer />
    </>
  );
}

export default App;
