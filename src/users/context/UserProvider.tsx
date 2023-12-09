import React, { createContext, useEffect, useState } from "react";

interface IProps {
    children: React.ReactNode;
}

interface User {
    id: number;
    name: string;
}

export interface IUserContextProps {
    users: User[];
    addUser: (name: string) => void;
}

export const userContext = createContext<IUserContextProps>({
    users: [],
    addUser: () => { }
});

const UserProvider = ({ children }: IProps) => {
    const [users, setUsers] = useState<User[]>([]);

    useEffect(() => {
        // fetch 
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((data) => {
                const users = data
                    .slice(0, 2)
                    .map((user: User) => ({ id: user.id, name: user.name }));
                setUsers(users);
            });
    }, []);

    const addUser = (name: string) => {
        const newUser: User = {
            id: users.length + 1,
            name: name
        };

        setUsers((preUsers) => [
            ...preUsers,
            newUser
        ]);
    }

    const value: IUserContextProps = {
        users,
        addUser
    };

    return (
        <userContext.Provider value={value}>{children}</userContext.Provider>
    );
}

export default UserProvider;