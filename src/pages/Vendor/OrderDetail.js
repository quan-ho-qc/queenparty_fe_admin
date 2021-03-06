import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import SideBar from '../../components/SideBar/SideBar';
import axios from 'axios';
import { Link } from 'react-router-dom';
class OrderDetail extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user_id: this.props.location.state.user_id,
            vendor_id: this.props.location.state.vendor_id,
            orders: [],
            name:this.props.location.state.name,
            phone:this.props.location.state.phone,
            address:this.props.location.state.address,
            created_at:this.props.location.state.created_at,
            order_time:this.props.location.state.order_time,
            status:this.props.location.state.status,
            note:this.props.location.state.note,
            total:''
        };

        alert(this.state.user_id);
        alert(this.state.vendor_id);
        axios.get('order_detail/'+this.state.user_id+'/'+this.state.vendor_id)
         .then(res => {
             this.setState({
                 orders: res.data[0]
             });
             this.setState({
                 total: res.data[1]
             });
             console.log(this.state.total)
         })
         .catch((error) => {
         console.log(error);
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
                                    </span> Qu???n L?? Nh?? Cung C???p
                                </h3>
                                <nav aria-label="breadcrumb">
                                    <ul className="breadcrumb">
                                        <li className="breadcrumb-item active" aria-current="page">
                                            <span />T???ng Quan <i className="mdi mdi-alert-circle-outline icon-sm text-primary align-middle" />
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                            <div className="card">
                                    <div className="card-body">
                                        <h4 className="card-title">Th??ng tin kh??ch h??ng</h4>
                                        <p>H??? v?? t??n: {this.state.name}</p>
                                        <p>S??? ??i???n tho???i: {this.state.phone}</p>
                                        <p>?????a ch???: {this.state.address}</p>
                                        <p>Ng??y ?????t h??ng: {this.state.created_at}</p>
                                        <p>Ng??y giao h??ng: {this.state.order_time}</p>
                                        <p>T??nh tr???ng ????n h??ng: {this.state.status}</p>
                                        <p>Ghi ch??: {this.state.note}</p>
                                        {/* <p>T???ng s??? ti???n ???? thanh to??n: 23131</p>
                                        <p>T???ng s??? ti???n ph???i thanh to??n:213131</p> */}
                                    </div>
                                    <div className="card-body">
                                        <h4 className="card-title">Danh s??ch s???n ph???m ?????t mua</h4>
                                        <table className="table table-bordered">
                                            <thead>
                                                <tr>
                                                    <th> STT</th>
                                                    <th> T??n SP</th>
                                                    <th> Gi??  </th>
                                                    <th> S??? l?????ng </th>
                                                    <th> T???ng Ti???n </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    this.state.orders.map((item,index)=>(
                                                    <tr className="table-info"key={index}>
                                                        <td>{index+1} </td>
                                                        <td>{item.name}</td>
                                                        <td>{item.price.toLocaleString()} </td>
                                                        <td>{item.quantity} </td>
                                                        <td>{(item.price * item.quantity).toLocaleString()} VND</td>
                                                    </tr>
                                                ))
                                                }
                                            </tbody>
                                                <p></p>
                                                <h6>Th??nh ti???n: {this.state.total.toLocaleString()} VND</h6>
                                        </table>
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

export default OrderDetail;