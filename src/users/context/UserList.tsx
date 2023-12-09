import { useContext } from "react";
import { IUserContextProps, userContext } from "./UserProvider";
import UserForm from "./UserForm";

const UserList = () => {
    const { users } = useContext<IUserContextProps>(userContext);

    return (
        <>
        <div>
            <h2>All Users</h2>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        </>
    )
}

export default UserList;