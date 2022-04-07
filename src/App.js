// import Cards from "./component/Card";
import Farmer from "./component/routes/Farmer";
import Home from "./component/routes/Home";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Container } from "react-bootstrap";
import React from "react";
function App() {
  return (
    <div className="App">
      <h1>hello mr.negativ best programmer</h1>
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/farmer" element={<Farmer />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
