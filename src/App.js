import React from "react";
// import { connect } from 'react-redux';
// import { fetchAPIRequest } from './actions/index'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import routes from "./routes";
const ConnectRoutes = (routes) => {
    var result = null;
    if (routes.length > 0) {
        result = routes.map((route, index) => {
            return (
                <Route
                    key={index}
                    path={route.path}
                    exact={route.exact}
                    component={route.main}
                />
            );
        });
    }
    return result;
};

function App() {
    return (
        <div className="App">
            <Router>
                <Switch>{ConnectRoutes(routes)}</Switch>
            </Router>
        </div>
    );
}
export default App;
