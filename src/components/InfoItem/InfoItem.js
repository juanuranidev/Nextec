import React from 'react';
import './_InfoItem.scss';

const InfoItem = (props) => {
  return (
    <div className='infoItem'>
        <span className={`infoItem_span ${props.span}`} />
        <p className='infoItem_p'>{props.p}</p>
    </div>
  );
};

export default InfoItem;