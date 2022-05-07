import React from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <div className="app">
        <Routes>
          <Route path="/" element={ <Home />}></Route>
          <Route path="/checkout" element = {<Checkout />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
