import React from 'react';
import {render} from 'react-dom';
import App from './components/App';
import Header from './components/Header';
import Landing from './components/Landing.js';
import Nav from './components/Nav';
import Enrollment from './components/Enrollment';
import Auth from './components/Auth';
import './style/index.css';

import {BrowserRouter, Match, Miss} from 'react-router'

const Root = ()=>{
  return (
    <BrowserRouter>
      <div>
        <Nav />
        <main>
          {/* <Header /> */}
          <Match exactly pattern="/" component={Landing} />
          <Match exactly pattern="/enrollment" component={Enrollment}/>
          <Match exactly pattern="/auth" component={Auth}/>
          {/* <Miss component = {NotFound} /> */}
        </main>
      </div>
    </BrowserRouter>
  )
}

render(
  <Root />,
  document.getElementById('root')
);
