import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./Contact.scss";

const ContactContainer = () => {
  let messageSchema = object({
    name: string().required("*"),
    email: email().required("*"),
    phone: number().required("*"),
    message: string().required("*"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
    onSubmit: (values) => {
      console.log(JSON.stringify(values, null, 2));
    },
    validationSchema: messageSchema,
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

        <form onSubmit={formik.handleSubmit} className="contact_container_form">
          <div className="contact_container_form_div_name">
            <label className="contact_container_form_div_name_label">
              Nombre
            </label>
            <input
              name="name"
              tyoe="text"
              className="contact_container_form_div_name_input"
              value={formik.values.name}
              onChange={formik.handleChange}
            />
          </div>
          <div className="contact_container_form_div">
            <div className="contact_container_form_div_email">
              <label className="contact_container_form_div_email_label">
                Email
              </label>
              <input
                name="email"
                type="email"
                className="contact_container_form_div_email_input"
                value={formik.values.email}
                onChange={formik.handleChange}
              />
            </div>
            <div className="contact_container_form_div_phone">
              <label className="contact_container_form_div_phone_label">
                Telefono
              </label>
              <input
                name="phone"
                type="number"
                className="contact_container_form_div_phone_input"
                value={formik.values.phone}
                onChange={formik.handleChange}
              />
            </div>
          </div>

          <div className="contact_container_form_div_textarea">
            <label className="contact_container_form_div_textarea_label">
              Mensaje
            </label>
            <textarea
              name="message"
              className="contact_container_form_div_textarea_textarea"
              value={formik.values.message}
              onChange={formik.handleChange}
            />
          </div>
          <button type="submit">Enviar</button>
        </form>
      </div>
    </section>
  );
};

export default ContactContainer;
