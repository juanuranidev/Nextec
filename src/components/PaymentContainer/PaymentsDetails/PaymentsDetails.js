import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { useCartContext } from '../../context/CarContext'
import './PaymentsDetails.scss'

const PaymentsDetails = () => {
    const { purchase } = useCartContext()
    const [inputs, setInputs] = useState({
      name: '',
      lastName: '',
      country: '',
      city: '',
      street: '',
      streetNumber: '',
      zipCode: ''
    });

    const handleChange = (e) => {
      setInputs({
        ...inputs,
        [e.target.name] : e.target.value
      })
    }

    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(inputs);
      setInputs({
        name: '',
        lastName: '',
        country: '',
        city: '',
        street: '',
        streetNumber: '',
        zipCode: ''
      })
    }

    return (
      <form onSubmit={handleSubmit}>
      <label>Datos del destinatario:</label>
      <input 
        type="text" 
        name="name" 
        placeholder='Nombre'
        value={inputs.name} 
        onChange={handleChange}
      />
      <input 
        type="text" 
        name="lastName" 
        placeholder='Apellido'
        value={inputs.lastName} 
        onChange={handleChange}
      />
      <label>Domicilio del destinatario</label>
      <input 
        type="text" 
        name="country"
        placeholder='País'
        value={inputs.country} 
        onChange={handleChange}
      />
      <input 
        type="text" 
        name="city" 
        placeholder='Ciudad'
        value={inputs.city} 
        onChange={handleChange}
      />
      <input 
        type="text" 
        name="street" 
        placeholder='Calle'
        value={inputs.street} 
        onChange={handleChange}
      />
      <input 
        type="number" 
        name="streetNumber" 
        placeholder='Número'
        value={inputs.streetNumber} 
        onChange={handleChange}
      />
      <input 
        type="number" 
        name="zipCode"
        placeholder='Código postal'
        value={inputs.zipCode} 
        onChange={handleChange}
      />
        <button type="submit" onClick={() => purchase(inputs)} >Enviar</button>
    </form>
    )
}

export default PaymentsDetails
