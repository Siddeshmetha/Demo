import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./component/pages/Home";
import Login from "./component/pages/Login";
import Signup from "./component/pages/Signup";
import About from "./component/pages/About";
import Base from "./component/Base";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element=<Base /> />
        <Route path="/login" element=<Login /> />
        <Route path="/Signup" element=<Signup /> />
        <Route path="/About" element=<About /> />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
