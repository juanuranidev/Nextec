import React from 'react';
import { Link } from 'react-router-dom';
import './_FavoritesWidget.scss'

const FavoritesWidget = ({onClick}) => {
  return (
    <Link to="/favorites" className="favoritesWidget"><span className="fas fa-heart fa-2x favoritesWidget_span" onClick={onClick} /></Link>
  );
};

export default FavoritesWidget;
