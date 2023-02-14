import React from 'react';
import { useState, useEffect } from 'react';
import { getFirestore, query, collection, getDocs } from 'firebase/firestore';
import Header from './Header/Header';
import './Main.scss';

function MainContainer() {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const dataBase = getFirestore()
        const queryCollection = query(collection(dataBase, 'items'))
        getDocs(queryCollection)
            .then(res => setData(res.docs.map(prod => ({id: prod.id, ...prod.data()}))))
            .catch(err => console.log(err))
            .finally(() => setLoading(false))
    }, [])

    return (
        <React.Fragment>
            <Header text={'¡Bienvenido a nuestra tienda!'}/>
                {/* <section className='categoriesContainer'>
                    <div className='categories'>
                        <CategoryCard link='notebooks' text='Notebooks' />
                        <CategoryCard link='placasdevideo' text='Placas de video' />
                        <CategoryCard link='computadoras' text='Computadoras' />
                        <CategoryCard link='monitores' text='Monitores' />
                    </div>
                </section>
                <main className='mainContainer'>
                    {loading
                    ? <PageLoader />
                    : <ItemList products={data}/>}
                </main>
                <section className='infoItemsContainer'>
                    <div className='infoItems'>
                        <InfoItem span='fab fa-cc-visa' p='Paga en hasta 12 cuotas con las principales tarjetas de crédito' />
                        <InfoItem span='fas fa-truck' p='Recibí tu producto en los más de 50 países que están disponibles' />
                        <InfoItem span='fas fa-clock' p='Elegí envío express para que tu pedido llegue mucho más rápido' />
                    </div>
                </section> */}
        </React.Fragment>
    )
}

export default MainContainer;