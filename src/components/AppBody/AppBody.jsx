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


export default function AppBody() {

    //!causa un ricaricamento dei dati ogni volta che va aggiornata "visibleCommentArea"
    const { visibleCommentArea } = useContext(LatestReleaseContext);


    const { searchTerm } = useContext(SearchContext);

    return (
        <Container>
            <div className='row'>
                {searchTerm &&
                    <>
                        <div className={visibleCommentArea ? "col-9" : "col-12"}>
                            <AllTheBooks Books={[...FantasyBooks, ...HistoryBooks, ...HorrorBooks, ...RomanceBooks, ...ScifiBooks]} />
                        </div>
                        <div className={visibleCommentArea ? "col-3" : "col-12"}>
                            <CommentArea />
                        </div>
                    </>
                }

                {!searchTerm &&
                    <>
                        <div >

                            <AllTheBooks Books={FantasyBooks} Category='fantasy' NumOfBooks={4} />

                            {/* <AllTheBooks Books={HistoryBooks} Category='history' NumOfBooks={12} />

                            <AllTheBooks Books={HorrorBooks} Category='horror' NumOfBooks={12} />

                            <AllTheBooks Books={RomanceBooks} Category='romance' NumOfBooks={12} />

                            <AllTheBooks Books={ScifiBooks} Category='scifi' NumOfBooks={12} /> */}
                        </div>
                        <div>
                            <CommentArea />
                        </div>
                    </>
                }
            </div>
        </Container>
    )
}
