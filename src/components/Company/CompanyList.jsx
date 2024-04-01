import React from "react";
import CompanyCard from "./CompanyCard";

function CompanyList() {
    const number = 7;
    const cards = [];

    for (let i = 1; i < number; i++) {
        cards.push(<CompanyCard key={i} id={i} />);
    }
    return (
        <>
            <div className="row">
                <h1 className='fw-normal text-center'>Company List</h1>
                <hr />
                {cards}
            </div>
        </>
    );
}

export default CompanyList;