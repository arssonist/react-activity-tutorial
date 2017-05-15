import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { BrowserRouter, Route, hashHistory } from 'react-router-dom'
import { Whoops404 } from '../src/components/Whoops404'

ReactDOM.render((
    <BrowserRouter history={hashHistory}>
        <section>
        <Route path='/' component={App}/>
        <Route path='*' component={Whoops404}/>
    </section>
    </BrowserRouter>),
  document.getElementById('root')
);
