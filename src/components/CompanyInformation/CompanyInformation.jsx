import React from "react";

export default function CompanyInformation() {
  return (
    <div class="row btn-page container mx-auto mt-4">
      <div class="col-xl-12 col-sm-12">
        <div class="card">
          <div class="card-header bg-light border-top-alert p-3">
            <h5 class="text-primary">Company Search</h5>
          </div>
          <div class="card-body col=xs-12">
            <div class="form-row m-b-20">
              <div class="col-xs-3 col-md-3">
                <input
                  class="form-control form-control-sm"
                  type="text"
                  placeholder="key word..."
                />
                <p class="card-text">Key word</p>
              </div>
              <div class="col-xs-3 col-md-3">
                <select class="custom-select custom-select-sm">
                  <option selected></option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
                <p class="card-text">Country</p>
              </div>
              <div class="col-xs-3 col-md-3">
                <select class="custom-select custom-select-sm">
                  <option selected></option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
                <p class="card-text">Location</p>
              </div>
              <div class="col-xs-3 col-md-3">
                <select class="custom-select custom-select-sm">
                  <option selected></option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
                <p class="card-text">Category</p>
              </div>
            </div>
            <a href="#" class="btn btn-primary btn-sm">
              Search Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
