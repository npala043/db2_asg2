import { useState } from 'react';

import './App.css';
import Post from './components/Post.js';
import WritePost from './components/WritePost'

import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';

import postsjson from './assets/json/posts.json';
import comments from './assets/json/comments.json';

const App = () => {

  const url = "https://db2-asg2.azurewebsites.net/api/posts/0";

  const axios = require('axios');

  axios.get(url)
    .then(response => console.log(response.data));

  const [posts] = useState(postsjson);

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
        posts.map(p => <Post key={p.postid} userid={p.userid} text={p.text} date={p.timestamp} comments={comments.filter(c => c.postid === p.postid)} />)}
    </div>
  );
}

export default App;
