import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Landing from "./Landing";
import Homes from "./Homes";
import Header from "./Header";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header placeholder="Try “Miami”" />
          <Route exact path="/" component={Landing} />
          <Route path="/homes" component={Homes} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
