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

  const fetchComments = async () => {
    await axios
      .get('http://localhost:3001/getComments')
      .then((response) => {
        if (response.status === 200) {
          // Order comments by date created
          const sortedComments = response.data.sort(
            (a: CommentData, b: CommentData) =>
              new Date(b.created).valueOf() - new Date(a.created).valueOf()
          );
          setComments(sortedComments);
        }
      })
      .catch((error) => {
        console.error('Error fetching comments:', error);
      });
  };

  useEffect(() => {
    fetchComments();
  }, []);

  return (
    <>
      <NewComment onNewComment={fetchComments} />
      {comments.map(({ created, id, message, name }) => (
        <Comment key={id} created={created} message={message} name={name} />
      ))}
    </>
  );
}

export default App;
