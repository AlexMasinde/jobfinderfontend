import React from "react";
import { Link } from "react-router-dom";

export default function MessageInbox() {
  return (
    <div className="row container mx-auto mt-4">
      <div className="col-sm-12">
        <div className="card email-card border-top-blue">
          <div className="card-header">
            <div className="mail-header">
              <div className="row align-items-center">
                {/* <!-- [ inbox-left section ] start --> */}
                <div className="col-xl-2 col-md-3">
                  <a href="javascript:" className="b-brand">
                    <div className="b-bg">JF</div>
                    <span className="b-title text-muted">Messages</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="card-body">
            <div className="mail-body">
              <div className="row">
                {/* <!-- [ inbox-left section ] start --> */}
                <div className="col-xl-2 col-md-3">
                  <div className="mb-3">
                    <Link
                      to="/contact"
                      className="btn waves-effect waves-light btn-rounded btn-outline-primary"
                    >
                      + Compose
                    </Link>
                  </div>
                  <ul
                    className="mb-2 nav nav-tab flex-column nav-pills"
                    id="v-pills-tab"
                    role="tablist"
                    aria-orientation="vertical"
                  >
                    <li className="nav-item mail-section">
                      <a
                        className="nav-link text-left"
                        data-toggle="pill"
                        href="javascript:"
                        role="tab"
                        aria-controls="v-pills-home"
                        aria-selected="false"
                      >
                        <span>
                          <i className="feather icon-inbox"></i> Inbox
                        </span>
                        <span className="float-right">10</span>
                      </a>
                    </li>
                    <li className="nav-item mail-section">
                      <a
                        className="nav-link text-left"
                        id="v-pills-starred-tab"
                        data-toggle="pill"
                        href="javascript:"
                        role="tab"
                      >
                        <span>
                          <i className="fas fa-paper-plane"></i> Sent
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
                {/* <!-- [ inbox-left section ] end -->
              <!-- [ inbox-right section ] start --> */}
                <div className="col-xl-10 col-md-9 inbox-right">
                  <div className="tab-content p-0" id="v-pills-tabContent">
                    <div
                      className="tab-pane fade show active"
                      id="v-pills-home"
                      role="tabpanel"
                      aria-labelledby="v-pills-home-tab"
                    >
                      <ul
                        className="nav nav-pills nav-fill mb-0"
                        id="pills-tab"
                        role="tablist"
                      >
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            id="pills-primary-tab"
                            data-toggle="pill"
                            href="javascript:"
                            role="tab"
                            aria-controls="pills-primary"
                            aria-selected="true"
                          >
                            <span>
                              <i className="fas fa-wrench"></i>Job Subscriptions
                            </span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            id="pills-social-tab"
                            data-toggle="pill"
                            href="javascript:"
                            role="tab"
                            aria-controls="pills-social"
                            aria-selected="false"
                          >
                            <span>
                              <i className="fas fa-clipboard"></i>Job
                              Applications
                            </span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link disabled"
                            data-toggle="pill"
                            href="javascript:"
                            role="tab"
                            aria-controls="pills-Promotion"
                            aria-selected="false"
                          >
                            <span className="hidden">
                              <i className="feather icon-tag"></i>Promotions
                            </span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link disabled"
                            data-toggle="pill"
                            href="javascript:"
                            role="tab"
                            aria-controls="pills-update"
                            aria-selected="false"
                          >
                            <span className="">
                              <i className="feather icon-upload-cloud"></i>
                              Updates
                            </span>
                          </a>
                        </li>
                      </ul>
                      <div className="tab-content" id="pills-tabContent">
                        <div
                          className="tab-pane fade show"
                          id="pills-primary"
                          role="tabpanel"
                          aria-labelledby="pills-primary-tab"
                        >
                          <div className="mail-body-content table-responsive">
                            <table className="table">
                              <tbody>
                                <tr>
                                  <td>
                                    <div className="check-star">
                                      <div className="form-group d-inline">
                                        <div className="checkbox checkbox-primary checkbox-fill d-inline">
                                          <input
                                            type="checkbox"
                                            name="checkbox-s-in-1"
                                            id="checkbox-s-infill-1"
                                          />
                                          <label
                                            for="checkbox-s-infill-1"
                                            className="cr"
                                          ></label>
                                        </div>
                                      </div>
                                      <a href="javascript:">
                                        <i className="feather icon-star ml-2"></i>
                                      </a>
                                    </div>
                                  </td>
                                  <td>
                                    <a className="email-name waves-effect">
                                      Job Finder
                                    </a>
                                  </td>
                                  <td>
                                    <a className="email-name waves-effect">
                                      You posted a job
                                    </a>
                                  </td>
                                  <td className="email-time">Today 10:15</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                        <div
                          className="tab-pane fade show"
                          id="pills-social"
                          role="tabpanel"
                          aria-labelledby="pills-social-tab"
                        >
                          <div className="mail-body-content table-responsive">
                            <table className="table">
                              <tbody>
                                <tr>
                                  <td>
                                    <div className="check-star">
                                      <div className="form-group d-inline">
                                        <div className="checkbox checkbox-primary checkbox-fill d-inline">
                                          <input
                                            type="checkbox"
                                            name="checkbox-s-in-1"
                                            id="checkbox-s-infill-1"
                                          />
                                          <label
                                            for="checkbox-s-infill-1"
                                            className="cr"
                                          ></label>
                                        </div>
                                      </div>
                                      <a href="javascript:">
                                        <i className="feather icon-star ml-2"></i>
                                      </a>
                                    </div>
                                  </td>
                                  <td>
                                    <a className="email-name waves-effect">
                                      Job Finder
                                    </a>
                                  </td>
                                  <td>
                                    <a className="email-name waves-effect">
                                      You posted a job
                                    </a>
                                  </td>
                                  <td className="email-time">jan 12 2022</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                        <div
                          className="tab-pane fade show "
                          id="pills-Promotion"
                          role="tabpanel"
                          aria-labelledby="pills-Promotion-tab"
                        >
                          <div className="mail-body-content table-responsive">
                            <table className="table">
                              <tbody>
                                <tr>
                                  <td>
                                    <div className="check-star">
                                      <div className="form-group d-inline">
                                        <div className="checkbox checkbox-primary checkbox-fill d-inline">
                                          <input
                                            type="checkbox"
                                            name="checkbox-s-in-1"
                                            id="checkbox-s-infill-1"
                                          />
                                          <label
                                            for="checkbox-s-infill-1"
                                            className="cr"
                                          ></label>
                                        </div>
                                      </div>
                                      <a href="javascript:">
                                        <i className="feather icon-star ml-2"></i>
                                      </a>
                                    </div>
                                  </td>
                                  <td>
                                    <a className="email-name waves-effect">
                                      Job Finder
                                    </a>
                                  </td>
                                  <td>
                                    <a className="email-name waves-effect">
                                      You posted a job
                                    </a>
                                  </td>
                                  <td className="email-time">jan 12 2022</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                        <div
                          className="tab-pane fade active show"
                          id="pills-update"
                          role="tabpanel"
                          aria-labelledby="pills-update-tab"
                        >
                          <div className="mail-body-content table-responsive">
                            <table className="table">
                              <tbody>
                                <tr className="unread">
                                  <td>
                                    <div className="check-star">
                                      <div className="form-group d-inline">
                                        <div className="checkbox checkbox-primary checkbox-fill d-inline">
                                          <input
                                            type="checkbox"
                                            name="checkbox-s-in-22"
                                            id="checkbox-s-infill-22"
                                          />
                                          <label
                                            for="checkbox-s-infill-22"
                                            className="cr"
                                          ></label>
                                        </div>
                                      </div>
                                      <a href="javascript:">
                                        <i className="feather icon-star-on text-c-yellow ml-2"></i>
                                      </a>
                                    </div>
                                  </td>
                                  <td>
                                    <a className="email-name waves-effect">
                                      Google Inc
                                    </a>
                                  </td>
                                  <td>
                                    <a className="email-name waves-effect">
                                      Lorem ipsum dolor sit amet, consectetuer
                                    </a>
                                    <div>
                                      <a
                                        href="javascript:"
                                        className="mail-attach"
                                      >
                                        <i className="feather icon-image mr-2"></i>
                                        user.png
                                      </a>
                                      <a
                                        href="javascript:"
                                        className="mail-attach ml-2"
                                      >
                                        <i className="feather icon-file-text mr-2"></i>
                                        file.doc
                                      </a>
                                    </div>
                                  </td>

                                  <td className="email-time">12:01 AM</td>
                                </tr>
                                <tr className="unread">
                                  <td>
                                    <div className="check-star">
                                      <div className="form-group d-inline">
                                        <div className="checkbox checkbox-primary checkbox-fill d-inline">
                                          <input
                                            type="checkbox"
                                            name="checkbox-s-in-23"
                                            id="checkbox-s-infill-23"
                                          />
                                          <label
                                            for="checkbox-s-infill-23"
                                            className="cr"
                                          ></label>
                                        </div>
                                      </div>
                                      <a href="javascript:">
                                        <i className="feather icon-star ml-2"></i>
                                      </a>
                                    </div>
                                  </td>
                                  <td>
                                    <a className="email-name waves-effect">
                                      John Doe
                                    </a>
                                  </td>
                                  <td>
                                    <a className="email-name waves-effect">
                                      Coming Up Next Week
                                    </a>
                                  </td>
                                  <td className="email-time">13:02 PM</td>
                                </tr>
                                <tr className="unread">
                                  <td>
                                    <div className="check-star">
                                      <div className="form-group d-inline">
                                        <div className="checkbox checkbox-primary checkbox-fill d-inline">
                                          <input
                                            type="checkbox"
                                            name="checkbox-s-in-24"
                                            id="checkbox-s-infill-24"
                                          />
                                          <label
                                            for="checkbox-s-infill-24"
                                            className="cr"
                                          ></label>
                                        </div>
                                      </div>
                                      <a href="javascript:">
                                        <i className="feather icon-star ml-2"></i>
                                      </a>
                                    </div>
                                  </td>
                                  <td>
                                    <a className="email-name waves-effect">
                                      Sara Soudein
                                    </a>
                                  </td>
                                  <td>
                                    <a className="email-name waves-effect">
                                      SVG new updates comes for you
                                    </a>
                                  </td>
                                  <td className="email-time">00:05 AM</td>
                                </tr>
                                <tr className="unread">
                                  <td>
                                    <div className="check-star">
                                      <div className="form-group d-inline">
                                        <div className="checkbox checkbox-primary checkbox-fill d-inline">
                                          <input
                                            type="checkbox"
                                            name="checkbox-s-in-25"
                                            id="checkbox-s-infill-25"
                                          />
                                          <label
                                            for="checkbox-s-infill-25"
                                            className="cr"
                                          ></label>
                                        </div>
                                      </div>
                                      <a href="javascript:">
                                        <i className="feather icon-star ml-2"></i>
                                      </a>
                                    </div>
                                  </td>
                                  <td>
                                    <a className="email-name waves-effect">
                                      Rinky Behl
                                    </a>
                                  </td>
                                  <td>
                                    <a className="email-name waves-effect">
                                      Photoshop updates are available
                                    </a>
                                  </td>
                                  <td className="email-time">10:01 AM</td>
                                </tr>
                                <tr className="read">
                                  <td>
                                    <div className="check-star">
                                      <div className="form-group d-inline">
                                        <div className="checkbox checkbox-primary checkbox-fill d-inline">
                                          <input
                                            type="checkbox"
                                            name="checkbox-s-in-26"
                                            id="checkbox-s-infill-26"
                                          />
                                          <label
                                            for="checkbox-s-infill-26"
                                            className="cr"
                                          ></label>
                                        </div>
                                      </div>
                                      <a href="javascript:">
                                        <i className="feather icon-star-on text-c-yellow ml-2"></i>
                                      </a>
                                    </div>
                                  </td>
                                  <td>
                                    <a className="email-name waves-effect">
                                      Harry John
                                    </a>
                                  </td>
                                  <td>
                                    <a className="email-name waves-effect">
                                      New upcoming data available
                                    </a>
                                  </td>
                                  <td className="email-time">11:01 AM</td>
                                </tr>
                                <tr className="read">
                                  <td>
                                    <div className="check-star">
                                      <div className="form-group d-inline">
                                        <div className="checkbox checkbox-primary checkbox-fill d-inline">
                                          <input
                                            type="checkbox"
                                            name="checkbox-s-in-27"
                                            id="checkbox-s-infill-27"
                                          />
                                          <label
                                            for="checkbox-s-infill-27"
                                            className="cr"
                                          ></label>
                                        </div>
                                      </div>
                                      <a href="javascript:">
                                        <i className="feather icon-star ml-2"></i>
                                      </a>
                                    </div>
                                  </td>
                                  <td>
                                    <a className="email-name waves-effect">
                                      Hanry Joseph
                                    </a>
                                  </td>
                                  <td>
                                    <a className="email-name waves-effect">
                                      SCSS current working for new updates
                                    </a>
                                  </td>
                                  <td className="email-time">12:01 PM</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                        <div
                          className="tab-pane fade"
                          id="pills-forum"
                          role="tabpanel"
                          aria-labelledby="pills-forum-tab"
                        >
                          <div className="mail-body-content table-responsive">
                            <table className="table">
                              <tbody>
                                <tr className="unread">
                                  <td>
                                    <div className="check-star">
                                      <div className="form-group d-inline">
                                        <div className="checkbox checkbox-primary checkbox-fill d-inline">
                                          <input
                                            type="checkbox"
                                            name="checkbox-s-in-28"
                                            id="checkbox-s-infill-28"
                                          />
                                          <label
                                            for="checkbox-s-infill-28"
                                            className="cr"
                                          ></label>
                                        </div>
                                      </div>
                                      <a href="javascript:">
                                        <i className="feather icon-star-on text-c-yellow ml-2"></i>
                                      </a>
                                    </div>
                                  </td>
                                  <td>
                                    <a className="email-name waves-effect">
                                      Google Inc
                                    </a>
                                  </td>
                                  <td>
                                    <a className="email-name waves-effect">
                                      Lorem ipsum dolor sit amet, consectetuer
                                    </a>
                                    <div>
                                      <a
                                        href="javascript:"
                                        className="mail-attach"
                                      >
                                        <i className="feather icon-image mr-2"></i>
                                        user.png
                                      </a>
                                      <a
                                        href="javascript:"
                                        className="mail-attach ml-2"
                                      >
                                        <i className="feather icon-file-text mr-2"></i>
                                        file.doc
                                      </a>
                                    </div>
                                  </td>

                                  <td className="email-time">12:01 AM</td>
                                </tr>
                                <tr className="unread">
                                  <td>
                                    <div className="check-star">
                                      <div className="form-group d-inline">
                                        <div className="checkbox checkbox-primary checkbox-fill d-inline">
                                          <input
                                            type="checkbox"
                                            name="checkbox-s-in-29"
                                            id="checkbox-s-infill-29"
                                          />
                                          <label
                                            for="checkbox-s-infill-29"
                                            className="cr"
                                          ></label>
                                        </div>
                                      </div>
                                      <a href="javascript:">
                                        <i className="feather icon-star ml-2"></i>
                                      </a>
                                    </div>
                                  </td>
                                  <td>
                                    <a className="email-name waves-effect">
                                      John Doe
                                    </a>
                                  </td>
                                  <td>
                                    <a className="email-name waves-effect">
                                      Coming Up Next Week
                                    </a>
                                  </td>
                                  <td className="email-time">13:02 PM</td>
                                </tr>
                                <tr className="unread">
                                  <td>
                                    <div className="check-star">
                                      <div className="form-group d-inline">
                                        <div className="checkbox checkbox-primary checkbox-fill d-inline">
                                          <input
                                            type="checkbox"
                                            name="checkbox-s-in-30"
                                            id="checkbox-s-infill-30"
                                          />
                                          <label
                                            for="checkbox-s-infill-30"
                                            className="cr"
                                          ></label>
                                        </div>
                                      </div>
                                      <a href="javascript:">
                                        <i className="feather icon-star ml-2"></i>
                                      </a>
                                    </div>
                                  </td>
                                  <td>
                                    <a className="email-name waves-effect">
                                      Sara Soudein
                                    </a>
                                  </td>
                                  <td>
                                    <a className="email-name waves-effect">
                                      SVG new updates comes for you
                                    </a>
                                  </td>
                                  <td className="email-time">00:05 AM</td>
                                </tr>
                                <tr className="unread">
                                  <td>
                                    <div className="check-star">
                                      <div className="form-group d-inline">
                                        <div className="checkbox checkbox-primary checkbox-fill d-inline">
                                          <input
                                            type="checkbox"
                                            name="checkbox-s-in-31"
                                            id="checkbox-s-infill-31"
                                          />
                                          <label
                                            for="checkbox-s-infill-31"
                                            className="cr"
                                          ></label>
                                        </div>
                                      </div>
                                      <a href="javascript:">
                                        <i className="feather icon-star ml-2"></i>
                                      </a>
                                    </div>
                                  </td>
                                  <td>
                                    <a className="email-name waves-effect">
                                      Rinky Behl
                                    </a>
                                  </td>
                                  <td>
                                    <a className="email-name waves-effect">
                                      Photoshop updates are available
                                    </a>
                                  </td>
                                  <td className="email-time">10:01 AM</td>
                                </tr>
                                <tr className="read">
                                  <td>
                                    <div className="check-star">
                                      <div className="form-group d-inline">
                                        <div className="checkbox checkbox-primary checkbox-fill d-inline">
                                          <input
                                            type="checkbox"
                                            name="checkbox-s-in-32"
                                            id="checkbox-s-infill-32"
                                          />
                                          <label
                                            for="checkbox-s-infill-32"
                                            className="cr"
                                          ></label>
                                        </div>
                                      </div>
                                      <a href="javascript:">
                                        <i className="feather icon-star-on text-c-yellow ml-2"></i>
                                      </a>
                                    </div>
                                  </td>
                                  <td>
                                    <a className="email-name waves-effect">
                                      Harry John
                                    </a>
                                  </td>
                                  <td>
                                    <a className="email-name waves-effect">
                                      New upcoming data available
                                    </a>
                                  </td>
                                  <td className="email-time">11:01 AM</td>
                                </tr>
                                <tr className="read">
                                  <td>
                                    <div className="check-star">
                                      <div className="form-group d-inline">
                                        <div className="checkbox checkbox-primary checkbox-fill d-inline">
                                          <input
                                            type="checkbox"
                                            name="checkbox-s-in-33"
                                            id="checkbox-s-infill-33"
                                          />
                                          <label
                                            for="checkbox-s-infill-33"
                                            className="cr"
                                          ></label>
                                        </div>
                                      </div>
                                      <a href="javascript:">
                                        <i className="feather icon-star ml-2"></i>
                                      </a>
                                    </div>
                                  </td>
                                  <td>
                                    <a className="email-name waves-effect">
                                      Hanry Joseph
                                    </a>
                                  </td>
                                  <td>
                                    <a className="email-name waves-effect">
                                      SCSS current working for new updates
                                    </a>
                                  </td>
                                  <td className="email-time">12:01 PM</td>
                                </tr>
                                <tr className="read">
                                  <td>
                                    <div className="check-star">
                                      <div className="form-group d-inline">
                                        <div className="checkbox checkbox-primary checkbox-fill d-inline">
                                          <input
                                            type="checkbox"
                                            name="checkbox-s-in-34"
                                            id="checkbox-s-infill-34"
                                          />
                                          <label
                                            for="checkbox-s-infill-34"
                                            className="cr"
                                          ></label>
                                        </div>
                                      </div>
                                      <a href="javascript:">
                                        <i className="feather icon-star ml-2"></i>
                                      </a>
                                    </div>
                                  </td>
                                  <td>
                                    <a className="email-name waves-effect">
                                      Liu Koi Yan
                                    </a>
                                  </td>
                                  <td>
                                    <a className="email-name waves-effect">
                                      Charts waiting for you
                                    </a>
                                    <div>
                                      <a
                                        href="javascript:"
                                        className="mail-attach"
                                      >
                                        <i className="feather icon-film mr-2"></i>
                                        video
                                      </a>
                                    </div>
                                  </td>
                                  <td className="email-time">07:15 AM</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="v-pills-starred"
                      role="tabpanel"
                    >
                      <p className="mb-0"></p>
                      <div
                        className="tab-pane fade show active"
                        id="pills-starred"
                        role="tabpanel"
                      >
                        <div className="mail-body-content table-responsive">
                          <table className="table">
                            <tbody>
                              <tr>
                                <td>
                                  <div className="check-star">
                                    <div className="form-group d-inline">
                                      <div className="checkbox checkbox-primary checkbox-fill d-inline">
                                        <input
                                          type="checkbox"
                                          name="checkbox-s-in-1"
                                          id="checkbox-s-infill-1"
                                        />
                                        <label
                                          for="checkbox-s-infill-1"
                                          className="cr"
                                        ></label>
                                      </div>
                                    </div>
                                    <a href="javascript:">
                                      <i className="feather icon-star ml-2"></i>
                                    </a>
                                  </div>
                                </td>
                                <td>
                                  <a className="email-name waves-effect">
                                    Job Finder
                                  </a>
                                </td>
                                <td>
                                  <a className="email-name waves-effect">
                                    test job
                                  </a>
                                </td>
                                <td className="email-time">February 1 2022</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="v-pills-draft"
                      role="tabpanel"
                    >
                      <div className="mail-body-content table-responsive">
                        <table className="table">
                          <tbody>
                            <tr className="unread">
                              <td>
                                <div className="check-star">
                                  <div className="form-group d-inline">
                                    <div className="checkbox checkbox-primary checkbox-fill d-inline">
                                      <input
                                        type="checkbox"
                                        name="checkbox-s-in-43"
                                        id="checkbox-s-infill-43"
                                      />
                                      <label
                                        for="checkbox-s-infill-43"
                                        className="cr"
                                      ></label>
                                    </div>
                                  </div>
                                  <a href="javascript:">
                                    <i className="feather icon-star ml-2"></i>
                                  </a>
                                </div>
                              </td>
                              <td>
                                <a className="email-name waves-effect">
                                  John Doe
                                </a>
                              </td>
                              <td>
                                <a className="email-name waves-effect">
                                  Coming Up Next Week
                                </a>
                              </td>
                              <td className="email-time">13:02 PM</td>
                            </tr>
                            <tr className="unread">
                              <td>
                                <div className="check-star">
                                  <div className="form-group d-inline">
                                    <div className="checkbox checkbox-primary checkbox-fill d-inline">
                                      <input
                                        type="checkbox"
                                        name="checkbox-s-in-44"
                                        id="checkbox-s-infill-44"
                                      />
                                      <label
                                        for="checkbox-s-infill-44"
                                        className="cr"
                                      ></label>
                                    </div>
                                  </div>
                                  <a href="javascript:">
                                    <i className="feather icon-star-on text-c-yellow ml-2"></i>
                                  </a>
                                </div>
                              </td>
                              <td>
                                <a className="email-name waves-effect">
                                  Google Inc
                                </a>
                              </td>
                              <td>
                                <a className="email-name waves-effect">
                                  Lorem ipsum dolor sit amet, consectetuer
                                </a>
                                <div>
                                  <a href="javascript:" className="mail-attach">
                                    <i className="feather icon-image mr-2"></i>
                                    user.png
                                  </a>
                                  <a
                                    href="javascript:"
                                    className="mail-attach ml-2"
                                  >
                                    <i className="feather icon-file-text mr-2"></i>
                                    file.doc
                                  </a>
                                </div>
                              </td>

                              <td className="email-time">12:01 AM</td>
                            </tr>
                            <tr className="unread">
                              <td>
                                <div className="check-star">
                                  <div className="form-group d-inline">
                                    <div className="checkbox checkbox-primary checkbox-fill d-inline">
                                      <input
                                        type="checkbox"
                                        name="checkbox-s-in-45"
                                        id="checkbox-s-infill-45"
                                      />
                                      <label
                                        for="checkbox-s-infill-45"
                                        className="cr"
                                      ></label>
                                    </div>
                                  </div>
                                  <a href="javascript:">
                                    <i className="feather icon-star ml-2"></i>
                                  </a>
                                </div>
                              </td>
                              <td>
                                <a className="email-name waves-effect">
                                  Sara Soudein
                                </a>
                              </td>
                              <td>
                                <a className="email-name waves-effect">
                                  SVG new updates comes for you
                                </a>
                              </td>
                              <td className="email-time">00:05 AM</td>
                            </tr>
                            <tr className="read">
                              <td>
                                <div className="check-star">
                                  <div className="form-group d-inline">
                                    <div className="checkbox checkbox-primary checkbox-fill d-inline">
                                      <input
                                        type="checkbox"
                                        name="checkbox-s-in-46"
                                        id="checkbox-s-infill-46"
                                      />
                                      <label
                                        for="checkbox-s-infill-46"
                                        className="cr"
                                      ></label>
                                    </div>
                                  </div>
                                  <a href="javascript:">
                                    <i className="feather icon-star ml-2"></i>
                                  </a>
                                </div>
                              </td>
                              <td>
                                <a className="email-name waves-effect">
                                  Hanry Joseph
                                </a>
                              </td>
                              <td>
                                <a className="email-name waves-effect">
                                  SCSS current working for new updates
                                </a>
                              </td>
                              <td className="email-time">12:01 PM</td>
                            </tr>
                            <tr className="read">
                              <td>
                                <div className="check-star">
                                  <div className="form-group d-inline">
                                    <div className="checkbox checkbox-primary checkbox-fill d-inline">
                                      <input
                                        type="checkbox"
                                        name="checkbox-s-in-47"
                                        id="checkbox-s-infill-47"
                                      />
                                      <label
                                        for="checkbox-s-infill-47"
                                        className="cr"
                                      ></label>
                                    </div>
                                  </div>
                                  <a href="javascript:">
                                    <i className="feather icon-star ml-2"></i>
                                  </a>
                                </div>
                              </td>
                              <td>
                                <a className="email-name waves-effect">
                                  Liu Koi Yan
                                </a>
                              </td>
                              <td>
                                <a className="email-name waves-effect">
                                  Charts waiting for you
                                </a>
                                <div>
                                  <a href="javascript:" className="mail-attach">
                                    <i className="feather icon-film mr-2"></i>
                                    video
                                  </a>
                                </div>
                              </td>
                              <td className="email-time">07:15 AM</td>
                            </tr>
                            <tr className="read">
                              <td>
                                <div className="check-star">
                                  <div className="form-group d-inline">
                                    <div className="checkbox checkbox-primary checkbox-fill d-inline">
                                      <input
                                        type="checkbox"
                                        name="checkbox-s-in-48"
                                        id="checkbox-s-infill-48"
                                      />
                                      <label
                                        for="checkbox-s-infill-48"
                                        className="cr"
                                      ></label>
                                    </div>
                                  </div>
                                  <a href="javascript:">
                                    <i className="feather icon-star-on text-c-yellow ml-2"></i>
                                  </a>
                                </div>
                              </td>
                              <td>
                                <a className="email-name waves-effect">
                                  Google Inc
                                </a>
                              </td>
                              <td>
                                <a className="email-name waves-effect">
                                  Lorem ipsum dolor sit amet, consectetuer
                                  adipiscing elit
                                </a>
                              </td>
                              <td className="email-time">08:01 AM</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="v-pills-mail"
                      role="tabpanel"
                    >
                      <div className="mail-body-content table-responsive">
                        <table className="table">
                          <tbody>
                            <tr className="unread">
                              <td>
                                <div className="check-star">
                                  <div className="form-group d-inline">
                                    <div className="checkbox checkbox-primary checkbox-fill d-inline">
                                      <input
                                        type="checkbox"
                                        name="checkbox-s-in-49"
                                        id="checkbox-s-infill-49"
                                      />
                                      <label
                                        for="checkbox-s-infill-49"
                                        className="cr"
                                      ></label>
                                    </div>
                                  </div>
                                  <a href="javascript:">
                                    <i className="feather icon-star-on text-c-yellow ml-2"></i>
                                  </a>
                                </div>
                              </td>
                              <td>
                                <a className="email-name waves-effect">
                                  Sara Soudein
                                </a>
                              </td>
                              <td>
                                <a className="email-name waves-effect">
                                  SVG new updates comes for you
                                </a>
                              </td>
                              <td className="email-time">00:05 AM</td>
                            </tr>
                            <tr className="read">
                              <td>
                                <div className="check-star">
                                  <div className="form-group d-inline">
                                    <div className="checkbox checkbox-primary checkbox-fill d-inline">
                                      <input
                                        type="checkbox"
                                        name="checkbox-s-in-50"
                                        id="checkbox-s-infill-50"
                                      />
                                      <label
                                        for="checkbox-s-infill-50"
                                        className="cr"
                                      ></label>
                                    </div>
                                  </div>
                                  <a href="javascript:">
                                    <i className="feather icon-star ml-2"></i>
                                  </a>
                                </div>
                              </td>
                              <td>
                                <a className="email-name waves-effect">
                                  Hanry Joseph
                                </a>
                              </td>
                              <td>
                                <a className="email-name waves-effect">
                                  SCSS current working for new updates
                                </a>
                              </td>
                              <td className="email-time">12:01 PM</td>
                            </tr>
                            <tr className="unread">
                              <td>
                                <div className="check-star">
                                  <div className="form-group d-inline">
                                    <div className="checkbox checkbox-primary checkbox-fill d-inline">
                                      <input
                                        type="checkbox"
                                        name="checkbox-s-in-51"
                                        id="checkbox-s-infill-51"
                                      />
                                      <label
                                        for="checkbox-s-infill-51"
                                        className="cr"
                                      ></label>
                                    </div>
                                  </div>
                                  <a href="javascript:">
                                    <i className="feather icon-star ml-2"></i>
                                  </a>
                                </div>
                              </td>
                              <td>
                                <a className="email-name waves-effect">
                                  John Doe
                                </a>
                              </td>
                              <td>
                                <a className="email-name waves-effect">
                                  Coming Up Next Week
                                </a>
                              </td>
                              <td className="email-time">13:02 PM</td>
                            </tr>
                            <tr className="unread">
                              <td>
                                <div className="check-star">
                                  <div className="form-group d-inline">
                                    <div className="checkbox checkbox-primary checkbox-fill d-inline">
                                      <input
                                        type="checkbox"
                                        name="checkbox-s-in-52"
                                        id="checkbox-s-infill-52"
                                      />
                                      <label
                                        for="checkbox-s-infill-52"
                                        className="cr"
                                      ></label>
                                    </div>
                                  </div>
                                  <a href="javascript:">
                                    <i className="feather icon-star-on text-c-yellow ml-2"></i>
                                  </a>
                                </div>
                              </td>
                              <td>
                                <a className="email-name waves-effect">
                                  Google Inc
                                </a>
                              </td>
                              <td>
                                <a className="email-name waves-effect">
                                  Lorem ipsum dolor sit amet, consectetuer
                                </a>
                                <div>
                                  <a href="javascript:" className="mail-attach">
                                    <i className="feather icon-image mr-2"></i>
                                    user.png
                                  </a>
                                  <a
                                    href="javascript:"
                                    className="mail-attach ml-2"
                                  >
                                    <i className="feather icon-file-text mr-2"></i>
                                    file.doc
                                  </a>
                                </div>
                              </td>

                              <td className="email-time">12:01 AM</td>
                            </tr>
                            <tr className="read">
                              <td>
                                <div className="check-star">
                                  <div className="form-group d-inline">
                                    <div className="checkbox checkbox-primary checkbox-fill d-inline">
                                      <input
                                        type="checkbox"
                                        name="checkbox-s-in-53"
                                        id="checkbox-s-infill-53"
                                      />
                                      <label
                                        for="checkbox-s-infill-53"
                                        className="cr"
                                      ></label>
                                    </div>
                                  </div>
                                  <a href="javascript:">
                                    <i className="feather icon-star ml-2"></i>
                                  </a>
                                </div>
                              </td>
                              <td>
                                <a className="email-name waves-effect">
                                  Liu Koi Yan
                                </a>
                              </td>
                              <td>
                                <a className="email-name waves-effect">
                                  Charts waiting for you
                                </a>
                                <div>
                                  <a href="javascript:" className="mail-attach">
                                    <i className="feather icon-film mr-2"></i>
                                    video
                                  </a>
                                </div>
                              </td>
                              <td className="email-time">07:15 AM</td>
                            </tr>
                            <tr className="read">
                              <td>
                                <div className="check-star">
                                  <div className="form-group d-inline">
                                    <div className="checkbox checkbox-primary checkbox-fill d-inline">
                                      <input
                                        type="checkbox"
                                        name="checkbox-s-in-54"
                                        id="checkbox-s-infill-54"
                                      />
                                      <label
                                        for="checkbox-s-infill-54"
                                        className="cr"
                                      ></label>
                                    </div>
                                  </div>
                                  <a href="javascript:">
                                    <i className="feather icon-star-on text-c-yellow ml-2"></i>
                                  </a>
                                </div>
                              </td>
                              <td>
                                <a className="email-name waves-effect">
                                  Google Inc
                                </a>
                              </td>
                              <td>
                                <a className="email-name waves-effect">
                                  Lorem ipsum dolor sit amet, consectetuer
                                  adipiscing elit
                                </a>
                              </td>
                              <td className="email-time">08:01 AM</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="v-pills-Trash"
                      role="tabpanel"
                    >
                      <div className="mail-body-content table-responsive">
                        <table className="table">
                          <tbody>
                            <tr className="unread">
                              <td>
                                <div className="check-star">
                                  <div className="form-group d-inline">
                                    <div className="checkbox checkbox-primary checkbox-fill d-inline">
                                      <input
                                        type="checkbox"
                                        name="checkbox-s-in-55"
                                        id="checkbox-s-infill-55"
                                      />
                                      <label
                                        for="checkbox-s-infill-55"
                                        className="cr"
                                      ></label>
                                    </div>
                                  </div>
                                  <a href="javascript:">
                                    <i className="feather icon-star ml-2"></i>
                                  </a>
                                </div>
                              </td>
                              <td>
                                <a className="email-name waves-effect">
                                  Liu Koi Yan
                                </a>
                              </td>
                              <td>
                                <a className="email-name waves-effect">
                                  Charts waiting for you
                                </a>
                                <div>
                                  <a href="javascript:" className="mail-attach">
                                    <i className="feather icon-film mr-2"></i>
                                    video
                                  </a>
                                </div>
                              </td>
                              <td className="email-time">07:15 AM</td>
                            </tr>
                            <tr className="unread">
                              <td>
                                <div className="check-star">
                                  <div className="form-group d-inline">
                                    <div className="checkbox checkbox-primary checkbox-fill d-inline">
                                      <input
                                        type="checkbox"
                                        name="checkbox-s-in-56"
                                        id="checkbox-s-infill-56"
                                      />
                                      <label
                                        for="checkbox-s-infill-56"
                                        className="cr"
                                      ></label>
                                    </div>
                                  </div>
                                  <a href="javascript:">
                                    <i className="feather icon-star-on text-c-yellow ml-2"></i>
                                  </a>
                                </div>
                              </td>
                              <td>
                                <a className="email-name waves-effect">
                                  Google Inc
                                </a>
                              </td>
                              <td>
                                <a className="email-name waves-effect">
                                  Lorem ipsum dolor sit amet, consectetuer
                                  adipiscing elit
                                </a>
                              </td>
                              <td className="email-time">08:01 AM</td>
                            </tr>
                            <tr className="unread">
                              <td>
                                <div className="check-star">
                                  <div className="form-group d-inline">
                                    <div className="checkbox checkbox-primary checkbox-fill d-inline">
                                      <input
                                        type="checkbox"
                                        name="checkbox-s-in-57"
                                        id="checkbox-s-infill-57"
                                      />
                                      <label
                                        for="checkbox-s-infill-57"
                                        className="cr"
                                      ></label>
                                    </div>
                                  </div>
                                  <a href="javascript:">
                                    <i className="feather icon-star-on text-c-yellow ml-2"></i>
                                  </a>
                                </div>
                              </td>
                              <td>
                                <a className="email-name waves-effect">
                                  Sara Soudein
                                </a>
                              </td>
                              <td>
                                <a className="email-name waves-effect">
                                  SVG new updates comes for you
                                </a>
                              </td>
                              <td className="email-time">00:05 AM</td>
                            </tr>
                            <tr className="read">
                              <td>
                                <div className="check-star">
                                  <div className="form-group d-inline">
                                    <div className="checkbox checkbox-primary checkbox-fill d-inline">
                                      <input
                                        type="checkbox"
                                        name="checkbox-s-in-58"
                                        id="checkbox-s-infill-58"
                                      />
                                      <label
                                        for="checkbox-s-infill-58"
                                        className="cr"
                                      ></label>
                                    </div>
                                  </div>
                                  <a href="javascript:">
                                    <i className="feather icon-star ml-2"></i>
                                  </a>
                                </div>
                              </td>
                              <td>
                                <a className="email-name waves-effect">
                                  Hanry Joseph
                                </a>
                              </td>
                              <td>
                                <a className="email-name waves-effect">
                                  SCSS current working for new updates
                                </a>
                              </td>
                              <td className="email-time">12:01 PM</td>
                            </tr>
                            <tr className="read">
                              <td>
                                <div className="check-star">
                                  <div className="form-group d-inline">
                                    <div className="checkbox checkbox-primary checkbox-fill d-inline">
                                      <input
                                        type="checkbox"
                                        name="checkbox-s-in-59"
                                        id="checkbox-s-infill-59"
                                      />
                                      <label
                                        for="checkbox-s-infill-59"
                                        className="cr"
                                      ></label>
                                    </div>
                                  </div>
                                  <a href="javascript:">
                                    <i className="feather icon-star ml-2"></i>
                                  </a>
                                </div>
                              </td>
                              <td>
                                <a className="email-name waves-effect">
                                  John Doe
                                </a>
                              </td>
                              <td>
                                <a className="email-name waves-effect">
                                  Coming Up Next Week
                                </a>
                              </td>
                              <td className="email-time">13:02 PM</td>
                            </tr>
                            <tr className="read">
                              <td>
                                <div className="check-star">
                                  <div className="form-group d-inline">
                                    <div className="checkbox checkbox-primary checkbox-fill d-inline">
                                      <input
                                        type="checkbox"
                                        name="checkbox-s-in-60"
                                        id="checkbox-s-infill-60"
                                      />
                                      <label
                                        for="checkbox-s-infill-60"
                                        className="cr"
                                      ></label>
                                    </div>
                                  </div>
                                  <a href="javascript:">
                                    <i className="feather icon-star-on text-c-yellow ml-2"></i>
                                  </a>
                                </div>
                              </td>
                              <td>
                                <a className="email-name waves-effect">
                                  Google Inc
                                </a>
                              </td>
                              <td>
                                <a className="email-name waves-effect">
                                  Lorem ipsum dolor sit amet, consectetuer
                                </a>
                                <div>
                                  <a href="javascript:" className="mail-attach">
                                    <i className="feather icon-image mr-2"></i>
                                    user.png
                                  </a>
                                  <a
                                    href="javascript:"
                                    className="mail-attach ml-2"
                                  >
                                    <i className="feather icon-file-text mr-2"></i>
                                    file.doc
                                  </a>
                                </div>
                              </td>
                              <td className="email-time">12:01 AM</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- [ inbox-right section ] end --> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
