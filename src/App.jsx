import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Test from "./components/Test";
import Home from "./components/Home";
import CardDesign2 from "./components/CardDesign2";
import CardDesign3 from "./components/CardDesign3";
import CardDesign4 from "./components/CardDesign4";
import CardDesign5 from "./components/CardDesign5";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/test" element={<Test />} />
        <Route path="/card2" element={<CardDesign2 />} />
        <Route path="/card3" element={<CardDesign3 />} />
        <Route path="/card4" element={<CardDesign4 />} />
        <Route path="/card5" element={<CardDesign5 />} />
      </Routes>
    </BrowserRouter>
  );
}
