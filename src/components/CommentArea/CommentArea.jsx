import React, { useContext, useEffect, useState } from 'react'
import AddComment from '../AddComment/AddComment';
import CommentList from '../CommentList/CommentList';
import { LatestReleaseContext } from '../../Context/LatestReleaseContextProvider';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faXmark } from "@fortawesome/free-solid-svg-icons"
import { Button } from "react-bootstrap"
import { ThemeContext } from '../../Context/ThemeContextProvider';


export default function CommentArea() {

    // impostare la thema dell'App
    const { theme } = useContext(ThemeContext);

    // selectedBook: l'id del libro selezionato dall'utente
    // visibleCommentArea: la visibilita del CommentArea
    const { selectedBook, visibleCommentArea, setVisibleCommentArea } = useContext(LatestReleaseContext)

    // la lista dei commenti che arriva dal server
    const [commentList, setCommentList] = useState([]);

    // la variabile per salvare i dati di un commento da modificare
    const [commentToEdit, setCommentToEdit] = useState({
        id: "",
        comment: "",
        rate: 0
    });

    // endpoint get call
    const endPointGet = `https://striveschool-api.herokuapp.com/api/books/${selectedBook}/comments/`;


    // la funzione per modificare un commento passando i dati del commento - va chiamata nel componente CommentList.
    const editComment = (commentObject) => {
        // cambiare il tasto nel dom (post comment <=> edit comment)
        document.getElementById('post-comment-btn').classList.remove("d-block");
        document.getElementById('post-comment-btn').classList.add("d-none");
        document.getElementById('edit-comment-btn').classList.remove("d-none");
        document.getElementById('edit-comment-btn').classList.add("d-block");

        // salvare i dati del commento nella variabile
        const { _id, comment, rate } = commentObject;
        setCommentToEdit({
            id: _id,
            comment: comment,
            rate: rate
        })

        // mostrare la value del input e della valutazione nel DOM per dare la possibilita all'utente di aggiornarli
        document.getElementById('commentInput').value = comment;
        document.getElementById('rateInput').value = rate;
    }

    //la funzione per mostrare i commenti di un libro
    async function showCommentsSec() {
        try {
            const response = await fetch(endPointGet);
            const commentData = await response.json();

            if (response.ok) {
                setCommentList(commentData);
            } else {
                const error = new Error(`HTTP Error! Status: ${response.status}`);
                error.response = response;
                throw error;
            }

        } catch (err) {
            console.error(err)
        }
    }

    function updateComments() {
        showCommentsSec();
    }


    useEffect(() => {
        showCommentsSec();
    }, [selectedBook])



    return (
        <>
            {visibleCommentArea &&
                <>
                    <div className=" my-5 d-flex justify-content-between align-items-center">
                        <h5>
                            Reviews:
                        </h5>
                        <Button variant="danger">
                            <FontAwesomeIcon icon={faXmark} onClick={() => setVisibleCommentArea(false)} />
                        </Button>

                    </div>
                    <CommentList commentList={commentList} updateComments={updateComments} editComment={editComment} />

                    <AddComment updateComments={updateComments} commentToEdit={commentToEdit} />
                </>
            }

        </>
    )
}



