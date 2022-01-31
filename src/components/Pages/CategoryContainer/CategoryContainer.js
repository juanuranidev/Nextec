import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getFirestore, query, collection, where, getDocs } from 'firebase/firestore'
import BackButton from '../../BackButton/BackButton'
import PageLoader from '../../PageLoader/PageLoader'
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
            {loading
            ? <PageLoader />
            : <ItemList products={data}/>}
        </>
    )
}

export default CategoryContainer