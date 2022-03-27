import { LoremIpsum } from 'react-lorem-ipsum';
import { useState } from 'react';

import './App.css';
import Post from './components/Post.js';
import WritePost from './components/WritePost'

import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import Fab from '@mui/material/Fab';

const App = () => {

  const [posts, setPosts] = useState([]);

  const [isOpen, toggle] = useState(false);

  const toggleModal = () => {
    toggle(!isOpen);
  }

  return (
    <div className="App">
      <div id='add-post'>
        <Button onClick={toggleModal} >
          <Fab>
            <AddIcon />
          </Fab>
        </Button>
      </div>
      {isOpen ? <WritePost isOpen={isOpen} toggleModal={toggleModal} /> : null}
      {/* {posts.length == 0 ?
        <h2 id='no-post'>No posts to display</h2>
        :
        posts.map(p => <Post username={p.username} text={<LoremIpsum p={2} />} date={p.date} />)} */}
      <Post username={"Cale Paton"} text={<LoremIpsum p={2} />} date={"March 22, 2022"} />
      <Post username={"Nahuel Paladino"} text={<LoremIpsum p={3} />} date={"March 23, 2022"} />
    </div>
  );
}

export default App;
