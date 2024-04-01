import React, { useState } from 'react'
import photoExample from "../../assets/static/images/faces/4.jpg"

function CompanyManagerAdd() {
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
        <div className="row match-height">
            <h1 className='fw-normal text-center'>Create Company Manager</h1>
            <hr />
            <div className="col-12">
                <div className="card">
                    <div className="card-body">
                        <div className="d-flex justify-content-center align-items-center mb-3">
                            <div className="avatar avatar-2xl">
                                <img src={selectedImage ? selectedImage : photoExample} alt="Avatar" />
                            </div>
                        </div>
                        <label htmlFor="picture" className="form-label">Company Manager Photo</label>
                        <input type="file" id="picture" name="picture" className="form-control" onChange={handleFileChange} />
                    </div>
                </div>
            </div>
            <div className="col-12">
                <div className="card">
                    <div className="card-body">
                        <label htmlFor='companyCbo' className='form-label'>Company</label>
                        <select className='form-select'>
                            <option value={1}>Hepsiburada</option>
                            <option value={2}>Trendyol</option>
                            <option value={3}>Getir</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="col-12">
                <div className="card">
                    <div className="card-content">
                        <div className="card-body">
                            <form className="form">
                                <div className="row">
                                    <div className="col-md-6 col-12">
                                        <div className="form-group">
                                            <label htmlFor="fname-column" className='form-label'>First Name</label>
                                            <input type="text" id="fname-column" className="form-control"
                                                placeholder="First Name" name="fname-column" />
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-12">
                                        <div className="form-group">
                                            <label htmlFor="sname-column" className='form-label'>Second Name</label>
                                            <input type="text" id="sname-column" className="form-control"
                                                placeholder="Second Name" name="sname-column" />
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-12">
                                        <div className="form-group">
                                            <label htmlFor="surname-column" className='form-label'>Surname</label>
                                            <input type="text" id="surname-column" className="form-control"
                                                placeholder="Surname" name="surname-column" />
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-12">
                                        <div className="form-group">
                                            <label htmlFor="ssurname-column" className='form-label'>Second Surname</label>
                                            <input type="text" id="ssurname-column" className="form-control"
                                                placeholder="Second Surname" name="ssurname-column" />
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-12">
                                        <div className="form-group">
                                            <label htmlFor="birthdate-column" className='form-label'>Birth Date</label>
                                            <input type="date" id="birthdate-column" className="form-control" name="birthdate-column" />
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-12">
                                        <div className="form-group">
                                            <label htmlFor="birthplace-column" className='form-label'>Birth Place</label>
                                            <input type="text" id="birthplace-column" className="form-control" placeholder="Birth Place"
                                                name="birthplace-column" />
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-12">
                                        <div className="form-group">
                                            <label htmlFor="hiredate-column" className='form-label'>Hire Date</label>
                                            <input type="date" id="hiredate-column" className="form-control" name="hiredate-column" />
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-12">
                                        <div className="form-group">
                                            <label htmlFor="leavedate-column" className='form-label'>Leave Date</label>
                                            <input type="date" id="leavedate-column" className="form-control" name="leavedate-column" />
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-12">
                                        <div className="form-group">
                                            <label htmlFor="title-column" className='form-label'>Title</label>
                                            <input type="text" id="title-column" className="form-control"
                                                name="title-column" placeholder="Title" />
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-12">
                                        <div className="form-group">
                                            <label htmlFor="department-column" className='form-label'>Department</label>
                                            <input type="text" id="department-column" className="form-control"
                                                name="department-column" placeholder="Department" />
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-12">
                                        <div className="form-group">
                                            <label htmlFor="phone-column" className='form-label'>Phone Number</label>
                                            <input type="tel" id="phone-column" className="form-control"
                                                name="phone-column" placeholder="5xx xxx xx xx" />
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-12">
                                        <div className="form-group">
                                            <label htmlFor="email-id-column" className='form-label'>Email</label>
                                            <input type="email" id="email-id-column" className="form-control"
                                                name="email-id-column" placeholder="Email" />
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-group">
                                            <label htmlFor="address-column" className='form-label'>Address</label>
                                            <textarea type="text" rows={4} id="address-column" className="form-control"
                                                name="address-column" placeholder="Address" />
                                        </div>
                                    </div>
                                    <div className="form-group col-12">
                                        <div className='form-check'>
                                            <div className="checkbox">
                                                <input type="checkbox" id="checkbox5" className='form-check-input' />
                                                <label htmlFor="checkbox5" className='form-label'>Status</label>
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
    )
}

export default CompanyManagerAdd