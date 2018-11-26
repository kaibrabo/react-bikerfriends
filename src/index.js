import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { searchFriends } from './reducers';
import './index.css';
import 'tachyons';
import * as serviceWorker from './serviceWorker';

const store = createStore(searchFriends)

ReactDOM.render(
      <Provider store={store}>
            <App/>
      </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
