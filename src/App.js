import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router, Route, Switch
} from "react-router-dom";
import './App.css';
import AddProduct from './components/AddProduct/AddProduct';
import Explore from './components/Explore/Explore';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
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
        <PrivateRoute path="/purchase">
          <Purchase></Purchase>
        </PrivateRoute>
        <Route path="/explore">
          <Explore></Explore>
        </Route>
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
    </Router>
    </AuthProvider>
    
    
    </div>
  );
}

export default App;
