import * as React from 'react';
import { NavLink } from 'react-router-dom';

export const MainNavigationBar: React.FC = () => {
    return (
        <ul>
            <li><NavLink to='/homepage'>News</NavLink></li>
            <li><NavLink to='/Himju'>Projects</NavLink></li>
            <li><NavLink to='/projects'>About</NavLink></li>
        </ul>
    )
};
