import React, { useState } from "react";
import { toast } from "react-toastify";
import { useFormik } from "formik";
import { registerMessageService } from "./ContactServices";
import { object, string, number } from "yup";
import PrimaryButton from "../../Components/Buttons/PrimaryButton";
import Socials from "../../Components/Socials/Socials";
import "./Contact.scss";

const ContactContainer = () => {
  const [isLoading, setIsLoading] = useState(false);

  let messageSchema = object({
    name: string().required("*"),
    email: string().required("*"),
    phone: number(),
    message: string().required("*"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
    onSubmit: async (values) => {
      setIsLoading(true);
      try {
        const response = await registerMessageService(values);
        toast.success("Mensaje enviado con éxito");
        formik.resetForm();
      } catch (error) {
        console.log(error);
        toast.error("Ocurrión un error. Intente nuevamente.");
      }
      setIsLoading(false);
    },
    validationSchema: messageSchema,
  });

  return (
    <section className="contact">
      <div className="contact_container">
        <div className="contact_container_info">
          <h2 className="contact_container_info_h2">HABLEMOS</h2>
          <p className="contact_container_info_p">
            Cualquier duda, inquietud o consulta podrás resolverla llenando el
            siguiente formulario.
          </p>
          <h4 className="contact_container_info_h4">Dirección</h4>
          <p className="contact_container_info_p">Calle falsa 123</p>
          <h4 className="contact_container_info_h4">Email</h4>
          <p className="contact_container_info_p">contacto@nextec.com</p>
          <h4 className="contact_container_info_h4">Teléfono</h4>
          <p className="contact_container_info_p">+54 3512345678</p>
          <h4 className="contact_container_info_h4">Horarios</h4>
          <p className="contact_container_info_p">
            Lun a Vie de 8 a 18hs. Sábado de 10 a 14hs.
          </p>
          <Socials />
        </div>
        <form onSubmit={formik.handleSubmit} className="contact_container_form">
          <div className="contact_container_form_div_name">
            <label className="contact_container_form_div_name_label">
              Nombre completo{" "}
              <label
                style={{
                  color:
                    formik.errors.name && formik.touched.name
                      ? "#ff0000"
                      : "#000000",
                }}
              >
                *
              </label>
            </label>
            <input
              id="name"
              name="name"
              type="text"
              className="contact_container_form_div_name_input"
              value={formik.values.name}
              onChange={formik.handleChange}
            />
          </div>
          <div className="contact_container_form_div">
            <div className="contact_container_form_div_email">
              <label className="contact_container_form_div_email_label">
                Email{" "}
                <label
                  style={{
                    color:
                      formik.errors.email && formik.touched.email
                        ? "#ff0000"
                        : "#000000",
                  }}
                >
                  *
                </label>
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
                Teléfono
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
              Mensaje{" "}
              <label
                style={{
                  color:
                    formik.errors.message && formik.touched.message
                      ? "#ff0000"
                      : "#000000",
                }}
              >
                *
              </label>
            </label>
            <textarea
              name="message"
              className="contact_container_form_div_textarea_textarea"
              value={formik.values.message}
              onChange={formik.handleChange}
            />
          </div>
          <PrimaryButton
            type="submit"
            text={isLoading ? "Enviando..." : "Enviar"}
            disabled={isLoading}
          />
        </form>
      </div>
    </section>
  );
};

export default ContactContainer;
