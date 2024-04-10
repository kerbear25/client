import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import { Comment, NewComment } from './components';

export interface CommentData {
  id?: number;
  created: string;
  message: string;
  name: string;
}

function App() {
  const [comments, setComments] = useState<CommentData[]>([]);

  useEffect(() => {
    axios
      .get('http://localhost:3001/getComments')
      .then((response) => {
        if (response.status === 200) {
          setComments(response.data);
        }
      })
      .catch((error) => {
        console.error('Error fetching comments:', error);
      });
  }, []);

  return (
    <>
      <NewComment />
      {comments.map(({ created, id, message, name }) => (
        <Comment key={id} created={created} message={message} name={name} />
      ))}
    </>
  );
}

export default App;
