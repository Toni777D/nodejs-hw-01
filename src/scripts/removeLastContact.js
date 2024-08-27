import { PATH_DB } from '../constants/contacts.js';
import * as fs from "node:fs/promises";
import { getAllContacts } from './getAllContacts.js';


export const removeLastContact = async () => {
    const contactsList = await getAllContacts();
    contactsList.pop();
    await fs.writeFile(PATH_DB, JSON.stringify(contactsList, null, 2));
};

removeLastContact();