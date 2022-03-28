import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Typography from '@mui/material/Typography';

import users from '../assets/json/users.json';

const Comment = (props) => {

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

    const getCommentUsername = () => {
        const u = users.filter(user => user.userid === props.userid);
        console.log(u);
        return u[0].username;
    }

    return (
        <Card sx={{ bgcolor: '#e3e3e3' }}>
            <CardHeader
                avatar={<Avatar {...stringAvatar(getCommentUsername())} />}
                title={getCommentUsername()}
            />
            <CardContent>
                <Typography variant="body1" color="black">
                    {props.comment}
                </Typography>
            </CardContent>
            <CardActions>
                {/* This is where the edit comment goes */}
            </CardActions>
        </Card>
    )
}

export default Comment;