import React from 'react';
import Header from './header';
import Dropdown from './dropdown';
import Cards from './cards';
import Footer from './footer';

function Container() {
  return (
    <div className='container'>

        <Header/>
        <Dropdown/>
        <Cards/>
        <Footer/>

    </div>
  )
}

export default Container;