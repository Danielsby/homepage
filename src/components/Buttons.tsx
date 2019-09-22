import * as React from 'react';

interface ButtonProps {
    title: string;
}

export const StandardButton: React.FC<ButtonProps> = (props) => {
    return (
        <button>{props.title}</button>
    )
};