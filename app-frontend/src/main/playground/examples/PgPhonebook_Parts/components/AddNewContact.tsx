import * as React from 'react';

interface Props {
  openModal: (index: null) => void;
}

export const AddNewContact: React.FC<Props> = ({ openModal }) => {
  return (
    <div
      className="add-new-contact"
      onClick={() => {
        openModal(null);
      }}
    >
      +
    </div>
  );
};
