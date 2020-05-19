import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Weather from "../views/Weather";
import Country from "../views/Country";

function RootRouter() {
    return (

        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Weather} />
                <Route exact path="/:id" component={Country} />

            </Switch>
        </BrowserRouter>
    )

}

export default RootRouter;