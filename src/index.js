import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import SystemThemeProvider from './Utilities/Contexts/SystemThemeContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <SystemThemeProvider>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </SystemThemeProvider>
);
