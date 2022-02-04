import React from 'react'
import { Link } from 'react-router-dom'
import { useFavoritesContext } from '../../Context/FavoritesContext'
import './_FavoritesWidget.scss'

const FavoritesWidget = ({onClick}) => {
  const { favorites } = useFavoritesContext()
  return (
    <Link to='/favorites' className='favoritesWidget'><span className={favorites.length===0? 'fas fa-heart fa-2x favoritesWidget_span opacity':'fas fa-heart fa-2x favoritesWidget_span'}  onClick={onClick} /></Link>
  );
};

export default FavoritesWidget;
