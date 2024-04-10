import './App.css';
import { Comment, NewComment } from './components';
import comments from './comments.json';

function App() {
  return (
    <>
      <NewComment />
      {comments.map((comment, index) => (
        <Comment key={index} {...comment} />
      ))}
    </>
  );
}

export default App;
