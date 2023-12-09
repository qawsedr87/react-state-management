import UserList from "../../users/context/UserList";
import UserListRedux from "../../users/redux/components/UserListRedux";

const User = () => {
    return (
        <>
            <h1>1. User Context</h1>
            <UserList />

            <h1>2. User Redux and Thunk</h1>
            <UserListRedux />
        </>
    )
}

export default User;