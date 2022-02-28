import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import axios from "../../api/axios";
import { useAuth } from "../../contexts/userContext";
import { validateLogin } from "../../utils/validators";

export default function LoginPage() {
  const { setAuth } = useAuth();

  const emailRef = useRef();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/dashboard";

  useEffect(() => {
    emailRef.current.focus();
  }, []);

  function handleUserEmail(e) {
    setErrors({ ...errors, email: "" });
    const providedEmail = e.target.value;
    setEmail(providedEmail);
  }

  function handleUserPassword(e) {
    setErrors({ ...errors, password: "" });
    const providedPassword = e.target.value;
    setPassword(providedPassword);
  }

  async function handleLogin(e) {
    e.preventDefault();
    const { valid, loginErrors } = validateLogin(email, password);

    if (!valid) return setErrors(loginErrors);

    try {
      setLoading(true);
      setErrors({});
      const response = await axios.post(
        "/users/login",
        JSON.stringify({ email, password }),
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      const { type, accessToken, userId } = response.data;
      const user = { type, userId, accessToken };
      setAuth(user);
      setLoading(false);
      navigate(from, { replace: true });
    } catch (err) {
      setLoading(false);
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
            <h1 className="text-white my-4">Welcome Back!</h1>
            <h4 className="text-white font-weight-normal">
              Signin to your account and get to explore Talent Finder.
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
              <h3 className="mb-4 f-w-400">Signin</h3>
              <div className="input-group mb-3">
                <input
                  ref={emailRef}
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
                <label className="custom-control-label" for="customCheck1">
                  Save credentials.
                </label>
              </div>

              <button
                className="btn btn-block btn-primary mb-0"
                disabled={loading}
                onClick={handleLogin}
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
                {!loading && "Signin"}
              </button>
              {errors.dataError && (
                <p className="text-danger">{errors.dataError}</p>
              )}
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
                <p className="mb-2 text-muted">
                  Forgot password?{" "}
                  <Link to="/reset" className="f-w-400">
                    Reset
                  </Link>
                </p>
                <p className="mb-0 text-muted">
                  Don’t have an account?{" "}
                  <Link to="/signup" className="f-w-400">
                    Signup
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
