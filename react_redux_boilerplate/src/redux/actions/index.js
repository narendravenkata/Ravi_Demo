
import axios from "axios";

export const ALL_USERS = 'ALL_USERS';
export const SET_USER = 'SET_USER';


const URI = 'http://jsonplaceholder.typicode.com/users';

export function getUsers() {
  return dispatch => {
    // dispatch(customersIsLoading(true));
    return axios
      .get(URI)
      .then(result => {
        // dispatch(customersIsLoading(false));
        dispatch({
          type: ALL_USERS,
          users: result.data
        });
      })

  };
}

export function setUser(user) {
  return {
    type: 'SET_USER',
    user: user
  };

}

