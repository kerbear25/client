import './comment.css';

interface CommentProps {
  created: string;
  message: string;
  name: string;
}

const Comment = ({ created, message, name }: CommentProps) => {
  const formattedDate = new Date(created).toLocaleString();

  return (
    <article className="comment">
      <div className="comment-body">
        <p className="comment-message">{message}</p>
      </div>
      <footer className="comment-footer">
        <p className="comment-info">
          <strong>{name}</strong> on {formattedDate}
        </p>
      </footer>
    </article>
  );
};

export default Comment;
