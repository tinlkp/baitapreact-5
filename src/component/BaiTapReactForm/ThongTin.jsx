import React, { Component,createRef } from 'react'
import { connect } from 'react-redux'



class ThongTin extends Component {


    state = {
        maSV: "",
        hoTen: "",
        soDienThoai: "",
        email: "",
    }


    render() {
        return (
            <div className="card p-0">
                <div className="card-header bg-dark text-white font-weight-bold">
                    Thông tin sinh viên
                </div>
                <div className="card-body">
                    <form>
                        <div className="row">
                            <div className="col-6">
                                <div className="form-group">
                                    <label>Mã SV</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="username"
                                    />
                                    <span

                                        className="text-danger"
                                    ></span>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="form-group">
                                    <label>Họ tên</label>
                                    <input

                                        type="text"
                                        className="form-control"
                                    />
                                    <span className="text-danger"></span>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="form-group">
                                    <label>Số điện thoại</label>
                                    <input

                                        type="text"
                                        className="form-control"
                                    />
                                    <span className="text-danger"></span>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="form-group">
                                    <label>Email</label>
                                    <input

                                        type="text"
                                        className="form-control"
                                    />
                                    <span className="text-danger"></span>
                                </div>
                            </div>
                        </div>

                        <button className="btn btn-success mr-2">Thêm sinh viên</button>
                    </form>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        selectedUser: state.userReducer.selectedUser,
    }
}

export default connect(mapStateToProps)(ThongTin);