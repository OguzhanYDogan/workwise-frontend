import React from 'react'
import brandLight from "../../assets/static/images/logo/workwise.png"
import brandDark from "../../assets/static/images/logo/workwisedark.png"
import loginImage from "../../assets/compiled/png/login.jpg"
import { Link } from 'react-router-dom'

function Login({ theme }) {
    return (
        <>
            <div id="auth">
                <div className="row h-100">
                    <div className="col-lg-5 col-12">
                        <div id="auth-left">
                            <div className="auth-logo">
                                <div className="logo mb-2">
                                    <a href="/"><img src={theme === "light" ? brandLight : brandDark} alt="brand" />
                                        <span className="brand-name fs-1 fw-bold">WorkWise</span></a>
                                </div>
                            </div>
                            <h1 className="auth-title">Log in.</h1>
                            <p className="auth-subtitle mb-5">Log in with your email and password</p>

                            <form action="index.html">
                                <div className="form-group position-relative has-icon-left mb-4">
                                    <input type="text" className="form-control form-control-lg" placeholder="Username" />
                                    <div className="form-control-icon">
                                        <i className="bi bi-person"></i>
                                    </div>
                                </div>
                                <div className="form-group position-relative has-icon-left mb-4">
                                    <input type="password" className="form-control form-control-lg" placeholder="Password" />
                                    <div className="form-control-icon">
                                        <i className="bi bi-shield-lock"></i>
                                    </div>
                                </div>
                                <button className="btn btn-primary btn-block btn-lg shadow-lg mt-3">Log in</button>
                            </form>
                            <div className="text-center mt-5 text-lg fs-4">

                                <p><Link to={"/forgot-password"} className="font-bold">Forgot password?</Link></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7 d-none d-lg-block">
                        <div id="auth-right">
                            <img src={loginImage} className='h-100' alt="" />
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Login