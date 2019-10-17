import * as React from 'react';
import {Provider} from "react-redux";
import {BrowserRouter as Router, Route, Switch as RouteSwitch} from "react-router-dom";
import App from "../../pages/Home";

interface RootProps {
    store: any
}

const Root: React.FC<RootProps> = ({store}) => (
    <Provider store={store}>
        <Router>
            <RouteSwitch>
                <Route exact path='/homepage' component={App}></Route>
                <Route exact path='/schedule' component={App}></Route>
                <Route exact path='/projects' component={App}></Route>
                <Route exact path='/contact' component={App}></Route>
            </RouteSwitch>
        </Router>
    </Provider>
);

export default Root;