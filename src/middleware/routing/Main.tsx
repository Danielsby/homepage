import React from 'react';
import {Switch, Route} from 'react-router-dom';

import AboutContainer from "../../containers/AboutContainer";
import {HomeContainer} from "../../containers/HomeContainer";
import ProjectsContainer from "../../containers/ProjectsContainer";
import ScheduleContainer from "../../containers/ScheduleContainer";
import ContactContainer from "../../containers/ContactContainer";

export const Main = () => (
    <Switch>
        <Route exact path='/homepage' component={HomeContainer}></Route>
        <Route exact path='/schedule' component={ScheduleContainer}></Route>
        <Route exact path='/projects' component={ProjectsContainer}></Route>
        <Route exact path='/contact' component={ContactContainer}></Route>
    </Switch>
);