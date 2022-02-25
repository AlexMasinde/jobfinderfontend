import React from "react";

export default function SearchCandidate() {
  return (
    <div className="row container mx-auto mt-4">
      <div className="col-xl-12 col-sm-12">
        <div className="card">
          <div className="card-header bg-light border-top-blue p-3">
            <h5 className="text-blue">Find suitable candidates in minutes</h5>
          </div>
          <form>
            <div className="card-body col=xs-12">
              <div className="form-row m-b-20">
                <div className="col-xs-4 col-md-4">
                  <select
                    className="custom-select custom-select-sm"
                    formControlName="searchLocation"
                  >
                    <option selected value="0">
                      Any
                    </option>
                    <option>Sample Location</option>
                  </select>
                  <p className="card-text">Location</p>
                </div>
                <div className="col-xs-4 col-md-4">
                  <select
                    className="custom-select custom-select-sm"
                    formControlName="jobCategory"
                  >
                    <option selected value="0">
                      Any
                    </option>
                    <option>Sample Category</option>
                  </select>
                  <p className="card-text">Category</p>
                </div>
                <div className="col-xs-4 col-md-4">
                  <input
                    formControlName="searchTextBox"
                    className="form-control form-control-sm"
                    type="text"
                    placeholder="Name..."
                  />
                  <p className="card-text">Name</p>
                </div>
              </div>
              <button type="button" className="btn btn-primary btn-sm">
                Search Now
              </button>
              <button
                type="button"
                className="btn  btn-outline btn-sm text-warning"
                href="#"
              >
                Clear search
              </button>
              <div className="table-responsive p-2 bg-icon">
                {/* <table
                  datatable
                  className="table table-bordered table-sm datatables"
                >
                  <thead>
                    <tr className="small bg-primary">
                      <th>Name</th>
                      <th>Email</th>
                      <th>Telephone</th>
                      <th>Location</th>
                      <th className="text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>John Doe</td>
                      <td>doe@mail.com</td>
                      <td>0725888552</td>
                      <td>Nairobi</td>
                      <td className="text-right">
                        <button
                          type="button"
                          className="btn btn-success btn-outline btn-sm"
                        >
                          View
                        </button>
                      </td>
                    </tr>
                  </tbody>
                  <footer>
                    <tr>
                      <td className="col-sm-12 text-center" colspan="5">
                        <div className="panel panel-default">
                          <h5>
                            Oops ! no results found. Try a different criteria.
                          </h5>
                        </div>
                      </td>
                    </tr>
                  </footer>
                </table> */}
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
