import {createId, getDate, isEmptyString} from './utils.js';

//action creators

export const remove = (id) => {
	return {
		type: 'REMOVE',
		id
	}
}

export const addNewComment = (author, text) => {
	const newId = createId();
	const fullDate = getDate();

	return {
		type: 'ADD_NEW_COMMENT',
		newId, 		
		author,
		fullDate,
		text
	}
}

export const changeElForm = (name, value) => {
	return {
		type: 'CHANGE_EL_FORM',
		name
		value
	}
}
