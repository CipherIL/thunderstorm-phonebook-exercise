import * as React from 'react';
import { Contact } from '../types/contact.type';

interface Props {
  contact: Contact;
  index: number;
  openModal: (index: number) => void;
}

export const ContactCard: React.FC<Props> = ({ contact, index, openModal }) => {
  return (
    <div className="contact-card" onClick={() => openModal(index)}>
      <div>
        <b>Name:</b> {contact.name}
      </div>
      <div>
        <b>Last name:</b> {contact.lastName}
      </div>
      <div>
        <b>Phone number:</b> {contact.phoneNumber}
      </div>
    </div>
  );
};
