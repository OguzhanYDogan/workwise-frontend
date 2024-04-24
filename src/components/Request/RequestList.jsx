import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { BsFileEarmarkText } from "react-icons/bs";
import { FaTimes } from "react-icons/fa";
import { toast } from 'react-toastify';

function RequestList() {
    const expenseUri = "https://workwiseappi.azurewebsites.net/api/expense/";
    const advanceUri = "https://workwiseappi.azurewebsites.net/api/advance/";
    const expenseTypes = ["Housing", "Travel", "FoodAndDrinks", "Materials", "Education", "Health", "Fuel"];
    const advanceTypes = ["Individual", "Institutional"];
    const currencyType = ["₺", "$", "€"];
    const [expenses, setExpenses] = useState([]);
    const [advances, setAdvances] = useState([]);
    const userId = localStorage.getItem("userId");

    useEffect(() => {
        Get(userId);
    }, [])

    async function Get(id) {
        try {
            const response = await axios.get(expenseUri + id);
            console.log(response);
            console.log(response.data);
            setExpenses(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }

        try {
            const response = await axios.get(advanceUri + id);
            console.log(response);
            console.log(response.data);
            setAdvances(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    const handleExpenseCancel = async (e, index, id) => {
        const formData = new FormData();
        formData.append("expenseId", id);
        e.preventDefault();
        try {
            const response = await axios.put(expenseUri + userId, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            toast.success("Expense request cancelled");
            // Update the approval status in the expenses array
            const updatedExpenses = [...expenses];
            updatedExpenses[index].approvalStatus = "3";
            setExpenses(updatedExpenses);
        } catch (error) {
            toast.error("Something went wrong");
            console.log(error);
        }
    }

    const handleAdvanceCancel = async (e, index, id) => {
        const formData = new FormData();
        formData.append("advanceId", id);
        e.preventDefault();
        try {
            const response = await axios.put(advanceUri + userId, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            toast.success("Advance request cancelled");
            const updatedAdvances = [...advances];
            updatedAdvances[index].approvalStatus = "3";
            setAdvances(updatedAdvances);
        } catch (error) {
            toast.error("Something went wrong");
            console.log(error);
        }
    }

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
                                            <th>Request Date</th>
                                            <th>Expense Type</th>
                                            <th>Amount</th>
                                            <th>Currency</th>
                                            <th>Approval Status</th>
                                            <th>Response Date</th>
                                            <th>File</th>
                                            <th>Cancel</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {expenses.map((expense, index) => (
                                            <tr key={index}>
                                                <td>{new Date(expense.requestDate).toLocaleDateString()}</td>
                                                <td>{expenseTypes[expense.expenseType]}</td>
                                                <td>{expense.amount}</td>
                                                <td>{currencyType[expense.currency]}</td>
                                                <td>
                                                    {
                                                        expense.approvalStatus == "0"
                                                            ? <span className='badge bg-warning'>Pending</span> :
                                                            expense.approvalStatus == "1" ?
                                                                <span className='badge bg-success'>Approved</span>
                                                                : expense.approvalStatus == "2" ?
                                                                    <span className='badge bg-danger'>Rejected</span>
                                                                    : <span className='badge bg-secondary'>Cancelled</span>
                                                    }
                                                </td>
                                                <td>{expense.responseDate ?? "-"}</td>
                                                <td><a href={expense.filePath ?? ""} target='_blank' style={{ fontSize: "1.5rem" }}><BsFileEarmarkText /></a></td>
                                                <td>
                                                    <form onSubmit={(e) => handleExpenseCancel(e, index, expense.id)}>
                                                        <button className='btn text-danger'><FaTimes /></button>
                                                    </form>
                                                </td>
                                            </tr>
                                        ))}
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
                                            <th>Request Date</th>
                                            <th>Advance Type</th>
                                            <th>Amount</th>
                                            <th>Currency</th>
                                            <th>Approval Status</th>
                                            <th>Response Date</th>
                                            <th>Description</th>
                                            <th>Cancel</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {advances.map((advance, index) => (
                                            <tr key={index}>
                                                <td>{new Date(advance.requestDate).toLocaleDateString()}</td>
                                                <td>{advanceTypes[advance.advanceType]}</td>
                                                <td>{advance.amount}</td>
                                                <td>{currencyType[advance.currency]}</td>
                                                <td>{
                                                    advance.approvalStatus == "0"
                                                        ? <span className='badge bg-warning'>Pending</span> :
                                                        advance.approvalStatus == "1" ?
                                                            <span className='badge bg-success'>Approved</span>
                                                            : advance.approvalStatus == "2" ?
                                                                <span className='badge bg-danger'>Rejected</span>
                                                                : <span className='badge bg-secondary'>Cancelled</span>
                                                }
                                                </td>
                                                <td>{advance.responseDate ? new Date(advance.responseDate).toLocaleDateString() : "-"}</td>
                                                <td>{advance.description}</td>
                                                <td>
                                                    <form onSubmit={(e) => handleAdvanceCancel(e, index, advance.id)}>
                                                        <button className='btn text-danger'><FaTimes /></button>
                                                    </form>
                                                </td>
                                            </tr>
                                        ))}
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
                                            <th>Request Date</th>
                                            <th>Leave Type</th>
                                            <th>Start Date</th>
                                            <th>End Date</th>
                                            <th>Number of Days</th>
                                            <th>Approval Status</th>
                                            <th>Response Date</th>
                                            <th>Cancel</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>22.04.2024</td>
                                            <td>Annual</td>
                                            <td>23.04.2024</td>
                                            <td>27.04.2024</td>
                                            <td>5</td>
                                            <td><span className='badge bg-warning'>Pending</span></td>
                                            <td>-</td>
                                            <td>
                                                <form onSubmit={() => handleCancel("1")}>
                                                    <button className='btn text-danger'><FaTimes /></button>
                                                </form>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>22.04.2024</td>
                                            <td>Annual</td>
                                            <td>23.04.2024</td>
                                            <td>27.04.2024</td>
                                            <td>5</td>
                                            <td><span className='badge bg-warning'>Pending</span></td>
                                            <td>-</td>
                                            <td>
                                                <form onSubmit={() => handleCancel("1")}>
                                                    <button className='btn text-danger'><FaTimes /></button>
                                                </form>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>22.04.2024</td>
                                            <td>Annual</td>
                                            <td>23.04.2024</td>
                                            <td>27.04.2024</td>
                                            <td>5</td>
                                            <td><span className="badge bg-success">Active</span></td>
                                            <td>-</td>
                                            <td>
                                                <form onSubmit={() => handleCancel("1")}>
                                                    <button className='btn text-danger'><FaTimes /></button>
                                                </form>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>22.04.2024</td>
                                            <td>Annual</td>
                                            <td>23.04.2024</td>
                                            <td>27.04.2024</td>
                                            <td>5</td>
                                            <td><span className='badge bg-warning'>Pending</span></td>
                                            <td>-</td>
                                            <td>
                                                <form onSubmit={() => handleCancel("1")}>
                                                    <button className='btn text-danger'><FaTimes /></button>
                                                </form>
                                            </td>
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

export default RequestList