import { Provider } from "react-redux";
import UserForm from "../../users/context/UserForm";
import UserProvider from "../../users/context/UserProvider";
import store from "../../users/redux/store/store";
import UserFormRedux from "../../users/redux/components/UserFormRedux";

const User = () => {
    return (
        <>
            <h1>1. User Context</h1>
            <UserProvider>
                <UserForm />
            </UserProvider>

            <h1>2. User Redux and Thunk</h1>
            <Provider store={store}>
                <UserFormRedux />
            </Provider>
        </>
    )
}

export default User;