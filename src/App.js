import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Layout/Header";
import Main from "./Layout/Main";
import Footer from "./Layout/Footer";
import { Home, About, AdvanceSearch, Login, SignOut } from "./Pages";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/acvance-search" element={<AdvanceSearch />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-out" element={<SignOut />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
