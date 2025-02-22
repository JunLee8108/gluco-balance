import logo from "./logo.svg";
import Home from "./pages/Home";
import Diet from "./pages/Diet";
import Navbar from "./components/layouts/Navbar";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/diet" exact element={<Diet />} />
      </Routes>
    </div>
  );
}

export default App;
