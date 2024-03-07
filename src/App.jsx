import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Test from "./components/Test";
import Home from "./components/Home";
import CardDesign2 from "./components/CardDesign2";
import CardDesign3 from "./components/CardDesign3";
import CardDesign4 from "./components/CardDesign4";
import CardDesign5 from "./components/CardDesign5";
import CardDesign6 from "./components/CardDesign6";
import CardDesign7 from "./components/CardDesign7";
import ForgotPage from "./components/ForgotPage";
import Question from "./components/Question";

export default function App() {
  return (
    <BrowserRouter>
      <Home />
      <Routes>
        <Route path="/test" element={<Test />} />
        <Route path="/card2" element={<CardDesign2 />} />
        <Route path="/card3" element={<CardDesign3 />} />
        <Route path="/card4" element={<CardDesign4 />} />
        <Route path="/card5" element={<CardDesign5 />} />
        <Route path="/card6" element={<CardDesign6 />} />
        <Route path="/card7" element={<CardDesign7 />} />
        <Route path="/reset-password" element={<ForgotPage />} />
        <Route path="/question" element={<Question />} />
      </Routes>
    </BrowserRouter>
  );
}
