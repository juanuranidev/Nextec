import React from 'react';
import Title from '../../Title/Title';
import ContactDetails from './ContactDetails/ContactDetails';
import './_ContactContainer.scss';

const ContactContainer = () => {
  return (
    <>
      <section className='contactContainer'>
        <Title text={'¿Tienes alguna duda? Contáctanos'} />
        <ContactDetails />
      </section>
    </>
  );
};

export default ContactContainer;