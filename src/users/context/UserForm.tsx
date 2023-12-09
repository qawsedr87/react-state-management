import { useContext, useState } from "react";
import { IUserContextProps, userContext } from "./UserProvider";
import './context.css';

const UserForm = () => {
    const { users, addUser } = useContext<IUserContextProps>(userContext);
    const [newUserName, setNewUserName] = useState<string>('');

    const handleAddUser = () => {
        addUser(newUserName);

        // reset 
        setNewUserName('');
    }

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
        <div>
            <h2>User Form</h2>
            <input
                type="text"
                placeholder="Enter new user name"
                value={newUserName}
                onChange={(e) => setNewUserName(e.target.value)}
            />
            <button onClick={handleAddUser}>Add User</button>
        </div>
        </>
    );
}

export default UserForm;