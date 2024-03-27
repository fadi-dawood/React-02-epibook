import React, { useContext, useEffect } from 'react'
import CommentArea from '../CommentArea/CommentArea'
import AllTheBooks from '../AllTheBooks/AllTheBooks'
import FantasyBooks from '../../DATA/fantasy.json'
import HistoryBooks from '../../DATA/history.json'
import HorrorBooks from '../../DATA/horror.json'
import RomanceBooks from '../../DATA/romance.json'
import ScifiBooks from '../../DATA/scifi.json'
import { LatestReleaseContext } from '../../Context/LatestReleaseContextProvider'
import { Container } from 'react-bootstrap'
import { SearchContext } from '../../Context/SearchContextProvider'
import { ThemeContext } from '../../Context/ThemeContextProvider'


export default function AppBody() {

    // la thema del sito
    const { theme } = useContext(ThemeContext);


    const { visibleCommentArea } = useContext(LatestReleaseContext);


    const { searchTerm } = useContext(SearchContext);

    return (
        <div className={`m-0 ${theme === "dark" ? "bg-dark text-white" : ""}`} >
            <Container>
                <div className='row'>
                    {searchTerm &&
                        <>
                            <div className={visibleCommentArea ? "col-9" : "col-12"}>
                                <AllTheBooks Books={[...FantasyBooks, ...HistoryBooks, ...HorrorBooks, ...RomanceBooks, ...ScifiBooks]} />
                            </div>
                            <div className={visibleCommentArea ? "col-3" : ""}>
                                <CommentArea />
                            </div>
                        </>
                    }

                    {!searchTerm &&
                        <>
                            <div className={visibleCommentArea ? "col-9" : "col-12"}>

                                <AllTheBooks Books={FantasyBooks} Category='fantasy' NumOfBooks={12} />

                                <AllTheBooks Books={HistoryBooks} Category='history' NumOfBooks={12} />

                                <AllTheBooks Books={HorrorBooks} Category='horror' NumOfBooks={12} />

                                <AllTheBooks Books={RomanceBooks} Category='romance' NumOfBooks={12} />

                                <AllTheBooks Books={ScifiBooks} Category='scifi' NumOfBooks={12} />
                            </div>
                            <div className={visibleCommentArea ? "col-3" : ""}>
                                <CommentArea />
                            </div>
                        </>
                    }
                </div>
            </Container>
        </div>
    )
}
