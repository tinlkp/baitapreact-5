import React, { Component } from 'react'

export default class BangThongTin extends Component {
    render() {
        return (
            <div className="card p-0 mt-3">
                <div className="row mt-4 px-3 ">
                    <div className="col-4">
                        <div className="form-group mb-0">
                            <input
                                type="text"
                                placeholder="Tìm kiếm theo họ tên..."
                                className="form-control"
                            />
                        </div>
                    </div>

                </div>
                <div className="card-body">
                    <table className="table">
                        <thead className='bg-dark text-white'>
                            <tr>
                                <th>Mã SV</th>
                                <th>Họ tên</th>
                                <th>Số điện thoại</th>
                                <th>Email</th>
                            </tr>
                        </thead>
                        <tbody></tbody>
                    </table>
                </div>
            </div>
        )
    }
}
