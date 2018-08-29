import $ from 'jquery';

export const UPDATE_USER = 'users: updateUser';
export const SHOW_ERROR = 'users: showError';

export const updateUser = (newUser) => {
	return {
		type: API_REQUEST_SUCCESS,
		payload: {
			user: newUser
		}
	}
}

export const showError = () => ({
		type: API_REQUEST_ERROR,
		payload: {
			user: 'ERROR!'
		}
});

export const onRequest = () => {
	type: API_REQUEST_REQUEST,
	payload: {
		
	}
}

export const apiRequest = () => {
	return dispatch => {
		console.log(requestMade());
		$.ajax({
			url: 'http://google.com/',
			success(response) {
				console.log('SUCCESS');
				dispatch(updateUser(response.newUser));
			},
			error() {
				console.log('ERROR');
				dispatch(showError());
			}
		})
	}
};