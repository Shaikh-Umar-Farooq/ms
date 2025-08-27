# Key to Link Redirector - React Version

A React-based web application that redirects users to specific links based on entered keys, connected to a Supabase database.

## Features

- Real-time database connection status indicator
- Key-based link lookup and redirection
- Clean, responsive UI
- Environment variable configuration
- Error handling and user feedback

## Setup

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn
- A Supabase account and database

### Installation

1. Install dependencies:
```bash
npm install
```

2. Create environment configuration:
```bash
cp .env.example .env
```

3. Edit `.env` with your Supabase credentials:
```
REACT_APP_SUPABASE_URL=https://your-project.supabase.co
REACT_APP_SUPABASE_ANON_KEY=your-anon-key-here
REACT_APP_TABLE_NAME=key-link
```

### Development

Start the development server:
```bash
npm start
```

The application will open at `http://localhost:3000`

### Production Build

Create a production build:
```bash
npm run build
```

## Project Structure

```
src/
├── components/
│   ├── ConnectionStatus.js    # Database connection indicator
│   └── KeyForm.js            # Main form component
├── hooks/
│   └── useDatabase.js        # Database connection hook
├── services/
│   └── DatabaseService.js   # Database service layer
├── config.js                # Configuration management
├── App.js                   # Main application component
├── App.css                  # Application styles
└── index.js                 # Application entry point
```

## Database Schema

The application expects a Supabase table with the following structure:

| Column | Type | Description |
|--------|------|-------------|
| key    | text | The lookup key |
| link   | text | The target URL |
| name   | text | Display name for the link |

## Usage

1. Enter a key in the input field
2. Click "Get Link" to search the database
3. If found, you'll be redirected to the associated link
4. The connection status indicator shows the database connection state

## Original Files

The original HTML/CSS/JS implementation files are still present in the root directory for reference. 