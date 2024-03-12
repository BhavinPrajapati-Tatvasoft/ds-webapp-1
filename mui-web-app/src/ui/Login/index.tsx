import {
  Avatar,
  Box,
  Button,
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import {
  LoginLogo,
  googleIcon,
  hidePasswordIcon,
  recruiterLoginBanner,
  seekersLoginBanner,
  showPasswordIcon,
} from "../../assets/images";
import { useEffect, useState } from "react";
import userTypeService from "../../services/userService";
import { ROUTES } from "../../Shared/route";
import Aos from "aos";

const Login: React.FC = () => {
  const [userType, setUserType] = useState(userTypeService.getDefaultRole());

  const handleRoleToggle = () => {
    const newUserType = userType === "jobSeeker" ? "recruiter" : "jobSeeker";
    userTypeService.setDefaultRole(newUserType);
    setUserType(newUserType);
  };

  // Password Toggle
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  // AOS Animation
  useEffect(() => {
    Aos.init({
      duration: 500,
      once: true,
    });
  }, []);
  return (
    <>
      <Box className="login-wrapper">
        <Box className="header-block">
          <Link
            to={ROUTES.Blank}
            title="TalentHub"
            className="logo"
            data-aos="zoom-in"
          >
            <Avatar className="img-auto" alt="TalentHub" src={LoginLogo} />
          </Link>
          <Button
            onClick={handleRoleToggle}
            variant="outlined"
            data-aos="zoom-in"
            data-aos-delay="100"
            className="user-toggle-btn"
          >
            {userType === "jobSeeker"
              ? "Login As Recruiter"
              : "Login As JobSeeker"}
          </Button>
        </Box>
        <Box className="login-content">
          <Grid container spacing={2}>
            <Grid
              item
              xs={12}
              md
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: { xs: "center", md: "start" },
              }}
            >
              <Box className="login-left-content">
                <Box className="content-text">
                  <Typography
                    variant="body1"
                    data-aos="zoom-in-up"
                    data-aos-delay="100"
                  >
                    {userType === "jobSeeker"
                      ? "Dive into a world of endless career prospects."
                      : "Access to a Great professionals to elevate your projects."}
                  </Typography>
                  <Typography
                    variant="h1"
                    data-aos="zoom-in-up"
                    data-aos-delay="200"
                  >
                    {userType === "jobSeeker"
                      ? "Your dream job awaits"
                      : "Find skilled individuals"}
                  </Typography>
                </Box>
                <div data-aos="zoom-in" data-aos-delay="300">
                  <Avatar
                    className={`img-auto banner-img ${
                      userType === "jobSeeker"
                        ? "jobSeeker-banner"
                        : "recruiter-banner"
                    }`}
                    variant="square"
                    src={
                      userType === "jobSeeker"
                        ? seekersLoginBanner
                        : recruiterLoginBanner
                    }
                    alt={
                      userType === "jobSeeker"
                        ? "Job Seeker Banner"
                        : "Recruiter Banner"
                    }
                  />
                </div>
              </Box>
            </Grid>
            <Grid item xs={12} md>
              <Box
                className="login-form"
                data-aos="zoom-in"
                data-aos-delay="450"
              >
                <Typography variant="h2" textAlign="center">
                  {userType === "jobSeeker"
                    ? "JobSeeker Login"
                    : "Recruiter Login"}
                </Typography>
                <Button
                  variant="outlined"
                  fullWidth
                  color="info"
                  className="rounded"
                  startIcon={<Avatar src={googleIcon} />}
                >
                  Sign in with Google
                </Button>
                <Typography textAlign="center" className="seprator">
                  <Typography variant="caption">
                    or continue with email
                  </Typography>
                </Typography>
                <TextField label="Email Id" type="email"></TextField>
                <FormControl variant="outlined">
                  <InputLabel htmlFor="password">Password</InputLabel>
                  <OutlinedInput
                    id="password"
                    type={showPassword ? "text" : "password"}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                          color="primary"
                        >
                          <Avatar
                            alt={
                              showPassword ? "Hide Password" : "Show Password"
                            }
                            src={
                              showPassword ? hidePasswordIcon : showPasswordIcon
                            }
                          />
                        </IconButton>
                      </InputAdornment>
                    }
                    label="Password"
                  />
                </FormControl>
                <Button
                  component={Link}
                  to={
                    userType === "jobSeeker"
                      ? ROUTES.JobSeekerDashboard
                      : ROUTES.RecruiterDashboard
                  }
                  variant="contained"
                  fullWidth
                  disableElevation
                >
                  Login
                </Button>
                <Typography textAlign="center" sx={{ pb: 0.5 }}>
                  <Link to={ROUTES.Blank} className="primary-link">
                    Forgot Password?
                  </Link>
                </Typography>
                <Typography
                  textAlign="center"
                  className="sign-up-text"
                  sx={{ pb: 0 }}
                >
                  New to TalentHub?{" "}
                  <Link
                    to={
                      userType === "jobSeeker"
                        ? ROUTES.JobSeekerRegistration
                        : ROUTES.RecruiterRegistration
                    }
                    className="primary-link"
                  >
                    Sign Up Now!
                  </Link>
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};
export default Login;
