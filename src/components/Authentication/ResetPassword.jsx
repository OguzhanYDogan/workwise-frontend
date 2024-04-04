import React from 'react'
import brandLight from "../../assets/static/images/logo/workwise.png"
import brandDark from "../../assets/static/images/logo/workwisedark.png"
import loginImage from "../../assets/compiled/png/login.jpg"

function ResetPassword({ theme }) {
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
                            <h1 class="auth-title">Reset Password</h1>
                            <p class="auth-subtitle mb-5">Create a new password to login</p>

                            <form action="index.html">
                                <div class="form-group position-relative has-icon-left mb-4">
                                    <input type="password" class="form-control form-control-xl" placeholder="New Password" />
                                    <div class="form-control-icon">
                                        <i class="bi bi-shield-lock"></i>
                                    </div>
                                </div>
                                <div class="form-group position-relative has-icon-left mb-4">
                                    <input type="password" class="form-control form-control-xl" placeholder="Confirm New Password" />
                                    <div class="form-control-icon">
                                        <i class="bi bi-shield-lock"></i>
                                    </div>
                                </div>
                                <button class="btn btn-primary btn-block btn-lg shadow-lg mt-3">Reset Password</button>
                            </form>
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

export default ResetPassword