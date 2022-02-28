import React, { useState } from "react";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import { validateChangePassword } from "../../utils/validators";
import { useNavigate } from "react-router-dom";
export default function ChangePassword() {
  const [currentPassword, setCurrentPassowrd] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const axiosPrivate = useAxiosPrivate();

  function handleCurrentPassword(e) {
    if (errors.currentPassword) {
      setErrors({ ...errors, currentPassword: null });
    }
    const providedCurrentPassword = e.target.value;
    setCurrentPassowrd(providedCurrentPassword);
  }

  function handleNewPassword(e) {
    if (errors.newPassword) {
      setErrors({ ...errors, newPassword: null });
    }
    const providedNewPassword = e.target.value;
    setNewPassword(providedNewPassword);
  }

  function handleConfirmPassword(e) {
    if (errors.confirmPassword) {
      setErrors({ ...errors, confirmPassword: null });
    }
    const providedConfirmPassword = e.target.value;
    setConfirmPassword(providedConfirmPassword);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const { valid, changePasswordErrors } = validateChangePassword(
      currentPassword,
      newPassword,
      confirmPassword
    );
    if (!valid) return setErrors(changePasswordErrors);

    try {
      setLoading(true);
      setErrors({});

      await axiosPrivate.post(
        "/users/new-password",
        JSON.stringify({
          currentPassword,
          newPassword,
        })
      );
      setLoading(false);
      navigate("/dashboard");
    } catch (err) {
      setLoading(false);
      if (err.response.status === 400 || err.response.status === 404) {
        setErrors({ ...errors, currentPassword: err.response.data.error });
      }
      console.log(err);
    }
  }
  return (
    <div>
      <div className="change-password bg-light mx-auto mt-5">
        <div className="blur-bg-images"></div>
        <div className="auth-content">
          <div className="card">
            <form>
              <div className="row align-items-center">
                <div className="col-md-12">
                  <div className="card-body">
                    <img
                      src="assets/images/logo-dark.png"
                      alt=""
                      className="img-fluid mb-4"
                    />
                    <h4 className="mb-4 f-w-400">Change your password</h4>
                    <div className="form-group mb-2">
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Current Password"
                        onChange={handleCurrentPassword}
                      />
                      <div className="messages text-danger"></div>
                      {errors.currentPassword && (
                        <div className="messages text-danger">
                          {errors.currentPassword}
                        </div>
                      )}
                    </div>
                    <div className="form-group mb-2">
                      <input
                        type="password"
                        className="form-control"
                        onChange={handleNewPassword}
                        placeholder="New Password"
                      />
                      {errors.newPassword && (
                        <div className="messages text-danger">
                          {errors.newPassword}
                        </div>
                      )}
                    </div>
                    <div className="form-group mb-4">
                      <input
                        type="password"
                        className="form-control"
                        onChange={handleConfirmPassword}
                        placeholder="Re-Type New Password"
                      />

                      {errors.confirmPassword && (
                        <div className="messages text-danger">
                          {errors.confirmPassword}
                        </div>
                      )}
                    </div>
                    <button
                      className="btn btn-block btn-primary mb-4"
                      onClick={handleSubmit}
                      disabled={loading}
                    >
                      {loading && (
                        <div class="lds-spinner">
                          <div></div>
                          <div></div>
                          <div></div>
                          <div></div>
                          <div></div>
                          <div></div>
                          <div></div>
                          <div></div>
                          <div></div>
                          <div></div>
                          <div></div>
                          <div></div>
                        </div>
                      )}
                      {!loading && "Change Password"}
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
