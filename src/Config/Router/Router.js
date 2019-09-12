import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from '../../Container/Home/Home'
import Login from '../../Container/Login/Login'
import Shop from '../../Container/Shop/Shop'
import ContactPage from '../../Container/Contact/Contact'
import Product from '../../Container/Product/SingleProduct'
import Cart from '../../Container/Cart/Cart'
import AdminPage from '../../Container/AdminPanel/AdminPanel'
import AddProduct  from '../../Container/AddProduct/AddProduct'
import CheckOut from '../../Container/CheckOut/CheckOut'
import Dashboard from '../../Container/Dashboard/Dashboard'
import DeleteProduct from '../../Container/DeleteProduct/DeleteProduct'

export default class AppRouter extends React.Component {
    render() {
        return (
            <Router>
                <Route exact path="/" component={Home} />
                <Route path="/login" component={Login} />
                <Route path="/shop" component={Shop} />
                <Route path="/contact" component={ContactPage} />
                <Route path="/product" component={Product} />
                <Route path="/cart" component={Cart} />
                <Route path="/checkOut" component={CheckOut} />
                <Route path="/admin" component={AdminPage} />
                <Route path="/addproduct" component={AddProduct} />
                <Route path="/dashboard" component={Dashboard} />
                <Route path="/deleteproduct" component={DeleteProduct} />
                
            </Router>
        )
    }
}