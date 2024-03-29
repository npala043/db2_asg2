import { useState } from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

const WriteComment = (props) => {

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

    const axios = require('axios');

    const [commentText, updateCommentText] = useState("");

    const handleChange = (e) => {
        updateCommentText(e.target.value);
    }

    const submitComment = () => {
        console.log(`text is ${commentText}`);
        axios.post("https://db2-asg2.azurewebsites.net/api/comments/%7Bid%7D",
            {
                userid: (Math.floor(Math.random() * 5) + 1),
                postid: props.postid,
                text: commentText
            })
            .then(response => window.location.reload())
        props.toggleModal();
    }

    return (
        <Modal open={props.isOpen} onClose={props.toggleModal}>
            <Box component="form" sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    Write a Comment
                </Typography>
                <TextField fullWidth id="outlined-basic" label="Comment" variant="outlined" onChange={handleChange} />
                <Button onClick={submitComment} >Submit</Button>
            </Box>
        </Modal>
    )

}

export default WriteComment;