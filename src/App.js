import react from "react";
import Home from "./Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<div>Hiiiiiiiiiiiiiiiiii</div>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
