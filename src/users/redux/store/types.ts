import { Action, AnyAction } from "redux";
import { ThunkAction, ThunkDispatch } from "redux-thunk";
import store from "./store";

export type User = {
    id: number;
    name: string;
};

export type UserAction = Action<string> & { payload: User | User[] };

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunkDispatch = ThunkDispatch<RootState, unknown, AnyAction>;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  AnyAction
>;