import { useState } from 'react';

import Box from '@mui/material/Box'
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

const EditComment = (props) => {

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 800,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        borderRadius: 2,
        boxShadow: 24,
        p: 4,
    };

    const [commentText, updateCommentText] = useState("");

    const handleChange = (e) => {
        updateCommentText(e.target.value);
    }

    const submitComment = () => {
        const axios = require('axios');
        axios.put(`https://db2-asg2.azurewebsites.net/api/comments/${props.commentid}`,
            {
                text: commentText
            })
            .then(response => window.location.reload())
        props.toggleCommentModal();
    }

    return (
        <Modal open={props.editCommentIsOpen} onClose={props.toggleEditComment}>
            <Box component="form" sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    Edit a comment
                </Typography>
                <TextField fullWidth id="outlined-basic-post" label="Post" name="post" variant="outlined" onChange={handleChange} />
                <Button onClick={submitComment} >Submit</Button>
            </Box>
        </Modal>
    )

}

export default EditComment;