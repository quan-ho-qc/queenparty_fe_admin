import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class SideBar extends Component {
    render() {
        return (
            <nav className="sidebar sidebar-offcanvas" id="sidebar">
                <ul className="nav">
                    <li className="nav-item nav-profile">
                    <a href="#" className="nav-link">
                        <div className="nav-profile-image">
                        <img src="assets/images/faces/face1.jpg" alt="profile" />
                        <span className="login-status online" />
                        {/*change to offline or busy as needed*/}
                        </div>
                        <div className="nav-profile-text d-flex flex-column">
                        <span className="font-weight-bold mb-2">Hồ Văn Quân</span>
                        </div>
                        <i className="mdi mdi-bookmark-check text-success nav-profile-badge" />
                    </a>
                    </li>
                    <li className="nav-item">
                        <Link to="/dashboard" className="nav-link">
                            <span className="menu-title">Dashboard</span>
                            <i className="mdi mdi-home menu-icon" />
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/user" className="nav-link">
                            <span className="menu-title">Quản Lí Người Dùng</span>
                            <i className="mdi mdi-account menu-icon" />
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link to="/vendor" className="nav-link">
                            <span className="menu-title">Quản Lí Nhà Cung Cấp</span>
                            <i className="mdi mdi-account-star menu-icon" />
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/contact" className="nav-link">
                            <span className="menu-title">Quản Lí Liên Lạc</span>
                            <i className="mdi mdi-phone menu-icon" />
                        </Link>
                    </li>
                </ul>
            </nav>
        );
    }
}
export default SideBar;