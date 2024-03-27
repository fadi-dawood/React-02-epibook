import React from 'react'
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./NotFoundPage.css"

export default function NotFoundPage() {

    return (
        <div className='d-flex h-100 justify-content-center align-items-center'>
            <div className='d-flex flex-column justify-content-center w-100 align-items-center'>
                <FontAwesomeIcon className='triangle' icon={faTriangleExclamation} />
                <h1>OPS! :( </h1>
                <h2>Error: 404 &#x2022; Page not found</h2>
                <p>Questa pagina potrebbe essere spostata o cancellata!</p>
            </div>
        </div>
    )
}