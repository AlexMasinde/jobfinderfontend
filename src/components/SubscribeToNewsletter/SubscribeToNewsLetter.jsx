import React from "react";
import { categories } from "../../utils/jobCategories";

export default function SubscribeToNewsLetter() {
  return (
    <div className="col-xl-4 col-md-4 padding-0">
      <div className="card">
        <div className="card-header bg-light border-top-warn p-3">
          <h5 className="text-default">Subscribe Now</h5>
        </div>
        <span className="alert alert-light">
          Please subscribe to get daily updates of job openings
        </span>
        <div className="card-body col-xs-12">
          <form>
            <div className="form-group form-default col-xs-6">
              <select className="custom-select custom-select-sm">
                {categories.map((category) => {
                  return <option key={category}>{category}</option>;
                })}
              </select>

              <label className="float-label">Category</label>
            </div>
            <div className="form-group form-default">
              <input
                type="text"
                name="footer-email"
                className="form-control"
                required=""
                formControlName="subscribeEmail"
              />
              <span className="form-bar"></span>
              <label className="float-label">Email</label>
            </div>
          </form>
          <button type="button" className="btn btn-warning btn-sm">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
}
