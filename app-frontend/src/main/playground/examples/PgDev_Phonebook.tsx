/*Create a phonebook page in the dropdown
work with IndexDB to save the phonebook - rewrite save and read functions
keep the same functionality as previous project
Switch to special TS_inputs
*/
import * as React from 'react';
import { useReducer, useEffect, useState } from "react";

//Type Imports
import { Contact } from "./PgPhonebook_Parts/types/contact.type";
//Component Imports
import { ContactCard } from "./PgPhonebook_Parts/components/ContactCard";
import { Loader } from "./PgPhonebook_Parts/components/Loader";
import { AddNewContact } from "./PgPhonebook_Parts/components/AddNewContact";
import { MessageModal } from "./PgPhonebook_Parts/components/MessageModal";
import { ContactModal } from "./PgPhonebook_Parts/components/ContactModal";

//Function Imports
import {savePhonebook, readPhonebook} from './PgPhonebook_Parts/server/phonebook';

//Reducer Imports
import { phonebookReducer } from "./PgPhonebook_Parts/reducers/phonebook.reducer";
import { ModalState } from './PgPhonebook_Parts/reducers/contactModal.reducer';
//Style Import
import "./PgPhonebook_Parts/styles.css"

const Phonebook: React.FC = () => {
    const [contacts, dispatch] = useReducer(phonebookReducer, []);
    const [initContacts, setInitContacts] = useState(true);
    const [{ showModal, modalTitle, index }, setShowModal] = useState<{
        showModal: boolean;
        modalTitle: string;
        index: number | null;
    }>({
        showModal: false,
        modalTitle: "",
        index: null
    });
    const [{ showMessage, message }, setMessage] = useState({
        showMessage: false,
        message: ""
    });
    //Use Effect for saving phonebook except for first load
    useEffect(() => {
        if (!initContacts) {
            try {
                setTimeout(async () => {
                    //@ts-ignore
                const response = await savePhonebook(contacts);
                setMessage({ showMessage: true, message: "Phonebook saved!" });
                setTimeout(
                    () => setMessage({ showMessage: false, message: "" }),
                    2000
                );
                }, 500);
            } catch (error) {
                setMessage({
                showMessage: true,
                message: "Could not save phonebook, try again later"
                });
                setTimeout(() => setMessage({ showMessage: false, message: "" }), 2000);
            }
        }
    }, [contacts]);
    //Use effect for loading initial contacts
    useEffect(() => {
        try {
            setTimeout(async () => {
                const response = await readPhonebook();
                dispatch({
                type: "SET_PHONEBOOK",
                data: response
                });
                setInitContacts(false);
            }, 500);
        } catch (error) {
            setMessage({
                showMessage: true,
                message: "Failed to load contacts, try again later"
            });
            setTimeout(() => setMessage({ showMessage: false, message: "" }), 2000);
        }
    }, []);

    //Functions for ContactModal behaviour
    const openModal = (index: number | null): void => {
        setShowModal({
            showModal: true,
            modalTitle: index !== null ? "Edit Contact" : "Add New Contact",
            index: index
        });
    };
    const handleModalSubmit = (modalState: ModalState) => {
        if (modalState.formIsEmpty) {
            if (index !== null) {
                dispatch({ type: "DELETE_CONTACT", index });
            }
            setShowModal({ showModal: false, modalTitle: "", index: null });
        } else if (modalState.formIsValid) {
            if (index !== null) {
                dispatch({ type: "EDIT_CONTACT", data: modalState.contact, index });
            } else {
                dispatch({ type: "ADD_CONTACT", data: modalState.contact });
            }
            setShowModal({ showModal: false, modalTitle: "", index: null });
        } else {
            setMessage({
                showMessage: true,
                message: "Invalid Form"
            });
            setTimeout(() => setMessage({ showMessage: false, message: "" }), 2000);
        }
    };
    return (
        <>
        {showMessage && <MessageModal message={message} />}
        <div className="phonebook">
            {contacts.length === 0 && <Loader />}
            {contacts.length > 0 &&
            contacts.map((contact: Contact, index: number) => {
                return (
                <ContactCard
                    contact={contact}
                    index={index}
                    openModal={openModal}
                    key={index}
                />
                );
            })}
            {contacts.length > 0 && <AddNewContact openModal={openModal} />}
            {showModal && (
            <ContactModal
                handleModalSubmit={handleModalSubmit}
                modalTitle={modalTitle}
                initialModalState={
                index === null
                    ? undefined
                    : {
                        contact: { ...contacts[index] },
                        isValid: { name: true, lastName: true, phoneNumber: true },
                        formIsEmpty: false,
                        formIsValid: true
                    }
                }
            />
            )}
        </div>
        </>
    );
};

export const PgDev_Phonebook = {name:"DevTools - Phonebook", renderer: Phonebook}