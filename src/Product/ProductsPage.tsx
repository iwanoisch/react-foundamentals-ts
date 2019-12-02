import React from 'react';
import {mockProducts, Product} from "./ProductsData";

interface State {
    products: Product[]
}

class ProductsPageComponent extends React.Component<{}, State>{
    constructor(props: {}){
        super(props);
        this.state = {
            products: []
        }
    }

    public componentDidMount() {
        this.setState({products: mockProducts})
    }

    render(): React.ReactNode {
        return (
            <div className="page-container">
                <p>
                    Welcome to React Shop where you can get all your tools for ReactJS!
                </p>
                <ul className="product-list">
                    {this.state.products.map(product => (
                        <li key={product.id} className="product-list-item">
                            {product.name}
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

export const ProductsPage = ProductsPageComponent;

