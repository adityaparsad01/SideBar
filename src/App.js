import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Reports from "./pages/Reports";
import Products from "./pages/Products";
import Team from "./pages/Team";
import Contact from "./pages/Contact";
import Support from "./pages/Support";

export default function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/products" component={Products} />
          <Route path="/reports" component={Reports} />
          <Route path="/reports" component={Team} />
          <Route path="/reports" component={Contact} />
          <Route path="/reports" component={Support} />
        </Switch>
      </Router>
    </>
  );
}
