import * as React from 'react';

interface Props {
  message: string;
}

export const MessageModal: React.FC<Props> = ({ message }) => {
  return (
    <div className="message-modal">
      <span>{message}</span>
    </div>
  );
};
