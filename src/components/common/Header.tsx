import React from 'react';
import {NavLink, RouteComponentProps, withRouter} from "react-router-dom";

import {Basket} from "../basket/Basket";
import './Header.css'
import logo from "../../../src/logo.svg"
import {AppState} from "../../store/Store";
import {connect} from "react-redux";

interface Props extends RouteComponentProps{
    basketCount: number
}


const Header: React.FunctionComponent<Props>  = (props) => {
    
    const [search, setSearch] = React.useState('');
    React.useEffect(() => {
        const searchParams = new URLSearchParams(props.location.search);
        setSearch(searchParams.get('search') || '');
    }, []);


    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.currentTarget.value);
    };

    const handleSearchKeydown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if(e.key === 'Enter') {
            props.history.push(`/products?search=${search}`);
        }
    };

        return (
          <header className='header'>
              <div className='search-container'>
                  <input type="search" placeholder='search' value={search}  onChange={handleSearchChange} onKeyDown={handleSearchKeydown} />
                  <Basket  count={props.basketCount}/>
              </div>
              <img src={logo} className="header-logo" alt="logo" />
              <h1 className="header-title">React Shop</h1>
              <nav>
                  <NavLink  to='/products' className='header-link' activeClassName='header-link-active'>Product</NavLink>
                  <NavLink  to='/contactus' className='header-link' activeClassName='header-link-active'>Contact Us</NavLink>
                  <NavLink  to='/admin' className='header-link' activeClassName='header-link-active'>Admin</NavLink>
              </nav>
          </header>
        )
};

// Connected component

function mapStateToProps(state: AppState) {
    return {
        basketCount: state.basket.products? state.basket.products.length : 0,
    };
}


export default connect(mapStateToProps)( withRouter(Header));


