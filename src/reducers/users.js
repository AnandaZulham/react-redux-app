import { GET_DATA_USER  } from '../action/actionUser';

let initialState = {
  getUsers: false, 
  usersError: false
}

const users = (state = initialState, action) => {
  switch(action.type) {
	case GET_DATA_USER: 
	  return {
		...state,
		getUsers: action.payload.data,
		usersError: action.payload.erroMessage
	  }
	default:
	  return state
  };
}

export default users;
