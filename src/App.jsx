import Header from "./components/Header";
import Hero from "./components/Hero";
// import React, { useState } from "react";
import Tabs from "./components/Tabs";
import Messages from "./pages/Messages";
import Login from "./components/Login";
import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Third from "./pages/Third";
import PageNew from "./pages/PageNew";
import First from "./pages/First";
import Fourth from "./pages/Fourth";
import Stacks from "./pages/Stacks";
import Time from "./pages/Time";

function App() {
  return (
    <>
      {/* <Hero /> */}
      <Routes>
        <Route path="/" element={<First />} />
        <Route path="/Hero" element={<Hero />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Tabs" element={<Tabs />} />
        <Route path="/PageNew" element={<PageNew />} />
        <Route path="/Messages" element={<Messages />} />
        <Route path="/First" element={<First />} />
        <Route path="/Third" element={<Third />} />
        <Route path="/Nav" element={<Nav />} />
        <Route path="/Fourth" element={<Fourth />} />
        <Route path="/Stacks" element={<Stacks />} />
        <Route path="/Time" element={<Time />} />
      </Routes>
    </>
  );
}

export default App;
