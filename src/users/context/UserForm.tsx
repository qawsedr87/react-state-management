import { useContext, useState } from "react";
import { IUserContextProps, userContext } from "./UserProvider";
import './context.css';
import { useNavigate } from "react-router-dom";

const UserForm = () => {
    const { addUser } = useContext<IUserContextProps>(userContext);
    const [newUserName, setNewUserName] = useState<string>('');

    const navigate = useNavigate();

    const handleAddUser = () => {
        addUser(newUserName);

        // reset 
        setNewUserName('');
        
        // redirect 
        navigate('/users');
    }

    return (
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
    );
}

export default UserForm;