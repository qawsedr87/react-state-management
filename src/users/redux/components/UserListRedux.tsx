import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/types';
import { fetchUsers } from '../store/actions/user.action';
import { useThunkDispatch } from '../store/hooks';


const UserListRedux = () => {
    const dispatch = useThunkDispatch();
    const users = useSelector((state: RootState) => state.user.users);

    useEffect(() => {
        if (users.length === 0)
            dispatch(fetchUsers());
    }, [dispatch, users]);

    return (
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
    );
};

export default UserListRedux;
