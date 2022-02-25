import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "../../api/axios";
import { useAuth } from "../../contexts/userContext";
import { validateSignUp } from "../../utils/validators";

export default function SignUpForm() {
  const { setAuth } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("candidate");
  const [userName, setUserName] = useState("");
  const [errors, setErrors] = useState({});

  const userNameRef = useRef();

  const navigate = useNavigate();

  useEffect(() => {
    userNameRef.current.focus();
  }, []);

  function selectUserType(e) {
    const selectedUserType = e.target.value;
    setUserType(selectedUserType);
  }

  function handleUserEmail(e) {
    if (errors.email) {
      setErrors({ ...errors, email: null });
    }
    if (errors.dataError) {
      setErrors({ ...errors, dataError: null });
    }
    const providedEmail = e.target.value;
    setEmail(providedEmail);
  }

  function handleUserPassword(e) {
    if (errors.password) {
      setErrors({ ...errors, password: null });
    }
    const providedPassword = e.target.value;
    setPassword(providedPassword);
  }

  function handleUserName(e) {
    if (errors.userName) {
      setErrors({ ...errors, userName: null });
    }
    const providedUserName = e.target.value;
    setUserName(providedUserName);
  }

  async function handleSignUp(e) {
    e.preventDefault();
    const { valid, signUpErrors } = validateSignUp(email, password, userName);
    if (!valid) {
      return setErrors(signUpErrors);
    }

    try {
      const response = await axios.post(
        "/users/signup",
        JSON.stringify({ email, password, type: userType, userName }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      console.log(response.data);
      const { type, accessToken, userId } = response.data;
      const user = { type, userId, accessToken };
      setAuth(user);
      navigate("/dashboard", { replace: true });
    } catch (err) {
      if (!err.response) return setErrors({ dataError: "Network Error" });
      setErrors({ dataError: err.response.data.error });
      console.log(err.response.data);
    }
  }

  return (
    <div className="auth-wrapper align-items-stretch aut-bg-img">
      <div className="flex-grow-1">
        <div className="h-100 d-md-flex align-items-center auth-side-img">
          <div className="col-sm-10 auth-content w-auto">
            <img
              src="assets/images/auth/auth-logo.png"
              alt=""
              className="img-fluid"
            />
            <h1 className="text-white my-4">SJF Welcomes you!</h1>
            <h4 className="text-white font-weight-normal">
              Signup to your account and be made member of the SJF.
            </h4>
          </div>
        </div>
        <form>
          <div className="auth-side-form">
            <div className=" auth-content">
              <img
                src="assets/images/auth/auth-logo-dark.png"
                alt=""
                className="img-fluid mb-4 d-block d-xl-none d-lg-none"
              />
              <h4 className="mb-3 f-w-400">Sign up</h4> as
              <div className="form-group ">
                <div className="col-sm-10">
                  <select
                    className="form-control"
                    onChange={selectUserType}
                    defaultValue={userType}
                  >
                    <option value="candidate"> Candidate</option>
                    <option value="recruiter">Recruiter</option>
                  </select>
                </div>
                <p>
                  Selection:{" "}
                  {userType.charAt(0).toUpperCase() + userType.slice(1)}
                </p>
              </div>
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Username"
                  ref={userNameRef}
                  onChange={handleUserName}
                />
              </div>
              {errors.userName && (
                <p className="text-danger">{errors.userName}</p>
              )}
              <div className="input-group mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email address"
                  onChange={handleUserEmail}
                />
              </div>
              {errors.email && <p className="text-danger">{errors.email}</p>}
              <div className="input-group mb-4">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  onChange={handleUserPassword}
                />
              </div>
              {errors.password && (
                <p className="text-danger">{errors.password}</p>
              )}
              <div className="custom-control custom-checkbox text-left mb-4 mt-2">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="customCheck1"
                />
                <label for="customCheck1" className="custom-control-label">
                  Send me the <a href="javascript:"> Newsletter</a> weekly.
                </label>
              </div>
              {/* <Link to="/dashboard"> */}
              <button
                className="btn btn-warning btn-block mb-4"
                onClick={handleSignUp}
              >
                Sign up
              </button>
              {errors.dataError && (
                <p className="text-danger">{errors.dataError}</p>
              )}
              {/* </Link> */}
              <div className="text-center">
                <div className="saprator my-4">
                  <span>OR</span>
                </div>
                <button className="btn text-white bg-facebook mb-2 mr-2  wid-40 px-0 hei-40 rounded-circle">
                  <i className="fab fa-facebook-f"></i>
                </button>
                <button className="btn text-white bg-googleplus mb-2 mr-2 wid-40 px-0 hei-40 rounded-circle">
                  <i className="fab fa-google-plus-g"></i>
                </button>
                <button className="btn text-white bg-twitter mb-2  wid-40 px-0 hei-40 rounded-circle">
                  <i className="fab fa-twitter"></i>
                </button>
                <p className="mt-4">
                  Already have an account?{" "}
                  <Link to="/signin" className="f-w-400">
                    Signin
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
