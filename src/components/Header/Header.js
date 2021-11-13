import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import './Header.css';

const Header = () => {
    const {user,logOut} = useAuth();
    return (
        
        <div className="header-container bg-dark ">
            <div className="header container">
                <div className="row">
                    <div className="col-md-2">
                        <div>
                            <img className="w-75" src="https://elementorpress.com/templatekit-pro/layout08/wp-content/uploads/2020/12/logo-1.png" alt="" />
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