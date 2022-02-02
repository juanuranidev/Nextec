import React from 'react'
import { useState } from 'react'
import { collection, getDocs, getFirestore, query, addDoc, writeBatch, where, documentId } from 'firebase/firestore'

const ContactDetails = () => {
    const [userInfo, setUserInfo] = useState({
        name: '',
        mail: '',
        message: '',
    })

    const handleChange = (e) => {
        setUserInfo({
          ...userInfo,
          [e.target.name] : e.target.value
        })
    }
    
    const handleSubmit = (e) => {
        e.preventDefault(); 
        setUserInfo({
            name: userInfo.name,
            mail: userInfo.mail,
            message: userInfo.message,
        })
        console.log(userInfo)
    }
    // console.log(userInfo)

    const purchase = async (userInfo) => {
        let message = {}
        message.name = userInfo.name
        message.mail = userInfo.mail
        message.content = userInfo.message
        console.log(userInfo)

         // Send order
         const db = getFirestore()
         const messageCollection = collection(db, 'messages') 
         await addDoc(messageCollection, message)
         .then(resp => console.log("listo"))
         .catch(err => console.log(err))
         .finally (() => console.log("mensaje enviado"))

    }






  return (
    <>
        <h2>¿Tienes alguna duda? Contáctanos</h2>
        <form onSubmit={handleSubmit}>
        <label>Nombre</label>
        <input 
        type="text" 
        name="name" 
        placeholder='Nombre*'
        value={userInfo.name} 
        onChange={handleChange}/>
        <label>Correo</label>
        <input 
        type="text" 
        name="mail" 
        placeholder='Correo electrónico*'
        value={userInfo.mail} 
        onChange={handleChange}
        className="inputContainer_label"/>
        <label>Mensaje</label>
        <input 
        type="text" 
        name="message" 
        placeholder='Mensaje*'
        value={userInfo.message} 
        onChange={handleChange}
        className="inputContainer_label"/>
        <button onClick={() => purchase(userInfo)}>Enviar</button>
        </form>
    </>
  );
};

export default ContactDetails;