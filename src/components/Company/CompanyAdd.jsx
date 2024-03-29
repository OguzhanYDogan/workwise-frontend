import React, { useState } from 'react'
import photoExample from "../../assets/static/images/samples/building.jpg"

function CompanyAdd() {
    const [selectedImage, setSelectedImage] = useState(null);
    const [photo, setPhoto] = useState("");

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();

        reader.onloadend = () => {
            setSelectedImage(reader.result);
        };

        if (file) {
            reader.readAsDataURL(file);
        }
    };

    return (
        <>
            <div className="row match-height">
                <div className="col-12">
                    <div className="card">
                        <div className="card-body">
                            <div className="d-flex justify-content-center align-items-center mb-3">
                                <div className="avatar avatar-2xl">
                                    <img src={selectedImage ? selectedImage : photoExample} alt="Avatar" />
                                </div>
                            </div>
                            <label htmlFor="picture" className="form-label">Company Logo</label>
                            <input type="file" id="picture" name="picture" className="form-control" onChange={handleFileChange} />
                        </div>
                    </div>
                </div>
                <div className="col-12">
                    <div className="card">
                        <div className="card-header">
                            <h4 className="card-title">Multiple Column</h4>
                        </div>
                        <div className="card-content">
                            <div className="card-body">
                                <form className="form">
                                    <div className="row">
                                        <div className="col-md-6 col-12">
                                            <div className="form-group">
                                                <label htmlFor="company-name-column" className='mb-2'>Company Name</label>
                                                <input type="text" id="company-name-column" className="form-control"
                                                    placeholder="Company Name" name="cname-column" />
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-12">
                                            <div className="form-group">
                                                <label htmlFor="company-title-column" className='mb-2'>Company Title</label>
                                                <input type="text" id="company-title-column" className="form-control"
                                                    placeholder="Company Title" name="ctitle-column" />
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-12">
                                            <div className="form-group">
                                                <label htmlFor="mersis-column" className='mb-2'>Mersis No</label>
                                                <input type="text" id="mersis-column" className="form-control" placeholder="City"
                                                    name="mersis-column" />
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-12">
                                            <div className="form-group">
                                                <label htmlFor="taxno-column" className='mb-2'>Tax No</label>
                                                <input type="text" id="taxno-column" className="form-control"
                                                    name="taxno-column" placeholder="Tax No" />
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-12">
                                            <div className="form-group">
                                                <label htmlFor="taxadmin-column" className='mb-2'>Tax Administration</label>
                                                <input type="text" id="taxadmin-column" className="form-control"
                                                    name="taxadmin-column" placeholder="Tax Administration" />
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-12">
                                            <div className="form-group">
                                                <label htmlFor="phone-column" className='mb-2'>Phone Number</label>
                                                <input type="tel" id="phone-column" className="form-control"
                                                    name="phone-column" placeholder="5xx xxx xx xx" />
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-12">
                                            <div className="form-group">
                                                <label htmlFor="email-id-column" className='mb-2'>Email</label>
                                                <input type="email" id="email-id-column" className="form-control"
                                                    name="email-id-column" placeholder="Email" />
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-12">
                                            <div className="form-group">
                                                <label htmlFor="personelqty-column" className='mb-2'>Personel Quantity</label>
                                                <input type="number" id="personelqty-column" className="form-control"
                                                    name="personelqty-column" placeholder="Personel Quantity" />
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-12">
                                            <div className="form-group">
                                                <label htmlFor="contractstart-column" className='mb-2'>Contract Start Date</label>
                                                <input type="date" min={2000} max={new Date().getDate()} id="contractstart-column" className="form-control"
                                                    name="contractstart-column" placeholder="Contract Start Date" />
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-12">
                                            <div className="form-group">
                                                <label htmlFor="contractend-column" className='mb-2'>Contract End Date</label>
                                                <input type="date" id="contractend-column" className="form-control"
                                                    name="contractend-column" placeholder="Contract End Date" />
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-12">
                                            <div className="form-group">
                                                <label htmlFor="address-column" className='mb-2'>Address</label>
                                                <textarea type="text" rows={4} id="address-column" className="form-control"
                                                    name="address-column" placeholder="Address" />
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-12">
                                            <div className="form-group">
                                                <label htmlFor="founding-column" className='mb-2'>Founding Year</label>
                                                <input type="number" min={578} max={new Date().getFullYear()} id="founding-column" className="form-control"
                                                    name="founding-column" placeholder="Founding Year" />
                                            </div>
                                        </div>
                                        <div className="form-group col-12">
                                            <div className='form-check'>
                                                <div className="checkbox">
                                                    <input type="checkbox" id="checkbox5" className='form-check-input' />
                                                    <label htmlFor="checkbox5">Status</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 d-flex justify-content-between mt-3">
                                            <button type="reset" className="btn btn-light-danger me-1 mb-1 px-3">Reset</button>
                                            <button type="submit" className="btn btn-primary me-1 mb-1 px-3">Submit</button>{" "}
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CompanyAdd