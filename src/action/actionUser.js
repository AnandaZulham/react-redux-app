import axios from 'axios'

export const GET_DATA_USER = "GET_DATA_USER"

export const getDataUser = () => {
  return (dispatch) => {
	axios.get("http://my-json-server.typicode.com/AnandaZulham/database-json/users")
	.then(response => {
	  dispatch({
		type: GET_DATA_USER,
		payload: {
		  data: response.data, 
		  errorMessage: false
		}
	  })
	})
	.catch(error => {
	  console.log(error.message)
	})
  }
}
