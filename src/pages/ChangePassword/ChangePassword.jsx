import React from "react";

export default function ChangePassword() {
  return (
    <div class="auth-wrapper bg-light">
      <div class="blur-bg-images"></div>
      <div class="auth-content">
        <div class="card">
          <form>
            <div class="row align-items-center">
              <div class="col-md-12">
                <div class="card-body">
                  <img
                    src="assets/images/logo-dark.png"
                    alt=""
                    class="img-fluid mb-4"
                  />
                  <h4 class="mb-4 f-w-400">Change your password</h4>
                  <div class="form-group mb-2">
                    <input
                      type="password"
                      class="form-control"
                      formControlName="currentPassword"
                      placeholder="Current Password"
                    />
                    <div class="messages text-danger"></div>
                    <div class="messages text-danger">Wrong password!</div>
                  </div>
                  <div class="form-group mb-2">
                    <input
                      type="password"
                      class="form-control"
                      formControlName="newPassword"
                      placeholder="New Password"
                    />
                    <div class="messages text-danger">
                      new password can't be blank
                    </div>
                  </div>
                  <div class="form-group mb-4">
                    <input
                      type="password"
                      class="form-control"
                      formControlName="confirmPassword"
                      placeholder="Re-Type New Password"
                    />
                    <div class="messages text-danger">
                      confirm password can't be blank
                    </div>
                    <div class="messages text-danger">
                      Password is not the same.
                    </div>
                  </div>
                  <button class="btn btn-block btn-primary mb-4">
                    Change password
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
