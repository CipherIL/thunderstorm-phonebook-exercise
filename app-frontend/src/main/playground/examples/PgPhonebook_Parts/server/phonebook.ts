import {
	IndexedDBModule,
} from '@nu-art/thunderstorm/frontend';
import { Contact } from "../types/contact.type";

const getIndexedDB = () => {
    return IndexedDBModule.getOrCreate({name:'Contacts',uniqueKeys:["_id"]});
} 

export const savePhonebook = async (contacts:Contact[]) => {
    const db = await (getIndexedDB()).open();
    await db.upsert({_id:"1",content:contacts})
}

export const readPhonebook = async () => {
    const db = await (getIndexedDB()).open();
    const contacts = await db.get({_id:"1"});
    console.log(contacts)
    if(contacts && contacts.content && contacts.content.length > 0)
        return contacts.content;
    return [{name:"Adam",lastName:"van der Kruk",phoneNumber:"0502565322"}];
}