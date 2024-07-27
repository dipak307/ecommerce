import React from 'react'
import HeroSection from './components/HeroSection';
// import { useContext } from 'react';
import { AppContext, useProductContext } from './context/ProductContext';

const About = () => {
// const {myName}=useContext(AppContext);
const {myName}=useProductContext();


  const data={
         name:"Dipak Ecommerce"
  }
  return (
  <>
    {myName}
   <HeroSection myData={data}/>
  </>
  )
}

export default About;