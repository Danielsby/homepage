import * as types from './constants/actionTypes';

const showText = (text: string) => ({
    type: types.SHOW_TEXT,
    text
});