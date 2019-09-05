import * as React from 'react';
import { NavLink } from 'react-router-dom';

export const MainNavigationBar: React.FC = () => {
    return (
        <ul>
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/schedule'>Schedule</NavLink></li>
            <li><NavLink to='/projects'>Projects</NavLink></li>
            <li><NavLink to='/about'>About</NavLink></li>
            <li><NavLink to='/contact'>Contact</NavLink></li>
        </ul>
    )
};