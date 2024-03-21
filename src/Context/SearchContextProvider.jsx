import React, { children, createContext, useState } from 'react'


export const SearchContext = createContext(null);

export default function SearchContextProvider({children}) {

    const [searchTerm, setSearchTerm] = useState("");

    const value = {
        searchTerm, setSearchTerm
    }

    return (
        <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
    )
}
