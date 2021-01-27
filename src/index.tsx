import React from 'react';
import ReactDOM from 'react-dom';
import App from './page/app';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'mobx-react';
import Store from './store';

ReactDOM.render(
    <Provider {...Store}>
        <App />
    </Provider>
, document.getElementById('root'));

serviceWorker.unregister();
