import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import store from './redux/store';
import {Header} from "./components";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import {Route} from "react-router-dom";
import {setPizzas} from './redux/actions/pizzas';


class App extends React.Component {

    componentDidMount() {
        axios.get('http://localhost:3000/db.json').then(({data}) => {
                   this.props.setPizzas(data.pizzas);
                });
    }

    render() {

        // useEffect(() => {
        //     axios.get('http://localhost:3000/db.json').then(({data}) => {
        //         setPizzas(data.pizzas);
        //     });
        // }, []);

        return (
            <div className="wrapper">
                <Header/>
                <div className="content">
                    <Route render={() => <Home items={this.props.items}/>} path="/" exact/>
                    <Route component={Cart} path="/cart"/>
                </div>
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        items: state.pizzas.items
    }
}


const mapDispatchToProps = {
    setPizzas
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
