import Comment from './Comment.js'

const CommentBox = (props) => {
    return (
        <div className='comment-box'>
            {console.log(props.comments)}
            {props.comments.map(c => <Comment key={c.commentid} userid={c.userid} comment={c.text}  />)}
        </div>
    )
}

export default CommentBox;