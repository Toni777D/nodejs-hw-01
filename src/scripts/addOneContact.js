import {PATH_DB} from '../constants/contacts.js';
import * as fs from "node:fs/promises";
import { createFakeContact } from '../utils/createFakeContact.js';
import { getAllContacts } from './getAllContacts.js';

export const addOneContact = async () => {
const contactsList = await getAllContacts();
const newContact = createFakeContact();
contactsList.push(newContact);
await fs.writeFile(PATH_DB, JSON.stringify(contactsList, null, 2));
};

addOneContact();