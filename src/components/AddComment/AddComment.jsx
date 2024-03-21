import React, { useEffect, useState } from 'react'
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';

export default function AddComment({bookId, updateComments}) {

    const endPointPost = `https://striveschool-api.herokuapp.com/api/comments/`;

    const [postBody, setPostBody] = useState({
        "comment": "",
        "rate": 0,
        "elementId": bookId
    });

    function updateState(value, key) {
        const oldPostBody = { ...postBody };
        oldPostBody[key] = value;
        setPostBody(oldPostBody);
    }


    async function addComment() {

        const endPointPayload = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWQ0ZWQ1YTljNDM3MDAwMTkzYzM3M2YiLCJpYXQiOjE3MTA4NzE3MjgsImV4cCI6MTcxMjA4MTMyOH0.8bOSGh6kxOAt-KJQh5EorxlCfnuMvYEL8Pm0-FlsqCw"
            },
            body: JSON.stringify(postBody),
        };



        try {
            const response = await fetch(endPointPost, endPointPayload);
            if (response.ok) {

                updateComments();

                document.getElementById('commentInput').value = '';
                document.getElementById('rateInput').value = '';
            } else {
                const error = new Error (`HTTP Erroe! Status: ${response.status}`);
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
                <Button className='my-2' variant="secondary" onClick={addComment}>Post Your Comment</Button>
            </Form>
        </div>
    )
}
