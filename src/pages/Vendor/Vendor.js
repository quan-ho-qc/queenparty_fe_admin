import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import SideBar from '../../components/SideBar/SideBar';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Pagination from "react-js-pagination";
class Vendor extends Component {
    constructor(props) {
        super(props)
        this.state = {
            vendors: [],
            activePage:1,
            itemsCountPerPage:1,
            pageRangeDisplayed: 3,
            totalItemsCount:1
        };
    }
    
    componentDidMount() {
        axios.get('admin_vendor')
        .then(res => {
            this.setState({
                vendors: res.data.data
            });
        })
        .catch((error) => {
        console.log(error);
        })
    }
    
    handlePageChange(pageNumber) {
        console.log("active page is ${pageNumber}");
        //this.setState({activePage: pageNumber});
        axios.get('admin_vendor?page='+pageNumber)
        .then(res => {
            this.setState({
                vendors: res.data.data,
                itemsCountPerPage:res.data.per_page,
                totalItemsCount:res.data.total,
                activePage:res.data.current_page
            });
        })
        .catch((error) => {
        console.log(error);
        })
    }

    deleteVendor(id){
        axios.delete('admin_vendor/'+id)
            .then((res) => {
                alert("Xóa thành công!");
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
                                    </span> Quản Lí Nhà Cung Cấp
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
                                            Danh sách nhà cung cấp
                                        </h5>
                                        <nav aria-label="breadcrumb">
                                            <Link to="/add_vendor" className="nav-link">
                                                <h5 className="page-title">
                                                    Thêm mới
                                                </h5>
                                            </Link>
                                        </nav>
                                    </div>
                                    <table className="table table-striped">
                                    <thead>
                                        <tr>
                                        <th> ID </th>
                                        <th> Avatar </th>
                                        <th> Tên </th>
                                        <th> Trạng thái </th>
                                        <th> Tác vụ </th>
                                        </tr>
                                    </thead>
                                        <tbody>
                                            {
                                                this.state.vendors.map((item,index)=>(
                                                    <tr key={index}>
                                                        <td>{index+1}</td>
                                                        <td><img src={item.avatar}/></td>
                                                        <td>
                                                            <Link to={{pathname:'/vendor_detail', state: {id:item.id}}} className="nav-link">
                                                                {item.name}
                                                            </Link>
                                                        </td>
                                                        <td>{item.status}</td>
                                                        <td><span>
                                                                <button type="submit" onClick={()=>this.deleteVendor(item.id)} className="btn btn-gradient-primary btn-rounded btn-icon"><i className="mdi mdi-delete" /></button>
                                                            </span>
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

export default Vendor;