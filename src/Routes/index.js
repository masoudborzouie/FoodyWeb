import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";
import { Home, About, AdvanceSearch, Login, SignUp } from "../Pages";

export const route = {
  root: "/",
  home: "/home",
  advanceSearch: "/advance-search",
  login: "/login",
  signUp: "/sign-up",
  aboutUs: "/about-us",
};

function Index() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path={route.root} element={<Home />} />
        <Route path={route.home} element={<Home />} />
        <Route path={route.aboutUs} element={<About />} />
        <Route path={route.advanceSearch} element={<AdvanceSearch />} />
        <Route path={route.login} element={<Login />} />
        <Route path={route.signUp} element={<SignUp />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}
export default Index;
