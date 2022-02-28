import React from "react";

import CandidateExperienceListItemPublic from "./CandidateExperienceListItemPublic";

export default function CandidateWorkExperiencePublic({ candidateExperience }) {
  return (
    <div class=" card container" id="work" role="tabpanel">
      <div class="merge-card">
        <div className="dashboard-header d-flex justify-content-between py-3 px-3">
          <h5 class="mb-0">Update Work Experience</h5>
        </div>
        <div class="table-responsive p-3">
          <table class="table table-hover mb-0">
            <thead>
              <tr>
                <th>Employer</th>
                <th>From</th>
                <th>To</th>
                <th>Duration</th>
                <th>Remark</th>
              </tr>
            </thead>
            <tbody>
              {candidateExperience.map((experience) => {
                return (
                  <CandidateExperienceListItemPublic
                    experience={experience}
                    key={experience.id}
                  />
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
