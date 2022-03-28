import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import EditIcon from '@mui/icons-material/Edit';
import Typography from '@mui/material/Typography';

import users from '../assets/json/users.json';

const Comment = (props) => {

    const getCommentUsername = () => {
        const u = users.filter(user => user.userid === props.userid);
        console.log(u);
        return u[0].username;
    }

    return (
        <Card sx={{ bgcolor: '#e3e3e3' }}>
            <CardHeader
                avatar={<Avatar {...props.stringAvatar(getCommentUsername())} />}
                title={getCommentUsername()}
            />
            <CardContent>
                <Typography variant="body1" color="black">
                    {props.comment}
                </Typography>
            </CardContent>
            <CardActions>
                {/* This is where the edit comment button goes */}
                <Button>
                    <EditIcon />
                </Button>
            </CardActions>
        </Card>
    )
}

export default Comment;