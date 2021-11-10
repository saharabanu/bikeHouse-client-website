import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="bg-dark">
            <img src="https://elementorpress.com/templatekit-pro/layout08/wp-content/uploads/2020/12/404.jpg" alt="" />
             <Link to='/'>
             <button type="button" class="btn btn-danger">Go Back Home</button></Link>
        </div>
    );
};

export default NotFound;