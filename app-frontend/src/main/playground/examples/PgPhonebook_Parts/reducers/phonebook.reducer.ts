import { Contact } from "../types/contact.type";

type Actions =
  | {
      type: "SET_PHONEBOOK";
      data: Contact[];
    }
  | {
      type: "ADD_CONTACT";
      data: Contact;
    }
  | {
      type: "EDIT_CONTACT";
      data: Contact;
      index: number;
    }
  | { type: "DELETE_CONTACT"; index: number };

const sortContacts = (contact1: Contact, contact2: Contact): number => {
  return contact1.name.toLowerCase() < contact2.name.toLowerCase() ? -1 : 1;
};

export const phonebookReducer = (
  state: Contact[],
  action: Actions
): Contact[] => {
  switch (action.type) {
    case "SET_PHONEBOOK": {
      const newContacts = [...action.data];
      if (newContacts.length >= 2) return newContacts.sort(sortContacts);
      return newContacts;
    }
    case "ADD_CONTACT": {
      const newContacts = [...state];
      newContacts.push(action.data);
      return newContacts.sort(sortContacts);
    }
    case "EDIT_CONTACT": {
      const newContacts = [...state];
      newContacts.splice(action.index, 1);
      newContacts.push(action.data);
      return newContacts.sort(sortContacts);
    }
    case "DELETE_CONTACT": {
      const newContacts = [...state];
      newContacts.splice(action.index, 1);
      return newContacts.sort(sortContacts);
    }
    default: {
      return state;
    }
  }
};
