import React from 'react';
import Banner from '../Banner/Banner';
import CompanyPartners from '../CompanyPartners/CompanyPartners';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Products from '../Products/Products';
import Reviews from '../Reviews/Reviews';

const Home = () => {
    return (
        <div>
            
            <Header></Header>
            <Banner></Banner>
            <Products></Products>
            <Reviews></Reviews>
            <CompanyPartners></CompanyPartners>
            <Footer></Footer>

            
            
        </div>
    );
};

export default Home;