import React, { useState } from 'react';
import './newComment.css';
import Toast from '../Toast';

const NewComment = () => {
  const [name, setName] = useState<string>('');
  const [comment, setComment] = useState<string>('');
  const [showToast, setShowToast] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string>(
    'Successfully added comment!'
  );
  const isDisabled = !name.trim() || !comment.trim();

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    setComment('');
    setName('');
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 8000); // Adjust duration of toast display
    // TODO: Handle POST request
  };

  const handleNameChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setName(event.target.value);
  };

  const handleCommentChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setComment(event.target.value);
  };

  return (
    <div className="form-container">
      <h2 className="centered">New Comment</h2>
      <form className="new-comment-form" onSubmit={handleSubmit}>
        <label htmlFor="name">
          Name<span className="required">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={handleNameChange}
          required
        />

        <label htmlFor="comment">
          Comment<span className="required">*</span>
        </label>
        <textarea
          id="comment"
          name="comment"
          value={comment}
          onChange={handleCommentChange}
          required
        ></textarea>

        <button type="submit" disabled={isDisabled}>
          Comment
        </button>
      </form>
      <Toast message={toastMessage} show={showToast} />
    </div>
  );
};

export default NewComment;
