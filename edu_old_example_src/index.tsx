import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './App';

interface Props {
}

const Root: React.FunctionComponent<Props>= () => {
    return(
        <App />
        )
};

ReactDOM.render(<Root />, document.getElementById('root') as HTMLElement);
