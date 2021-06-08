import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import SideBar from '../../components/SideBar/SideBar';
import axios from 'axios';
import Pagination from "react-js-pagination";
class User extends Component {
    constructor(props) {
        super(props)
        this.state = {
            users: [],
            activePage:1,
            itemsCountPerPage:1,
            pageRangeDisplayed: 3,
            totalItemsCount:1
        };
    }
    
    componentDidMount() {
        axios.get('admin_user')
        .then(res => {
            this.setState({
                users: res.data.data
            });
        })
        .catch((error) => {
        console.log(error);
        })
    }
    
    handlePageChange(pageNumber) {
        console.log("active page is ${pageNumber}");
        //this.setState({activePage: pageNumber});
        axios.get('admin_user?page='+pageNumber)
        .then(res => {
            this.setState({
                users: res.data.data,
                itemsCountPerPage:res.data.per_page,
                totalItemsCount:res.data.total,
                activePage:res.data.current_page
            });
        })
        .catch((error) => {
        console.log(error);
        })
    }

    deleteUser(id){
        axios.delete('admin_user/'+id)
            .then((res) => {
                alert("Xoá thành công!");
                console.log(res);
                this.componentDidMount();
            }).catch((error) => {
                console.log(error)
            })
    }
    
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
                                    <i className="mdi mdi-basket menu-icon" />
                                    </span> Quản Lí Người Dùng
                                </h3>
                                <nav aria-label="breadcrumb">
                                    <ul className="breadcrumb">
                                        <li className="breadcrumb-item active" aria-current="page">
                                            <span />Tổng Quan <i className="mdi mdi-alert-circle-outline icon-sm text-primary align-middle" />
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                            <div className="card">
                                <div className="card-body">
                                    <div className="page-header">
                                        <h5 className="page-title">
                                            Danh sách người dùng
                                        </h5>
                                    </div>
                                    <table className="table table-striped">
                                    <thead>
                                        <tr>
                                        <th> ID </th>
                                        <th> Tên </th>
                                        <th> Số điện thoại</th>
                                        <th> Địa chỉ </th>
                                        <th> Tác vụ </th>
                                        </tr>
                                    </thead>
                                        <tbody>
                                            {
                                                this.state.users.map((item,index)=>(
                                                    <tr key={index}>
                                                        <td>{item.id}</td>
                                                        <td>{item.name}</td>
                                                        <td>{item.phone}</td>
                                                        <td>{item.address}</td>
                                                        <td>
                                                            <button type="submit" onClick={()=>this.deleteUser(item.id)} className="btn btn-gradient-primary btn-rounded btn-icon"><i className="mdi mdi-delete" /></button>
                                                        </td>
                                                    </tr>
                                                ))
                                            }
                                        </tbody>
                                    </table>
                                </div>
                                <div class="d-flex justify-content-center">
                                    <Pagination
                                        activePage={this.state.activePage}
                                        itemsCountPerPage={this.state.itemsCountPerPage}
                                        totalItemsCount={this.state.totalItemsCount}
                                        pageRangeDisplayed={this.state.pageRangeDisplayed}
                                        onChange={this.handlePageChange.bind(this)}
                                        itemClass="page-item"
                                        linkClass="page-link "
                                        />
                                </div>
                            </div>
                        </div>
                        <Footer/>
                    </div>
                </div>
            </div> 
        );
    }
}

export default User;