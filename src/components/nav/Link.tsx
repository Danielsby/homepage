import React from 'react';

interface LinkProps {
    className?: string;
    href: string;
}

const InternetLink: React.FC<LinkProps> = ({className, href, children}) => {
    return (
        <a
            href={href}
            className={className}
        >
            {children}
        </a>
    );
};

export default InternetLink;