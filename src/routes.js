import { Switch, Route } from "react-router-dom";
import React from "react";
import "./default.scss";
import SearchBar from "./components/searchBar";
import Results from "./components/results";
import Item from "./components/item";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={SearchBar} />
      <Route path="/items/:id" component={Item} />
      <Route path="/items" component={Results} />
    </Switch>
  );
};

export default Routes;
