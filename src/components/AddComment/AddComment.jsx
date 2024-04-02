import React, { useContext, useEffect, useState } from 'react'
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { LatestReleaseContext } from '../../Context/LatestReleaseContextProvider';

export default function AddComment({ updateComments, commentToEdit }) {

    //^dichiarazioni generali
    const endPointPost = `https://striveschool-api.herokuapp.com/api/comments/`;

    //una variabile che contiene l'id del libro selezionato dall'utente una volta clicca su "Show comments" in SingleBook.jsx
    const { selectedBook } = useContext(LatestReleaseContext)

    // l'ogetto da mandare al server nel caso di effettuare un nuovo commento
    const [postBody, setPostBody] = useState({
        "comment": "",
        "rate": 0,
        "elementId": selectedBook
    });

    // aggiornare il postBody quando cambiano i valori del form
    function updateState(value, key) {
        const oldPostBody = { ...postBody };
        oldPostBody[key] = value;
        oldPostBody.elementId = selectedBook;
        setPostBody(oldPostBody);
    };

    // la funzione per effetuare la fetch di un nuovo commento
    // se non si passa niente alla funzione quando va chiamata, si effetua una chiamata Post
    // se invece si passa un id di un commento, si effetua una chiamata Put
    async function addComment(editedID = "") {
        let endPointPayload = {};

        // Post call
        if (!editedID) {
            endPointPayload = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWQ0ZWQ1YTljNDM3MDAwMTkzYzM3M2YiLCJpYXQiOjE3MTIwODIyODYsImV4cCI6MTcxMzI5MTg4Nn0.cAil_Qlp7JW8OoOmIcgAJtKgVbu_dTRvA8RrqjMpeQw"
                },
                body: JSON.stringify(postBody),
            };

            // Put call
        } else {
            endPointPayload = {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWQ0ZWQ1YTljNDM3MDAwMTkzYzM3M2YiLCJpYXQiOjE3MTIwODIyODYsImV4cCI6MTcxMzI5MTg4Nn0.cAil_Qlp7JW8OoOmIcgAJtKgVbu_dTRvA8RrqjMpeQw"
                },
                body: JSON.stringify(postBody),
            };

            // cambiare il buttone del form quando si vuole effetuare una chiamata Put di un commento per preparare il lanscio della chiamata 
            document.getElementById('post-comment-btn').classList.add("d-block");
            document.getElementById('post-comment-btn').classList.remove("d-none");
            document.getElementById('edit-comment-btn').classList.add("d-none");
            document.getElementById('edit-comment-btn').classList.remove("d-block");

        }

        // effetuare la chiamata
        try {
            const response = await fetch(`${endPointPost}${editedID}`, endPointPayload);
            if (response.ok) {

                updateComments();

                document.getElementById('commentInput').value = '';
                document.getElementById('rateInput').value = '';
            } else {
                const error = new Error(`HTTP Erroe! Status: ${response.status}`);
                error.response = response;
                throw error;
            }
        } catch (err) {
            console.error(err)
        }
    }


    return (
        <div className='my-2'>
            <Form>
                <Form.Group className='my-2 '>
                    <Form.Label className='w-50'>Leave a comment:</Form.Label>
                    <Form.Control id='commentInput' as="textarea" aria-label="With textarea" onChange={(e) => updateState(e.target.value, "comment")} />
                </Form.Group>

                <Form.Group className='my-2 '>
                    <Form.Label className='w-50'>Leave a rate:</Form.Label>
                    <Form.Control
                        id='rateInput'
                        aria-label="Small"
                        aria-describedby="inputGroup-sizing-sm"
                        type='number'
                        min={0}
                        max={5}
                        onChange={(e) => updateState(e.target.value, "rate")}
                    />
                </Form.Group>
                
                <Button id='post-comment-btn' className='my-2 d-block' variant="primary" onClick={() => addComment()}>Post Your Comment</Button>
                <Button id='edit-comment-btn' className='my-2 d-none' variant="success" onClick={() => addComment(commentToEdit.id)}>Edit Your Comment</Button>
            </Form>
        </div>
    )
}
