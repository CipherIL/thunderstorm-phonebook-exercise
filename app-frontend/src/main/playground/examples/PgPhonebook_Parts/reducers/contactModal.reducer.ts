import { Contact } from "../types/contact.type";

type Actions =
  | { type: "SET_NAME"; data: string }
  | { type: "SET_LASTNAME"; data: string }
  | { type: "SET_PHONENUMBER"; data: string };

interface isValid {
  name: boolean;
  lastName: boolean;
  phoneNumber: boolean;
}
export interface ModalState {
  contact: Contact;
  isValid: isValid;
  formIsValid: boolean;
  formIsEmpty: boolean;
}

export const contactModalReducerInitialState: ModalState = {
  contact: {
    name: "",
    lastName: "",
    phoneNumber: ""
  },
  isValid: {
    name: true,
    lastName: true,
    phoneNumber: true
  },
  formIsValid: true,
  formIsEmpty: true
};

const phoneRegex = new RegExp(/^\d{10}$/);
const nameRegex = new RegExp(/^[a-zA-Z\s]{2,}$/);

const checkValid = (field: string, data: string): boolean => {
  switch (field) {
    case "name":
    case "lastName": {
      return nameRegex.test(data);
    }
    case "phoneNumber": {
      return phoneRegex.test(data);
    }
    default: {
      return false;
    }
  }
};

const checkValidForm = (contact: Contact): boolean => {
  return (
    checkValid("name", contact.name) &&
    checkValid("lastName", contact.lastName) &&
    checkValid("phoneNumber", contact.phoneNumber)
  );
};

const checkEmptyForm = (contact: Contact): boolean => {
  return (
    contact.name === "" && contact.lastName === "" && contact.phoneNumber === ""
  );
};

export const contactModalReducer = (
  state: ModalState,
  action: Actions
): ModalState => {
  switch (action.type) {
    case "SET_NAME": {
      const newContact = { ...state.contact, name: action.data };
      const newIsValid = {
        ...state.isValid,
        name: checkValid("name", action.data)
      };
      const formIsEmpty = checkEmptyForm(newContact);
      return {
        contact: newContact,
        isValid: newIsValid,
        formIsValid: !formIsEmpty && checkValidForm(newContact),
        formIsEmpty: formIsEmpty
      };
    }
    case "SET_LASTNAME": {
      const newContact = { ...state.contact, lastName: action.data };
      const newIsValid = {
        ...state.isValid,
        lastName: checkValid("lastName", action.data)
      };
      const formIsEmpty = checkEmptyForm(newContact);
      return {
        contact: newContact,
        isValid: newIsValid,
        formIsValid: !formIsEmpty && checkValidForm(newContact),
        formIsEmpty: formIsEmpty
      };
    }
    case "SET_PHONENUMBER": {
      const newContact = { ...state.contact, phoneNumber: action.data };
      const newIsValid = {
        ...state.isValid,
        phoneNumber: checkValid("phoneNumber", action.data)
      };
      const formIsEmpty = checkEmptyForm(newContact);
      return {
        contact: newContact,
        isValid: newIsValid,
        formIsValid: !formIsEmpty && checkValidForm(newContact),
        formIsEmpty: formIsEmpty
      };
    }
    default: {
      return { ...state };
    }
  }
};
