import React, {useState} from 'react'
import { useCartContext } from '../../../Context/CarContext'
import './_PaymentsDetails.scss'

const PaymentsDetails = () => {
    const { purchase } = useCartContext()
    const [inputs, setInputs] = useState({
        name: '',
        lastName: '',
        document: '',
        number: '',
        country: '',
        city: '',
        street: '',
        streetNumber: '',
        departament: '',
        zipCode: ''
    })

    const handleChange = (e) => {
      setInputs({
        ...inputs,
        [e.target.name] : e.target.value
      })
    }

    const handleSubmit = (e) => {
      e.preventDefault();
      setInputs({
        name: '',
        lastName: '',
        document: '',
        number: '',
        country: '',
        city: '',
        street: '',
        streetNumber: '',
        departament: '',
        zipCode: ''
      })
      console.log(inputs)
    }

    return (
    <section className="paymentsDetails">
      <form className="paymentsDetails_form" onSubmit={handleSubmit}>
        <label className="paymentsDetails_form_label">Datos Principales</label>
        <div className="inputContainer">
          <input 
            type="text" 
            name="name" 
            placeholder='Nombre'
            value={inputs.name} 
            onChange={handleChange}
            className="inputContainer_label"
          />
          <input 
            type="text" 
            name="lastName" 
            placeholder='Apellido'
            value={inputs.lastName} 
            onChange={handleChange}
            className="inputContainer_label"
          />
        </div>
        <div className="inputContainer">
        <input 
            type="number" 
            name="document" 
            placeholder='Documento'
            value={inputs.document} 
            onChange={handleChange}
            className="inputContainer_label"
          />
          <input 
          type="number" 
          name="number" 
          placeholder='Número de celular'
          value={inputs.number} 
          onChange={handleChange}
          className="inputContainer_label"
        />
        </div>
        <label className="paymentsDetails_form_label">Datos del domicilio</label>
        <div className="inputContainer">
          <input 
            type="text" 
            name="country"
            placeholder='País'
            value={inputs.country} 
            onChange={handleChange}
            className="inputContainer_label"
          />
          <input 
            type="text" 
            name="city" 
            placeholder='Ciudad'
            value={inputs.city} 
            onChange={handleChange}
            className="inputContainer_label"
          />
        </div>
        <div className="inputContainer">
          <input 
            type="text" 
            name="street" 
            placeholder='Calle'
            value={inputs.street} 
            onChange={handleChange}
            className="inputContainer_label"
          />
          <input 
            type="number" 
            name="streetNumber"
            placeholder='Número de la calle'
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
            placeholder='Código postal'
            value={inputs.zipCode} 
            onChange={handleChange}
            className="inputContainer_label"
          />
        </div>
        <button className="paymentsDetails_form_button" type="submit" onClick={() => purchase(inputs)} >Enviar</button>
      </form>
    </section>
    )
}

export default PaymentsDetails