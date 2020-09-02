import React from "react";
import { BrowserRouter , Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SeriesPage from "./pages/SeriesPage";

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" component={HomePage} exact/>
            <Route path="/" component={SeriesPage}/>
        </Switch>
    </BrowserRouter>
);

export default Routes;