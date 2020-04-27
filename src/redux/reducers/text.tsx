import * as React from 'react';
import {SHOW_TEXT} from "../actions/constants/actionTypes";

const text = (state = {}, action:any) => {
    switch (action.type) {
        case SHOW_TEXT:
            return action.SHOW_TEXT;
        default:
            return state;
    }
};

export default text;
