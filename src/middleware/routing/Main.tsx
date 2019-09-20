import React from 'react';
import { NavLink, Switch, Route } from 'react-router-dom';

import AboutContainer from "../../containers/AboutContainer";
import {Frontpage} from "../../containers/Frontpage";
import ProjectsContainer from "../../containers/ProjectsContainer";
import ScheduleContainer from "../../containers/ScheduleContainer";
import ContactContainer from "../../containers/ContactContainer";

export const Main = () => (
    <Switch>
        <Route exact path='/homepage' component={Frontpage}></Route>
        <Route exact path='/about' component={AboutContainer}></Route>
        <Route exact path='/schedule' component={ScheduleContainer}></Route>
        <Route exact path='/projects' component={ProjectsContainer}></Route>
        <Route exact path='/contact' component={ContactContainer}></Route>
    </Switch>
);