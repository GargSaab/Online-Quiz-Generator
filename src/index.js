import React from "react";
import ReactDom from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./assests/styles.css";
import CustomTest from "./components/CustomTest";
import HomePage from "./components/HomePage.js";
import Quetions from "./components/Quetions.js";
import Resultpage from "./components/Resultpage";
import SetInstructions from "./components/SetInstructions";

ReactDom.render(
  <Router>
    <Route exact path="/" component={HomePage} />
    <Route path="/test" component={Quetions} />
    <Route path="/result" component={Resultpage} />
    <Route path="/customtest" component={CustomTest} />
    <Route path="/setinstructions" component={SetInstructions} />
  </Router>,
  document.getElementById("root")
);
