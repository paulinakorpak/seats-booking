import React from 'react';
import { Alert } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { selectMessage } from '../../messageSlice';

function Message() {
  const message = useSelector(selectMessage);

  if (!message) {
    return null;
  }

  return (
    <Alert className="text-center position-fixed w-100" variant={message.type}>
      {message.content}
    </Alert>
  );
}

export default Message;
