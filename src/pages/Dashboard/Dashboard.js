import React, { Component } from 'react';
import Cards from './Cards';
import ChartSection from './ChartSection';
import Chart2 from './Chart2';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import SideBar from '../../components/SideBar/SideBar';
class Dashboard extends Component {
    render() {
        return (
            <div className="container-scroller">
                <Header/>
                <div className="container-fluid page-body-wrapper">
                    <SideBar/>
                    <div className="main-panel">
                        <div className="content-wrapper">
                            <div className="page-header">
                                <h3 className="page-title">
                                    <span className="page-title-icon bg-gradient-primary text-white mr-2">
                                <i className="mdi mdi-home" />
                                    </span> Dashboard
                                </h3>
                                <nav aria-label="breadcrumb">
                                    <ul className="breadcrumb">
                                        <li className="breadcrumb-item active" aria-current="page">
                                            <span />Tổng Quan <i className="mdi mdi-alert-circle-outline icon-sm text-primary align-middle" />
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                            <Cards/>
                            <h4>Người dùng mới</h4>
                            <Chart2/>
                        </div>
                        <Footer/>
                    </div>
                </div>
            </div> 
        );
    }
}

export default Dashboard;