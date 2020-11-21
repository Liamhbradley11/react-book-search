import React, { Component } from "react";
import { Route, HashRouter } from "react-router-dom";
import Search from "./pages/Search";

import Save from "./pages/Save";
import NoMatch from "./pages/NoMatch";

function App() {
  return (
    <HashRouter basename="/" >
      <div>
      
            <Route exact path="/" component={Search} />
            <Route exact path="/Search" component={Search} />
            <Route exact path="/Save" component={Save} />
            <Route exact path="/Save/:id" component={Save} />
            <Route component={NoMatch} />

      </div>
    </HashRouter>


  );
}


export default App;
