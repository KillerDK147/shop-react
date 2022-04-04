import logo from "./logo.svg";
import Cards from "./component/Card";
import "./App.css";
import { Col, Container, Row } from "react-bootstrap";
import React from "react";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <h1>hello mr.negativ best programmer</h1>
      <Container>
        <Row>
          <Col></Col>
          <Col>
            <Cards />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
