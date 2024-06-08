import './App.css';

import React, {
  useEffect,
  useState,
} from 'react';

import EditUserModal from './components/EditUserModal/EditUserModal';
import Sidebar from './components/Sidebar/Sidebar';
import UserForm from './components/UserForm/UserForm';
import UserList from './components/UserList';

const App = () => {
    // Загрузка данных из LocalStorage или использование начальных данных
    const initialUsers = JSON.parse(localStorage.getItem('users')) || [
        { id: 1, name: "Артем Иванов", email: "artem@gmail.com", role: { "Администратор": false }, permissions: { "Акции": false, "Модерация объявлений": false, "Тех. поддержка": false, "Обращение клиентов": false, "Блог": true, "Аналитика": true }, image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" },
        { id: 2, name: "Лена Новикова", email: "lenkan@gmail.com", role: { "Администратор": true }, permissions: { "Акции": false, "Модерация объявлений": false, "Тех. поддержка": false, "Обращение клиентов": false, "Блог": false, "Аналитика": false }, image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80" },
        { id: 3, name: "Максим Иванов", email: "maksiim@gmail.com", role: { "Администратор": false }, permissions: { "Акции": true, "Модерация объявлений": true, "Тех. поддержка": true, "Обращение клиентов": false, "Блог": false, "Аналитика": false }, image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?cs=srgb&dl=pexels-simon-robben-614810.jpg&fm=jpg" },
        { id: 4, name: "Айжулдыз Кошкинбай", email: "aizhzk@gmail.com", role: { "Администратор": false }, permissions: { "Акции": false, "Модерация объявлений": false, "Тех. поддержка": false, "Обращение клиентов": true, "Блог": false, "Аналитика": false }, image: "https://gorodprizrak.com/wp-content/uploads/2021/01/346545.jpg" }
    ];

    const [users, setUsers] = useState(initialUsers);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentUser, setCurrentUser] = useState(null);

    // Сохранение данных в LocalStorage при изменении users
    useEffect(() => {
        localStorage.setItem('users', JSON.stringify(users));
    }, [users]);

    const [data, setData] = useState([
        { id: 1, name: "Артем Иванов", email: "artem@gmail.com", role: { "Администратор": false }, permissions: { "Акции": false, "Модерация объявлений": false, "Тех. поддержка": false, "Обращение клиентов": false, "Блог": true, "Аналитика": true }, image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" },
        { id: 2, name: "Лена Новикова", email: "lenkan@gmail.com", role: { "Администратор": true }, permissions: { "Акции": false, "Модерация объявлений": false, "Тех. поддержка": false, "Обращение клиентов": false, "Блог": false, "Аналитика": false }, image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80" },
        { id: 3, name: "Максим Иванов", email: "maksiim@gmail.com", role: { "Администратор": false }, permissions: { "Акции": true, "Модерация объявлений": true, "Тех. поддержка": true, "Обращение клиентов": false, "Блог": false, "Аналитика": false }, image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?cs=srgb&dl=pexels-simon-robben-614810.jpg&fm=jpg" },
        { id: 4, name: "Айжулдыз Кошкинбай", email: "aizhzk@gmail.com", role: { "Администратор": false }, permissions: { "Акции": false, "Модерация объявлений": false, "Тех. поддержка": false, "Обращение клиентов": true, "Блог": false, "Аналитика": false }, image: "https://gorodprizrak.com/wp-content/uploads/2021/01/346545.jpg" },
        { id: 5, name: "Сергей Петров", email: "sergey@gmail.com", role: { "Администратор": false }, permissions: { "Акции": true, "Модерация объявлений": false, "Тех. поддержка": true, "Обращение клиентов": true, "Блог": false, "Аналитика": false }, image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" },
        { id: 6, name: "Мария Сидорова", email: "maria@gmail.com", role: { "Администратор": false }, permissions: { "Акции": false, "Модерация объявлений": true, "Тех. поддержка": false, "Обращение клиентов": false, "Блог": true, "Аналитика": false }, image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" },
        { id: 7, name: "Иван Смирнов", email: "ivan@gmail.com", role: { "Администратор": false }, permissions: { "Акции": true, "Модерация объявлений": false, "Тех. поддержка": true, "Обращение клиентов": false, "Блог": true, "Аналитика": true }, image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" }
    ]);

    const addUser = (user) => {
        const existingUser = users.find(u => u.email === user.email);
        if (!existingUser) {
            setUsers([...users, { ...user, id: users.length + 1 }]);
        } else {
            alert('User with this email already exists.');
        }
    };

    const deleteUser = (id) => {
        setUsers(users.filter(user => user.id !== id));
    };

    const editUser = (updatedUser) => {
        setUsers(users.map(user => (user.id === updatedUser.id ? updatedUser : user)));
    };

    const updateUser = (updatedUser) => {
        setUsers(users.map(user => (user.id === updatedUser.id ? updatedUser : user)));
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setCurrentUser(null);
    };

    return (
        <div className="App">
            <Sidebar/>
            <div className="main-content">
                <div className="headerTeam">
                    <h1 className='titleTeam'>Команда</h1>
                    <UserForm className="userForm" addUser={addUser} data={data} />
                </div>
                
                <UserList users={users} deleteUser={deleteUser} updateUser={updateUser} />
            </div>
            {currentUser && (
                <EditUserModal
                    isOpen={isModalOpen}
                    onRequestClose={closeModal}
                    user={currentUser}
                    onSave={editUser}
                />
            )}
        </div>
    );
};

export default App;
