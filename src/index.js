import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import SystemThemeProvider from './Utilities/Contexts/SystemThemeContext';
import DrawerProvider from './Utilities/Contexts/DrawerContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <SystemThemeProvider>
        <DrawerProvider>
            <React.StrictMode>
                <App />
            </React.StrictMode>
        </DrawerProvider>
    </SystemThemeProvider>
);
