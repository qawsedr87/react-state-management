import UserForm from "../../users/context/UserForm";
import UserProvider from "../../users/context/UserProvider";

const User = () => {
    return (
        <>
            <h1>1. User Context</h1>
            <UserProvider>
                <UserForm />
            </UserProvider>
        </>
    )
}

export default User;