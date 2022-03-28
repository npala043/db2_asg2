import Comment from './Comment.js'

const CommentBox = (props) => {
    return (
        <div className='comment-box'>
            {props.comments.map(c => <Comment key={c.commentid} userid={c.userid} comment={c.text} stringAvatar={props.stringAvatar} stringToColor={props.stringToColor} />)}
        </div>
    )
}

export default CommentBox;