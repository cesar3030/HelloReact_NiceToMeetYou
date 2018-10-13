import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Game from './components/Game';

import store from "./store/index";
import { addArticle } from "./actions/index";
window.store = store;
window.addArticle = addArticle;

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
