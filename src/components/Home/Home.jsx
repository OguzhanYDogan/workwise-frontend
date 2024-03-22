function Home() {

    return (
        <>
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
                                            <img src="../../assets/static/images/faces/2.jpg" alt="Avatar" />
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
                                    <div className="form-group">
                                        <label htmlFor="name" className="form-label">Name</label>
                                        <input type="text" name="name" id="name" className="form-control" placeholder="Your Name" value="John Doe" readOnly={true} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email" className="form-label">Email</label>
                                        <input type="text" name="email" id="email" className="form-control" placeholder="Your Email" value="john.doe@example.net" readOnly={true} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="phone" className="form-label">Phone</label>
                                        <input type="text" name="phone" id="phone" className="form-control" placeholder="Your Phone" value="083xxxxxxxxx" readOnly={true} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="birthday" className="form-label">Birthday</label>
                                        <input type="date" name="birthday" id="birthday" className="form-control" placeholder="Your Birthday" readOnly={true} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="gender" className="form-label">Gender</label>
                                        <select name="gender" id="gender" className="form-control" disabled >
                                            <option value="male">Male</option>
                                            <option value="female">Female</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <button type="submit" className="btn btn-primary">Save Changes</button>
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

export default Home