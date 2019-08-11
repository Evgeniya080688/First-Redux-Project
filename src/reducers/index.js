const comments = (state = [], action) => {

	switch (action.type) {
		case 'ADD_NEW_COMMENT':
			return [
			...state,
			{ id: action.id, author: action.author, date: action.date, text: action.text}
			]

		case 'REMOVE':
			// return state.forEach(function(item, i, state) {
			// 		if (item.id === action.id) {
			// 			return state.splice(i,1);
			// 		}
			// 		return item;
			// 	}

			// )

			return state.map((comment, i)  => {
				if (comment.id === action.id) {
					return state.splice(i, 1)	
				}
				return comment;
			})

		case 'CHANGE_EL_FORM':
			return (
				// const { value, name } = target;
					{ newAuthor: action.newAuthor, newComment: action.newComment}
				)

		default:
			return state;				
	}
}

export default comments;

