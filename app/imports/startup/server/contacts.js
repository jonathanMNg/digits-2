import { Contacts } from '../../api/contacts/contacts.js';
import { _ } from 'meteor/underscore';

/**
 * A list of Stuff to pre-fill the Collection.
 * @type {*[]}
 */
const ContactsList = [
  {
    first: 'Jonathan',
    last: 'Nguyen',
    address: '901 River st',
    telephone: '808-277-8292',
    email: 'nn4@hawaii.edu',
  },
  {
    first: 'June',
    last: 'Akers',
    address: '2540 Campus Rd',
    telephone: '808-223-1524',
    email: 'jakers@hawaii.edu',
  },
  {
    first: 'Steve',
    last: 'Jobs',
    address: '1 Infinite Loop',
    telephone: '808-277-8292',
    email: 'stevej@apple.com',
  },
];

/**
 * Initialize the Stuff collection if empty with seed data.
 */
if (Contacts.find().count() === 0) {
  _.each(ContactsList, function seedContacts(contact) {
    Contacts.insert(contact);
  });
}
