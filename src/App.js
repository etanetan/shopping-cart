import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./components/Home";
import Navigation from "./components/Navigation";
import Shop from "./components/Shop";

function App() {
  return (
    <Router>
      <Navigation />
      <Route exact path="/" component={Home} />
      <Route path="/shop" component={Shop} />
    </Router>
  );
}

export default App;
