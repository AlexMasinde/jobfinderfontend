import { BrowserRouter, Routes, Route } from "react-router-dom";

import ProfileSettings from "./pages/ProfileSettings/ProfileSettings";
import HomePage from "./pages/HomePage/HomePage";
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import AboutUsPage from "./pages/AboutUsPage/AboutUsPage";
import ChangePassword from "./pages/ChangePassword/ChangePassword";
import MessagesPage from "./pages/MessagesPage/MessagesPage";
import SearchJobsPage from "./pages/SearchJobsPage/SearchJobsPage";
import ResetPassword from "./pages/ResetPassword/ResetPassword";
import ContactUsPage from "./pages/ContactUsPage/ContactUsPage";
import RecruiterJobsPage from "./pages/RecruiterJobsPage/RecruiterJobsPage";
import CandidateSearchPage from "./pages/CandidateSearchPage/CandidateSearchPage";
import { AuthContextProvider } from "./contexts/userContext";
import DashboardSelect from "./components/DashboardSelect/DashboardSelect";
import ProfilePageSelect from "./components/ProfilePageSelect/ProfilePageSelect";
import TicketComponent from "./components/TicketComponent/TicketComponent";
import RequireAuth from "./components/RequireAuth/RequireAuth";
import RedirectUser from "./components/RedirectUser/RedirectUser";
import "./styles.scss";
import RecruiterContextProvider from "./contexts/recruiterContext";
import CandidateContextProvider from "./contexts/candidateContext";

function App() {
  return (
    <AuthContextProvider>
      <RecruiterContextProvider>
        <CandidateContextProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/about" element={<AboutUsPage />} />
              <Route path="/reset" element={<ResetPassword />} />
              <Route path="/changepassword" element={<ChangePassword />} />
              <Route path="/contact" element={<ContactUsPage />} />
              <Route path="/jobsearch" element={<SearchJobsPage />} />
              <Route
                path="/candidatesearch"
                element={<CandidateSearchPage />}
              />

              <Route path="/" element={<HomePage />} />

              <Route element={<RedirectUser />}>
                <Route path="/signin" element={<LoginPage />} />
                <Route path="/signup" element={<SignUpPage />} />
              </Route>

              <Route element={<RequireAuth />}>
                <Route path="/inbox" element={<MessagesPage />} />
                <Route path="/profile" element={<ProfilePageSelect />} />
                <Route path="/recruiterjobs" element={<RecruiterJobsPage />} />
                <Route path="/dashboard" element={<DashboardSelect />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </CandidateContextProvider>
      </RecruiterContextProvider>
    </AuthContextProvider>

    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<UserDashboard />} />
    //     <Route path="/profile" element={<CandaidateProfilePage />} />
    //     <Route path="/jobsearch" element={<SearchJobsPage />} />
    //     <Route path="/inbox" element={<MessagesPage />} />
    //     <Route path="/contact" element={<ContactUsPage />} />
    //   </Routes>
    // </BrowserRouter>
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<HomePage />} />
    //     <Route path="/signup" element={<SignUpPage />} />
    //     <Route path="/signin" element={<LoginPage />} />
    //     <Route path="/changepassword" element={<ChangePassword />} />
    //     <Route path="/reset" element={<ResetPassword />} />
    //     <Route path="/about" element={<AboutUsPage />} />
    //     <Route path="/inbox" element={<MessagesPage />} />
    //     <Route path="/searchjobs" element={<SearchJobsPage />} />
    //     <Route path="/dashboard" element={<UserDashboard />} />
    //   </Routes>
    // </BrowserRouter>
  );
}

export default App;
