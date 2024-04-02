
import React from "react";
import { Link } from "react-router-dom";
import single from "../../assets/compiled/jpg/motorcycle.jpg";

function CompanyCard({ company }) {
    return (
        <>
            <div className="col-xl-4 col-md-6 col-sm-12">
                <Link to={"/company-detail/" + company.id}>
                    <div className="card">
                        <div className="card-content">
                            <img src={company.logo} className="card-img-top img-fluid"
                                alt="singleminded" />
                            <div className="card-body">
                                <h4 className="card-title mb-3 company-name">{company.name}</h4>
                                <p className="card-text muted small mb-3">
                                    <i className="bi bi-briefcase-fill"></i>
                                    <span className="ps-3">
                                        {company.title}
                                    </span>
                                </p>
                                <div className="mb-3">
                                    <i className="bi bi-telephone-fill"></i><span className="ps-3">{company.phoneNumber}</span>
                                </div>
                                <div className="mb-3">
                                    <i className="bi bi-envelope-at-fill"></i><span className="ps-3">{company.email}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        </>
    );
}

export default CompanyCard;