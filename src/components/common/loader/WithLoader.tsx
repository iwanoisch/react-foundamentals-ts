import * as React from 'react';


import './WithLoader.css';

interface Props {
    loading: boolean;
}

const WithLoader = <P extends object>(Component: React.ComponentType<P>): React.FC<P & Props> => (props: P & Props) =>
    props.loading ? (
        <div className="loader-overlay">
            {console.log('withdload')}
            <div className="loader-circle-wrap">
                <div className="loader-circle" />
            </div>
        </div>
    ):(
    <Component {...props} />
    );

export default WithLoader
