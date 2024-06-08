import React from 'react';

import UserItem from './UserItem/UserItem';

const UserList = ({ users, deleteUser, updateUser }) => {
    const handleSave = (updatedUser) => {
        updateUser(updatedUser);
    };

    return (
        <div>
            {users.map(user => (
                <UserItem key={user.id} user={user} deleteUser={deleteUser} onSave={handleSave}
                onRequestClose={() => console.log('Modal closed')} />
            ))}
        </div>
    );
};

export default UserList;
