import * as React from 'react';
import { NavLink } from 'react-router-dom';

export const MainNavigationBar: React.FC = () => {
    return (
        <ul>
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/status'>Status</NavLink></li>
            <li><NavLink to='/projects'>Projects</NavLink></li>
            <li><NavLink to='/about'>About me</NavLink></li>
            <li><NavLink to='/contact'>Contact me</NavLink></li>
        </ul>
    )
};