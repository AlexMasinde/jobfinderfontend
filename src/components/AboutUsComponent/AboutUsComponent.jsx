import React from "react";
import { Link } from "react-router-dom";

export default function AboutUs() {
  return (
    <div className="row container mt-4 mx-auto">
      <div className="col-md-12 col-sm-12 text-left px-0">
        <div className="card">
          <div className="text-danger bg-light border-top-alert p-3">
            <h5 className="text-default">About Talent Finder</h5>
          </div>

          <div className="card-body col=xs-12 p-5">
            <blockquote className="blockquote">
              <p className="mb-2">
                Talent Finder is your online stop shop for employers and Job
                seekers.
              </p>
            </blockquote>

            <div className="col-xl-12">
              <div className="row">
                <div className="col-sm-5">
                  <h5 className="text-success">Job Seeker</h5>
                  <hr />

                  <p className="shadow px-3 py-3">
                    It enables job seekers to easily find jobs that match their
                    skill sets , receive frequent notifications of jobs that
                    march their criteria .
                  </p>
                  <Link
                    className="btn btn-success btn-outline btn-sm"
                    to="/signup"
                  >
                    Sign up
                  </Link>
                </div>
                <div className="col-sm-5">
                  <h5 className="text-warning">Employers</h5>
                  <hr />

                  <p className="shadow px-3 py-3">
                    Talent Finder has a talent pool for possible candidates. It
                    provides employers with a platform for posting jobs ,
                    searching for potential employees.
                  </p>
                  <Link className="btn btn-warning btn-sm" to="/signup">
                    Sign up
                  </Link>
                </div>
                <div className="col-sm-4"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
