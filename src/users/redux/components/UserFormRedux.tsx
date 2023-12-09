import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { RootState } from '../store/types';
import { addUser, fetchUsers } from '../store/actions/user.action';
import { useThunkDispatch } from '../store/hooks';

const UserFormRedux = () => {
  const dispatch = useThunkDispatch();
  const users = useSelector((state: RootState) => state.user.users);
  const [newUserName, setNewUserName] = React.useState<string>('');

  useEffect(() => {
    // Fetch users when the component mounts
    dispatch(fetchUsers());
  }, [dispatch]);

  const handleAddUser = () => {
    // Dispatch action to add a new user
    dispatch(addUser({ id: String(users.length + 1), name: newUserName }));

    // Reset the input
    setNewUserName('');
  };

  return (
    <div>
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
    </div>
  );
};

export default UserFormRedux;
