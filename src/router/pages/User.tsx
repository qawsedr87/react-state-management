import { Provider } from "react-redux";
import store from "../../users/redux/store/store";
import UserFormRedux from "../../users/redux/components/UserFormRedux";
import UserList from "../../users/context/UserList";

const User = () => {
    return (
        <>
            <h1>1. User Context</h1>
            <UserList />
                
            

            <h1>2. User Redux and Thunk</h1>
            <Provider store={store}>
                <UserFormRedux />
            </Provider>
        </>
    )
}

export default User;