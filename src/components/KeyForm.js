import React, { useState } from 'react';

const KeyForm = ({ onSubmit, isConnected }) => {
    const [key, setKey] = useState('');
    const [message, setMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const trimmedKey = key.trim();
        
        if (!trimmedKey) {
            setMessage(<div className="error">Please enter a key</div>);
            return;
        }

        if (!isConnected) {
            setMessage(<div className="error">Database connection not available. Please refresh the page.</div>);
            return;
        }

        setIsLoading(true);
        setMessage(<div className="loading">Searching for your key...</div>);

        try {
            const result = await onSubmit(trimmedKey);
            
            if (result.length > 0) {
                const data = result[0];
                setMessage(<div className="success">✓ Key found! Redirecting to {data.name}...</div>);
                
                // Add protocol if missing
                let link = data.link;
                if (!link.startsWith('http://') && !link.startsWith('https://')) {
                    link = 'https://' + link;
                }
                
                // Redirect after a short delay
                setTimeout(() => {
                    window.location.href = link;
                }, 1500);
                
            } else {
                setMessage(<div className="error">Key not found</div>);
            }
            
        } catch (error) {
            console.error('Error:', error);
            setMessage(<div className="error">Network error. Please try again.</div>);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="container">
            <h1>Enter Your Key</h1>
            
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="keyInput">Access Key:</label>
                    <input 
                        type="text" 
                        id="keyInput" 
                        value={key}
                        onChange={(e) => setKey(e.target.value)}
                        placeholder="Enter your key (e.g., 1234)" 
                        required 
                    />
                </div>
                
                <button type="submit" disabled={isLoading}>
                    {isLoading ? 'Loading...' : 'Get Link'}
                </button>
            </form>
            
            <div id="message">{message}</div>
        </div>
    );
};

export default KeyForm; 