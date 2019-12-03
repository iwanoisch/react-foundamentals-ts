import React, {FunctionComponent} from 'react';
import './App.css';
import {BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import {ProductsPage} from './Products/ProductsPage';
import {AdminPage} from  './Admin/AdminPage';
import Header from "./Common/Header";
import {ProductPage} from "./Products/Product/ProductPage";
import {NotFoundPage} from "./NotFoundPage/NotFoundPage";
import {LoginPage} from "./Login/LoginPage";

// const ConfirmStateFullOne: React.FunctionComponent<Props> = props => {
// class AppContent extends React.Component<{}, State> = state => {
const AppContent: React.FunctionComponent = () => {

    const [loggedIn, setLoggedIn] = React.useState(true);

    return (
        <BrowserRouter>
            <div>
                <Header/>
                <Switch>
                    <Redirect exact={true} from='/' to='/products'/>
                    <Route exact={true} path='/products' component={ProductsPage}/>
                    <Route path='/products/:id' component={ProductPage}/>
                    <Route path='/admin'>
                        {loggedIn ? <AdminPage/> : <Redirect to='/login'/>}
                    </Route>
                    {/*<Route  path='/admin' component={AdminPage}/>*/}
                    <Route path='/login' component={LoginPage}/>
                    <Route component={NotFoundPage}/>
                </Switch>
            </div>
        </BrowserRouter>
    );
};

export const App = () => {
  return(
      <BrowserRouter basename={'/app'}>
          <Route component={AppContent}/>
      </BrowserRouter>
  )
};
