import React from 'react';
import ContactDetails from './ContactDetails/ContactDetails';
import './_ContactContainer.scss';

const ContactContainer = () => {
  return (
    <section className="contactContainer">
        <ContactDetails />
    </section>
  );
};

export default ContactContainer;