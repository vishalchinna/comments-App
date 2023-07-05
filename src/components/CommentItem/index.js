import './index.css'

const CommentItem = prop => {
  const {commentText, deleteIcon, onChangeLike} = prop
  const {name, comment, id, Like, date} = commentText

  const deleteComment = () => {
    deleteIcon(id)
  }

  const changeLike = () => {
    onChangeLike(id)
    console.log('like')
  }

  console.log(comment)

  return (
    <div className="bg-container">
      <div className="comment-container">
        <p className="icon">{name[0]}</p>
        <div className="comment">
          <div className="TitleName">
            <li className="title">{name}</li>
            <li className="time">{date}</li>
          </div>
          <p className="cmt">{comment}</p>
        </div>
      </div>
      <div className="options">
        <div className="like-box">
          {Like ? (
            <img
              alt="like"
              src="https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png"
            />
          ) : (
            <img
              alt="like"
              src="https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png"
            />
          )}

          <button type="button" onClick={changeLike} className="like">
            Like
          </button>
        </div>
        <button
          className="delete"
          type="button"
          onClick={deleteComment}
          data-testid="delete"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
      <hr />
    </div>
  )
}

export default CommentItem
