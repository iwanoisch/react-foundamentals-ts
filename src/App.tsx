import React from 'react';
import './App.css';
import {BrowserRouter, Route } from "react-router-dom";
import {ProductsPage} from  './Product/ProductsPage';
import {AdminPage} from  './Admin/AdminPage';

interface State {

}

class AppContent extends React.Component<{}, State>{
    constructor(props: {}){
        super(props);
        this.state = {
        }
    }


    render(): React.ReactNode {
    return (
        <BrowserRouter>
            <Route path='/products' component={ProductsPage}/>
            <Route  path='/admin' component={AdminPage}/>
        </BrowserRouter>
    )
  }
}

export const App = () => {
  return(
      <AppContent />
  )
};
