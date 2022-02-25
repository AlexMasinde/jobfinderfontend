import React, { useState } from "react";
import { useRecruiter } from "../../contexts/recruiterContext";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import { categories } from "../../utils/jobCategories";
import { countries, locations } from "../../utils/lists";

export default function RecruiterJobInformationModal({ setAddJob }) {
  const { recruiterJobs, dispatch, editingJob, recruiterProfile } =
    useRecruiter();

  const axiosPrivate = useAxiosPrivate();

  const [title, setTitle] = useState(editingJob?.title ?? "");
  const [description, setDescription] = useState(editingJob?.description ?? "");
  const [location, setLocation] = useState(editingJob?.location ?? "Nairobi");
  const [country, setCountry] = useState(editingJob?.country ?? "Kenya");
  const [currency, setCurrency] = useState(
    editingJob?.currency ?? "Kenya Shillings"
  );
  const [salaryrange, setSalaryrange] = useState(
    editingJob?.salaryrange ?? "5,000 - 10,000"
  );
  const [category, setCategory] = useState(
    editingJob?.category ?? "Accounting"
  );
  const [joblink, setJoblink] = useState(editingJob?.joblink ?? "");
  const [deadline, setDeadline] = useState(editingJob?.deadline ?? "");

  function toggleJobModal() {
    dispatch({ type: "SET_EDITING", payload: null });
    setAddJob(false);
  }

  function handleTitle(e) {
    setTitle(e.target.value);
  }

  function handleDescription(e) {
    setDescription(e.target.value);
  }

  function handleLocation(e) {
    setLocation(e.target.value);
  }

  function handleCountry(e) {
    setCountry(e.target.value);
  }

  function handleCurrency(e) {
    setCurrency(e.target.value);
  }

  function handleSalaryRange(e) {
    setSalaryrange(e.target.value);
  }

  function handleCategory(e) {
    setCategory(e.target.value);
  }

  function handleJoblink(e) {
    setJoblink(e.target.value);
  }

  function handleDeadline(e) {
    setDeadline(e.target.value);
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      async function handleJob() {
        if (editingJob) {
          const editedObject = {
            ...(editingJob.title !== title && { title }),
            ...(editingJob.description !== description && { description }),
            ...(editingJob.location !== location && { location }),
            ...(editingJob.currency !== currency && { currency }),
            ...(editingJob.salaryrange !== salaryrange && { salaryrange }),
            ...(editingJob.category !== category && { category }),
            ...(editingJob.joblink !== joblink && { joblink }),
            ...(editingJob.deadline !== deadline && { deadline }),
          };

          console.log(editedObject);
          const response = await axiosPrivate.patch(
            `/jobs/${editingJob.id}`,
            JSON.stringify(editedObject)
          );

          const filteredJobs = recruiterJobs.filter(
            (job) => job.id !== editingJob.id
          );

          const newJobs = [...filteredJobs, response.data];

          dispatch({ type: "SET_RECRUITER_JOBS", payload: newJobs });
          dispatch({ type: "SET_EDITING", payload: null });
        } else {
          const response = await axiosPrivate.post(
            "/jobs/create",
            JSON.stringify({
              title,
              description,
              currency,
              country,
              salaryrange,
              deadline,
              location,
              category,
              joblink,
              recruiterName: recruiterProfile.username,
            })
          );

          const newJobs = [...recruiterJobs, response.data];
          dispatch({
            type: "SET_RECRUITER_JOBS",
            payload: newJobs,
          });
          setAddJob(false);
        }
      }
      await handleJob();
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="card modal-container">
      <form>
        <div className="modal-header">
          <h4 className="modal-title" id="modal-basic-title">
            {editingJob ? "Edit Job" : "Add Job"}
          </h4>
          <button
            type="button"
            className="close"
            aria-label="Close"
            onClick={toggleJobModal}
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="app-modal-body text-center">
          <div className="input-group">
            <span className="input-group-prepend" id="basic-addon1">
              <label className="input-group-text">Title</label>
            </span>
            <input
              type="text"
              value={title}
              className="form-control"
              placeholder="Job title..."
              onChange={handleTitle}
            />
          </div>
          <div className="input-group">
            <span className="input-group-prepend" id="basic-addon2">
              <label className="input-group-text">Description</label>
            </span>
            <textarea
              className="form-control"
              aria-label="With textarea"
              value={description}
              rows="3"
              placeholder="Job description..."
              onChange={handleDescription}
            ></textarea>
          </div>
          <div className="input-group">
            <span className="input-group-prepend" id="basic-addon3">
              <label className="input-group-text">Salary Currency</label>
            </span>
            <select
              id="ddlFileType"
              className="custom-select"
              defaultValue={currency}
              onChange={handleCurrency}
            >
              <option value="Kenyan Shillings">Kenyan Shillings</option>
              <option value="Tanzanian Shillings">Tanzanian Shillings</option>
              <option value="Sudanesse Pounds">Sudanesse Pounds</option>
              <option value="Somali Shillings">Somali Shillings</option>
              <option value="Rwanda Francs">Rwanda Francs</option>
              <option value="Eithopian Birr">Eithopian Birr</option>
              <option value=">Burundian Francs">Burundian Francs</option>
              <option value="Ugandan Shillings">Ugandan Shillings</option>
            </select>
          </div>
          <div className="input-group">
            <span className="input-group-prepend" id="basic-addon3">
              <label className="input-group-text">Salary Range</label>
            </span>
            <select
              id="ddlFileType"
              className="custom-select"
              defaultValue={salaryrange}
              onChange={handleSalaryRange}
            >
              <option value="5,000 - 10,000">5,000 - 10,000</option>
              <option value="10000 - 50,000">10000 - 50,000</option>
              <option value="50,000 - 100,000">50,000 - 100,000</option>
              <option value="Above 100,000">Above 100,000</option>
            </select>
          </div>
          <div className="input-group">
            <span className="input-group-prepend" id="basic-addon3">
              <label className="input-group-text">Location</label>
            </span>
            <select
              id="location"
              className="custom-select"
              placeholder="select location..."
              defaultValue={location}
              onChange={handleLocation}
            >
              {locations.map((location) => {
                return <option value={location}>{location}</option>;
              })}
            </select>
          </div>
          <div className="input-group">
            <span className="input-group-prepend" id="basic-addon3">
              <label className="input-group-text">Country</label>
            </span>
            <select
              id="country"
              className="custom-select"
              placeholder="Select county..."
              defaultValue={country}
              onChange={handleCountry}
            >
              {countries.map((country) => {
                return <option value={country}>{country}</option>;
              })}
            </select>
          </div>
          <div className="input-group">
            <span className="input-group-prepend" id="basic-addon3">
              <label className="input-group-text">Category</label>
            </span>
            <select
              id="jobCategory"
              className="custom-select"
              onChange={handleCategory}
              defaultValue={category}
            >
              {categories.map((category) => {
                return <option key={category}>{category}</option>;
              })}
            </select>
          </div>
          <div className="input-group">
            <span className="input-group-prepend" id="basic-addon4">
              <label className="input-group-text">Deadline</label>
            </span>
            <input
              type="date"
              className="form-control"
              placeholder="Application deadline..."
              value={deadline}
              onChange={handleDeadline}
            />
          </div>
          <div className="input-group">
            <span className="input-group-prepend" id="basic-addon4">
              <label className="input-group-text">Job Link</label>
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="Job Link"
              value={joblink}
              onChange={handleJoblink}
            />
          </div>
        </div>
        <div className="modal-footer">
          <button
            type="button"
            className="btn btn-danger btn-sm mr-2"
            onClick={toggleJobModal}
          >
            Close
          </button>
          <button
            type="button"
            className="btn btn-primary btn-sm"
            onClick={handleSubmit}
          >
            Post Job
          </button>
        </div>
      </form>
    </div>
  );
}
