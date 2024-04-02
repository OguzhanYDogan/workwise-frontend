import React from 'react'
import examplePhoto from "../../assets/static/images/faces/1.jpg"
import { Link } from 'react-router-dom'

function CompanyManagerCard({ manager }) {
    return (
        <div className="col-md-10 col-lg-9 mx-auto">
            {/* <Link to={"/company-detail/"}> */}
            <div className="card overflow-hidden">
                <div className="card-content">
                    <div className="card-body row p-0">
                        <div className="col-sm-5 d-flex justify-content-center align-items-center">
                            <img src={manager.personalDetail.filePath} className="w-100 h-100 object-fit-cover ratio ratio-4x3"
                                alt="singleminded" />
                        </div>
                        <div className='col-sm-7 d-flex'>
                            <div className='mx-auto my-auto p-4'>
                                <h3 className='fw-normal mb-4 company-name'>{manager.personalDetail.firstName + " " + manager.personalDetail.secondName + " " + manager.personalDetail.lastName + " " + manager.personalDetail.secondLastName}</h3>
                                <div className="mb-3">
                                    <i className="bi bi-building-fill"></i><span className="ps-3">{manager.company.name}</span>
                                </div>
                                <div className="mb-3">
                                    <i className="bi bi-telephone-fill"></i><span className="ps-3">{manager.phoneNumber}</span>
                                </div>
                                <div className="mb-3">
                                    <i className="bi bi-envelope-at-fill"></i><span className="ps-3">{manager.email}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* </Link> */}
        </div>
    )
}

export default CompanyManagerCard