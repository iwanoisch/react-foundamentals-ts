import React from 'react';
import {NavLink, RouteComponentProps} from "react-router-dom";

import './Header.css'
import logo from "../../src/logo.svg"


class HeaderComponent extends React.Component {

    render(): React.ReactNode {
        return (
          <header className='header'>
              <img src={logo} className="header-logo" alt="logo" />
              <h1 className="header-title">React Shop</h1>
              <nav>
                  <NavLink  to='/products' className='header-link' activeClassName='header-link-active'>Product</NavLink>
                  <NavLink  to='/admin' className='header-link' activeClassName='header-link-active'>Admin</NavLink>
              </nav>
          </header>
        )
    }
}

export const Header = HeaderComponent;

