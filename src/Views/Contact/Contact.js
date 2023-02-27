import React from "react";
import { useFormik } from "formik";
import "./Contact.scss";

const ContactContainer = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    onSubmit: (values) => {
      console.log(JSON.stringify(values, null, 2));
    },
  });

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
        <div className="contact_container_form">
          <form>
            <label>Nombre</label>
            <input
              value={formik.values.name}
              onChange={formik.handleChange}
              label="name"
            />
            <label>Email</label>
            <input
              value={formik.values.email}
              onChange={formik.handleChange}
              label="email"
            />
            <label>Mensaje</label>
            <textarea
              value={formik.values.message}
              onChange={formik.handleChange}
              label="message"
            />
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactContainer;
