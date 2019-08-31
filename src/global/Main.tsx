import React from 'react';
import { NavLink, Switch, Route } from 'react-router-dom';

import {About} from "./layouts/pages/About";
import {Frontpage} from "./layouts/pages/Frontpage";
import {Projects} from "./layouts/pages/Projects";
import {Status} from "./layouts/pages/Status";
import {Contact} from "./layouts/pages/Contact";

export const Main = () => (
    <Switch>
        <Route exact path='/' component={Frontpage}></Route>
        <Route exact path='/about' component={About}></Route>
        <Route exact path='/status' component={Status}></Route>
        <Route exact path='/projects' component={Projects}></Route>
        <Route exact path='/contact' component={Contact}></Route>
    </Switch>
);