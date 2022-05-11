import React from 'react';
import { contact } from '../content/contact.json';

function Contact() {
  return (
    <div>
      <p>{contact.email}</p>
      <p>{contact.phone}</p>
      <p><a href={contact.linkedin}>LinkedIn</a></p>
      <p><a href={contact.github}>GitHub</a></p>
      <p><a href={contact.twitter}>Twitter</a></p>
    </div>
  );
}

export default Contact;