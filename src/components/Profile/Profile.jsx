import photo from "../../assets/static/images/faces/2.jpg"

function Profile() {

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

                                            <h3 className="mt-3">John Doe</h3>
                                            <p className="text-small">Junior Software Engineer</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-lg-8">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="row mb-4">
                                            <div className="col-3 fw-bold">Name : </div>
                                            <div className="col-9 profileInfo">John</div>
                                        </div>
                                        <hr />
                                        <div className="row mb-4">
                                            <div className="col-3 fw-bold">Surname : </div>
                                            <div className="col-9 profileInfo">Doe</div>
                                        </div>
                                        <hr />
                                        <div className="row mb-4">
                                            <div className="col-3 fw-bold">Email : </div>
                                            <div className="col-9 profileInfo">johndoe@workwise.com</div>
                                        </div>
                                        <hr />
                                        <div className="row mb-4">
                                            <div className="col-3 fw-bold">Phone : </div>
                                            <div className="col-9 profileInfo">555 444 33 22</div>
                                        </div>
                                        <hr />
                                        <div className="row mb-4">
                                            <div className="col-3 fw-bold">Job : </div>
                                            <div className="col-9 profileInfo">Junior Software Developer</div>
                                        </div>
                                        <hr />
                                        <div className="row mb-4">
                                            <div className="col-3 fw-bold">Department : </div>
                                            <div className="col-9 profileInfo">DevOps</div>
                                        </div>
                                        <hr />
                                        <div className="row mb-4">
                                            <div className="col-3 fw-bold">Address : </div>
                                            <div className="col-9 profileInfo">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
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