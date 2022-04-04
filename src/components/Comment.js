import { useState } from 'react';

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Typography from '@mui/material/Typography';

import EditComment from './EditComment';

const Comment = (props) => {

    const [editCommentIsOpen, toggleEditComment] = useState(false);

    const toggleCommentModal = () => {
        toggleEditComment(!editCommentIsOpen);
    }

    const deleteComment = () => {
        const axios = require('axios');
        axios.delete(`https://db2-asg2.azurewebsites.net/api/comments/${props.commentid}`)
            .then(response => window.location.reload());
    }

    return (
        <Card sx={{ bgcolor: '#e3e3e3' }}>
            <CardHeader
                avatar={<Avatar {...props.stringAvatar(props.username)} />}
                title={props.username}
                action={
                    <div>
                        <Button>
                            <EditIcon onClick={toggleCommentModal} />
                        </Button>
                        <Button>
                            <DeleteIcon onClick={deleteComment} />
                        </Button>
                    </div>
                }
            />
            <CardContent>
                <Typography variant="body1" color="black">
                    {props.comment}
                </Typography>
            </CardContent>
            {editCommentIsOpen ? <EditComment editCommentIsOpen={editCommentIsOpen} toggleCommentModal={toggleCommentModal} commentid={props.commentid} /> : null}
        </Card>
    )
}

export default Comment;