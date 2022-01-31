import React from 'react'
import { useCartContext } from '../../../Context/CarContext'
import { toast } from 'react-toastify'
import './_PaymentsDetails.scss'

const PaymentsDetails = () => {
    const { purchase, inputs, setInputs, cartList } = useCartContext()
    const requiredInputs = [inputs.name, inputs.lastName, inputs.document, inputs.mail, inputs.country, inputs.city, inputs.street, inputs.streetNumber, inputs.zipCode]

    const emptyValues = () => toast.warn("Completa todos los campos obligatorios")

    const handleChange = (e) => {
      setInputs({
        ...inputs,
        [e.target.name] : e.target.value
      })
    }

    const handleSubmit = (e) => {
      e.preventDefault();
      setInputs({
        name: inputs.name,
        lastName: inputs.lastName,
        document: inputs.document,
        mail: inputs.mail,
        country: inputs.country,
        city: inputs.city,
        street: inputs.street,
        streetNumber: inputs.streetNumber,
        departament: inputs.departament,
        zipCode: inputs.zipCode,
      })
    }

    return (
    <section className="paymentsDetails">
      <form className="paymentsDetails_form" onSubmit={handleSubmit}>
        <label className="paymentsDetails_form_label">Datos Principales</label>
        <div className="inputContainer">
          <input 
            type="text" 
            name="name" 
            placeholder='Nombre*'
            value={inputs.name} 
            onChange={handleChange}
            className="inputContainer_label"
          />
          <input 
            type="text" 
            name="lastName" 
            placeholder='Apellido*'
            value={inputs.lastName} 
            onChange={handleChange}
            className="inputContainer_label"
          />
        </div>
        <div className="inputContainer">
        <input 
            type="number" 
            name="document" 
            placeholder='Documento*'
            value={inputs.document} 
            onChange={handleChange}
            className="inputContainer_label"
          />
          <input 
          type="text" 
          name="mail" 
          placeholder='Correo electrónico*'
          value={inputs.mail} 
          onChange={handleChange}
          className="inputContainer_label"
        />
        </div>
        <label className="paymentsDetails_form_label">Datos del domicilio</label>
        <div className="inputContainer">
          <input 
            type="text" 
            name="country"
            placeholder='País*'
            value={inputs.country} 
            onChange={handleChange}
            className="inputContainer_label"
          />
          <input 
            type="text" 
            name="city" 
            placeholder='Ciudad*'
            value={inputs.city} 
            onChange={handleChange}
            className="inputContainer_label"
          />
        </div>
        <div className="inputContainer">
          <input 
            type="text" 
            name="street" 
            placeholder='Calle*'
            value={inputs.street} 
            onChange={handleChange}
            className="inputContainer_label"
          />
          <input 
            type="number" 
            name="streetNumber"
            placeholder='Número de la calle*'
            value={inputs.streetNumber} 
            onChange={handleChange}
            className="inputContainer_label"
          />
        </div>
        <div className="inputContainer">
          <input 
              type="text" 
              name="departament"
              placeholder='Departamento (opcional)'
              value={inputs.departament} 
              onChange={handleChange}
              className="inputContainer_label"
          />
          <input 
            type="number" 
            name="zipCode"
            placeholder='Código postal*'
            value={inputs.zipCode} 
            onChange={handleChange}
            className="inputContainer_label"
          />
        </div>
        {requiredInputs.includes("")
        ? <button className="paymentsDetails_form_button" onClick={() => emptyValues()} >Enviar no</button>
        : <button className="paymentsDetails_form_button" type="submit" onClick={() => purchase(inputs)} disabled={cartList.length===0} >Enviar</button>
        }
      </form>
    </section>
    )
}

export default PaymentsDetails