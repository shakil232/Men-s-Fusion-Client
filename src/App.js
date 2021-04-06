import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { useState } from 'react';
import { createContext } from 'react';
import Home from './Componets/Home/Home';
import Orders from './Componets/Orders/Orders';
import DisplayProducts from './Componets/DisplayProducts/DisplayProducts';
import Admin from './Componets/Admin/Admin';
import CheckOut from './Componets/CheckOut/CheckOut';
import Login from './Componets/Login/Login';
import ManageProduct from './Componets/ManageProduct/ManageProduct';
import AddProduct from './Componets/AddProduct/AddProduct';
import NotFound from './Componets/NotFound/NotFound';
import EditProduct from './Componets/EditProduct/EditProduct';
import Deals from './Componets/Deals/Deals';
import PrivateRoute from './Componets/PrivateRoute/PrivateRoute';


export const UserContext = createContext();

function App() {

  const [LoggedInUser, setLoggedInUser] = useState({});

  return (
    <UserContext.Provider value={[LoggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>

          <Route path="/home">
            <Home />
          </Route>
          <PrivateRoute path="/order">
            <Orders />
          </PrivateRoute>
          <Route path="/deals">
            <Deals />
          </Route>
          <PrivateRoute path="/checkOut/:productId">
            <CheckOut />
          </PrivateRoute >
          <Route path="/displayProduct">
            <DisplayProducts />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <PrivateRoute path="/admin">
              <Admin />
            </PrivateRoute >
          <Route path="/manageProduct">
            <ManageProduct />
          </Route>
          <Route path="/addProduct">
            <AddProduct />
          </Route >
          <Route path="/editProduct">
            <EditProduct />
          </Route >
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>

        </Switch>
      </Router>
    </UserContext.Provider>
  );
}


export default App;
