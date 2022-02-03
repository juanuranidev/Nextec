import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getFirestore, query, collection, where, getDocs } from 'firebase/firestore'
import Header from '../../Header/Header'
import BackButton from '../../BackButton/BackButton'
import Title from '../../Title/Title'
import PageLoader from '../../PageLoader/PageLoader'
import ItemList from '../ItemListContainer/ItemList/ItemList'
import './_CategoryContainer.scss'

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
    }, [idCategoria])

    return (
        <>
        <Header text={idCategoria} />
        <section className="categoryContainer">
            <BackButton />
            <Title text={`Mirando sólo ${idCategoria}`} />
            {loading
            ? <PageLoader />
            : <ItemList products={data}/>}
        </section>
        </>

    )
}

export default CategoryContainer