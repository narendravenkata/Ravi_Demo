import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import rootReducer from './redux/reducers';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import User from './components/User';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';


const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
);

ReactDOM.render(<Provider store={store}>
    <BrowserRouter>
        <Switch>
            <Route path='/' exact component={App} />
            <Route path='/user' exact component={User} />       

        </Switch>
    </BrowserRouter>
</Provider>, document.getElementById('root'));
