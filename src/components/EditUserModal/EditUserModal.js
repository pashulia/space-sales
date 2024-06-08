import React, { useState } from 'react';

const EditUserModal = ({ user, onSave, onCancel }) => {
    const [permissions, setPermissions] = useState(user.permissions);

    const handleCheckboxChange = (permission) => {
        setPermissions({
            ...permissions,
            [permission]: !permissions[permission],
        });
    };

    const handleSave = () => {
        onSave({ ...user, permissions });
    };

    return (
        <div>
            <h2>Edit Permissions for {user.name}</h2>
            <div className="permissions">
                {Object.keys(permissions).map((permission) => (
                    <div key={permission}>
                        <label>
                            <input
                                type="checkbox"
                                checked={permissions[permission]}
                                onChange={() => handleCheckboxChange(permission)}
                            />
                            {permission}
                        </label>
                    </div>
                ))}
            </div>
            <button onClick={handleSave}>Save</button>
            <button onClick={onCancel}>Cancel</button>
        </div>
    );
};

export default EditUserModal;
