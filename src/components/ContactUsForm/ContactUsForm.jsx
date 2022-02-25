import React, { useRef } from "react";
import { Editor } from "@tinymce/tinymce-react";

export default function ContactUsForm() {
  const editorRef = useRef(null);
  return (
    <div class="row btn-page container mx-auto mt-4">
      <div class="col-sm-12">
        <div class="card email-card">
          <div class="card-header border-top-alert p-3">
            <div class="mail-header">
              <div class="row align-items-center">
                {/* <!-- [ email-left section ] start --> */}
                <div class="col-xl-2 col-md-3">
                  <a href="javascript:" class="b-brand">
                    <div class="b-bg">SJF</div>
                    <span class="b-title text-muted">Contact Us</span>
                  </a>
                </div>
                {/* <!-- [ email-left section ] end -->
            <!-- [ email-right section ] start -->
           
            <!-- [ email-right section ] end --> */}
              </div>
            </div>
          </div>
          <div class="card-body">
            <div class="mail-body">
              <div class="row">
                {/* <!-- [ email-left section ] start --> */}
                <div class="col-xl-3 col-md-4">
                  <ul class="mb-2 nav nav-tab flex-column nav-pills">
                    <li class="nav-item mail-section">
                      <a class="nav-link text-left active">
                        <span>
                          <i class="fas fa-envelope"> support@getkazi.com</i>
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
                {/* <!-- [ email-left section ] end -->
            <!-- [ email-right section ] start --> */}
                <div class="col-xl-9 col-md-8">
                  <div class="tab-content" id="v-pills-tabContent">
                    <div class="mail-body-content">
                      <form class="form-material">
                        <div class="form-group text-center text-success">
                          <i class="fas fa-thumbs-up"></i>
                          <h5 class="">Get in touch with us</h5>
                        </div>
                        <div class="form-group">
                          <div class="row">
                            <div class="col-md-6 hidden">
                              <div class="form-group">
                                <label for="exampleInputEmail2">Name</label>
                                <input
                                  type="text"
                                  class="form-control"
                                  id="name"
                                  placeholder="Enter name"
                                  required
                                />
                              </div>
                            </div>
                            <div class="col-md-6">
                              <div class="form-group">
                                <label for="exampleInputEmail3">Email</label>
                                <input
                                  type="email"
                                  class="form-control"
                                  id="email"
                                  formControlName="mailEmail"
                                  placeholder="Enter email"
                                  required
                                />
                                <div class="messages text-danger"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="form-group">
                          <input
                            type="text"
                            class="form-control"
                            id="subject"
                            formControlName="mailSubject"
                            placeholder="Title"
                          />
                          <div class="messages text-danger"></div>
                        </div>
                        <Editor
                          onInit={(evt, editor) => (editorRef.current = editor)}
                          initialValue=""
                          init={{
                            height: 200,
                            menubar: false,
                            plugins: [
                              "advlist autolink lists link image charmap print preview anchor",
                              "searchreplace visualblocks code fullscreen",
                              "insertdatetime media table paste code help wordcount",
                            ],
                            toolbar:
                              "undo redo | formatselect | " +
                              "bold italic backcolor | alignleft aligncenter " +
                              "alignright alignjustify | bullist numlist outdent indent | " +
                              "removeformat | help",
                            content_style:
                              "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
                          }}
                        />
                        <div class="float-right mt-3">
                          <button
                            type="button"
                            class="btn waves-effect waves-light btn-success"
                          >
                            Send
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                {/* <!-- [ email-right section ] end --> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
