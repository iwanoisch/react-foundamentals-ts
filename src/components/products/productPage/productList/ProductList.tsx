import * as React from 'react';
import {IProduct} from "../../ProductsData";
import {Link} from "react-router-dom";
import WithLoader from "../../../common/loader/WithLoader";

interface Props {
    products: IProduct[] ;
    search: string;
}

class ProductsListComponent extends React.Component<Props>{
    render() {
        const search = this.props.search;
        return (
            <ul className="product-list">
                {this.props.products && this.props.products.map(
                    product => {
                        if(!search || (search && product.name.toLowerCase().indexOf(search.toLowerCase()) > -1)) {
                            return (
                                <li key={product.id} className="product-list-item">
                                    <Link to={`/products/${product.id}`}> {product.name}</Link>
                                </li>
                            );
                        } else {
                            return null
                        }
                    })}
            </ul>
        );
    }
}

const ProductList = ProductsListComponent;

export default WithLoader(ProductList);
