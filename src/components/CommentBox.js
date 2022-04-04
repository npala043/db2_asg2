import Comment from './Comment.js'

const CommentBox = (props) => {
    return (
        <div className='comment-box'>
            {props.comments.map(c =>
                <Comment
                    key={c._id}
                    commentid={c._id}
                    username={props.users.filter(u => u.userid === c.userid)[0].username}
                    comment={c.text}
                    stringAvatar={props.stringAvatar}
                    stringToColor={props.stringToColor}
                />
            )}
        </div>
    )
}

export default CommentBox;