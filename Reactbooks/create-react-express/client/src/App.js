import React, { Component } from "react";
import Search from "./pages/Search";
import Save from "./pages/Save";
import NoMatch from "./pages/NoMatch";

function App() {
  return (
    <Router>
      <div>
        <StoreProvider>
          <Nav />
          <Switch>
            <Route exact path="/" component={Search} />
            <Route exact path="/Search" component={Search} />
            <Route exact path="/Save" component={Save} />
            <Route exact path="/Save/:id" component={Save} />
            <Route component={NoMatch} />
          </Switch>
        </StoreProvider>
      </div>
    </Router>
  );
}


export default App;
