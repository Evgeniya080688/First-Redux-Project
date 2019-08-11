import React from 'react';

const CommentForm = (props) => {
	const { newAuthor, newComment, addNewComment, changeElForm } = props;
	return (
		<form onSubmit={addNewComment} name="addNewComment">
			<h2>Добавь свой комментарий</h2>
			<input 
				type="text"
				name="newAuthor"
				required
				placeholder = "Введите имя"
				value = {newAuthor}
				onChange = {ev => {
					const target = ev.target;
	    			const { value, name } = target;
	    			changeElForm(name, value); 
				    
				}}
				
			/>

			<textarea 
				required
				rows = "10" 
				cols = "45" 
				name = "newComment"
				value = {newComment}
				onChange = {ev => {
					const target = ev.target;
	    			const { value, name } = target;
	    			changeElForm(name, value); 
				    
				}}
				
			>
				{newComment}			  
			</textarea>					

			<input		
				type = "submit"				
				value = "Добавить"						
			/>

		</form>	
	);
}

export default CommentForm;

			
