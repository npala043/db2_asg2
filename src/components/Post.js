import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Typography from '@mui/material/Typography';

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

const Post = (props) => {
    return (
        <div class="postCard">
            <Card sx={{ minWidth: 275 }}>
                <CardHeader
                    avatar={<Avatar {...stringAvatar(props.username)} />}
                    title={props.username}
                    subheader={props.date}
                />
                <CardContent>
                    <Typography variant="body1" color="black">
                        {props.text}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Comments</Button>
                </CardActions>
            </Card>
        </div>
    )
}

export default Post;