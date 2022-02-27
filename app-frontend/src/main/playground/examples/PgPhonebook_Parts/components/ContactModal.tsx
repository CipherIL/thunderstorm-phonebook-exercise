import * as React from 'react';
import { useReducer } from "react";
import {
  contactModalReducer,
  contactModalReducerInitialState,
  ModalState
} from "../reducers/contactModal.reducer";
import {
	TS_Input
} from '@nu-art/thunderstorm/frontend';

interface Props {
  handleModalSubmit: (modalState: ModalState) => void;
  modalTitle: string;
  initialModalState?: ModalState;
}
export const ContactModal: React.FC<Props> = ({
  handleModalSubmit,
  modalTitle,
  initialModalState = contactModalReducerInitialState
}) => {
  const [modalData, dispatch] = useReducer(
    contactModalReducer,
    initialModalState
  );

  return (
    <div
      className="modal-backdrop"
      onClick={() => handleModalSubmit(modalData)}
    >
      <form
        action=""
        className="modal-form"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        {!modalData.formIsEmpty && (
          <span
            className="modal-delete"
            onClick={() => {
              handleModalSubmit({ ...modalData, formIsEmpty: true });
            }}
          >
            Delete
          </span>
        )}
        <span className="modal-title">{modalTitle}</span>
        <div className="modal-form__field">
          <label>Name: </label>
          <TS_Input type={'text'} id="name-input" 
          value={modalData.contact.name} onChange={(value) => {
            dispatch({ type: "SET_NAME", data: value || "" });
          }}/>
          {!modalData.isValid.name && (
            <span className="modal-form__field__error-message">
              Invalid Name
            </span>
          )}
        </div>
        <div className="modal-form__field">
          <label>Last name: </label>
          <TS_Input type={'text'} id={'last-name-input'}
          value={modalData.contact.lastName} onChange={(value) => {
            dispatch({ type: "SET_LASTNAME", data: value || "" });
          }}/>
          {!modalData.isValid.lastName && (
            <span className="modal-form__field__error-message">
              Invalid Last Name
            </span>
          )}
        </div>
        <div className="modal-form__field">
          <label>Phone number: </label>
          <TS_Input type={'text'} id={'phone-number-input'}
          value={modalData.contact.phoneNumber} onChange={(value) => {
            dispatch({ type: "SET_PHONENUMBER", data: value || "" });
          }}
            />
          {!modalData.isValid.phoneNumber && (
            <span className="modal-form__field__error-message">
              Invalid Phone Number
            </span>
          )}
        </div>
      </form>
    </div>
  );
};