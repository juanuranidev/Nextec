import React, { useState } from "react";
import {
  addDoc,
  getFirestore,
  query,
  collection,
  where,
  getDocs,
} from "firebase/firestore";
import { toast } from "react-toastify";
import "./Newsletter.scss";

const Newsletter = () => {
  const [loader, setLoader] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const [isSuscribed, setIsSuscribed] = useState(false);

  const successfulSubscription = () =>
    toast.success("Suscripción realizada con éxito");
  const errorSubscription = () => toast.error("Ya te encuentras registrado");

  const handleSubmit = async (e) => {
    setLoader(true);
    e.preventDefault();

    let emailObject = {};
    emailObject.email = userEmail;

    const dataBase = getFirestore();

    const emailCollection = collection(dataBase, "newsletter");
    const queryCollection = query(
      emailCollection,
      where("email", "==", emailObject.email)
    );

    try {
      const data = await getDocs(queryCollection);
      if (data.docs.length) {
        errorSubscription();
      } else {
        await addDoc(emailCollection, emailObject);
        setIsSuscribed(true);
        successfulSubscription();
        localStorage.setItem("alreadySuscribed", JSON.stringify(true));
      }
      setLoader(false);
    } catch (error) {
      console.log(error);
    }
  };

  if (loader) {
    return <p>Cargando</p>;
  }

  if (isSuscribed) {
    return (
      <div className="newsletter_suscribed">
        <h2 className="newsletter_suscribed_h2">
          Has sido suscrito a nuestro newsletter correctamente
        </h2>
      </div>
    );
  }

  return (
    <div className="newsletter">
      <h2 className="newsletter_h2">Vamos a cambiar el mundo del gaming</h2>
      <p className="newsletter_p">
        Suscríbete para recibir promociones, ingresos y torneos.
      </p>
      <div className="newsletter_div">
        <form className="newsletter_div_form" onSubmit={(e) => handleSubmit(e)}>
          <input
            name="email"
            type="email"
            placeholder="Email Gamer"
            value={userEmail}
            className="newsletter_div_form_input"
            onChange={(e) => setUserEmail(e.target.value)}
          />
          <button
            type="submit"
            className={`newsletter_div_form_button ${!userEmail && "disabled"}`}
            disabled={!userEmail ? true : false}
          >
            UNIRME
          </button>
        </form>
      </div>
    </div>
  );
};

export default Newsletter;
