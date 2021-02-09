import React from 'react';
import {Header} from "./components";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import {Route} from "react-router-dom";


function App() {
    return (
            <div className="wrapper">
                <Header/>
                <div className="content">
                    <Route component={Home} path="/" exact/>
                    <Route component={Cart} path="/cart"/>
                </div>
            </div>
        );
}

export default App;




// class App extends React.Component {
//
//     componentDidMount() {
//         axios.get('http://localhost:3000/db.json').then(({data}) => {
//                    this.props.setPizzas(data.pizzas);
//                 });
//     }
//
//     render() {
//         return (
//             <div className="wrapper">
//                 <Header/>
//                 <div className="content">
//                     <Route render={() => <Home items={this.props.items}/>} path="/" exact/>
//                     <Route component={Cart} path="/cart"/>
//                 </div>
//             </div>
//         );
//     }
// }
//
// const mapStateToProps = (state) => {
//     return {
//         items: state.pizzas.items,
//         filters: state.filters
//     }
// }
//
// const mapDispatchToProps = {
//     setPizzas
// }

// export default connect(mapStateToProps, mapDispatchToProps)(App);
