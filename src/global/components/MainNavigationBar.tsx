import * as React from 'react';

export const MainNavigationBar: React.FC = () => {
    return (
        <ul>
            <li><a href="default.asp">Home</a></li>
            <li><a href="news.asp">Schedule</a></li>
            <li><a href="about.asp">Projects</a></li>
            <li><a href="about.asp">About</a></li>
            <li><a href="contact.asp">Contact</a></li>
        </ul>
    )
};