import React from 'react';
import Banner from '../Banner/Banner';
import Comments from '../Comments/Comments';
import CompanyPartners from '../CompanyPartners/CompanyPartners';
import Products from '../Products/Products';
import Review from '../Review/Review';


const Home = () => {
    return (
        <div>
            
            
            <Banner></Banner>
            <Products></Products>
            <Review></Review>
            <Comments></Comments>
            <CompanyPartners></CompanyPartners>
            

            
            
        </div>
    );
};

export default Home;