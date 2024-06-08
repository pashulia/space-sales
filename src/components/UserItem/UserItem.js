import './UserItem.css';

import React, { useState } from 'react';

import EditUserModal from '../EditUserModal/EditUserModal.js';
import Modal from '../Modal/Modal.js';

const UserItem = ({ user, deleteUser, onSave }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [showDeleteMessage, setShowDeleteMessage] = useState(false);

    const handleSave = (updatedUser) => {
        onSave(updatedUser);
        setIsEditing(false);
        setShowModal(false);
    };

    const handleDeleteUser = () => {
        deleteUser(user.id);
        setShowDeleteMessage(true);
        setTimeout(() => {
            setShowDeleteMessage(false);
            setShowModal(false);
        }, 2000); // Закрываем модальное окно через 2 секунды после отображения сообщения
    };

    return (
        <div className="user-item">
            <img src={user.image} alt="Profile" className="profile-pic" />
            <div className="user-details">
                <div className="user-info">
                    <span className="user-name">{user.name}</span>
                    <span className="user-email">{user.email}</span>
                </div>
                <div className="user-permissions">
                    {Object.values(user.role)[0] ? <span className="user-role">{Object.keys(user.role)[0]}</span> : ''}
                    {Object.entries(user.permissions).filter(([_, value]) => value).map(([permission, _], index) => (
                        <div key={index} className="user-permission">
                            <span>{permission}</span>
                        </div>
                    ))}
                </div>
            </div>
            <div className="ellipsis" onClick={() => setShowModal(true)}>
                &#x22EE;
            </div>
            <Modal show={showModal} onClose={() => setShowModal(false)}>
                <div className="modal-content">
                    {showDeleteMessage ? (
                        <p>Пользователь успешно удален.</p>
                    ) : isEditing ? (
                        <EditUserModal user={user} onSave={handleSave} onCancel={() => setShowModal(false)} />
                    ) : (
                        <div className='buttonsMenu'>
                            <button className='btc' onClick={() => setIsEditing(true)}>Изменить право доступа</button>
                            <button className='btc' >Отправить код повторно</button>
                            <button className='btc' onClick={handleDeleteUser}>Удалить</button>
                        </div>
                    )}
                </div>
            </Modal>
        </div>
    );
};

export default UserItem;
