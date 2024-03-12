import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./ui/Login";
import { ROUTES } from "./Shared/route";
import RecruiterRegister from "./ui/Recruiter/Register";
import JobSeekerDashboard from "./ui/JobSeeker/Dashboard";
import JobSeekerJobs from "./ui/JobSeeker/Jobs";
import JobSeekerProjects from "./ui/JobSeeker/Projects";
import JobSeekerInbox from "./ui/JobSeeker/Inbox";
import JobSeekerProfile from "./ui/JobSeeker/Profile";
import RecruiterDashboard from "./ui/Recruiter/Dashboard";
import RecruiterCandidates from "./ui/Recruiter/Candidates";
import RecruiterJobs from "./ui/Recruiter/Jobs";
import RecruiterReport from "./ui/Recruiter/Report";
import ReacruiterSchedule from "./ui/Recruiter/Schedule";
import ReacruiterApplicant from "./ui/Recruiter/Applicant";
import ReacruiterInbox from "./ui/Recruiter/Inbox";
import Layout from "./ui/Layout";
import JobSeekerRegister from "./ui/JobSeeker/Register";
import RecruiterProfile from "./ui/Recruiter/Profile";
import SkillList from "./ui/Recruiter/Draggable";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.Blank} element={<Login />}></Route>
        <Route
          path={ROUTES.JobSeekerRegistration}
          element={<JobSeekerRegister />}
        ></Route>
        <Route
          path={ROUTES.RecruiterRegistration}
          element={<RecruiterRegister />}
        ></Route>
        <Route
          path={ROUTES.JobSeekerDashboard}
          element={<Layout component={JobSeekerDashboard} />}
        ></Route>
        <Route
          path={ROUTES.JobSeekerJobs}
          element={<Layout component={JobSeekerJobs} />}
        ></Route>
        <Route
          path={ROUTES.JobSeekerProjects}
          element={<Layout component={JobSeekerProjects} />}
        ></Route>
        <Route
          path={ROUTES.JobSeekerInbox}
          element={<Layout component={JobSeekerInbox} />}
        ></Route>
        <Route
          path={ROUTES.JobSeekerProfile}
          element={<Layout component={JobSeekerProfile} />}
        ></Route>
        <Route
          path={ROUTES.RecruiterDashboard}
          element={<Layout component={RecruiterDashboard} />}
        ></Route>
        <Route
          path={ROUTES.RecruiterCandidates}
          element={<Layout component={RecruiterCandidates} />}
        ></Route>
        <Route
          path={ROUTES.RecruiterJobs}
          element={<Layout component={RecruiterJobs} />}
        ></Route>
        <Route
          path={ROUTES.RecruiterReport}
          element={<Layout component={RecruiterReport} />}
        ></Route>
        <Route
          path={ROUTES.RecruiterSchedule}
          element={<Layout component={ReacruiterSchedule} />}
        ></Route>
        <Route
          path={ROUTES.RecruiterApplicant}
          element={<Layout component={ReacruiterApplicant} />}
        ></Route>
        <Route
          path={ROUTES.RecruiterInbox}
          element={<Layout component={ReacruiterInbox} />}
        ></Route>
        <Route
          path={ROUTES.RecruiterProfile}
          element={<Layout component={RecruiterProfile} />}
        ></Route>
        <Route
          path={ROUTES.RecruiterDrag}
          element={<Layout component={SkillList} />}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}
export default AppRouter;
