import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Signup from "./components/signup/Signup";
import Pad from "./components/sound_pad/Pad.jsx";

function App() {
  return (
    <>
      {/* <Signup /> */}
      {/* <Pad /> */}
      <Header />
      <Main />
    </>
  );
}

export default App;
