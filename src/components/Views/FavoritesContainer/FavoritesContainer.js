import React from 'react';
import { useFavoritesContext } from '../../Context/FavoritesContext';
import Header from '../Main/Header/Header';
import Message from '../../Message/Message';
import BackButton from './../../BackButton/BackButton';
import './_FavoritesContainer.scss';

const FavoritesContainer = () => {
  const { favorites } = useFavoritesContext()

  if(favorites.length===0){
    return(
      <>
        <Message h2={"No tenés favoritos"} p={"¡Agrega nuevos productos!"} />
      </>
    )
  }

  return (
    <>   
      <section className="favoritesContainer">
        <BackButton />
        {/* <ItemList products={favorites}/> */}
      </section>
    </>
  );
};

export default FavoritesContainer;