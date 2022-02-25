import React, { useEffect, useState } from "react";
import axios from "../../api/axios";
import LatestJobsTableListItem from "./LatestJobsTableListItem";

export default function LatestJobsTable() {
  const [jobs, setJobs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [jobPages, setJobPages] = useState([]);
  const [showJobs, setShowJobs] = useState([]);

  useEffect(() => {
    if (jobs.length === 0) return;
    const jobsPerPage = 5;
    const numberOfPages = Math.ceil(jobs.length / jobsPerPage);
    const pages = [];
    for (let i = 1; i <= numberOfPages; i++) {
      pages.push(i);
    }
    const jobsToDisplay = jobs.slice(
      (currentPage - 1) * jobsPerPage,
      currentPage * jobsPerPage
    );
    setShowJobs(jobsToDisplay);
    setJobPages(pages);
  }, [currentPage, jobs]);

  useEffect(() => {
    async function fetchJobs() {
      try {
        const { data } = await axios.get("/jobs");
        setJobs(data);
        console.log("effact ran");
      } catch (err) {
        console.log(err);
      }
    }
    fetchJobs();
  }, []);

  function handlePage(page) {
    console.log(page);
    setCurrentPage(page);
  }

  return (
    <div className="card-body table-responsive">
      <table className="table table-hover table-sm mb-0">
        <thead>
          <tr className="border-bottom-success">
            <th>Name</th>
            <th>Location</th>
            <th>Recruiter</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {showJobs.map((job) => {
            return <LatestJobsTableListItem job={job} key={job.id} />;
          })}
        </tbody>
        <footer>
          {jobPages.length > 1 && (
            <tr>
              <td className="col-sm-12" colspan="4">
                <nav aria-label="...">
                  <ul className="pagination pagination-sm justify-content-left">
                    {jobPages.map((page) => {
                      return (
                        <li
                          className={`page-item pointer ${
                            page === currentPage && "active"
                          }`}
                          key={page}
                          onClick={() => handlePage(page)}
                        >
                          <p className="page-link">{page}</p>
                        </li>
                      );
                    })}
                  </ul>
                </nav>
              </td>
            </tr>
          )}
        </footer>
      </table>
    </div>
  );
}
