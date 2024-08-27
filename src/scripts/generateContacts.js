import * as fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import { getAllContacts } from './getAllContacts.js';

export const generateContacts = async (number) => {
  
    const contactsList = await getAllContacts();
    const newContacts = Array(number).fill(0).map( createFakeContact);
    contactsList.push(...newContacts);
    await fs.writeFile(PATH_DB, JSON.stringify(contactsList, null, 2));
    
};

generateContacts(5);