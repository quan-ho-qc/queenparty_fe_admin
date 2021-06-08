import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard/Dashboard';
import Order from './pages/Order/Order';
import Detail from './pages/Order/Detail';
import Product from './pages/Product/Product';
import AddProduct from './pages/Product/AddProduct';
import EditProduct from './pages/Product/EditProduct';
import Contact from './pages/Contact/Contact';
import UpdateProfile from './pages/UpdateProfile';
import Login from './Login';
import Register from './Register';
export default function Routes(){   
    return(
        <Switch>
            <Route path='/' exact component={Login} />
            <Route path='/register' exact component={Register} />
            <Route path='/update_profile' exact component={UpdateProfile} />
            <Route path='/dashboard' component={Dashboard} />
            <Route path='/order' component={Order} />
            <Route path='/order_detail' component={Detail} />
            <Route path='/contact' component={Contact} />
            <Route path='/product' component={Product} />
            <Route path='/add_product' component={AddProduct} />
            <Route path='/edit_product' component={EditProduct} />
        </Switch>
    )
};