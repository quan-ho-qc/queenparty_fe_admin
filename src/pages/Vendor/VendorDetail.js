import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import SideBar from '../../components/SideBar/SideBar';
import axios from 'axios';
import { Link } from 'react-router-dom';
class VendorDetail extends Component {
    constructor(props) {
        super(props)
        this.state = {
           id: this.props.location.state.id,
           vendor: []
        }

        axios.get('admin_vendor/'+this.state.id)
        .then(res => {
            this.setState({
                vendor: res.data
            });
        })
        .catch((error) => {
        console.log(error);
        })
    }
    
    deleteVendor(id){
        axios.delete('admin_vendor/'+id)
            .then((res) => {
                alert("Từ chối thành công!");
                console.log(res);
                this.props.history.push("/vendor");
            }).catch((error) => {
                console.log(error)
            })
    }

    acceptVendor(id){
        axios.put('admin_vendor/'+id, {status: "Đã được phê duyệt"})
            .then(() => {
                alert("Đã xong!");
                this.props.history.push("/vendor");
            }).catch((error) => {
                console.log(error)
            })
    }

    render() {
        if(this.state.vendor.status === "Chờ phê duyệt"){
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
                                    </span> Quản Lí Nhà Cung Cấp - Chi tiết nhà cung cấp
                                </h3>
                                <nav aria-label="breadcrumb">
                                    <ul className="breadcrumb">
                                        <li className="breadcrumb-item active" aria-current="page">
                                            <span />Tổng Quan <i className="mdi mdi-alert-circle-outline icon-sm text-primary align-middle" />
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                            <main>
                                <div className="container-xl px-4 mt-4">
                                            <div className="col-xl-12">
                                                {/* Profile picture card*/}
                                                <div className="card mb-12 mb-xl-0">
                                                    <div className="card-header">Ảnh đại diện</div>
                                                    <div className="card-body text-center">
                                                        <img src={this.state.vendor.avatar} width="800px"alt />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-12">
                                                {/* Profile picture card*/}
                                                <div className="card mb-12 mb-xl-0">
                                                    <div className="card-header">Giấy Chứng nhận ATTP</div>
                                                    <div className="card-body text-center">
                                                        <img src={this.state.vendor.document} width="800px"alt />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-12">
                                                {/* Account details card*/}
                                                <div className="card mb-4">
                                                <div className="card-header">Thông tin nhà hàng</div>
                                                <div className="card-body">
                                                    <form>
                                                    {/* Form Group (username)*/}
                                                    <div className="mb-3">
                                                        <label className="small mb-1" htmlFor="inputUsername">Tên nhà hàng</label>
                                                        <input className="form-control" id="inputUsername" disabled type="text" placeholder="Enter your username" defaultValue={this.state.vendor.name} />
                                                    </div>
                                                    {/* Form Row        */}
                                                    <div className="row gx-3 mb-3">
                                                        {/* Form Group (organization name)*/}
                                                        <div className="col-md-6">
                                                        <label className="small mb-1" htmlFor="inputOrgName">Tình trạng tài khoản</label>
                                                        <input className="form-control" id="inputOrgName" disabled type="text" defaultValue={this.state.vendor.status} />
                                                        </div>
                                                        {/* Form Group (location)*/}
                                                        <div className="col-md-6">
                                                        <label className="small mb-1" htmlFor="inputLocation">Địa chỉ</label>
                                                        <input className="form-control" id="inputLocation" disabled type="text" placeholder="Enter your location" defaultValue={this.state.vendor.address} />
                                                        </div>
                                                    </div>
                                                    {/* Form Group (email address)*/}
                                                    <div className="mb-3">
                                                        <label className="small mb-1" htmlFor="inputEmailAddress">Email</label>
                                                        <input className="form-control" id="inputEmailAddress" disabled  type="email" placeholder="Enter your email address" defaultValue={this.state.vendor.email} />
                                                    </div>
                                                    {/* Form Row*/}
                                                    <div className="row gx-3 mb-3">
                                                        {/* Form Group (phone number)*/}
                                                        <div className="col-md-6">
                                                        <label className="small mb-1" htmlFor="inputPhone">Số điện thoại</label>
                                                        <input className="form-control" id="inputPhone" disabled type="tel" placeholder="Enter your phone number" defaultValue={this.state.vendor.phone} />
                                                        </div>
                                                        {/* Form Group (birthday)*/}
                                                        <div className="col-md-6">
                                                        <label className="small mb-1" htmlFor="inputBirthday">Ngày tạo tài khoản</label>
                                                        <input className="form-control" id="inputBirthday" disabled type="text" name="birthday" placeholder="Enter your birthday" defaultValue={this.state.vendor.created_at} />
                                                        </div>
                                                    </div>
                                                    <span>
                                                        <button className="nav-link" onClick={()=>this.acceptVendor(this.state.id)} className="btn btn-primary" type="button">Phê Duyệt</button>
                                                        <button className="nav-link" onClick={()=>this.deleteVendor(this.state.id)} className="btn btn-primary" type="button" style={{marginLeft: '20px'}}>Từ chối</button>
                                                    </span>
                                                        
                                                    </form>
                                                </div>
                                                </div>
                                            </div>
                                </div>
                            </main>
                        </div>
                        <Footer/>
                    </div>
                </div>
            </div>  
            );
        }
        else{
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
                                    </span> Quản Lí Nhà Cung Cấp - Chi tiết nhà cung cấp
                                </h3>
                                <nav aria-label="breadcrumb">
                                    <ul className="breadcrumb">
                                        <li className="breadcrumb-item active" aria-current="page">
                                            <span />Tổng Quan <i className="mdi mdi-alert-circle-outline icon-sm text-primary align-middle" />
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                            <main>
                                <div className="container-xl px-4 mt-4">
                                            <div className="col-xl-12">
                                                {/* Profile picture card*/}
                                                <div className="card mb-12 mb-xl-0">
                                                    <div className="card-header">Ảnh đại diện</div>
                                                    <div className="card-body text-center">
                                                        <img src={this.state.vendor.avatar} width="800px"alt />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-12">
                                                {/* Profile picture card*/}
                                                <div className="card mb-12 mb-xl-0">
                                                    <div className="card-header">Giấy Chứng nhận ATTP</div>
                                                    <div className="card-body text-center">
                                                        <img src={this.state.vendor.document} width="800px"alt />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-12">
                                                {/* Account details card*/}
                                                <div className="card mb-4">
                                                <div className="card-header">Thông tin nhà hàng</div>
                                                <div className="card-body">
                                                    <form>
                                                    {/* Form Group (username)*/}
                                                    <div className="mb-3">
                                                        <label className="small mb-1" htmlFor="inputUsername">Tên nhà hàng</label>
                                                        <input className="form-control" id="inputUsername" disabled type="text" placeholder="Enter your username" defaultValue={this.state.vendor.name} />
                                                    </div>
                                                    {/* Form Row        */}
                                                    <div className="row gx-3 mb-3">
                                                        {/* Form Group (organization name)*/}
                                                        <div className="col-md-6">
                                                        <label className="small mb-1" htmlFor="inputOrgName">Tình trạng tài khoản</label>
                                                        <input className="form-control" id="inputOrgName" disabled type="text" defaultValue={this.state.vendor.status} />
                                                        </div>
                                                        {/* Form Group (location)*/}
                                                        <div className="col-md-6">
                                                        <label className="small mb-1" htmlFor="inputLocation">Địa chỉ</label>
                                                        <input className="form-control" id="inputLocation" disabled type="text" placeholder="Enter your location" defaultValue={this.state.vendor.address} />
                                                        </div>
                                                    </div>
                                                    {/* Form Group (email address)*/}
                                                    <div className="mb-3">
                                                        <label className="small mb-1" htmlFor="inputEmailAddress">Email</label>
                                                        <input className="form-control" id="inputEmailAddress" disabled  type="email" placeholder="Enter your email address" defaultValue={this.state.vendor.email} />
                                                    </div>
                                                    {/* Form Row*/}
                                                    <div className="row gx-3 mb-3">
                                                        {/* Form Group (phone number)*/}
                                                        <div className="col-md-6">
                                                        <label className="small mb-1" htmlFor="inputPhone">Số điện thoại</label>
                                                        <input className="form-control" id="inputPhone" disabled type="tel" placeholder="Enter your phone number" defaultValue={this.state.vendor.phone} />
                                                        </div>
                                                        {/* Form Group (birthday)*/}
                                                        <div className="col-md-6">
                                                        <label className="small mb-1" htmlFor="inputBirthday">Ngày tạo tài khoản</label>
                                                        <input className="form-control" id="inputBirthday" disabled type="text" name="birthday" placeholder="Enter your birthday" defaultValue={this.state.vendor.created_at} />
                                                        </div>
                                                    </div>
    
    
                                                    {/* Save changes button*/}
                                                    <Link to={{pathname:'/vendor_list_order', state: {id:this.state.id}}} className="nav-link" className="btn btn-primary" type="button">Xem Đơn hàng</Link>
                                                    </form>
                                                </div>
                                                </div>
                                            </div>
                                </div>
                            </main>
                        </div>
                        <Footer/>
                    </div>
                </div>
            </div>  
            );
        }
    }
}

export default VendorDetail;
