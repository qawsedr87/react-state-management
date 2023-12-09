import { AppDispatch, AppThunk, User } from "../types";
import { createAction } from "../store";
import { ADD_USER_SUCCESS, FETCH_USERS_SUCCESS } from "../constants";

export const fetchUsersSuccess = (users: User[]) => (createAction(FETCH_USERS_SUCCESS, users));
export const addUserSuccess = (user: User) => (createAction(ADD_USER_SUCCESS, user));

// thunk action to fetch users
export const fetchUsers = (): AppThunk => async (dispatch: AppDispatch) => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const users = await response.json();
        
        const sliceUsers = users
            .slice(0, 2)
            .map((user: User) => ({ id: user.id, name: user.name }));

        dispatch(fetchUsersSuccess(sliceUsers));
    } catch (error) {
        console.error('Error fetching users:', error);
    }
}

// thunk action to add a new user with name
export const addUser = (user: User): AppThunk => async (dispatch: AppDispatch) => {
    try {
        dispatch(addUserSuccess(user));
    } catch (error) {
        console.error('Error adding user:', error);
    }
}