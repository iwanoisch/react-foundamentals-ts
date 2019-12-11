import React from 'react';
import { RouteComponentProps } from "react-router-dom";
import {IProduct, mockProducts} from "../ProductsData";
import Product from "./product/Product";

type Props = RouteComponentProps<{id:string}>;

interface State {
    product?: IProduct;
    added: boolean;
    loading: boolean;
}

class ProductPageComponent extends React.Component<Props, State>{

    constructor(props: Props) {
        super(props);
        this.state = {
            added: false,
            loading: false
        }
    }
    private componentUnloaded: boolean = false;

    public componentDidMount() {
        if(this.props.match.params.id) {
            const id: number = parseInt(this.props.match.params.id, 10);
            const product = mockProducts.filter( p => p.id === id)[0];
            this.setState({product: product},() =>{ console.log('productstate', this.state.product)});
        }
    }


    private testLoader() {
        return this.setState({loading: false})
    }


    private handleAddClick = () => {
        this.setState({added: true});
    };


    render() {
        const product = this.state.product;
        return (
            <div className="page-container">
                {product || this.state.loading ? (
                   <Product loading={this.state.loading}  product={product} inBasket={this.state.added} onAddToBasket={this.handleAddClick} />
                ) : (
                    <p>Product not found!</p>
                )}
            </div>
        )
    }
}

export const ProductPageOld = ProductPageComponent;

