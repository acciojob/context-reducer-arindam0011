// context/AppContext.js
import React, { createContext, useState } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [currentUser, setCurrentUser] = useState('');
    const [items, setItems] = useState([]);

    const login = () => {
        setCurrentUser('rohan');
        setIsAuthenticated(true);
    };

    const logout = () => {
        setCurrentUser('');
        setIsAuthenticated(false);
    };

    const addItem = (item) => {
        setItems([...items, item]);
    };

    const removeItem = (item) => {
        setItems(items.filter(i => i !== item));
    };

    const clearItems = () => {
        setItems([]);
    };

    return (
        <AppContext.Provider value={{ isAuthenticated, currentUser, items, login, logout, addItem, removeItem, clearItems }}>
            {children}
        </AppContext.Provider>
    );
};
