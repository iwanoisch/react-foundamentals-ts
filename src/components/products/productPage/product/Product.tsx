import * as React from "react";

import {IProduct} from "../../ProductsData";
import {Tabs} from "../../../common/tabs/Tabs";
import WithLoader from "../../../common/loader/WithLoader";
import {LIKE, LikeAction, LikeActions, LikeState} from "./ProductType";

import './Product.css'

interface Props {
   product?: IProduct;
   inBasket: boolean;
   onAddToBasket: () => void;
}

const initialLikeState: LikeState = {
    likes: 0,
    lastLike: null
};

const reducer = (state: LikeState = initialLikeState, action: LikeActions) => {
    switch (action.type) {
        case LIKE:
            return {...state, likes: state.likes + 1, lastLike: action.payload.now};
    }
    return state;
};

const Product: React.FunctionComponent<Props> = props => {
    const product = props.product;
    const [{likes, lastLike}, dispatch]:
        [LikeState, (action: LikeAction) => void] = React.useReducer(reducer, initialLikeState)

    const handleAddClick = () => {
        props.onAddToBasket();
    };

    const handleLikeClick = () => {
        dispatch({type:LIKE, payload: {now: new Date()} });
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
            <div className='like-container'>
                {likes > 0 && (
                    <div>{`I like this x ${likes}, last at ${lastLike}`}</div>
                )}
                <button onClick={handleLikeClick}>{likes > 0 ? 'Like again' : 'Like'}</button>
            </div>
        </React.Fragment>
    )
};

export default WithLoader(Product)
