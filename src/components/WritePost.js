import { useState } from 'react';

import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

const WritePost = (props) => {

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

    return (
        <Modal open={props.isOpen} onClose={props.toggleModal}>
            <Box component="form" sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    Write a post
                </Typography>
                <TextField fullWidth id="outlined-basic" label="Post" variant="outlined" />
            </Box>
        </Modal>
    )

}

export default WritePost;