import React from 'react'
import { BsFileEarmarkText } from 'react-icons/bs'
import managerSample from "../../assets/static/images/logo/manager.jpg"
import EmployeeAvatar from './EmployeeAvatar'

function RequestManage() {
    return (
        <>
            {/* Expense Card */}
            <div className='row'>
                <div className="col-12">
                    <div className="card">
                        <div className="card-body">
                            <h3 className='fw-normal text-center'>Expense Requests</h3>
                            <div className="table-responsive">
                                <table className="table table-hover mb-0">
                                    <thead>
                                        <tr>
                                            <th>Employee</th>
                                            <th>Request Date</th>
                                            <th>Expense Type</th>
                                            <th>Amount</th>
                                            <th>Currency</th>
                                            <th>Approval Status</th>
                                            <th>Response Date</th>
                                            <th>File</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <div className="avatar avatar-lg me-3">
                                                    <EmployeeAvatar />
                                                </div>
                                            </td>
                                            <td>22.04.2024</td>
                                            <td>Travel</td>
                                            <td>517.26</td>
                                            <td>₺</td>
                                            <td><span className='badge bg-warning'>Pending</span></td>
                                            <td>-</td>
                                            <td><a href="#" style={{ fontSize: "1.5rem" }}><BsFileEarmarkText /></a></td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="avatar avatar-lg me-3">
                                                    <EmployeeAvatar />
                                                </div>
                                            </td>
                                            <td>22.04.2024</td>
                                            <td>Travel</td>
                                            <td>517.26</td>
                                            <td>₺</td>
                                            <td><span className='badge bg-success'>Approved</span></td>
                                            <td>-</td>
                                            <td><a href="#" style={{ fontSize: "1.5rem" }}><BsFileEarmarkText /></a></td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="avatar avatar-lg me-3">
                                                    <EmployeeAvatar />
                                                </div>
                                            </td>
                                            <td>22.04.2024</td>
                                            <td>Travel</td>
                                            <td>517.26</td>
                                            <td>₺</td>
                                            <td><span className='badge bg-danger'>Rejected</span></td>
                                            <td>-</td>
                                            <td><a href="#" style={{ fontSize: "1.5rem" }}><BsFileEarmarkText /></a></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Advance Card */}
            <div className='row'>
                <div className="col-12">
                    <div className="card">
                        <div className="card-body">
                            <h3 className='fw-normal text-center'>Advance Requests</h3>
                            <div className="table-responsive">
                                <table className="table table-hover mb-0">
                                    <thead>
                                        <tr>
                                            <th>Employee</th>
                                            <th>Request Date</th>
                                            <th>Advance Type</th>
                                            <th>Amount</th>
                                            <th>Currency</th>
                                            <th>Approval Status</th>
                                            <th>Response Date</th>
                                            <th>Description</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <div className="avatar avatar-lg me-3">
                                                    <EmployeeAvatar />
                                                </div>
                                            </td>
                                            <td>22.04.2024</td>
                                            <td>Individual</td>
                                            <td>1000.00</td>
                                            <td>₺</td>
                                            <td><span className='badge bg-warning'>Pending</span></td>
                                            <td>-</td>
                                            <td>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="avatar avatar-lg me-3">
                                                    <EmployeeAvatar />
                                                </div>
                                            </td>
                                            <td>22.04.2024</td>
                                            <td>Individual</td>
                                            <td>1000.00</td>
                                            <td>₺</td>
                                            <td><span className='badge bg-warning'>Pending</span></td>
                                            <td>-</td>
                                            <td>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="avatar avatar-lg me-3">
                                                    <EmployeeAvatar />
                                                </div>
                                            </td>
                                            <td>22.04.2024</td>
                                            <td>Individual</td>
                                            <td>1000.00</td>
                                            <td>₺</td>
                                            <td><span className='badge bg-warning'>Pending</span></td>
                                            <td>-</td>
                                            <td>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="avatar avatar-lg me-3">
                                                    <EmployeeAvatar />
                                                </div>
                                            </td>
                                            <td>22.04.2024</td>
                                            <td>Individual</td>
                                            <td>1000.00</td>
                                            <td>₺</td>
                                            <td><span className='badge bg-warning'>Pending</span></td>
                                            <td>-</td>
                                            <td>Lorem Ipsum Lorem Ipsum</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Leave Card */}
            <div className='row'>
                <div className="col-12">
                    <div className="card">
                        <div className="card-body">
                            <h3 className='fw-normal text-center'>Leave Requests</h3>
                            <div className="table-responsive">
                                <table className="table table-hover mb-0">
                                    <thead>
                                        <tr>
                                            <th>Employee</th>
                                            <th>Request Date</th>
                                            <th>Leave Type</th>
                                            <th>Start Date</th>
                                            <th>End Date</th>
                                            <th>Number of Days</th>
                                            <th>Approval Status</th>
                                            <th>Response Date</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <div className="avatar avatar-lg me-3">
                                                    <EmployeeAvatar />
                                                </div>
                                            </td>
                                            <td>22.04.2024</td>
                                            <td>Annual</td>
                                            <td>23.04.2024</td>
                                            <td>27.04.2024</td>
                                            <td>5</td>
                                            <td><span className='badge bg-warning'>Pending</span></td>
                                            <td>-</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="avatar avatar-lg me-3">
                                                    <EmployeeAvatar />
                                                </div>
                                            </td>
                                            <td>22.04.2024</td>
                                            <td>Annual</td>
                                            <td>23.04.2024</td>
                                            <td>27.04.2024</td>
                                            <td>5</td>
                                            <td><span className='badge bg-warning'>Pending</span></td>
                                            <td>-</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="avatar avatar-lg me-3">
                                                    <EmployeeAvatar />
                                                </div>
                                            </td>
                                            <td>22.04.2024</td>
                                            <td>Annual</td>
                                            <td>23.04.2024</td>
                                            <td>27.04.2024</td>
                                            <td>5</td>
                                            <td><span className="badge bg-success">Active</span></td>
                                            <td>-</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="avatar avatar-lg me-3">
                                                    <EmployeeAvatar />
                                                </div>
                                            </td>
                                            <td>22.04.2024</td>
                                            <td>Annual</td>
                                            <td>23.04.2024</td>
                                            <td>27.04.2024</td>
                                            <td>5</td>
                                            <td><span className='badge bg-warning'>Pending</span></td>
                                            <td>-</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RequestManage