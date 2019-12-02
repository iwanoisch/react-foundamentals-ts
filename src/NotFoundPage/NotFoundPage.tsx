import * as React from "react";


class NotFoundPageComponent extends React.Component{


    render(): React.ReactNode {
        return (
            <div className='page-container'>
                <h1>Sorry, this page cannot be found</h1>
            </div>
        )
    }
}

export const NotFoundPage = NotFoundPageComponent;

