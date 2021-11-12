import React from 'react';
import Banner from '../Banner/Banner';
import CompanyPartners from '../CompanyPartners/CompanyPartners';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Products from '../Products/Products';
import Review from '../Review/Review';


const Home = () => {
    return (
        <div>
            
            <Header></Header>
            <Banner></Banner>
            <Products></Products>
            <Review></Review>
            <CompanyPartners></CompanyPartners>
            <Footer></Footer>

            
            
        </div>
    );
};

export default Home;