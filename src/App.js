import React, {useEffect, useState} from 'react';
import axios from 'axios';

import {Header} from "./components";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import {Route} from "react-router-dom";


function App() {

  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
      axios.get('http://localhost:3000/db.json').then(({data}) => {
          setPizzas(data.pizzas);
      });
  }, []);

  return (
      <div className="wrapper">
        <Header />
        <div className="content">
          <Route render={() => <Home items={pizzas}/>} path="/" exact/>
          <Route component={Cart} path="/cart" />
        </div>
      </div>
  );
}

export default App;
