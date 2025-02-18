import React from 'react';
import {IProduct} from "./ProductsData";
import { RouteChildrenProps } from 'react-router';

import './ProductsPage.css'
import {getProducts} from "../../store/products/ProductsActions";
import {AppState} from "../../store/Store";
import {connect} from "react-redux";
import ProductList from "./productPage/productList/ProductList";

interface Props extends RouteChildrenProps{
    getProducts: typeof getProducts;
    loading: boolean;
    products: IProduct[] | null;
    search: string;
}

class ProductsPageComponent extends React.Component<Props>{

    public componentDidMount() {
        this.props.getProducts();
    }

    render(): React.ReactNode {
        const searchParams = new URLSearchParams(this.props.location.search);
        const search = searchParams.get("search")  || "";
       //  return !this.props.products ? (<div className="page-container">Loading...</div>) :
        return (
            <div className="page-container">
                <p>
                    Welcome to React Shop where you can get all your tools for ReactJS!
                </p>
                    <ProductList products={this.props.products!} search={search} loading={this.props.loading} />
            </div>
        )
    }
}

function mapStateToProps(state: AppState) {
    return {
        loading: state.products.loading,
        products: state.products.products
    }
}

function mapDispatchToProps(dispatch: any) {
    return {
       getProducts: () => dispatch(getProducts())
    }
}



export const ProductsPage = connect(mapStateToProps, mapDispatchToProps)(ProductsPageComponent);

