import React, { useEffect, useState } from 'react'
import photoExample from "../../assets/static/images/faces/2.jpg"
import axios from 'axios';

function CompanyManagerAdd() {
    const companyUri = "https://workwisewebapi.azurewebsites.net/api/company";
    const managerUri = "https://workwisewebapi.azurewebsites.net/api/companymanager";
    const [selectedImage, setSelectedImage] = useState(null);
    const [companies, setCompanies] = useState([]);
    const [firstName, setFirstName] = useState("");
    const [secondName, setSecondName] = useState("");
    const [lastName, setLastName] = useState("");
    const [secondLastName, setSecondLastName] = useState("");
    const [address, setAddress] = useState("");
    const [birthDate, setBirthDate] = useState(""); // Varsayılan değer olarak geçerli tarih
    const [placeOfBirth, setPlaceOfBirth] = useState("");
    const [startDate, setStartDate] = useState(""); // Varsayılan değer olarak geçerli tarih
    const [endDate, setEndDate] = useState(""); // Varsayılan değer olarak geçerli tarih
    const [trIdentityNumber, setTrIdentityNumber] = useState("");
    const [profession, setProfession] = useState("");
    const [department, setDepartment] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [picture, setPicture] = useState("");
    const [companyId, setCompanyId] = useState("");
    const [status, setStatus] = useState(0);

    useEffect(() => {
        Get();
    }, []);

    async function Get() {
        try {
            const response = await axios.get(companyUri);
            if (response.data) {
                setCompanies(response.data)
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setPicture(file);
        const reader = new FileReader();

        reader.onloadend = () => {
            setSelectedImage(reader.result);
        };

        if (file) {
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("FirstName", firstName);
        formData.append("SecondName", secondName);
        formData.append("LastName", lastName);
        formData.append("SecondLastName", secondLastName);
        formData.append("Address", address);
        formData.append("BirthDate", birthDate);
        formData.append("PlaceOfBirth", placeOfBirth);
        formData.append("StartDate", startDate);
        formData.append("EndDate", endDate);
        formData.append("Profession", profession);
        formData.append("Department", department);
        formData.append("PhoneNumber", phoneNumber);
        formData.append("Email", email);
        formData.append("Picture", picture);
        formData.append("Status", status);
        formData.append("TRIdentityNumber", trIdentityNumber);

        try {
            const response = await axios.post(managerUri, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            console.log(response);
            alert("Manager Added");
        } catch (error) {
            console.error('Error adding company:', error);
        }
    }

    return (
        <div className="row match-height">
            <h1 className='fw-normal text-center'>Create Company Manager</h1>
            <hr />
            <form className="form" encType='multipart/form-data' onSubmit={handleSubmit}>
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
                            <select className='form-select' value={companyId} onChange={(e) => setCompanyId(e.target.value)}>
                                {companies.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
                            </select>
                        </div>
                    </div>
                </div>
                <div className="col-12">
                    <div className="card">
                        <div className="card-content">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-md-6 col-12">
                                        <div className="form-group">
                                            <label htmlFor="fname-column" className='form-label'>First Name</label>
                                            <input type="text" id="fname-column" className="form-control"
                                                placeholder="First Name" name="fname-column" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-12">
                                        <div className="form-group">
                                            <label htmlFor="sname-column" className='form-label'>Second Name</label>
                                            <input type="text" id="sname-column" className="form-control"
                                                placeholder="Second Name" name="sname-column" value={secondName} onChange={(e) => setSecondName(e.target.value)} />
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-12">
                                        <div className="form-group">
                                            <label htmlFor="surname-column" className='form-label'>Surname</label>
                                            <input type="text" id="surname-column" className="form-control"
                                                placeholder="Surname" name="surname-column" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-12">
                                        <div className="form-group">
                                            <label htmlFor="ssurname-column" className='form-label'>Second Surname</label>
                                            <input type="text" id="ssurname-column" className="form-control"
                                                placeholder="Second Surname" name="ssurname-column" value={secondLastName} onChange={(e) => setSecondLastName(e.target.value)} />
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-12">
                                        <div className="form-group">
                                            <label htmlFor="id-column" className='form-label'>Identity Number</label>
                                            <input type="text" id="id-column" className="form-control"
                                                placeholder="XXXXXXXXXXX" name="id-column" value={trIdentityNumber} onChange={(e) => setTrIdentityNumber(e.target.value)} />
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-12">
                                        <div className="form-group">
                                            <label htmlFor="birthdate-column" className='form-label'>Birth Date</label>
                                            <input type="date" id="birthdate-column" className="form-control" name="birthdate-column" value={birthDate} onChange={(e) => setBirthDate(e.target.value)} />
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-12">
                                        <div className="form-group">
                                            <label htmlFor="birthplace-column" className='form-label'>Birth Place</label>
                                            <input type="text" id="birthplace-column" className="form-control" placeholder="Birth Place"
                                                name="birthplace-column" value={placeOfBirth} onChange={(e) => setPlaceOfBirth(e.target.value)} />
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-12">
                                        <div className="form-group">
                                            <label htmlFor="title-column" className='form-label'>Title</label>
                                            <input type="text" id="title-column" className="form-control"
                                                name="title-column" placeholder="Title" value={profession} onChange={(e) => setProfession(e.target.value)} />
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-12">
                                        <div className="form-group">
                                            <label htmlFor="hiredate-column" className='form-label'>Hire Date</label>
                                            <input type="date" id="hiredate-column" className="form-control" name="hiredate-column" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-12">
                                        <div className="form-group">
                                            <label htmlFor="leavedate-column" className='form-label'>Leave Date</label>
                                            <input type="date" id="leavedate-column" className="form-control" name="leavedate-column" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-12">
                                        <div className="form-group">
                                            <label htmlFor="department-column" className='form-label'>Department</label>
                                            <input type="text" id="department-column" className="form-control"
                                                name="department-column" placeholder="Department" value={department} onChange={(e) => setDepartment(e.target.value)} />
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-12">
                                        <div className="form-group">
                                            <label htmlFor="phone-column" className='form-label'>Phone Number</label>
                                            <input type="tel" id="phone-column" className="form-control"
                                                name="phone-column" placeholder="05xx xxx xx xx" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-12">
                                        <div className="form-group">
                                            <label htmlFor="email-id-column" className='form-label'>Email</label>
                                            <input type="email" id="email-id-column" className="form-control"
                                                name="email-id-column" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                                        </div>
                                    </div>
                                    <div className="form-group col-12">
                                        <div className='form-check'>
                                            <div className="checkbox">
                                                <input type="checkbox" id="checkbox5" className='form-check-input' value={status} onChange={(e) => setStatus(e.target.value ? 1 : 0)} />
                                                <label htmlFor="checkbox5">Status</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-group">
                                            <label htmlFor="address-column" className='form-label'>Address</label>
                                            <textarea type="text" rows={4} id="address-column" className="form-control"
                                                name="address-column" placeholder="Address" value={address} onChange={(e) => setAddress(e.target.value)} />
                                        </div>
                                    </div>
                                    <div className="col-12 d-flex justify-content-between mt-3">
                                        <button type="reset" className="btn btn-light-danger me-1 mb-1 px-3">Reset</button>
                                        <button type="submit" className="btn btn-primary me-1 mb-1 px-3">Submit</button>{" "}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default CompanyManagerAdd