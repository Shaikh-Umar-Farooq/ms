# Key to Link Redirector

A simple web application that allows users to enter a key and get redirected to the corresponding link stored in a Supabase database.

## Features

- **Automatic Database Connection**: Connection is established when the website loads
- **Connection Status Indicator**: Visual indicator showing database connection status
- **Modular Architecture**: Separate HTML, CSS, and JavaScript files
- **Configuration Management**: Centralized configuration for database credentials
- **Error Handling**: Comprehensive error handling and user feedback

## File Structure

```
ms/
├── index.html          # Main HTML file
├── styles.css          # CSS styles
├── script.js           # JavaScript functionality
├── config.js           # Database configuration
└── README.md           # Project documentation
```

## Setup

1. **Database Configuration**: 
   - Update the credentials in `config.js` with your Supabase details
   - Or create a `.env` file with the following structure:
     ```
     SUPABASE_URL=your_supabase_url_here
     SUPABASE_ANON_KEY=your_supabase_anon_key_here
     TABLE_NAME=key_link
     ```

2. **Database Table Structure**:
   Your Supabase table should have at least these columns:
   - `key` (text): The lookup key
   - `link` (text): The destination URL
   - `name` (text): Display name for the link

3. **Deployment**:
   - Simply upload all files to your web server
   - The application will automatically establish database connection on page load

## How It Works

1. **Page Load**: Database connection is automatically established and tested
2. **Connection Status**: Visual indicator shows connection status (connecting/connected/failed)
3. **Key Lookup**: When user submits a key, it queries the database
4. **Redirection**: If key is found, user is redirected to the corresponding link

## Connection Status Indicators

- 🟡 **Connecting**: Initial connection attempt in progress
- 🟢 **Connected**: Database connection successful
- 🔴 **Connection Failed**: Database connection failed

## Security Note

For production use, consider:
- Using environment variables instead of hardcoded credentials
- Implementing rate limiting
- Adding input validation and sanitization
- Using HTTPS
- Implementing proper error logging # ms
