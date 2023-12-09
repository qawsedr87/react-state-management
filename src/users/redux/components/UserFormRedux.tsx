import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { RootState } from '../store/types';
import { addUser, fetchUsers } from '../store/actions/user.action';
import { useThunkDispatch } from '../store/hooks';
import { useNavigate } from 'react-router-dom';

const UserFormRedux = () => {
  const dispatch = useThunkDispatch();
  const users = useSelector((state: RootState) => state.user.users);
  const [newUserName, setNewUserName] = useState<string>('');
  const navigate = useNavigate();

  useEffect(() => {
    if (users.length === 0)
      dispatch(fetchUsers());
  }, [dispatch, users]);

  const handleAddUser = () => {
    // Dispatch action to add a new user
    dispatch(addUser({ id: users.length + 1, name: newUserName }));

    // Reset the input
    setNewUserName('');

    // redirect 
    navigate('/users');
  };

  return (
    <div>
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
