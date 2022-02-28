import React, { useState } from "react";
import { categories } from "../../utils/jobCategories";
import { validateSubscriptionInformation } from "../../utils/validators";
import axios from "../../api/axios";

export default function SubscribeToNewsLetter() {
  const [category, setCategory] = useState("Acounting");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  function handleEmail(e) {
    if (errors.email || errors.dataError) {
      setErrors({ ...errors, email: "", dataError: "" });
    }
    setEmail(e.target.value);
  }

  function handleCategory(e) {
    if (errors.category) {
      setErrors({ ...errors, category: "" });
    }
    setCategory(e.target.value);
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const { valid, subscriptionInformationErrors } =
      validateSubscriptionInformation(category, email);

    if (!valid) return setErrors(subscriptionInformationErrors);

    try {
      setLoading(true);
      await axios.post(
        "/jobs/subscribe",
        JSON.stringify({ email: email, category: category }),
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setLoading(false);
    } catch (err) {
      setLoading(false);
      if (!err.response) return setErrors({ dataError: "Network Error" });
      setErrors({ dataError: err.response.data.error });
      console.log(err.response.data.error);
    }
  }

  return (
    <div className="col-xl-4 col-md-4 padding-0">
      <div className="card">
        <div className="card-header bg-light border-top-warn  p-3">
          <h5 className="text-default">Subscribe Now</h5>
        </div>
        <span className="alert alert-light">
          Please subscribe to get daily updates of job openings
        </span>
        <div className="card-body col-xs-12">
          <form>
            <div className="form-group form-default col-xs-6">
              <select
                className="custom-select custom-select-sm"
                value={category}
                onChange={handleCategory}
              >
                <option value={null} disabled selected></option>
                {categories.map((category) => {
                  return <option key={category}>{category}</option>;
                })}
              </select>

              {errors?.category ? (
                <label className="float-label mt-3 text-primary">
                  {errors.category}
                </label>
              ) : (
                <label className="float-label mt-3">Category</label>
              )}
            </div>
            <div className="form-group form-default relative">
              <input
                type="text"
                name="footer-email"
                className="form-control"
                onChange={handleEmail}
              />
              <span className="form-bar"></span>

              {errors?.email || errors?.dataError ? (
                <label className="float-label mt-3 text-primary">
                  {errors.email || errors.dataError}
                </label>
              ) : (
                <label className="float-label mt-3">Email</label>
              )}
            </div>
          </form>
          <button
            type="button"
            className="btn btn-warning btn-sm subscribe-button"
            onClick={handleSubmit}
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
            {!loading && "Subscribe"}
          </button>
        </div>
      </div>
    </div>
  );
}
