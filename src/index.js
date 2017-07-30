import React from 'react';
import ReactDOM from 'react-dom';
import { createStore,combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
//import * as reducers from './reducers';
import reduxTutorialApp from './reducers';
import {syncHistoryWithStore, routerReducer } from 'react-router-redux';
import App from './components/App';
import RtestBoard1 from './components/RtestBoard1';
import RtestBoard2 from './components/RtestBoard2';
import MessageBoard from './components/MessageBoard';


// const reducer = combineReducers({
//     reducers,
//     routing:routerReducer
// })
const store = createStore(reduxTutorialApp, window.devToolsExtension && window.devToolsExtension());
const appElement = document.getElementById('root');
const history = syncHistoryWithStore(browserHistory,store);



ReactDOM.render(
    <Provider store={store}>
        <div>
            <Route path="/" component={App}>
                <IndexRoute component = {MessageBoard} />
                <Route path = "MessageBoard" component = {MessageBoard} />
                <Route path = "RtestBoard1" component = {RtestBoard1} />
                <Route path = "RtestBoard2" component = {RtestBoard2} />
            </Route>
        </div>
    </Provider>,
    appElement
);

// ReactDOM.render(
//     <Provider store = {store}>
//         <App />
//     </Provider>,
//     appElement
// );


// const rootElement = document.getElementById('root');
// ReactDOM.render(<App store={store}/>, rootElement);


