import React from 'react'
import { useParams } from 'react-router-dom'

function CompanyDetail() {
    const params = useParams();

    return (
        <>
            <h1>{params.id}</h1>
        </>
    )
}

export default CompanyDetail