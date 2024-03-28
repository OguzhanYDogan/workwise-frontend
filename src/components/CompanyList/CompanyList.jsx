import { Link } from "react-router-dom";
import CompanyCard from "../CompanyCard/CompanyCard";

function CompanyList() {
    return (
        <>
            <div className="row">
                <h1 className="fw-normal mb-3 text-center">Companies</h1>
                <hr />
                <CompanyCard />
                <CompanyCard />
                <CompanyCard />
                <CompanyCard />
                <CompanyCard />
                <CompanyCard />
            </div>
        </>
    );
}

export default CompanyList;