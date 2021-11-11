import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import './Header.css';

const Header = () => {
    const {user,logOut} = useAuth();
    return (
        
        <div className="header-container ">
            <div className="header container">
                <div className="row">
                    <div className="col-md-2">
                        <div>
                            <img className="w-75" src="https://cdn.shopify.com/s/files/1/0366/2325/3549/files/logo.png?v=1585015777" alt="" />
                            </div>
                        
                    </div>
                    <div className="col-md-10">
                        <div className="menu-items">
                            <div className="d-flex justify-content-end align-items-end ">
                                <div>
                                <NavLink className="header-items"
                                to="/home"
                                activeStyle={{
                                    fontWeight: "bold",
                                    color: "red"
                                }}
                                >
                                Home
                                </NavLink>
                                {/* <NavLink className="header-items"
                                to="/addProduct"
                                activeStyle={{
                                    fontWeight: "bold",
                                    color: "red"
                                }}
                                >
                                AddProduct
                                </NavLink> */}
                                
                                <NavLink className="header-items"
                                to="/explore"
                                activeStyle={{
                                    fontWeight: "bold",
                                    color: "red"
                                }}
                                >
                                Explore
                                </NavLink>
                                {user?.email ? <>
                                    <NavLink className="header-items"
                                to="/dashboard"
                                activeStyle={{
                                    fontWeight: "bold",
                                    color: "red"
                                }}
                                >
                                Dashboard
                                </NavLink>
                                
                                <button onClick={logOut}>Logout</button>
                                </>
                                :<NavLink className="header-items"
                                to="/login"
                                activeStyle={{
                                    fontWeight: "bold",
                                    color: "red"
                                }}
                                >
                                Login
                                </NavLink>}
                                <h4>{ user?.displayName}</h4>
                               
                                
           
            
            
                                   
                                </div>
                                
                            </div>

                        </div>

                    </div>

                </div>

            </div>
            
                
        </div>
    );
};

export default Header;