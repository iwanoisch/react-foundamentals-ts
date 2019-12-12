import React from 'react';
import {NavLink, Route} from "react-router-dom";

import './AdminPage.css'
import {AdminProducts} from "./adminProducts/AdminProducts";
import {AdminPeople} from "./adminPeople/AdminPeople";
import {AdminUsers} from "./adminUsers/AdminUsers";

class AdminPage extends React.Component {


    render(): React.ReactNode {
        return (
            <div className="page-container">
                <h1>Admin Panel</h1>
               <ul className='admin-sections'>
                   <li key='users'>
                       <NavLink to={`/admin/users`} activeClassName='admin-link-active'>
                           Users
                       </NavLink>
                   </li>
                   <li key='products'>
                       <NavLink to={`/admin/products`} activeClassName='admin-link-active'>
                           Products
                       </NavLink>
                   </li>
                   <li key='people'>
                       <NavLink to={`/admin/people`} activeClassName='admin-link-active'>
                           People
                       </NavLink>
                   </li>
               </ul>
                <Route path='/admin/users' component={AdminUsers} />
                <Route path='/admin/products' component={AdminProducts} />
                <Route path='/admin/people' component={AdminPeople} />
            </div>
        )
    }
}

export default AdminPage ;

