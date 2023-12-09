import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/types';
import { fetchUsers } from '../store/actions/user.action';
import { useThunkDispatch } from '../store/hooks';


const UserRedux = () => {
    const dispatch = useThunkDispatch();
    const users = useSelector((state: RootState) => state.user.users);

    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);

    return (
        <div>
            <h2>All Users</h2>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default UserRedux;
