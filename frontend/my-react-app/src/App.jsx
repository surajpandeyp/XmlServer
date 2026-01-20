import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Xmlpage from "./pages/Xmlpage";
import Paragraf from "./pages/Paragraf";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/xml" element={<Xmlpage />} />
        <Route path="/secret" element={<Paragraf />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
