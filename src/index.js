import React from 'react';
import ReactDOM from 'react-dom';
import Main from './components/Main/Main';
import Header from './components/Header/Header';
import Categories from './components/Categories/Categories';
import Category from './components/Category/Category';
import { BrowserRouter, Route } from 'react-router-dom';
import globalStyles from './global.styles.module.css';
import { Provider } from 'react-redux';
import store from './store';

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <React.StrictMode>
                <Header />
                <Route exact path='/' component={Main} />
                <Route exact path='/allvideos' component={Main} />
                <Route exact path='/categories' component={Categories} />
                <Route exact path='/categories/:name' component={Category} />
            </React.StrictMode>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
