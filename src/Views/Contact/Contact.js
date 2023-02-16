import React from "react";
import ContactDetails from "./ContactDetails/ContactDetails";
import "./Contact.scss";

const ContactContainer = () => {
  return (
    <section className="contact">
      <div className="contact_container">
        <div className="contact_container_info">
          <h2 className="contact_container_info_h2">Hablemos</h2>
          <p className="contact_container_info_p">
            Cualquier duda, inquietud o consulta podrás resolverla llenando el
            siguiente formulario
          </p>
        </div>
        <div className="contact_container_form"></div>
      </div>
    </section>
  );
};

export default ContactContainer;
