import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrash } from "@fortawesome/free-solid-svg-icons"
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons"
import { Button } from "react-bootstrap"

export default function CommentList({ commentList, updateComments, editComment }) {


  // la funzione per cancellare un commento dalla lista dei commenti
  async function deleteComment(commentId) {

    const deleteEndPoint = "https://striveschool-api.herokuapp.com/api/comments/"
    const payload = {
      method: "Delete",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWQ0ZWQ1YTljNDM3MDAwMTkzYzM3M2YiLCJpYXQiOjE3MTIwODIyODYsImV4cCI6MTcxMzI5MTg4Nn0.cAil_Qlp7JW8OoOmIcgAJtKgVbu_dTRvA8RrqjMpeQw"
      }
    }

    try {
      const response = await fetch((deleteEndPoint + commentId), payload)
      if (response.ok) {
        updateComments();
      } else {
        const error = new Error(`HTTP Error! Status: ${response.status}`);
        error.response = response;
        throw error;
      }
    } catch (err) {
      console.error(err)
    }
  }




  return (
    <>
      {/* Non ci sono commenti */}
      {commentList.length === 0 &&
        <div>
          <h6>No comments aviable</h6>
        </div>
      }

      {/* Ci sono commenti */}
      {commentList.length > 0 &&
        <div>
          <h5>Comments:</h5>
          <ul>
            {
              commentList.map((Element, index) => {
                const { comment, _id } = Element
                return (
                  <>
                    <div className="row my-3 d-flex align-items-center">
                      <li key={index} className="col-9 p-0">
                        {comment}
                      </li>
                      <div className="col-3 text-end p-0">
                        <Button className="px-2" variant="danger" onClick={() => deleteComment(_id)}>
                          <FontAwesomeIcon style={{ fontSize: "12pt" }} icon={faTrash} />
                        </Button>
                        <Button className="ms-2 px-2" onClick={() => editComment(Element)}>
                          <FontAwesomeIcon style={{ fontSize: "12pt" }} icon={faPenToSquare} />
                        </Button>
                      </div>
                    </div>
                  </>
                )
              })
            }
          </ul>
        </div>
      }

    </>
  )
}
