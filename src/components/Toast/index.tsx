import { useState, useEffect } from 'react';
import './toast.css';

interface ToastProps {
  message: string;
  show: boolean;
}

const Toast = ({ message, show }: ToastProps) => {
  const [visible, setVisible] = useState<boolean>(show);

  useEffect(() => {
    setVisible(show);
  }, [show]);

  return <div className={`toast ${visible ? 'show' : ''}`}>{message}</div>;
};

export default Toast;
