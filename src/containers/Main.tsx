import React from 'react';
import { NavLink, Switch, Route } from 'react-router-dom';

import {About} from "./About";
import {Frontpage} from "./Frontpage";
import {Projects} from "./Projects";
import {Schedule} from "./Schedule";
import {Contact} from "./Contact";

export const Main = () => (
    <Switch>
        <Route exact path='/homepage' component={Frontpage}></Route>
        <Route exact path='/about' component={About}></Route>
        <Route exact path='/schedule' component={Schedule}></Route>
        <Route exact path='/projects' component={Projects}></Route>
        <Route exact path='/contact' component={Contact}></Route>
    </Switch>
);