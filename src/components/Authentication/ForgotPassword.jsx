import React from 'react'
import brandLight from "../../assets/static/images/logo/workwise.png"
import brandDark from "../../assets/static/images/logo/workwisedark.png"
import loginImage from "../../assets/compiled/png/login.jpg"
import { Link } from 'react-router-dom'

function ForgotPassword({ theme }) {
    return (
        <>
            <div id="auth">

                <div class="row h-100">
                    <div class="col-lg-5 col-12">
                        <div id="auth-left">
                            <div class="auth-logo">
                                <div className="logo mb-2">
                                    <a href="/"><img src={theme === "light" ? brandLight : brandDark} alt="brand" />
                                        <span className="brand-name fs-1 fw-bold">WorkWise</span></a>
                                </div>
                            </div>
                            <h1 class="auth-title">Forgot Password</h1>
                            <p class="auth-subtitle mb-5">Input your email and we will send you reset password link.</p>

                            <form action="index.html">
                                <div class="form-group position-relative has-icon-left mb-4">
                                    <input type="email" class="form-control form-control-xl" placeholder="Email" />
                                    <div class="form-control-icon">
                                        <i class="bi bi-envelope"></i>
                                    </div>
                                </div>
                                <Link to={"/reset-password"} className='btn btn-primary btn-block btn-lg shadow-lg mt-3'>Send</Link>
                            </form>
                            <div class="text-center mt-5 text-lg fs-4">
                                <p class='text-gray-600'>Remember your account? <Link to={"/login"} className="font-bold">Log in</Link>.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-7 d-none d-lg-block">
                        <div id="auth-right">
                            <img src={loginImage} className='h-100' alt="" />
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default ForgotPassword