import React from 'react';
import './_AboutContent.scss';

const AboutContent = (props) => {
  return (
    <div className="aboutContent">
        <img src={props.img} alt={props.img}  className="aboutContent_img" />
        <h3 className="aboutContent_h3">{props.h3}</h3>
        <p className="aboutContent_p new-line">{props.p}</p>
    </div>
  );
};

export default AboutContent;