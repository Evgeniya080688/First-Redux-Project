import React from 'react';
import { connect } from 'react-redux';

import CommentItem from '../components/comment-item';
import CommentsList from '../components/comments-list';
import CommentForm from '../components/comment-form';

import { remove, addNewComment, changeElForm } from '../actions';

let App = (props) => {
	const {
		comments, remove, addNewComment, changeElForm, newAuthor, newComment 
	} = props;

	
	return (

		<div>
			<h1>Комментарии</h1>
			<CommentsList comments = { comments } remove = { remove }/>

			<CommentForm 
				newAuthor = {newAuthor} 
				newComment = {newComment} 
				addNewComment = { addNewComment } 
				changeElForm = { changeElForm }
			 />			

		</div>		
	)
}

const mapStateToProps = (state, newAuthor, newComment) => {
	return {
		comments: state,
		newAuthor: '',
		newComment: ''
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		addNewComment: (author, text) => dispatch(addNewComment(author, text)),
		changeElForm: (name, value) => dispatch( changeElForm(name,value)), 
		remove: (id) => dispatch(remove(id))
	}
}

App = connect(
	mapStateToProps,
	mapDispatchToProps
)(App);

export default App;