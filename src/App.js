import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router, Route, Switch
} from "react-router-dom";
import './App.css';
import AddProduct from './components/AddProduct/AddProduct';
import Dashboard from './components/Dashboard/Dashboard';
import Explore from './components/Explore/Explore';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import ManageAllOrders from './components/ManageAllOrders/ManageAllOrders';
import NotFound from './components/NotFound/NotFound';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Purchase from './components/Purchase/Purchase';
import Register from './components/Register/Register';
import AuthProvider from './contexts/AuthProvider/AuthProvider';

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Router>
        <Header></Header>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route  path="/home">
          <Home></Home>
        </Route>
        <Route  path="/addProduct">
          <AddProduct></AddProduct>
        </Route>
        <Route  path="/manageAllOrders">
          <ManageAllOrders></ManageAllOrders>
        </Route>
        <PrivateRoute path="/purchase/:productId">
          <Purchase></Purchase>
        </PrivateRoute>
        <Route path="/explore">
          <Explore></Explore>
        </Route>
        <PrivateRoute path="/dashboard">
          <Dashboard></Dashboard>
        </PrivateRoute>
        <Route  path="/login">
          <Login></Login>
        </Route>
        <Route  path="/register">
          <Register></Register>
        </Route>
        <Route  path="*">
          <NotFound></NotFound>
        </Route>
      </Switch>
      <Footer></Footer>
    </Router>
    </AuthProvider>
    
    
    </div>
  );
}

export default App;
