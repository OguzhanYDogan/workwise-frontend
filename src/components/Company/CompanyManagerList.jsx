import React, { useEffect, useState } from 'react'
import CompanyManagerCard from './CompanyManagerCard'
import axios from 'axios';

function CompanyManagerList() {
    const [managers, setManagers] = useState([]);
    const uri = "https://workwisewebapi.azurewebsites.net/api/companymanager"

    useEffect(() => {
        Get();
    }, []);

    async function Get() {
        try {
            const response = await axios.get(uri);
            if (response.data) {
                setManagers(response.data);
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    const number = 7;
    const cards = [];

    // for (let i = 1; i < number; i++) {
    //     cards.push(<CompanyManagerCard key={i} id={i} />);
    // }
    return (
        <>
            <div className='row'>
                <h1 className='fw-normal text-center'>Company Managers</h1>
                <hr />
                {managers.map(x => <CompanyManagerCard key={x.id} manager={x} />)}
            </div>
        </>
    )
}

export default CompanyManagerList