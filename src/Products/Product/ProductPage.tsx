import React from 'react';
import { RouteComponentProps } from "react-router-dom";
import {mockProducts, Product} from "../ProductsData";

type Props = RouteComponentProps<{id:string}>;

interface State {
    product?: Product;
    added: boolean;
}

class ProductPageComponent extends React.Component<Props, State>{

    constructor(props: Props) {
        super(props);
        this.state = {
            added: false
        }
    }

    public componentDidMount() {
        if(this.props.match.params.id) {
            const id: number = parseInt(this.props.match.params.id, 10);
            const product = mockProducts.filter( p => p.id === id)[0];
            this.setState({product: product}, () =>{ console.log('productstate', this.state.product)});
        }
    }

    private handleAddClick = () => {
        this.setState({added: true});
    }


    render() {
        const product = this.state.product;
        return (
            <div className="page-container">
                {product? (
                    <React.Fragment>
                        <h1>{product.name}</h1>
                        <p>{product.description}</p>
                        <p className='prodct-price'>
                            {new Intl.NumberFormat('en-US', {currency: 'USD', style: 'currency'}).format(product.price)}
                        </p>
                        {!this.state.added && (
                            <button onClick={this.handleAddClick}>Add to basket</button>
                        )}
                    </React.Fragment>
                ) : (
                    <p>Product not found!</p>
                )}
            </div>
        )
    }
}

export const ProductPage = ProductPageComponent;

