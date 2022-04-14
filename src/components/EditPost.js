import { useState } from 'react';

import Box from '@mui/material/Box'
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

const EditPost = (props) => {

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

    const [postText, updatePostText] = useState(props.text);

    const handleChange = (e) => {
        updatePostText(e.target.value);
    }

    const submitPost = () => {
        if (postText !== props.text) {
            const axios = require('axios');
            axios.put(`https://db2-asg2.azurewebsites.net/api/posts/${props.postid}`,
                {
                    text: postText
                })
                .then(response => window.location.reload())
        }
        props.toggleEditModal();
    }

    return (
        <Modal open={props.editPostIsOpen} onClose={props.toggleEditPost}>
            <Box component="form" sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    Edit a post
                </Typography>
                <TextField fullWidth id="outlined-basic-post" label="Post" name="post" variant="outlined" onChange={handleChange} defaultValue={props.text} />
                <Button onClick={submitPost} >Submit</Button>
            </Box>
        </Modal>
    )

}

export default EditPost;