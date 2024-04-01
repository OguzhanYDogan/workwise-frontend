import React from 'react'
import CompanyManagerCard from './CompanyManagerCard'

function CompanyManagerList() {
    const number = 7;
    const cards = [];

    for (let i = 1; i < number; i++) {
        cards.push(<CompanyManagerCard key={i} id={i} />);
    }
    return (
        <>
            <div className='row'>
                <h1 className='fw-normal text-center'>Company Managers</h1>
                <hr />
                {cards}
            </div>
        </>
    )
}

export default CompanyManagerList