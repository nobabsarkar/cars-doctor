import React from 'react';
import Banner from '../Banner/Banner';
import About from '../About/About';
import Services from '../Services/Services';
import Contacts from '../../Contacts/Contacts';
import Products from '../Products/Products';
import Team from '../Team/Team';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <Contacts></Contacts>
            <Products></Products>
            <Team></Team>
        </div>
    );
};

export default Home;