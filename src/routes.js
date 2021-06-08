import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard/Dashboard';
import User from './pages/User/User';
import Vendor from './pages/Vendor/Vendor';
import VendorDetail from './pages/Vendor/VendorDetail';
import OrderDetail from './pages/Vendor/OrderDetail';
import VendorListOrder from './pages/Vendor/VendorListOrder';
import Contact from './pages/Contact/Contact';
import Login from './Login';
export default function Routes(){   
    return(
        <Switch>
            <Route path='/' exact component={Login} />
            <Route path='/dashboard' component={Dashboard} />
            <Route path='/user' component={User} />
            <Route path='/contact' component={Contact} />
            <Route path='/vendor' component={Vendor} />
            <Route path='/vendor_detail' component={VendorDetail} />
            <Route path='/vendor_list_order' component={VendorListOrder} />
            <Route path='/order_detail' component={OrderDetail} />
        </Switch>
    )
};