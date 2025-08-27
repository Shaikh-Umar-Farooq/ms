import React from 'react';
import ConnectionStatus from './components/ConnectionStatus';
import KeyForm from './components/KeyForm';
import { useDatabase } from './hooks/useDatabase';
import './App.css';

function App() {
    const { connectionStatus, isConnected, queryByKey } = useDatabase();

    return (
        <div className="App">
            <ConnectionStatus 
                status={connectionStatus.status} 
                message={connectionStatus.message} 
            />
            <KeyForm 
                onSubmit={queryByKey} 
                isConnected={isConnected} 
            />
        </div>
    );
}

export default App; 