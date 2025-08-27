import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

console.log('Initializing Key to Link Redirector...');

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

console.log('Application initialized successfully'); 