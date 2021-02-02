import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import Signup from "./components/Signup.js";

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Container>
          <h1>Welcome to FitSpott</h1>
          <Route path="/signup" component={Signup} />
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
