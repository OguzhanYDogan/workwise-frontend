import { useEffect, useState } from "react"
import photo from "../../assets/static/images/faces/2.jpg"
import axios from "axios";

function Profile() {
    const id = "ec8159d1-4388-4fb9-8b51-767b64273296";
    const uri = "https://workwisewebapi.azurewebsites.net/api/user?id="
    const [info, setInfo] = useState(null);

    useEffect(() => {
        Get();
    }, []);

    async function Get() {
        try {
            const response = await axios.get(uri + id);
            if (response.data && response.data.personalDetail) {
                setInfo(response.data);
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    return (
        <>
            <div id="main">

                <div id="app">
                    <div className='container'>
                        <header className="mb-3">
                            <a href="#" className="burger-btn d-block d-xl-none">
                                <i className="bi bi-justify fs-3"></i>
                            </a>
                        </header>
                        <div className="row">
                            <div className="col-12 col-lg-4">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="d-flex justify-content-center align-items-center flex-column">
                                            <div className="avatar avatar-2xl">
                                                <img src={photo} alt="Avatar" />
                                            </div>
                                            <h3 className="mt-3">{info ? info.personalDetail.firstName + " " + info.personalDetail.lastName : ""}</h3>
                                            <p className="text-small">{info ? info.personalDetail.profession : ""}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-lg-8">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="row mb-4">
                                            <div className="col-3 fw-bold">Name : </div>
                                            <div className="col-9 profileInfo">{info ? info.personalDetail.firstName : ""}</div>
                                        </div>
                                        <hr />
                                        <div className="row mb-4">
                                            <div className="col-3 fw-bold">Surname : </div>
                                            <div className="col-9 profileInfo">{info ? info.personalDetail.lastName : ""}</div>
                                        </div>
                                        <hr />
                                        <div className="row mb-4">
                                            <div className="col-3 fw-bold">Email : </div>
                                            <div className="col-9 profileInfo">{info ? info.email : ""}</div>
                                        </div>
                                        <hr />
                                        <div className="row mb-4">
                                            <div className="col-3 fw-bold">Phone : </div>
                                            <div className="col-9 profileInfo">{info ? info.phoneNumber : ""}</div>
                                        </div>
                                        <hr />
                                        <div className="row mb-4">
                                            <div className="col-3 fw-bold">Job : </div>
                                            <div className="col-9 profileInfo">{info ? info.personalDetail.profession : ""}</div>
                                        </div>
                                        <hr />
                                        <div className="row mb-4">
                                            <div className="col-3 fw-bold">Department : </div>
                                            <div className="col-9 profileInfo">{info ? info.personalDetail.department : ""}</div>
                                        </div>
                                        <hr />
                                        <div className="row mb-4">
                                            <div className="col-3 fw-bold">Address : </div>
                                            <div className="col-9 profileInfo">{info ? info.personalDetail.address : ""}</div>
                                        </div>
                                        <div className="d-flex justify-content-between">
                                            <a href="/update" className="btn btn-primary">Update Profile</a>
                                            <a href="/detail" className="btn btn-secondary">Profile Details</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile