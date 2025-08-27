import { useState, useEffect } from 'react';
import databaseService from '../services/DatabaseService';

export const useDatabase = () => {
    const [connectionStatus, setConnectionStatus] = useState({
        status: 'connecting',
        message: 'Initializing...'
    });

    useEffect(() => {
        const testConnection = async () => {
            setConnectionStatus({ status: 'connecting', message: 'Connecting...' });
            
            const result = await databaseService.testConnection();
            
            if (result.success) {
                setConnectionStatus({ status: 'connected', message: result.message });
            } else {
                setConnectionStatus({ status: 'disconnected', message: result.message });
            }
        };

        testConnection();
    }, []);

    const queryByKey = async (key) => {
        return await databaseService.queryByKey(key);
    };

    return {
        connectionStatus,
        isConnected: databaseService.isConnected,
        queryByKey
    };
}; 