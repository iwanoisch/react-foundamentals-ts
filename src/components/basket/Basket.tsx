import * as React from "react";

interface Props {
    count: number
}



class BasketComponent extends React.Component<Props>{
    render(){
        return (
            <div className='basket-summary'>{this.props.count}</div>
        );
    }
}

export const Basket = BasketComponent;


