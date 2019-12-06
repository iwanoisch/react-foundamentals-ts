import * as React from "react";

import './Product.css'
import {IProduct} from "../../ProductsData";
import {Tabs} from "../../../common/tabs/Tabs";
import WithLoader from "../../../common/loader/WithLoader";

interface Props {
   product?: IProduct;
   inBasket: boolean;
   onAddToBasket: () => void;
}

const Product: React.FunctionComponent<Props> = props => {
    const product = props.product;

    const handleAddClick = () => {
        props.onAddToBasket();
    };

    if (!product) {
        return null
    }

    return (
        <React.Fragment>
            <h1>{product.name}</h1>
            {/* eslint-disable-next-line react/jsx-no-undef */}
            {/*<Tabs name='Description'  heading={['Description', 'Reviews']}/>*/}
            <Tabs>
                <Tabs.Tab name='Description' initialActive={true}  heading={() => <b>Description</b>}>
                    <p>{product.description}</p>
                </Tabs.Tab>
                <Tabs.Tab name='Reviews'  heading={() => 'Reviews'}>
                   <ul className='product-reviews'>
                       {product.reviews.map(review => (
                           <li key={review.reviewer}>
                               <i>'{review.comment}'</i> - {review.comment}
                           </li>
                       ))}
                   </ul>
                </Tabs.Tab>
            </Tabs>
            {/*<p>{product.description}</p>*/}
            {/*<div>*/}
            {/*    <ul className='product-reviews'>*/}
            {/*        {product.reviews.map( review => (*/}
            {/*            <li key={review.reviewer} className='product-review-item'>*/}
            {/*                <i>"{review.comment}"</i> - {review.reviewer}*/}
            {/*            </li>*/}
            {/*        ))}*/}
            {/*    </ul>*/}
            {/*</div>*/}
            <p className='product-price'>
                {new Intl.NumberFormat('en-US', {currency: 'USD', style: 'currency'}).format(product.price)}
            </p>
            {!props.inBasket && (
                <button onClick={handleAddClick}>Add to basket</button>
            )}
        </React.Fragment>
    )
}

export default WithLoader(Product)
