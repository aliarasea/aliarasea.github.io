import React, {ReactElement} from 'react';
import ReactDOM from 'react-dom';

import App from './App';

import * as serviceWorker from './serviceWorker';

const func: () => JSX.Element = function () {
    const reactElement: ReactElement = React.createElement(App);
    return reactElement;
};

let tick: () => void = function () {
    ReactDOM.render(func(), document.getElementById('root'));
};

setInterval(tick, 1000);

//const element: ReactElement = (<App/>);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
