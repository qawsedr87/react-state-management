import { Reducer } from "redux";
import { User, UserAction } from "../types";
import { ADD_USER_SUCCESS, FETCH_USERS_SUCCESS } from "../constants";

interface IUserState {
    users: User[];
}

const defaultState: IUserState = {
    users: [],
}

const userReducer: Reducer<IUserState, UserAction> = (
    prevState = defaultState,
    action
) => {
    Object.freeze(prevState); // prevents us from accidentally mutating state

    switch (action.type) {
        case FETCH_USERS_SUCCESS:
            return {
                ...prevState,
                users: action.payload as User[],
            };
        case ADD_USER_SUCCESS:
            return {
                ...prevState,
                users: [...prevState.users, action.payload as User],
            };
        default:
            return prevState;
    }

}

export default userReducer;