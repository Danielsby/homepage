import * as React from 'react';

interface HeaderProps {
    profession: string;
}

const Header: React.FC<HeaderProps> = (props) => {
    return (
        <>
            <h1>Daniel By</h1>
            <h3 style={{marginTop: '0.3rem'}}>{props.profession}</h3>
        </>
    )
};

export default Header;