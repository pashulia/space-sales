import './UserForm.css';

import React, { useState } from 'react';

const UserForm = ({ addUser, data }) => {
    const [newUser, setNewUser] = useState({ email: '', roles: [] });
    const [showModal, setShowModal] = useState(false);
    const [modalText, setModalText] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewUser({ ...newUser, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const existingUser = data.find(user => user.email === newUser.email);
        if (existingUser) {
            addUser(existingUser);
            setModalText(`Приглашение отправлено на почту: ${newUser.email}`);
            setShowModal(true);
            setTimeout(() => {
                setShowModal(false)
            }, 2000);
        } else {
            alert('Email not found in existing users.');
        }
        setNewUser({ email: '', roles: [] });
    };

    const closeModal = () => {
        setShowModal(false);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    className='inputAdd'
                    type="email"
                    name="email"
                    value={newUser.email}
                    onChange={handleChange}
                    placeholder="поиск по Email"
                    required
                />
                <button className='buttonAdd' type="submit">Добавить пользователя</button>
            </form>
            {showModal && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={closeModal}>&times;</span>
                        <p>{modalText}</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default UserForm;
