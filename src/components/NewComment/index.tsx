import React, { useState } from 'react';
import axios from 'axios';
import './newComment.css';
import Toast from '../Toast';

interface NewCommentProps {
  onNewComment: () => void;
}

const NewComment = ({ onNewComment }: NewCommentProps) => {
  const [name, setName] = useState<string>('');
  const [comment, setComment] = useState<string>('');
  const [showToast, setShowToast] = useState<boolean>(false);
  // In the future, turn toast into state to handle errors and success messages
  // For now, just show success message
  const toastMessage = 'Successfully added comment!';
  const isDisabled = !name.trim() || !comment.trim();

  const handleSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/createComment', {
        name,
        message: comment,
      });
      if (response.data.id) {
        // Reset form fields and show toast
        setComment('');
        setName('');
        setShowToast(true);
        setTimeout(() => {
          setShowToast(false);
        }, 8000);
        // Trigger parent component to fetch comments
        onNewComment();
      }
    } catch (error) {
      console.error('Error:', error);
    }
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
