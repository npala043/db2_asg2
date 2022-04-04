import { useEffect, useState } from 'react';

import './App.css';
import Post from './components/Post.js';
import WritePost from './components/WritePost'

import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';

const App = () => {

  const postsUrl = "https://db2-asg2.azurewebsites.net/api/posts/%7Bid%7D";

  const commentsUrl = "https://db2-asg2.azurewebsites.net/api/comments/%7Bid%7D";

  const usersUrl = "https://db2-asg2.azurewebsites.net/api/users/%7Bid%7D";

  const [posts, setPosts] = useState([]);

  const [comments, setComments] = useState([]);

  const [users, setUsers] = useState([]);

  useEffect(() => {
    const axios = require('axios');

    axios.get(postsUrl)
      .then(response => setPosts(response.data.reverse())); // reverse() to show latest posts first

    axios.get(commentsUrl)
      .then(response => setComments(response.data));

    axios.get(usersUrl)
      .then(response => setUsers(response.data));
  }, []);

  // Modal toggle
  const [isOpen, toggle] = useState(false);

  const toggleModal = () => {
    toggle(!isOpen);
  }

  return (
    <div className="App">
      <div id='add-post'>
        <Fab onClick={toggleModal} >
          <AddIcon />
        </Fab>
      </div>
      {isOpen ? <WritePost isOpen={isOpen} toggleModal={toggleModal} /> : null}
      {posts.length === 0 ?
        <h2 id='no-post'>No posts to display</h2>
        :
        posts.map(p =>
          <Post
            key={p._id}
            postid={p._id}
            userid={p.userid}
            text={p.text}
            date={p.timestamp}
            users={users}
            comments={comments.filter(c => c.postid === p._id)}
            username={users.filter(u => u.userid === p.userid)[0].username}
          />
        )
      }
    </div>
  );
}

export default App;
