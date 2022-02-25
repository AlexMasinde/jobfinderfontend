import React from "react";

export default function ProfileSettings() {
  return (
    <div className="auth-wrapper bg-main">
      <div className="auth-content">
        <div className="auth-bg">
          <span className="r"></span>
          <span className="r s"></span>
          <span className="r s"></span>
          <span className="r"></span>
        </div>
        <div className="card">
          <div className="card-body text-center">
            <h5 className="mb-4">Profile Settings</h5>
            <img
              src="assets/images/user/avatar-3.jpg"
              className="img-radius mb-4"
              alt="User-Profile-Image"
            />
            <div className="input-group mb-3">
              <input type="text" className="form-control" placeholder="Name" />
            </div>
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="User Name"
              />
            </div>
            <div className="text-left">
              <div className="custom-control custom-radio custom-control-inline">
                <input
                  type="radio"
                  className="custom-control-input"
                  id="customControlValidation2"
                  name="radio-stacked"
                  required
                />
                <label
                  className="custom-control-label"
                  for="customControlValidation2"
                >
                  Private Profile
                </label>
              </div>
              <div className="custom-control custom-radio custom-control-inline mb-3">
                <input
                  type="radio"
                  className="custom-control-input"
                  id="customControlValidation3"
                  name="radio-stacked"
                  required
                />
                <label
                  className="custom-control-label"
                  for="customControlValidation3"
                >
                  Public Profile
                </label>
              </div>
            </div>
            <button className="btn btn-primary mb-4">Register</button>
            <p class="mb-0 text-muted">
              Don’t have an account? <a>Sign up</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
