import './Sidebar.css';

import React from 'react';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar-item">
                <img src="path/to/profile-pic.jpg" alt="Profile" className="profile-pic" />
            </div>
            <button className="sidebar-item">
                <i className="icon-dashboard"></i>
            </button>
            <button className="sidebar-item">
                <i className="icon-users"></i>
            </button>
            <button className="sidebar-item">
                <i className="icon-messages"></i>
            </button>
            <button className="sidebar-item">
                <i className="icon-analytics"></i>
            </button>
            <button className="sidebar-item">
                <i className="icon-settings"></i>
            </button>
            <button className="sidebar-item">
                <i className="icon-dashboard"></i>
            </button>
            <button className="sidebar-item">
                <i className="icon-users"></i>
            </button>
            <button className="sidebar-item">
                <i className="icon-messages"></i>
            </button>
            <button className="sidebar-item">
                <i className="icon-analytics"></i>
            </button>
            <button className="sidebar-item">
                <i className="icon-settings"></i>
            </button>
        </div>
    );
};

export default Sidebar;
