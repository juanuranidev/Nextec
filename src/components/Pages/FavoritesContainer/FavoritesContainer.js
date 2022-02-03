import React from 'react'
import { useFavoritesContext } from '../../Context/FavoritesContext'
import BackButton from './../../BackButton/BackButton'
import Title from '../../Title/Title'
import ItemList from '../ItemListContainer/ItemList/ItemList'
import './_FavoritesContainer.scss'

const FavoritesContainer = () => {
  const { favorites } = useFavoritesContext()

  return (
    <section className="favoritesContainer">
      <BackButton />
      <Title text={"Productos favoritos"} />
      <ItemList products={favorites}/>
    </section>
  );
};

export default FavoritesContainer;