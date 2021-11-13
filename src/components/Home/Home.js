import React from 'react';
import Banner from '../Banner/Banner';
import Comments from '../Comments/Comments';
import CompanyPartners from '../CompanyPartners/CompanyPartners';
import NecessaryMaterials from '../NecessaryMaterials/NecessaryMaterials';
import Products from '../Products/Products';
import Review from '../Review/Review';


const Home = () => {
    return (
        <div>
            
            
            <Banner></Banner>
            <Products></Products>
            <Review></Review>
            <NecessaryMaterials></NecessaryMaterials>
            <Comments></Comments>
            <CompanyPartners></CompanyPartners>
            

            
            
        </div>
    );
};

export default Home;