import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Test from "./components/Test";
import Home from "./components/Home";
import CardDesign2 from "./components/CardDesign2";
import CardDesign3 from "./components/CardDesign3";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/test" element={<Test />} />
        <Route path="/card2" element={<CardDesign2 />} />
        <Route path="/card3" element={<CardDesign3 />} />
      </Routes>
    </BrowserRouter>
  );
}
