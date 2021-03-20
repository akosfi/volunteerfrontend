import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//
import "assets/styles/global.scss";

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact>
                    <p>Example</p>
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
