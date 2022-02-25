import React, { useState } from "react";

//Component imports
import CandidateProfileHeader from "../../components/CandidateProfileHeader/CandidateProfileHeader";
import CandidatePersonalDetails from "../../components/CandidatePersonalDetails/CandidatePersonalDetails";
import CandidateEducation from "../../components/CandidateEducation/CandidateEducation";
import CandidateWorkExperience from "../../components/CandidateWorkExperience/CandidateWorkExperience";
import CandidateFileUploads from "../../components/CandidateFileUploads/CandidateFileUploads";
import CandidateAddEducationModal from "../../components/CandidateAddEducationModal/CandidateAddEducationModal";
import ModalBackground from "../../components/ModalBackground/ModalBackground";
import CandidateAddWorkExperienceModal from "../../components/CandidateAddWorkExperienceModal/CandidateAddWorkExperienceModal";
import CandidateFileUploadModal from "../../components/CandidateFileUploadsModal/CandidateFileUploadModal";
import TopNavigation from "../../components/TopNavigation/TopNavigation";
import BottomNavigation from "../../components/BottomNavigation/BottomNavigation";
import { useCandidate } from "../../contexts/candidateContext";

export default function CandidateProfilePage() {
  const { editingEducation, editingExperience } = useCandidate();
  const [selected, setSelected] = useState("information");
  const [addEducation, setAddEducation] = useState(false);
  const [addWorkExperience, setAddWorkExperience] = useState(false);
  const [addFile, setAddFile] = useState(false);

  const showEducatioModal = addEducation || editingEducation;
  const showWorkExperienceModal = addWorkExperience || editingExperience;

  return (
    <div>
      <TopNavigation />
      <BottomNavigation />
      <div className="mt-4">
        <CandidateProfileHeader setSelected={setSelected} selected={selected} />
      </div>
      {selected === "information" && (
        <div>
          <CandidatePersonalDetails />
        </div>
      )}
      {selected === "education" && (
        <div>
          <CandidateEducation setAddEducation={setAddEducation} />
        </div>
      )}
      {selected === "workExperience" && (
        <div>
          <CandidateWorkExperience
            setAddWorkExperience={setAddWorkExperience}
          />
        </div>
      )}
      {selected === "uploads" && (
        <div>
          <CandidateFileUploads setAddFile={setAddFile} />
        </div>
      )}
      {showEducatioModal && (
        <>
          <ModalBackground />
          <CandidateAddEducationModal setAddEducation={setAddEducation} />
        </>
      )}
      {showWorkExperienceModal && (
        <>
          <ModalBackground />
          <CandidateAddWorkExperienceModal
            setAddWorkExperience={setAddWorkExperience}
          />
        </>
      )}
      {addFile && (
        <>
          <ModalBackground />
          <CandidateFileUploadModal setAddFile={setAddFile} />
        </>
      )}
    </div>
  );
}
