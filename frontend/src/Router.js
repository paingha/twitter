import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "./App";

import Index from "../src/pages/index"

const Router=(props)=>(
    <BrowserRouter>
        <Switch>
            <App>
                <Route exact path="/" component={Index} />
                <Route path="/:username" component={Index} />
            </App>
        </Switch>
    </BrowserRouter>
)

export default Router;