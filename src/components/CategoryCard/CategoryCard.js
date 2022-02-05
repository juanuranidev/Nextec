import React from 'react';
import { Link } from 'react-router-dom';
import './_CategoryCard.scss';

const CategoryCard = (props) => {
  return (
    <Link className='categoryCard' to={`/category/${props.link}`}><h2 className='categoryCard_h2' >{props.text}</h2></Link>
  );
};

export default CategoryCard;
