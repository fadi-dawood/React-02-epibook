import React, { createContext, useState } from 'react'

export const LatestReleaseContext = createContext(null);

export default function LatestReleaseContextProvider({ children }) {

    // l'id del libro selezionato dall'utente (cliccando su "Show comments")
    const [selectedBook, setSelectedBook] = useState("");
    // quaando dobbiamo rendere visibile l'area dei commenti (quando abbiamo un libro selezionato)
    const [visibleCommentArea, setVisibleCommentArea] = useState(false);


    const value = {
        selectedBook,
        setSelectedBook,
        visibleCommentArea,
        setVisibleCommentArea
    }

    return (
        <LatestReleaseContext.Provider value={value}>{children}</LatestReleaseContext.Provider>
    )
}
