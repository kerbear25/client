import './newComment.css';

const NewComment = () => {
  return (
    <div className="form-container">
      <p className="centered">Name</p>
      <form className="new-comment-form">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" />

        <label htmlFor="comment">Comment:</label>
        <textarea id="comment" name="comment"></textarea>

        <button type="submit">Comment</button>
      </form>
    </div>
  );
};

export default NewComment;
