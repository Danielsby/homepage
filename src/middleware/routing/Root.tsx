import * as React from 'react';
import {Provider} from "react-redux";
import {BrowserRouter as Router, Route, Switch as RouteSwitch} from "react-router-dom";
import {SwitchMain} from "./SwitchMain";

interface RootProps {
    store: any
}

const Root: React.FC<RootProps> = ({store}) => (
    <Provider store={store}>
        <Router>
            <RouteSwitch>
                <Route exact path='/homepage' component={SwitchMain}></Route>
                <Route exact path='/schedule' component={SwitchMain}></Route>
                <Route exact path='/projects' component={SwitchMain}></Route>
                <Route exact path='/contact' component={SwitchMain}></Route>
            </RouteSwitch>
        </Router>
    </Provider>
);

export default Root;
