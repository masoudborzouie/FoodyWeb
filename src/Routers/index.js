import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";
import { Home, About, AdvanceSearch, Login, SignUp } from "../Pages";

export default function Routers() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/acvance-search" element={<AdvanceSearch />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}
