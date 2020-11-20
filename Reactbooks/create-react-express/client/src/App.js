import React, { Component } from "react";
import { Route } from "react-router-dom";
//import Search from "./components/pages/Search";
import Search from "./pages/Search";

import Save from "../src/pages/Save";
// import NoMatch from "./pages/NoMatch";

function App() {
  return (
    // <Router>
    //   <div>
      
    //         <Route exact path="/" component={Search} />
    //         <Route exact path="/Search" component={Search} />
    //         <Route exact path="/Save" component={Save} />
    //         <Route exact path="/Save/:id" component={Save} />
    //         <Route component={NoMatch} />

  
    //   </div>
    // </Router>
    <Save />
  );
}


export default App;
