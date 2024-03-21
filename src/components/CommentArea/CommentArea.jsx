import React, { useEffect, useState } from 'react'
import AddComment from '../AddComment/AddComment';
import CommentList from '../CommentList/CommentList';


export default function CommentArea({ bookId }) {

    const [commentList, setCommentList] = useState([]);

    const endPointGet = `https://striveschool-api.herokuapp.com/api/books/${bookId}/comments/`;

    function editComment(commentObject){

    }

    async function showCommentsSec() {
        try {
            const response = await fetch(endPointGet);
            const commentData = await response.json();

            setCommentList(commentData);
        } catch (err) {
            console.error(err)
        }
    }

    function updateComments() {
        showCommentsSec();
    }

    useEffect(() => {
        showCommentsSec();
    }, [])

    return (
        <>
            <CommentList commentList={commentList} updateComments={updateComments} editComment={editComment}/>

            <AddComment bookId={bookId} updateComments={updateComments} />
        </>
    )
}



