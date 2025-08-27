import CONFIG from '../config';

class DatabaseService {
    constructor() {
        this.isConnected = false;
    }

    async testConnection() {
        try {
            // Test connection by making a simple query
            const response = await fetch(`${CONFIG.SUPABASE_URL}/rest/v1/${CONFIG.TABLE_NAME}?select=count&limit=1`, {
                method: 'HEAD', // Use HEAD for lightweight test
                headers: {
                    'apikey': CONFIG.SUPABASE_ANON_KEY,
                    'Authorization': `Bearer ${CONFIG.SUPABASE_ANON_KEY}`,
                    'Content-Type': 'application/json'
                }
            });

            if (response.ok) {
                this.isConnected = true;
                console.log('Database connection established successfully');
                return { success: true, message: 'Connected' };
            } else {
                throw new Error(`HTTP ${response.status}: ${response.statusText}`);
            }
        } catch (error) {
            this.isConnected = false;
            console.error('Database connection failed:', error);
            return { success: false, message: 'Connection Failed' };
        }
    }

    async queryByKey(key) {
        if (!this.isConnected) {
            throw new Error('Database not connected');
        }

        const response = await fetch(`${CONFIG.SUPABASE_URL}/rest/v1/${CONFIG.TABLE_NAME}?key=eq.${encodeURIComponent(key)}&select=*`, {
            method: 'GET',
            headers: {
                'apikey': CONFIG.SUPABASE_ANON_KEY,
                'Authorization': `Bearer ${CONFIG.SUPABASE_ANON_KEY}`,
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error(`Query failed: ${response.status} ${response.statusText}`);
        }

        return await response.json();
    }
}

// Create a singleton instance
const databaseService = new DatabaseService();
export default databaseService; 