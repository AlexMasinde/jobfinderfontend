import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "../../api/axios";

//Component imports
import TopNavigation from "../../components/TopNavigation/TopNavigation";
import BottomNavigation from "../../components/BottomNavigation/BottomNavigation";
import CandidatePublicViewProfileHeader from "../../components/CandidatePublicViewHeader/CandidatePublicViewHeader";
import CandidatePublicViewPersonalDetails from "../../components/CandidatePublicViewProfileDetails/CandidatePublicViewPersonalDetails";
import CandidateEducationPublic from "../../components/CandidateEducationPublic/CandidateEducationPublic";
import CandidateWorkExperiencePublic from "../../components/CandidateWorkEx[eriencePublic/CandiateWorkExperiencePublic";
import CandidateFileUploadsPublic from "../../components/CandidateFileUploadsPublic/CandidateFileUploadsPublic";

export default function CandidateProfilePagePublic() {
  const { candidateId } = useParams();
  const [selected, setSelected] = useState("information");
  const [candidateProfile, setCandidateProfile] = useState({});
  const [candidateEducation, setCandidateEducation] = useState([]);
  const [candidateExperience, setCandidateExperience] = useState([]);
  const [candidateUploads, setCandidateUploads] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCandidate() {
      try {
        const { data } = await axios.get(
          `/profiles/candidate-profile/${candidateId}`
        );
        setCandidateProfile(data.candidate[0]);
        setCandidateEducation(data.candidateEducation);
        setCandidateExperience(data.candidateExperience);
        setCandidateUploads(data.candidateUploads);
        setLoading(false);
      } catch (err) {
        setLoading(false);
        console.log(err);
      }
    }
    fetchCandidate();
  }, [candidateId]);

  return (
    <div>
      <TopNavigation />
      {console.log(candidateId)}
      <BottomNavigation />
      {!loading && (
        <>
          <div className="mt-4">
            <CandidatePublicViewProfileHeader
              setSelected={setSelected}
              selected={selected}
              candidateProfile={candidateProfile}
            />
          </div>
          {selected === "information" && (
            <div>
              <CandidatePublicViewPersonalDetails
                candidateProfile={candidateProfile}
              />
            </div>
          )}
          {selected === "education" && (
            <div>
              <CandidateEducationPublic
                candidateEducation={candidateEducation}
              />
            </div>
          )}
          {selected === "workExperience" && (
            <div>
              <CandidateWorkExperiencePublic
                candidateExperience={candidateExperience}
              />
            </div>
          )}
          {selected === "uploads" && (
            <div>
              <CandidateFileUploadsPublic candidateUploads={candidateUploads} />
            </div>
          )}
        </>
      )}
      {loading && (
        <div className="candidate-loader-container">
          <div className="lds-ring">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      )}
    </div>
  );
}
