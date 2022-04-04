import logo from "./logo.svg";
import "./App.css";
import Card from "./component/card";
import { Col, Container, Row } from "react-bootstrap";
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
      <body>
        <h1>hello mr.negativ</h1>
        <Container>
          <Row>
            <Col>
              <Card />
            </Col>
            <Col>
              <Card />
            </Col>
          </Row>
        </Container>
      </body>
    </div>
  );
}

export default App;
