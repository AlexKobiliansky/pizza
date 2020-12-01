import React from 'react';
import {Header} from "./components";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import {Route} from "react-router-dom";

function App() {
  return (
      <div className="wrapper">
        <Header />
        <div className="content">
          <Route component={Home} path="/" exact/>
          <Route component={Cart} path="/cart" />
        </div>
      </div>
  );
}

export default App;
