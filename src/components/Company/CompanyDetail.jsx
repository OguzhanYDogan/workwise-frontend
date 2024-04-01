import React from 'react'
import photoExample from "../../assets/static/images/samples/building.jpg"
import { Link, useParams } from 'react-router-dom'

function CompanyDetail() {
    const params = useParams();

    return (
        <>
            <div className="row">
                <h1 className='fw-normal text-center'>Company {params.id}</h1>
                <hr />
                <div className="col-12">
                    <div className="card">
                        <div className="card-body">
                            <div className="d-flex justify-content-center align-items-center flex-column">
                                <div className="avatar avatar-2xl">
                                    {/* <img src={info ? info.personalDetail.filePath : ""} alt="Avatar" /> */}
                                    <img src={photoExample} alt="Avatar" />
                                </div>

                                {/* <h3 className="mt-3">{info ? info.personalDetail.firstName + " " + info.personalDetail.lastName : ""}</h3> */}
                                <h3 className="mt-3">HepsiBurada</h3>
                                {/* <p className="text-small">{info ? info.personalDetail.profession : ""}</p> */}
                                <p className="text-small">D-Market Elektronik Hizmetler ve Tic. A.Ş.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12">
                    <div className="card">
                        <div className="card-body">
                            <div className="row mb-4">
                                <div className="col-3 fw-bold">Company Name</div>
                                {/* <div className="col-9 profileInfo">{info ? info.personalDetail.firstName : ""}</div> */}
                                <div className="col-9 profileInfo">Hepsiburada</div>
                            </div>
                            <hr />
                            <div className="row mb-4">
                                <div className="col-3 fw-bold">Company Title</div>
                                {/* <div className="col-9 profileInfo">{info ? info.personalDetail.secondName == "" ? "-" : info.personalDetail.secondName : ""}</div> */}
                                <div className="col-9 profileInfo">D-Market Elektronik Hizmetler ve Tic. A.Ş.</div>
                            </div>
                            <hr />
                            <div className="row mb-4">
                                <div className="col-3 fw-bold">Mersis No</div>
                                {/* <div className="col-9 profileInfo">{info ? info.personalDetail.lastName : ""}</div> */}
                                <div className="col-9 profileInfo">12345</div>
                            </div>
                            <hr />
                            <div className="row mb-4">
                                <div className="col-3 fw-bold">Tax Number</div>
                                <div className="col-9 profileInfo">123456789</div>
                            </div>
                            <hr />
                            <div className="row mb-4">
                                <div className="col-3 fw-bold">Tax Administration</div>
                                <div className="col-9 profileInfo">İstanbul</div>
                            </div>
                            <hr />
                            <div className="row mb-4">
                                <div className="col-3 fw-bold">Phone</div>
                                <div className="col-9 profileInfo">555 444 33 22</div>
                            </div>
                            <hr />
                            <div className="row mb-4">
                                <div className="col-3 fw-bold">Address</div>
                                <div className="col-9 profileInfo">221-B Baker St.</div>
                            </div>
                            <hr />
                            <div className="row mb-4">
                                <div className="col-3 fw-bold">E-mail</div>
                                <div className="col-9 profileInfo">hepsiburada@example.com</div>
                            </div>
                            <hr />
                            <div className="row mb-4">
                                <div className="col-3 fw-bold">Personel Quantity</div>
                                <div className="col-9 profileInfo">124</div>
                            </div>
                            <hr />
                            <div className="row mb-4">
                                <div className="col-3 fw-bold">Founding Year</div>
                                <div className="col-9 profileInfo">1997</div>
                            </div>
                            <hr />
                            <div className="row mb-4">
                                <div className="col-3 fw-bold">Contract Start Date</div>
                                <div className="col-9 profileInfo">20.01.2023</div>
                            </div>
                            <hr />
                            <div className="row mb-4">
                                <div className="col-3 fw-bold">Contract End Date</div>
                                <div className="col-9 profileInfo">-</div>
                            </div>
                            <hr />
                            <div className="row mb-4">
                                <div className="col-3 fw-bold">Status</div>
                                <div className="col-9 profileInfo"><i className="bi bi-check-lg"></i></div>
                            </div>
                            {/* <hr />
                            <div className="d-flex justify-content-between">
                                <Link to="/update" className="btn btn-primary">Update Company</Link>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CompanyDetail