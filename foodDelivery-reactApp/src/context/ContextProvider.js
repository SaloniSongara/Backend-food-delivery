import React, { createContext, useState } from 'react';

const ItemsContext = createContext();

const ContextProvider = ({ children }) => {
    const [selectedItems, setSelectedItems] = useState([]);

    return (
        <ItemsContext.Provider value={{ selectedItems, setSelectedItems }}>
            {children}
        </ItemsContext.Provider>
    );
};

export { ItemsContext, ContextProvider };
