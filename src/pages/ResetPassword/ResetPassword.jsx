import React from "react";
import { Link } from "react-router-dom";

export default function ResetPassword() {
  return (
    <div class="auth-wrapper align-items-stretch aut-bg-img">
      <div class="flex-grow-1">
        <div class="h-100 d-md-flex align-items-center auth-side-img">
          <div class="col-sm-10 auth-content w-auto">
            <img
              src="assets/images/auth/auth-logo.png"
              alt=""
              class="img-fluid"
            />
            <h1 class="text-white my-4">Change Password!</h1>
            <h4 class="text-white font-weight-normal">
              Please enter your email and we will send you a password reset code
            </h4>
          </div>
        </div>
        <div class="auth-side-form">
          <div class=" auth-content">
            <img
              src="assets/images/auth/auth-logo-dark.png"
              alt=""
              class="img-fluid mb-4 d-block d-xl-none d-lg-none"
            />
            <h4 class="mb-3 f-w-400">Reset your password</h4>
            <div class="input-group mb-4">
              <input
                type="email"
                class="form-control"
                placeholder="Email address"
              />
            </div>
            <button class="btn btn-block btn-primary mb-4">
              Reset password
            </button>
            <div class="text-center">
              <div class="saprator my-4">
                <span>OR</span>
              </div>
              <button class="btn text-white bg-facebook mb-2 mr-2  wid-40 px-0 hei-40 rounded-circle">
                <i class="fab fa-facebook-f"></i>
              </button>
              <button class="btn text-white bg-googleplus mb-2 mr-2 wid-40 px-0 hei-40 rounded-circle">
                <i class="fab fa-google-plus-g"></i>
              </button>
              <button class="btn text-white bg-twitter mb-2  wid-40 px-0 hei-40 rounded-circle">
                <i class="fab fa-twitter"></i>
              </button>
              <p class="mb-0 text-muted">
                Don???t have an account?{" "}
                <Link to="/signup" class="f-w-400">
                  Signup
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
