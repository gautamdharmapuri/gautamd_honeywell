import React from "react";
import { Switch, Route } from "react-router-dom";
import HomeComponent from "../src/Components/homeComponent";
import AddressComponent from "../src/Components/address/addressComponent";

const Routes = (props) => {

    return (
        <Switch>
            <Route exact path="/" component={HomeComponent} />
            <Route exact path="/address" component={AddressComponent} />
        </Switch>
    );
}

export default Routes;