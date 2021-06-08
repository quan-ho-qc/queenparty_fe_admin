import React, { Component } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            vendors: []
        };
    }
    
    componentDidMount() {
        axios.get('list_new_vendor')
        .then(res => {
            this.setState({
                vendors: res.data.data
            });
        })
        .catch((error) => {
        console.log(error);
        })
    }
    render() {
       if(this.state.vendors.id !=0){
        return (
            <nav className="navbar default-layout-navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
                <div className="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center">
                    {/* <h2 style={{color:'red'}}>QUEEN PARTY</h2> */}
                    <span className="font-weight-bold mb-2">QUEEN PARTY VIỆT NAM</span>
                </div>
                <div className="navbar-menu-wrapper d-flex align-items-stretch">
                    <button className="navbar-toggler navbar-toggler align-self-center" type="button" data-toggle="minimize">
                        <span className="mdi mdi-menu" />
                    </button>
                    {/* <div className="search-field d-none d-md-block">
                        <form className="d-flex align-items-center h-100" action="#">
                            <div className="input-group">
                            <div className="input-group-prepend bg-transparent">
                                <i className="input-group-text border-0 mdi mdi-magnify" />
                            </div>
                            <input type="text" className="form-control bg-transparent border-0" placeholder="Search..." />
                            </div>
                        </form>
                    </div> */}
                    <ul className="navbar-nav navbar-nav-right">
                        <li className="nav-item dropdown">
                            <a className="nav-link count-indicator dropdown-toggle" id="notificationDropdown" href="#" data-toggle="dropdown">
                                <i className="mdi mdi-bell-outline" />
                                <span className="count-symbol bg-danger" />
                            </a>
                            <div className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list" aria-labelledby="notificationDropdown">
                                <h6 className="p-3 mb-0">Thông báo mới</h6>
                                <div className="dropdown-divider" />
                                <a className="dropdown-item preview-item">
                                    <div className="preview-thumbnail">
                                        <div className="preview-icon bg-success">
                                            <i className="mdi mdi-calendar" />
                                        </div>
                                    </div>
                                    <div className="preview-item-content d-flex align-items-start flex-column justify-content-center">
                                        <h6 className="preview-subject font-weight-normal mb-1">Tài khoản đăng kí</h6>
                                        <Link to="/vendor" className="nav-link"><p className="text-gray ellipsis mb-0"> Có một vài tài khoản mới</p></Link>
                                    </div>
                                </a>
                            </div>
                        </li>
                        <li className="nav-item nav-profile dropdown">
                            <Link to="/" className="nav-link">
                                <i className="mdi mdi-logout mr-2 text-primary" />
                            </Link>
                        </li>
                    </ul>
                    <button className="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button" data-toggle="offcanvas">
                        <span className="mdi mdi-menu" />
                    </button>
                </div>
            </nav>

        );
       }else{
        return (
            <nav className="navbar default-layout-navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
                <div className="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center">
                    {/* <h2 style={{color:'red'}}>QUEEN PARTY</h2> */}
                    <span className="font-weight-bold mb-2">QUEEN PARTY VIỆT NAM</span>
                </div>
                <div className="navbar-menu-wrapper d-flex align-items-stretch">
                    <button className="navbar-toggler navbar-toggler align-self-center" type="button" data-toggle="minimize">
                        <span className="mdi mdi-menu" />
                    </button>
                    {/* <div className="search-field d-none d-md-block">
                        <form className="d-flex align-items-center h-100" action="#">
                            <div className="input-group">
                            <div className="input-group-prepend bg-transparent">
                                <i className="input-group-text border-0 mdi mdi-magnify" />
                            </div>
                            <input type="text" className="form-control bg-transparent border-0" placeholder="Search..." />
                            </div>
                        </form>
                    </div> */}
                    <ul className="navbar-nav navbar-nav-right">
                        <li className="nav-item dropdown">
                            <a className="nav-link count-indicator dropdown-toggle" id="notificationDropdown" href="#" data-toggle="dropdown">
                                <i className="mdi mdi-bell-outline" />
                                <span className="count-symbol bg-danger" />
                            </a>
                            <div className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list" aria-labelledby="notificationDropdown">
                                <h6 className="p-3 mb-0">Thông báo mới</h6>
                                <div className="dropdown-divider" />
                                <a className="dropdown-item preview-item">
                                    <div className="preview-thumbnail">
                                        <div className="preview-icon bg-success">
                                            <i className="mdi mdi-calendar" />
                                        </div>
                                    </div>
                                    <div className="preview-item-content d-flex align-items-start flex-column justify-content-center">
                                        <h6 className="preview-subject font-weight-normal mb-1">Chưa có thông báo</h6>
                                    </div>
                                </a>
                            </div>
                        </li>
                        <li className="nav-item nav-profile dropdown">
                            <Link to="/" className="nav-link">
                                <i className="mdi mdi-logout mr-2 text-primary" />
                            </Link>
                        </li>
                    </ul>
                    <button className="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button" data-toggle="offcanvas">
                        <span className="mdi mdi-menu" />
                    </button>
                </div>
            </nav>

        );
       }
    }
}

export default Header;