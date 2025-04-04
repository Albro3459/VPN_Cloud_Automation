import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Success from "./pages/Success";
import About from "./pages/About";
import CreateUser from "./pages/CreateUser";
import CreateUserSuccess from "./pages/CreateUserSuccess";
import TerraformSuccess from "./pages/TerraformSuccess";
import CleanSuccess from "./pages/CleanSuccess";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/success" element={<Success />} />
        <Route path="/about" element={<About />} />
        <Route path="/createUser" element={<CreateUser />} />
        <Route path="/createUserSuccess" element={<CreateUserSuccess />} />
        <Route path="/terraformSuccess" element={<TerraformSuccess />} />
        <Route path="/cleanSuccess" element={<CleanSuccess />} />
      </Routes>
    </Router>
  );
};

export default App;