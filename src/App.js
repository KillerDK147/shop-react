// import Cards from "./component/Card";
import Farmer from "./component/routes/Farmer";
import Home from "./component/routes/Home";
import LoginForm from "./component/routes/LoginForm";
import Logout from "./component/routes/logoutForm";
import Seller from "./component/routes/Seller";
import ProdForm from "./component/routes/ProdForm";
import DeleteUser from "./component/routes/DeleteUser";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Container } from "react-bootstrap";
import React from "react";
import Menu from "./component/Menu";
import { ToastContainer } from "react-toastify";
import { useState, useEffect } from "react";
import { getCurrentUser } from "./services/authService";
function App() {
  const [User, setUser] = useState({});
  useEffect(() => {
    setUser(getCurrentUser());
  }, []);

  return (
    <div className="App">
      <Container>
        <h1>hello mr.negativ best programmer</h1>
        <Menu user={User} />
        <ToastContainer />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/farmer" element={<Farmer />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/user" element={<Seller />} />
          <Route path="/deleteUser" element={<DeleteUser />} />
          <Route path="/prodForm" element={<ProdForm />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
