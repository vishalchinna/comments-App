import {Component} from 'react'
import {formatDistanceToNow} from 'date-fns'

import './index.css'
import {v4 as uuidv4} from 'uuid'
import CommentItem from '../CommentItem'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

class Comments extends Component {
  state = {commentsList: [], name: '', comment: ''}

  onChangeLike = () => {
    this.setState({name: 'vishal'})
  }

  deleteIcon = id => {
    const {commentsList} = this.setState
    this.setState({commentsList: commentsList.filter(each => each.id !== id)})
  }

  renderCommentList = () => {
    const {commentsList} = this.setState

    return commentsList.map(each => (
      <CommentItem
        commentText={each}
        key={each.id}
        deleteIcon={this.deleteIcon}
        onChangeLike={this.onChangeLike}
      />
    ))
  }

  addComment = event => {
    event.preventDefault()
    const {name, comment} = this.state
    const newComment = {
      id: uuidv4(),
      name,
      comment,
      Like: false,
    }
    this.setState(prevState => ({
      commentsList: [...prevState.commentsList, newComment],
      name: '',
      comment: '',
    }))
  }

  onChangeInput = event => {
    this.setState({name: event.target.value})
  }

  onChangeTextarea = event => {
    this.setState({comment: event.target.value})
  }

  render() {
    const {commentsList, name, comment, date} = this.state
    console.log(formatDistanceToNow(new Date()))
    console.log(date)

    return (
      <div className="box-container">
        <h1>Comments</h1>
        <div className="input-container">
          <form className="input-box">
            <p className="para">Say something about 4.0 Technologies</p>
            <input
              type="text"
              value={name}
              onChange={this.onChangeInput}
              className="input"
              placeholder="Your name"
            />
            <textarea
              onChange={this.onChangeTextarea}
              className="text"
              value={comment}
              rows="8"
              cols="40"
              placeholder="Your comment"
            />
            <button onClick={this.addComment} className="btn" type="button">
              Add comment
            </button>
          </form>
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
              className="image"
              alt="comments"
            />
          </div>
        </div>
        <hr />
        <div className="comment-count">
          <button type="button" className="btn">
            {commentsList.length}
          </button>
          <span className="para">Comments</span>
        </div>
        <ul>{this.renderCommentList}</ul>
      </div>
    )
  }
}

export default Comments