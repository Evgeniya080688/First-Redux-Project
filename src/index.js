import React from 'react';
import ReactDOM from 'react-dom';

import App from './containers/app';
import { createStore } from 'redux';
import comments from './reducers';

import css from './style.css';
//import {createId, getDate, isEmptyString} from './utils.js';

const defaultComments = [
  {id: "000000001", author: "Вася", date: "08-07-2017", text: "Очень классно! Молодцы"},
  {id: "000000002", author: "Коля", date: "08-07-2017", text: "Просто Супер"},
  {id: "000000003", author: "Петя", date: "08-07-2017", text: "Да, согласен"}
];

const commentsLS = JSON.parse(localStorage.getItem("comments"));

const defaultAuthor = '';
const defaultComment = '';

const initialState = [
	{comments: commentsLS || defaultComments},
	{newAuthor: defaultAuthor},
	{newComment: defaultComment}
];

const store = createStore(comments, defaultComments )

ReactDOM.render(
	<App store={store} />,
	document.querySelector('#app')
);