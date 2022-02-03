import React from 'react';
import Header from '../../Header/Header';
import Title from '../../Title/Title';
import AboutContent from './AboutContent/AboutContent';
import Adn from './img/adn.jpg'
import Mission from './img/mission.jpg'
import Vision from './img/vision.jpg'
import Values from './img/values.jpg'
import './_AboutContainer.scss'

const AboutContainer = () => {
  return (
    <>
    <Header text={"Nosotros"} />
    <section className="aboutContainer">
        <Title text={"Nuestra empresa"} />
        <AboutContent img={Adn}/>
        <AboutContent img={Mission} h3={"Misión"} p={"Brindar a nuestros clientes un servicio de confianza y excelencia  tanto en la venta como en la post venta, proporcionando comodidad y precios competitivos para la compra de los mejores productos tecnológicos del mercado."} />
        <AboutContent img={Vision} h3={"Visión"} p={"Ser una empresa percibida en el mercado Argentino por la calidad de sus servicios y el respeto hacia sus clientes."} />
        <AboutContent img={Values} h3={"Valores"} p={"Confianza: Tech Store tiene como uno de sus valores la confiabilidad de sus productos y de las relaciones con sus clientes, con el objetivo de lograr una relación de fidelidad a largo plazo. \n\n Responsabilidad: La empresa busca cumplir con los plazos establecidos, con la calidad de sus productos y con la atención al cliente a través de un servicio personalizado. \n\n Respeto: El respeto hacia sus clientes y sus necesidades es un valor altamente considerado dentro del equipo de Tech Store. \n\n Innovación: La empresa invierte en su capacidad de innovación generando estrategias modernas para que sus clientes reciban sus productos de la mejor manera."} />
    </section>
    </>
  );
};

export default AboutContainer;