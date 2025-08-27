// Database Configuration
// In production, these should be environment variables
const CONFIG = {
    SUPABASE_URL: process.env.REACT_APP_SUPABASE_URL || '',
    SUPABASE_ANON_KEY: process.env.REACT_APP_SUPABASE_ANON_KEY || '',
    TABLE_NAME: process.env.REACT_APP_TABLE_NAME || ''
};

export default CONFIG; 