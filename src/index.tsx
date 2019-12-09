import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './App';
import {Store} from "redux";
import {AppState, configureStore} from "./store/Store";
import {Provider} from "react-redux";

interface Props {
    store: Store<AppState>
}

const Root: React.FunctionComponent<Props>= props => {
    return(
        <Provider store={props.store}>
            <App />
        </Provider>
        )
};

const store = configureStore();

ReactDOM.render(<Root  store={store}/>, document.getElementById('root') as HTMLElement);
