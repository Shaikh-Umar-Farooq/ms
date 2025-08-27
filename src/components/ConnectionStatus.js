import React from 'react';

const ConnectionStatus = ({ status, message }) => {
    return (
        <div className={`connection-status ${status}`}>
            {message}
        </div>
    );
};

export default ConnectionStatus; 