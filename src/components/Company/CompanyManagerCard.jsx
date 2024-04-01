import React from 'react'
import examplePhoto from "../../assets/static/images/faces/1.jpg"
import { Link } from 'react-router-dom'

function CompanyManagerCard({ id }) {
    return (
        <div className="col-lg-6">
            {/* <Link to={"/company-detail/"}> */}
            <div className="card overflow-hidden">
                <div className="card-content">
                    <div className="card-body row p-0">
                        <div className="col-sm-5 d-flex justify-content-center align-items-center">
                            <img src={examplePhoto} className="w-100 h-100 object-fit-cover ratio ratio-4x3"
                                alt="singleminded" />
                        </div>
                        <div className='col-sm-7 p-5'>
                            <h3 className='fw-normal mb-3 company-name'>Jane Doe {id}</h3>
                            <div className="mb-3">
                                <i class="bi bi-building-fill"></i><span className="ps-3">Hepsiburada</span>
                            </div>
                            <div className="mb-3">
                                <i className="bi bi-telephone-fill"></i><span className="ps-3">555 444 33 22</span>
                            </div>
                            <div className="mb-3">
                                <i className="bi bi-envelope-at-fill"></i><span className="ps-3">example@admin.com</span>
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