import * as React from 'react';

interface StatusProps {
    status: string;
}

const Status: React.FC<StatusProps> = (props) => {
    return (
        <>
            <h5>Job status:</h5>
            <p style={{margin: '1.1rem'}}>{props.status}</p>
        </>
    )
};

export default Status;