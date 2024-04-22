import React, { useState } from 'react'
import ExpenseTypeSelector from './ExpenseTypeSelector';
import AdvanceTypeSelector from './AdvanceTypeSelector';
import LeaveTypeSelector from './LeaveTypeSelector';
import requestBackground from '../../assets/compiled/svg/form.svg'

function RequestForm() {
    const [requestType, setRequestType] = useState("0");
    const [selectedExpenseType, setSelectedExpenseType] = useState(null);
    const [selectedAdvanceType, setSelectedAdvanceType] = useState(null);
    const [selectedLeaveType, setSelectedLeaveType] = useState(null);

    const handleExpenseRequest = async (e) => {

    }

    return (
        <>
            <h1></h1>
            <div className="row">
                <h1 className='fw-normal text-center'>Request Forms</h1>
                <hr />
                <div className="col-12">
                    <div className="card">
                        <div className="card-body">
                            <h4 className='mb-3'>Please select request type you want to make?</h4>
                            <select id="request-type" className='form-select' onChange={(e) => setRequestType(e.target.value)}>
                                <option value="0">Select a request type</option>
                                <option value="1">Expense Request</option>
                                <option value="2">Advance Request</option>
                                <option value="3">Leave Request</option>
                            </select>
                        </div>
                    </div>
                </div>
                {requestType === "0" &&
                    <div className='text-center'>
                        <img src={requestBackground} style={{ width: "50%", maxWidth: "400px", minWidth: "250px", opacity: ".8" }} alt="" />
                        <p className='fs-5'>Please select the type of request form you'd like to use from the options above.</p>
                    </div>
                }
                {/* Expense Request */}
                {requestType === "1" &&
                    <>
                        <form onSubmit={handleExpenseRequest}>
                            <div className="col-12">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className='mb-3' style={{ fontWeight: "600", fontSize: "1rem" }}>Expense Type</h5>
                                        <ExpenseTypeSelector
                                            selectedExpenseType={selectedExpenseType}
                                            setSelectedExpenseType={setSelectedExpenseType}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="card">
                                    <div className="card-content">
                                        <div className="card-body">
                                            <div className="row">
                                                <div className="col-12">
                                                    <div className='form-group'>
                                                        <label htmlFor="txtAmount" className='form-label'>Amount</label>
                                                        <div className="input-group mb-3">
                                                            <input id='txtAmount' type="number" className='form-control' />
                                                            <select className="form-select" id="inputGroupSelect01" style={{ maxWidth: "4rem" }}>
                                                                <option value="1">₺</option>
                                                                <option value="2">$</option>
                                                                <option value="3">€</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <div className='form-group'>
                                                        <label htmlFor="txtAmount" className='form-label'>File</label>
                                                        <input type="file" className='form-control' accept='.pdf .jpg .jpeg .png' />
                                                    </div>
                                                </div>
                                                <div className="col-12 d-flex justify-content-between mt-3">
                                                    <button type="reset" className="btn btn-light-danger me-1 mb-1 px-3">Reset</button>
                                                    <button type="submit" className="btn btn-primary me-1 mb-1 px-3">Submit</button>{" "}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </>
                }
                {/* Advance Request */}
                {requestType === "2" &&
                    <>
                        <form>
                            <div className="col-12">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className='mb-3' style={{ fontWeight: "600", fontSize: "1rem" }}>Advance Type</h5>
                                        <AdvanceTypeSelector
                                            selectedAdvanceType={selectedAdvanceType}
                                            setSelectedAdvanceType={setSelectedAdvanceType}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <form onSubmit={handleExpenseRequest}>
                                    <div className="card">
                                        <div className="card-content">
                                            <div className="card-body">
                                                <div className="row">
                                                    <div className="col-12">
                                                        <div className='form-group'>
                                                            <label htmlFor="txtAmount" className='form-label'>Amount</label>
                                                            <div className="input-group mb-3">
                                                                <input id='txtAmount' type="number" className='form-control' />
                                                                <select className="form-select" id="inputGroupSelect01" style={{ maxWidth: "4rem" }}>
                                                                    <option value="1">₺</option>
                                                                    <option value="2">$</option>
                                                                    <option value="3">€</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-12">
                                                        <div className='form-group'>
                                                            <label htmlFor="txtAmount" className='form-label'>Description</label>
                                                            <textarea type="text" rows={3} className='form-control' accept='.pdf' />
                                                        </div>
                                                    </div>
                                                    <div className="col-12 d-flex justify-content-between mt-3">
                                                        <button type="reset" className="btn btn-light-danger me-1 mb-1 px-3">Reset</button>
                                                        <button type="submit" className="btn btn-primary me-1 mb-1 px-3">Submit</button>{" "}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </form>
                    </>
                }
                {/* Leave Request */}
                {requestType === "3" &&
                    <>
                        <form>
                            <div className="col-12">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className='mb-3' style={{ fontWeight: "600", fontSize: "1rem" }}>Leave Type</h5>
                                        <LeaveTypeSelector
                                            selectedLeaveType={selectedLeaveType}
                                            setSelectedLeaveType={setSelectedLeaveType}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="card">
                                    <div className="card-body">
                                        <div className='row'>
                                            <div className='col-md-6 col-12'>
                                                <div className='form-group'>
                                                    <label htmlFor="leaveStartDate" className='form-label'>Start Date</label>
                                                    <input id='leaveStartDate' type="date" className='form-control' />
                                                </div>
                                            </div>
                                            <div className='col-md-6 col-12'>
                                                <div className='form-group'>
                                                    <label htmlFor="leaveEndDate" className='form-label'>End Date</label>
                                                    <input id='leaveEndDate' type="date" className='form-control' />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 d-flex justify-content-between mt-3">
                                            <button type="reset" className="btn btn-light-danger me-1 mb-1 px-3">Reset</button>
                                            <button type="submit" className="btn btn-primary me-1 mb-1 px-3">Submit</button>{" "}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </>
                }
            </div>
        </>
    )
}

export default RequestForm