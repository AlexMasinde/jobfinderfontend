import React from "react";
import { Link } from "react-router-dom";
import SearchComponent from "../SearchComponent/SearchComponent";
import SubscribeToNewsLetter from "../SubscribeToNewsletter/SubscribeToNewsLetter";

export default function UserDashboard() {
  return (
    <div className="row btn-page mx-auto px-0 container">
      <div className="col-xl-12 col-sm-12 px-0">
        <div className="card px-0">
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
          <div>
            <div className="d-flex justify-content-between mt-3 px-2">
              <div className="mr-1">
                <SearchComponent />
              </div>

              <SubscribeToNewsLetter />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
