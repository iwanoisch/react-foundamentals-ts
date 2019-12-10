import * as React from "react";
import { Suspense } from "react";
import {BrowserRouter, Route, RouteComponentProps, Switch, Redirect } from "react-router-dom";
import {CSSTransition, TransitionGroup} from "react-transition-group";

import {ProductsPage} from './components/products/ProductsPage';
import Header from "./components/common/Header";

import {NotFoundPage} from "./components/notFoundPage/NotFoundPage";
import {LoginPage} from "./components/login/LoginPage";
import './App.css';
import {ContactUsPage} from "./components/contactUsPage/ContactUsPage";
import {ProductPage} from "./components/products/productPage/ProductPage";
const AdminPage = React.lazy(() => import('./components/admin/AdminPage'));

// const ConfirmStateFullOne: React.FunctionComponent<Props> = props => {
// class AppContent extends React.Component<{}, State> = state => {
const AppContent: React.FunctionComponent<RouteComponentProps> = props => {

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [loggedIn, setLoggedIn] = React.useState(true);
        return (
                <div>
                    <Header/>
                    <TransitionGroup>
                        <CSSTransition key={props.location.key} timeout={500} classNames='animate'>
                            <Switch>
                                <Redirect exact={true} from='/' to='/products'/>
                                <Route exact={true} path='/products' component={ProductsPage}/>
                                <Route path='/contactus' component={ContactUsPage} />
                                <Route path='/products/:id' component={ProductPage}/>
                                <Route path='/admin'>
                                    {loggedIn ?
                                        <Suspense fallback={<div className='page-container'>Loading...</div>}>
                                            <AdminPage/>
                                        </Suspense>
                                        : <Redirect to='/login'/>}
                                </Route>
                                {/*<Route  path='/admin' component={AdminPage}/>*/}
                                <Route path='/login' component={LoginPage}/>
                                <Route component={NotFoundPage}/>
                            </Switch>
                        </CSSTransition>
                    </TransitionGroup>
                </div>
        );

};

export const App = () => {
  return(
      <BrowserRouter basename={'/app'}>
          <Route component={AppContent}/>
      </BrowserRouter>
  )
};
