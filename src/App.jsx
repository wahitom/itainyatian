import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";

import Home from "./pages/Home";
import Properties from "./pages/Properties";
import About from "./pages/About";
import Contact from "./pages/Contact";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/properties" element={<Properties />} />
        <Route path="/aboutus" element={<About />} />
        <Route path="/contactus" element={<Contact />} />

        {/* consider creating another page to handle not found errors */}
        <Route path="*" element={<div>404 - Not Found</div>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
