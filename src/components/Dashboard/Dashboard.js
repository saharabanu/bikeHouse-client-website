import React from 'react';
import {
    Link, NavLink, Route, Switch, useRouteMatch
} from "react-router-dom";
import useAuth from '../../Hooks/useAuth';
import AddProduct from '../AddProduct/AddProduct';
import AdminRoute from '../AdminRoute/AdminRoute';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import ManageAllOrders from '../ManageAllOrders/ManageAllOrders';
import ManageProducts from '../ManageProducts/ManageProducts';
import MyOrders from '../MyOrders/MyOrders';
import Payment from '../Payment/Payment';
import Reviews from '../Reviews/Reviews';
import './Dashboard.css';

const Dashboard = () => {
    const {logOut,admin} = useAuth();
    let { path, url } = useRouteMatch();
    return (
        <div className="dashboard-container">
            <div className="row container">
                <div className="col-md-3">
                    <div className="dashboard">
                    <NavLink className="header-items mb-2" style={{textDecoration:'none'}}
                     to="/"activeStyle={{
                     fontWeight: "bold",
                        color: "red"}} >
                             Home
                    </NavLink>
                    <h5 className="text-dark">Customer Dashbord Part</h5>
            
                    
                    <li className="dashboard-menu mb-2"><Link style={{textDecoration:'none'}} to={`${url}`}>Dashboard</Link></li>

                    <li className="dashboard-menu mb-2"><Link style={{textDecoration:'none'}} to={`${url}/payment`}>PAY</Link></li>

                    <li className="dashboard-menu mb-2"><Link style={{textDecoration:'none'}} to={`${url}/myOrders`}>My Orders</Link></li>

                    <li className="dashboard-menu mb-2"><Link style={{textDecoration:'none'}} to={`${url}/reviews`}>Reviews</Link></li>

                        <button className="dashboard-menu border-0 mb-2" onClick={logOut}>LogOut</button>

                        <h5 className="text-dark">Admin Dashboard part</h5>

                    { admin && <><li className="dashboard-menu mb-2"><Link style={{textDecoration:'none'}} to={`${url}/manageAllOrders`}>Manage All Orders</Link></li>

                    <li className="dashboard-menu mb-2"><Link style={{textDecoration:'none'}} to={`${url}/addProduct`}>Add a Product</Link></li>

                    <li className="dashboard-menu mb-2"><Link style={{textDecoration:'none'}} to={`${url}/makeAdmin`}>Make Admin</Link></li>

                    <li className="dashboard-menu "><Link  style={{textDecoration:'none'}}to={`${url}/manageProducts`}>Manage Products</Link></li></>}

                    </div>
                    
                </div>
                <div className=" col-12 col-md-9">
                    
                    <Switch>
                            <Route exact path={path}>
                                
                            </Route>
                            <Route path={`${path}/payment`}>
                                <Payment></Payment>
                            
                            </Route>
                            <Route path={`${path}/myOrders`}>
                                <MyOrders></MyOrders>
                            
                            </Route>
                            <Route path={`${path}/reviews`}>
                                <Reviews></Reviews>
                            
                            </Route>
                            <AdminRoute path={`${path}/manageAllOrders`}>
                                <ManageAllOrders></ManageAllOrders>
                            
                            </AdminRoute>
                            <AdminRoute path={`${path}/addProduct`}>
                                <AddProduct></AddProduct>
                            
                            </AdminRoute>
                            <AdminRoute path={`${path}/makeAdmin`}>
                                <MakeAdmin></MakeAdmin>
                            
                            </AdminRoute>
                            <AdminRoute path={`${path}/manageProducts`}>
                                <ManageProducts></ManageProducts>
                            
                            </AdminRoute>
                    </Switch>
                </div>
               

            </div>
            
        </div>
    );
};

export default Dashboard;

{/* <h2>This is dashboard</h2> */}