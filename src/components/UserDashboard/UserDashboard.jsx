import React from "react";
import { Link } from "react-router-dom";

export default function UserDashboard() {
  return (
    <div className="row btn-page container mx-auto">
      <div className="col-xl-12 col-sm-12">
        <div className="card">
          <div className="card-header bg-light border-top-blue p-3">
            <h5 className="text-color-blue">Dashboard</h5>
          </div>
          <div className="row justify-content-center p-10">
            <div className="col-xs-4 col-md-4">
              <Link to="/inbox">
                <div className="dashboard-card py-3">
                  <div className="risk-rate">
                    <span className="dashboard-card-icon-container dashboard-card-icon-container-messages">
                      <b>
                        <i className="feather icon-mail"></i>
                      </b>
                    </span>
                  </div>
                  <h6 className="m-b-10 m-t-10">Messages</h6>
                </div>
              </Link>
            </div>
            <div className="col-xs-4 col-md-4">
              <Link to="/profile">
                <div className="dashboard-card py-3">
                  <div className="risk-rate">
                    <span className="dashboard-card-icon-container dashboard-card-icon-container-profile">
                      <b>
                        <i className="fas fa-wrench"></i>
                      </b>
                    </span>
                  </div>
                  <h6 className="m-b-10 m-t-10">Profile</h6>
                </div>
              </Link>
            </div>
            <div className="col-xs-4 col-md-4">
              <Link to="/jobsearch">
                <div className="dashboard-card py-3">
                  <div className="risk-rate">
                    <span className="dashboard-card-icon-container dashboard-card-icon-container-jobs">
                      <b>
                        <i className="feather icon-search"></i>
                      </b>
                    </span>
                  </div>
                  <h6 className="m-b-10 m-t-10">Search for jobs</h6>
                </div>
              </Link>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-8 col-sm-8">
              <div className="card">
                <div className="card-header bg-light border-top-alert p-3">
                  <h5 className="text-primary">Start Job Search</h5>
                </div>
                <form>
                  <div className="card-body col=xs-12">
                    <div className="form-row m-b-20">
                      <div className="col-xs-3 col-md-3">
                        <input
                          formControlName="jobSearchTextBox"
                          className="form-control form-control-sm"
                          type="text"
                          placeholder="key word..."
                        />
                        <p className="card-text">Key word</p>
                      </div>
                      <div className="col-xs-3 col-md-3">
                        <select
                          className="custom-select custom-select-sm"
                          formControlName="jobSearchCountry"
                        >
                          <option selected value="0">
                            Any
                          </option>
                          <option>Test Country</option>
                        </select>
                        <p className="card-text">Country</p>
                      </div>
                      <div className="col-xs-3 col-md-3">
                        <select
                          className="custom-select custom-select-sm"
                          formControlName="jobSearchLocation"
                        >
                          <option selected value="0">
                            Any
                          </option>
                          <option>Test Location</option>
                        </select>
                        <p className="card-text">Location</p>
                      </div>
                      <div className="col-xs-3 col-md-3">
                        <select
                          className="custom-select custom-select-sm"
                          formControlName="jobSearchCategory"
                        >
                          <option selected value="0">
                            Any
                          </option>
                          <option>Test Category</option>
                        </select>
                        <p className="card-text">Category</p>
                      </div>
                    </div>
                    <button type="button" className="btn btn-primary btn-sm">
                      Search Now
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline btn-sm text-warning"
                      href="#"
                    >
                      Clear search
                    </button>

                    <div className="table-responsive p-2 bg-icon">
                      <table
                        datatable
                        className="table table-bordered table-sm datatables"
                      >
                        <thead>
                          <tr className="small bg-primary">
                            <th>Name</th>
                            <th>Category</th>
                            <th>Status</th>
                            <th>Location</th>
                            <th>Deadline</th>
                            <th className="text-right">Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Cleaner</td>
                            <td>Casual</td>
                            <td>Pending</td>
                            <td>Nairobi</td>
                            <td>Janury 2023</td>
                            <td className="text-right">
                              <button
                                type="button"
                                className="btn btn-success btn-outline btn-sm"
                                href="#"
                              >
                                Apply
                              </button>
                            </td>
                          </tr>
                        </tbody>
                        <footer></footer>
                      </table>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-xl-4 col-sm-4">
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
                      <select
                        className="custom-select custom-select-sm"
                        formControlName="subscribeCategory"
                      >
                        <option selected value="0">
                          Any
                        </option>
                        <option>Casual</option>
                      </select>

                      <label className="float-label">Category</label>
                    </div>
                  </form>
                  <button type="button" className="btn btn-warning btn-sm">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
