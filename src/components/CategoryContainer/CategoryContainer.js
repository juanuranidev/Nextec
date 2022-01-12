import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import {getFetch} from '../products'
import BackButton from '../buttons/BackButton/BackButton'
import PageLoader from '../pageLoader/PageLoader'
import ItemList from '../ItemListContainer/ItemList/ItemList'

const CategoryContainer = () => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const {idCategoria} = useParams()
    
    useEffect(() => {
        if (idCategoria) {
                getFetch 
                .then(response => setData(response.filter(prod => prod.categoria === idCategoria)))
                .catch(error => console.log(error))
                .finally(() => setLoading(false))
        } else {
                getFetch 
                .then(response => setData(response))
                .catch(error => console.log(error))
                .finally(() => setLoading(false))
        }
    }, [idCategoria])


    return (
        <>
            <BackButton />
            {loading    ? <PageLoader />    : <ItemList products={data}/>}
        </>
    )
}

export default CategoryContainer
