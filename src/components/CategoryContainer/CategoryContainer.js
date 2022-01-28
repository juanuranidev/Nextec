import React from 'react'
import { useState, useEffect } from 'react'
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore'
import { useParams } from 'react-router-dom'
import BackButton from '../buttons/BackButton/BackButton'
import PageLoader from '../pageLoader/PageLoader'
import ItemList from '../ItemListContainer/ItemList/ItemList'

const CategoryContainer = () => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const {idCategoria} = useParams()

    useEffect(() => {
        const db = getFirestore()
        const queryCollection = query(collection(db, 'items'), where('category', '==', idCategoria))
        getDocs(queryCollection)
        .then(res => setData(res.docs.map(prod => ({id: prod.id, ...prod.data()}))))
        .catch(err => err)
        .finally(() => setLoading(false))
    }, [])

    return (
        <>
            <BackButton />
            {loading    ? <PageLoader />    : <ItemList products={data}/>}
        </>
    )
}

export default CategoryContainer