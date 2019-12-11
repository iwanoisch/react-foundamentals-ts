import * as React from 'react';
import { RouteComponentProps } from "react-router-dom";
import {IProduct} from "../ProductsData";

import {addToBasket} from "../../../store/basket/BasketActions";
// @ts-ignore
import {getProduct} from "../../../store/products/ProductsActions";
import {connect} from "react-redux";
import {AppState} from "../../../store/Store";
import Product from "./product/Product";


interface Props extends RouteComponentProps<{id:string}>{
    addToBasket: typeof addToBasket;
    getProduct: typeof getProduct;
    loading: boolean;
    product?: IProduct | null;
    added: boolean;
}

class ProductPageComponent extends React.Component<Props> {

    public componentDidMount() {
        if (this.props.match.params.id) {
            const id: number = parseInt(this.props.match.params.id, 10);
            this.props.getProduct(id);
        }
    }
    public render() {
        const product = this.props.product;
        return (
            <div className="page-container">
                {product || this.props.loading ? (
                    <Product loading={this.props.loading} product={product!} inBasket={this.props.added}
                             onAddToBasket={this.handleAddClick}/>
                ) : (
                    <p>Product not found!</p>
                )}
            </div>
        );
    }

        private handleAddClick = () => {
            if (this.props.product) {
                this.props.addToBasket(this.props.product);
            }
        };



}

function mapStateToProps(state: AppState) {
    return {
        added: state.basket.products!.some(product => state.products.product ? product.id === state.products.product.id : false),
        product: state.products.product,
        loading: state.products.loading,
        basketProducts: state.basket.products,
    };
}

function mapDispatchToProps(dispatch: any) {
    return {
        addToBasket: (product: IProduct | null) => dispatch(addToBasket(product)),
        getProduct: (id: number ) => dispatch(getProduct(id))
    }
}

export const ProductPage = connect(mapStateToProps, mapDispatchToProps)(ProductPageComponent);

