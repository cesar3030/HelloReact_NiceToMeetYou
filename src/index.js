import React from 'react';
import { render } from 'react-dom';
import './index.css';
import { Provider } from 'react-redux'
import store from "./store/index";
import { addArticle } from "./actions/index";
import GameContext from './components/GameContext';
window.store = store;
window.addArticle = addArticle;

// ========================================

render(
  <Provider store={store}>
    <GameContext/>
  </Provider>
  ,
  document.getElementById('root')
);
