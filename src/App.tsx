import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Events from "./pages/Events";
import Login from "./pages/Login";
import NavBar from "./components/NavBar";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Events />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
