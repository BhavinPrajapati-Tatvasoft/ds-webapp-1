import {
  Avatar,
  List,
  ListItemIcon,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { Link } from "react-router-dom";
import {
  Logo,
  homeDefaultIcon,
  jobsDefaultIcon,
  profileDefaultIcon,
  projectsDefaultIcon,
  inboxDefaultIcon,
  homeActiveIcon,
  jobsActiveIcon,
  projectsActiveIcon,
  inboxActiveIcon,
  profileActiveIcon,
  candidatesDefaultIcon,
  candidatesActiveIcon,
  reportDefaultIcon,
  reportActiveIcon,
  scheduleDefaultIcon,
  scheduleActiveIcon,
  applicantActiveIcon,
  applicantDefaultIcon,
} from "../../assets/images";
import { NavLink } from "react-router-dom";
import userTypeService from "../../services/userService";
import { useEffect, useState } from "react";
import AOS from "aos";
import { ROUTES } from "../../Shared/route";

const Sidebar: React.FC = () => {
  const removeDrawer = () => {
    document.body.classList.remove("open-sidebar");
  };
  const [userType, setUserType] = useState(userTypeService.getDefaultRole());

  // AOS Animation
  useEffect(() => {
    AOS.init({
      duration: 500,
      once: true,
    });
  }, []);
  return (
    <>
      <div className="sidebar">
        <Link to={ROUTES.Blank} className="logo" data-aos="zoom-in">
          <Avatar src={Logo} alt="TalentHub" />
        </Link>
        <List>
          <ListItemButton
            component={NavLink}
            onClick={removeDrawer}
            to={
              userType === "jobSeeker"
                ? ROUTES.JobSeekerDashboard
                : ROUTES.RecruiterDashboard
            }
            data-aos="fade-in"
            data-aos-delay="100"
          >
            <ListItemIcon>
              <Avatar src={homeDefaultIcon} alt="Home" />
              <Avatar src={homeActiveIcon} alt="Home" />
            </ListItemIcon>
            <ListItemText>Home</ListItemText>
          </ListItemButton>
          {userType === "recruiter" && (
            <ListItemButton
              component={NavLink}
              to={ROUTES.RecruiterCandidates}
              onClick={removeDrawer}
              data-aos="fade-in"
              data-aos-delay="200"
            >
              <ListItemIcon>
                <Avatar src={candidatesDefaultIcon} alt="Candidates" />
                <Avatar src={candidatesActiveIcon} alt="Candidates" />
              </ListItemIcon>
              <ListItemText>Candidates</ListItemText>
            </ListItemButton>
          )}
          <ListItemButton
            component={NavLink}
            onClick={removeDrawer}
            to={
              userType === "jobSeeker"
                ? ROUTES.JobSeekerJobs
                : ROUTES.RecruiterJobs
            }
            data-aos="fade-in"
            data-aos-delay={userType === "jobSeeker" ? "200" : "300"}
          >
            <ListItemIcon>
              <Avatar src={jobsDefaultIcon} alt="Jobs" />
              <Avatar src={jobsActiveIcon} alt="Jobs" />
            </ListItemIcon>
            <ListItemText>Jobs</ListItemText>
          </ListItemButton>
          {userType === "recruiter" && (
            <>
              <ListItemButton
                component={NavLink}
                onClick={removeDrawer}
                to={ROUTES.RecruiterReport}
                data-aos="fade-in"
                data-aos-delay="400"
              >
                <ListItemIcon>
                  <Avatar src={reportDefaultIcon} alt="Report" />
                  <Avatar src={reportActiveIcon} alt="Report" />
                </ListItemIcon>
                <ListItemText>Report</ListItemText>
              </ListItemButton>
              <ListItemButton
                component={NavLink}
                onClick={removeDrawer}
                to={ROUTES.RecruiterSchedule}
                data-aos="fade-in"
                data-aos-delay="500"
              >
                <ListItemIcon>
                  <Avatar src={scheduleDefaultIcon} alt="Schedule" />
                  <Avatar src={scheduleActiveIcon} alt="Schedule" />
                </ListItemIcon>
                <ListItemText>Schedule</ListItemText>
              </ListItemButton>
              <ListItemButton
                component={NavLink}
                onClick={removeDrawer}
                to={ROUTES.RecruiterApplicant}
                data-aos="fade-in"
                data-aos-delay="600"
              >
                <ListItemIcon>
                  <Avatar src={applicantDefaultIcon} alt="Applicant" />
                  <Avatar src={applicantActiveIcon} alt="Applicant" />
                </ListItemIcon>
                <ListItemText>Applicant</ListItemText>
              </ListItemButton>
            </>
          )}

          {userType === "jobSeeker" && (
            <ListItemButton
              onClick={removeDrawer}
              component={NavLink}
              to={ROUTES.JobSeekerProjects}
              data-aos="fade-in"
              data-aos-delay="300"
            >
              <ListItemIcon>
                <Avatar src={projectsDefaultIcon} alt="Projects" />
                <Avatar src={projectsActiveIcon} alt="Projects" />
              </ListItemIcon>
              <ListItemText>Projects</ListItemText>
            </ListItemButton>
          )}
          <ListItemButton
            component={NavLink}
            onClick={removeDrawer}
            to={
              userType === "jobSeeker"
                ? ROUTES.JobSeekerInbox
                : ROUTES.RecruiterInbox
            }
            data-aos="fade-in"
            data-aos-delay={userType === "jobSeeker" ? "400" : "700"}
          >
            <ListItemIcon>
              <Avatar src={inboxDefaultIcon} alt="Inbox" />
              <Avatar src={inboxActiveIcon} alt="Inbox" />
            </ListItemIcon>
            <ListItemText>Inbox</ListItemText>
          </ListItemButton>
          {userType === "jobSeeker" && (
            <ListItemButton
              component={NavLink}
              onClick={removeDrawer}
              to={ROUTES.JobSeekerProfile}
              data-aos="fade-in"
              data-aos-delay="500"
            >
              <ListItemIcon>
                <Avatar src={profileDefaultIcon} alt="Profile" />
                <Avatar src={profileActiveIcon} alt="Profile" />
              </ListItemIcon>
              <ListItemText>Profile</ListItemText>
            </ListItemButton>
          )}
        </List>
      </div>
      <div className="overlay" onClick={removeDrawer}></div>
    </>
  );
};
export default Sidebar;
