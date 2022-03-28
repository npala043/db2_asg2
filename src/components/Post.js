import { useState } from 'react';
import { styled } from '@mui/material/styles';

import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Collapse from '@mui/material/Collapse';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

import CommentBox from './CommentBox';

import users from '../assets/json/users.json';
import { Badge } from '@mui/material';

// avatar custom colour
// stringToColor and stringAvatar taken from https://mui.com/components/avatars/
function stringToColor(string) {
    let hash = 0;
    let i;

    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
        hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = '#';

    for (i = 0; i < 3; i += 1) {
        const value = (hash >> (i * 8)) & 0xff;
        color += `00${value.toString(16)}`.substr(-2);
    }
    /* eslint-enable no-bitwise */

    return color;
}

function stringAvatar(name) {
    return {
        sx: {
            bgcolor: stringToColor(name),
        },
        children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
    };
}

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', { duration: theme.transitions.duration.shortest, }),
}));

const Post = (props) => {

    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const getUsername = () => {
        const u = users.filter(user => user.userid === props.userid);
        return u[0].username;
    }

    return (
        <div class="postCard">
            <Card sx={{ minWidth: 275 }}>
                <CardHeader
                    avatar={<Avatar {...stringAvatar(getUsername())} />}
                    title={getUsername()}
                    subheader={props.date}
                />
                <CardContent>
                    <Typography variant="body1" color="black">
                        {props.text}
                    </Typography>
                </CardContent>
                <CardActions>
                    <ExpandMore expand={expanded} onClick={handleExpandClick}>
                        <Badge badgeContent={props.comments.length} color={'primary'}>
                            <ExpandMoreIcon />
                        </Badge>
                    </ExpandMore>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                        <CommentBox comments={props.comments} />
                    </CardContent>
                </Collapse>
            </Card>
        </div >
    )
}

export default Post;