import { React, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getFirestore, query, collection, where, getDocs } from 'firebase/firestore';
import Header from '../../Header/Header';
import BackButton from '../../BackButton/BackButton';
import Title from '../../Title/Title';
import PageLoader from '../../PageLoader/PageLoader';
import ItemList from '../ItemListContainer/ItemList/ItemList';
import './_CategoryContainer.scss';

const CategoryContainer = () => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const {idCategory} = useParams()

    useEffect(() => {
        const dataBase = getFirestore()
        const queryCollection = query(collection(dataBase, 'items'), where('category', '==', idCategory))
        getDocs(queryCollection)
        .then(res => setData(res.docs.map(prod => ({id: prod.id, ...prod.data()}))))
        .catch(err => console.log(err))
        .finally(() => setLoading(false))
    }, [idCategory])

    return (
        <>
        <Header text={'Por categoría'} />
        <section className='categoryContainer'>
            <BackButton />
            <Title text={`Mirando sólo ${idCategory}`} />
            {loading
            ? <PageLoader />
            : <ItemList products={data}/>}
        </section>
        </>

    )
}

export default CategoryContainer