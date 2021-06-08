import React, { Component } from 'react';
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }
    onChangeHandler = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        if (nam === "img") {
            val = "image/" + event.target.files[0].name;
        }
        this.setState({ [nam]: val });
    }

    submit = (event) => {
        if(this.state.email === "admin@gmail.com" && this.state.password === "admin"){
            alert("Đăng nhập thành công");
            this.props.history.push("/dashboard");
        }else{
            alert("Đăng nhập thất bại, xin vui lòng thử lại!");
        }
    }
    render() {
        return (
            <div className="container-scroller">
                <div className="container-fluid page-body-wrapper full-page-wrapper">
                    <div className="content-wrapper d-flex align-items-center auth">
                        <div className="row flex-grow">
                            <div className="col-lg-4 mx-auto">
                                <div className="auth-form-light text-left p-5">
                                    <div className="brand-logo">
                                        QueenParty - Admin
                                    </div>
                                    <h4>Vui lòng đăng nhập!</h4>
                                    <form className="pt-3" onSubmit={this.submit}>
                                        <div className="form-group">
                                            <input type="email" required className="form-control form-control-lg" id="exampleInputEmail1" placeholder="Email" 
                                                   name="email" value={this.props.email} onChange={(e) => this.onChangeHandler(e)}/>
                                        </div>
                                        <div className="form-group">
                                            <input type="password" required className="form-control form-control-lg" id="exampleInputPassword1" placeholder="Mật khẩu ....." 
                                                   name="password" value={this.props.password} onChange={(e) => this.onChangeHandler(e)}/>
                                        </div>
                                        <div className="mt-3">
                                            <button className="btn btn-block btn-gradient-primary btn-lg font-weight-medium auth-form-btn">ĐĂNG NHẬP</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Login;