// App.js
import React, { useState, useContext } from 'react';
import { AppContext, AppProvider } from './AppContext';

const App = () => {
    const { isAuthenticated, currentUser, login, logout, items, addItem, removeItem, clearItems } = useContext(AppContext);
    const [inputValue, setInputValue] = useState('');

    const handleAdd = () => {
        if (inputValue.trim()) {
            addItem(inputValue.trim());
            setInputValue('');
        }
    };

    return (
        <div>
            <div>
                <button id="login-btn" onClick={login}>Login</button>
                <button id="signout" onClick={logout}>Signout</button>
            </div>
            <div id="current-user">
                {`Current user: ${currentUser}, isAuthenticated: ${isAuthenticated ? 'Yes' : 'No'}`}
            </div>
            <input
                id="shopping-input"
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <button onClick={handleAdd}>Add</button>
            <button id="clear-list" onClick={clearItems}>Clear List</button>
            <ul>
                {items.map(item => (
                    <li key={item} id={`item-${item}`}>
                        {item}
                        <button id={`remove-${item}`} onClick={() => removeItem(item)}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default () => (
    <AppProvider>
        <App />
    </AppProvider>
);
