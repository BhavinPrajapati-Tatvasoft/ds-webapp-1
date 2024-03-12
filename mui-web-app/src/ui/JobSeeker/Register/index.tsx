import {
  Avatar,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Radio,
  RadioGroup,
  Select,
  Stepper,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { Link } from "react-router-dom";
import {
  LoginLogo,
  checkCheckedLgIcon,
  checkDefaultLgIcon,
  closeIcon,
  facebookIcon,
  googleIcon,
  hidePasswordIcon,
  showPasswordIcon,
  uploadIcon,
  urlIcon,
} from "../../../assets/images";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import React, { useEffect, useState } from "react";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { ROUTES } from "../../../Shared/route";
import Aos from "aos";

const JobSeekerRegister: React.FC = () => {
  let mdDown = useMediaQuery("(max-width:899px)");

  // Toggle Previous Employment Details
  const [previousEmployment, setPreviousEmployment] = useState(false);
  // Stepper
  const steps = [
    "Basic Details",
    "Professional Details",
    "Employment Details",
    "Job Preference",
    "Educattion Details",
  ];
  const [activeStep, setActiveStep] = React.useState(0);
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  // Password Toggle
  const [showPassword1, setShowPassword1] = useState(false);
  const handleClickShowPassword1 = () => setShowPassword1((show) => !show);
  const handleMouseDownPassword1 = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const [showPassword2, setShowPassword2] = useState(false);
  const handleClickShowPassword2 = () => setShowPassword2((show) => !show);
  const handleMouseDownPassword2 = (
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
      <div className="job-seeker-sign-up-outer">
        <div className="header-block">
          <Link
            to={ROUTES.Blank}
            title="TalentHub"
            className="logo"
            data-aos="zoom-in"
          >
            <Avatar className="img-auto" alt="TalentHub" src={LoginLogo} />
          </Link>
          <IconButton
            component={Link}
            to={ROUTES.Blank}
            data-aos="zoom-in"
            data-aos-delay="100"
          >
            <Avatar src={closeIcon} variant="square" />
          </IconButton>
        </div>
        <div className="inner-block">
          <Grid container spacing={2} rowSpacing={{ xs: 3, md: 2 }}>
            <Grid item xs={12} md="auto">
              <Stepper
                alternativeLabel={mdDown ? true : false}
                activeStep={activeStep}
                orientation={mdDown ? "horizontal" : "vertical"}
                data-aos="fade-in"
                data-aos-delay="200"
              >
                {steps.map((label) => {
                  const stepProps: { completed?: boolean } = {};
                  return (
                    <Step key={label} {...stepProps}>
                      <StepLabel>{label}</StepLabel>
                    </Step>
                  );
                })}
              </Stepper>
            </Grid>
            <Grid item xs={12} md>
              <div className="step-content-outer">
                <div
                  className="step-content-inner"
                  data-aos="fade-in"
                  data-aos-delay="300"
                >
                  {activeStep === 0 && (
                    <>
                      <Typography
                        variant="h2"
                        sx={{ pb: 1.5 }}
                        textAlign="center"
                      >
                        Create an account
                      </Typography>
                      <Typography
                        variant="body1"
                        className="info-text"
                        textAlign="center"
                      >
                        It only takes a couple of minutes to get started!
                      </Typography>
                      <Grid
                        container
                        spacing={{ xs: 2, xl: 3 }}
                        sx={{ pb: { xs: "24px", xl: "30px" } }}
                      >
                        <Grid item xs={12} sm={6}>
                          <Button
                            variant="outlined"
                            color="info"
                            fullWidth
                            className="rounded"
                            startIcon={<Avatar src={googleIcon} alt="Google" />}
                          >
                            Sign in with Google
                          </Button>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <Button
                            variant="outlined"
                            color="info"
                            fullWidth
                            className="rounded"
                            startIcon={
                              <Avatar src={facebookIcon} alt="Facebook" />
                            }
                          >
                            Sign in with Facebook
                          </Button>
                        </Grid>
                      </Grid>
                      <div className="fill-upload">
                        <div className="fill-upload-content">
                          <Typography className="primary-text" sx={{ pb: 0.5 }}>
                            Upload Resume
                          </Typography>
                          <Typography className="doc-type">
                            *Doc, Docx, RTF, PDF (Max file size - 6MB)
                          </Typography>
                        </div>
                        <Avatar src={uploadIcon} alt="File Upload" />
                        <input type="file" />
                      </div>
                      <Typography
                        variant="caption"
                        className="upload-info-text"
                      >
                        Profiles with resumes are 3x more likely to be noticed
                        by recruiters.
                      </Typography>
                      <FormControl variant="outlined">
                        <InputLabel htmlFor="linkedIn">
                          Share your linkedin profile url
                        </InputLabel>
                        <OutlinedInput
                          id="linkedIn"
                          endAdornment={
                            <InputAdornment position="end">
                              <IconButton
                                aria-label="toggle password visibility"
                                edge="end"
                                color="primary"
                              >
                                <Avatar
                                  alt="LinkedIn profile url"
                                  src={urlIcon}
                                />
                              </IconButton>
                            </InputAdornment>
                          }
                          label="Share your linkedin profile url"
                        />
                      </FormControl>
                      <TextField
                        label="Full Name"
                        required
                        value="Jonh Walker"
                      />
                      <TextField type="email" label="Email ID" required />
                      <FormControl variant="outlined">
                        <InputLabel htmlFor="password">Password</InputLabel>
                        <OutlinedInput
                          id="password"
                          type={showPassword1 ? "text" : "password"}
                          endAdornment={
                            <InputAdornment position="end">
                              <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword1}
                                onMouseDown={handleMouseDownPassword1}
                                edge="end"
                                color="primary"
                              >
                                <Avatar
                                  alt={
                                    showPassword1
                                      ? "Hide Password"
                                      : "Show Password"
                                  }
                                  src={
                                    showPassword1
                                      ? hidePasswordIcon
                                      : showPasswordIcon
                                  }
                                />
                              </IconButton>
                            </InputAdornment>
                          }
                          label="Password"
                        />
                      </FormControl>
                      <FormControl variant="outlined" required>
                        <InputLabel htmlFor="cpassword">
                          Confirm Password
                        </InputLabel>
                        <OutlinedInput
                          id="cpassword"
                          type={showPassword2 ? "text" : "password"}
                          endAdornment={
                            <InputAdornment position="end">
                              <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword2}
                                onMouseDown={handleMouseDownPassword2}
                                edge="end"
                                color="primary"
                              >
                                <Avatar
                                  alt={
                                    showPassword2
                                      ? "Hide Password"
                                      : "Show Password"
                                  }
                                  src={
                                    showPassword2
                                      ? hidePasswordIcon
                                      : showPasswordIcon
                                  }
                                />
                              </IconButton>
                            </InputAdornment>
                          }
                          label="Confirm Password"
                        />
                      </FormControl>
                      <FormControlLabel
                        sx={{ pb: "24px" }}
                        control={
                          <Checkbox
                            sx={{ alignSelf: "start" }}
                            defaultChecked
                          />
                        }
                        label="I agree to foundit’s Terms and Conditions, Privacy Policy and default mailer and communications settings governing the use of Talent.in."
                      />
                    </>
                  )}
                  {activeStep === 1 && (
                    <>
                      <Typography variant="h2" sx={{ pb: 1.5 }}>
                        Professional Details
                      </Typography>
                      <Typography variant="body1" className="info-text">
                        Help us understand you better
                      </Typography>
                      <div className="professional-details">
                        <FormControlLabel
                          control={
                            <Checkbox
                              icon={
                                <Avatar
                                  variant="square"
                                  src={checkDefaultLgIcon}
                                />
                              }
                              checkedIcon={
                                <Avatar
                                  variant="square"
                                  src={checkCheckedLgIcon}
                                />
                              }
                            />
                          }
                          label={
                            <>
                              <Typography className="experiance">
                                I am Experienced
                              </Typography>
                              <Typography className="experiance-info">
                                Have worked in an organization before
                              </Typography>
                            </>
                          }
                        />
                        <FormControlLabel
                          control={
                            <Checkbox
                              icon={
                                <Avatar
                                  variant="square"
                                  src={checkDefaultLgIcon}
                                />
                              }
                              checkedIcon={
                                <Avatar
                                  variant="square"
                                  src={checkCheckedLgIcon}
                                />
                              }
                            />
                          }
                          label={
                            <>
                              <Typography className="experiance">
                                I am Fresher
                              </Typography>
                              <Typography className="experiance-info">
                                Fresher
                              </Typography>
                            </>
                          }
                        />
                        <FormControlLabel
                          control={
                            <Checkbox
                              icon={
                                <Avatar
                                  variant="square"
                                  src={checkDefaultLgIcon}
                                />
                              }
                              checkedIcon={
                                <Avatar
                                  variant="square"
                                  src={checkCheckedLgIcon}
                                />
                              }
                            />
                          }
                          label={
                            <>
                              <Typography className="experiance">
                                I am Student
                              </Typography>
                              <Typography className="experiance-info">
                                Student
                              </Typography>
                            </>
                          }
                        />
                      </div>
                    </>
                  )}
                  {activeStep === 2 && (
                    <>
                      <Typography variant="h2" sx={{ pb: 1.5 }}>
                        Employment Details
                      </Typography>
                      <Typography variant="body1" className="info-text">
                        This is crucial for a recruiter to understand!
                      </Typography>
                      {previousEmployment && (
                        <>
                          <div className="employment-details-card">
                            <Grid
                              container
                              spacing={2}
                              sx={{ pb: 0.5 }}
                              alignItems="center"
                            >
                              <Grid item xs>
                                <Typography sx={{ pb: 0 }} variant="h6">
                                  2d Animator
                                </Typography>
                              </Grid>
                              <Grid item xs="auto">
                                <Button
                                  variant="text"
                                  size="small"
                                  sx={{ mr: -2 }}
                                  onClick={() => setPreviousEmployment(false)}
                                >
                                  Edit
                                </Button>
                              </Grid>
                            </Grid>
                            <Typography
                              className="text-color"
                              sx={{ pb: 0.75 }}
                            >
                              Zvalues HR Solutions
                            </Typography>
                            <Typography className="text-color" sx={{ pb: 0 }}>
                              Jan 2020 - Present
                            </Typography>
                          </div>
                          <Grid
                            container
                            spacing={{ xs: 1, sm: 2 }}
                            alignItems="center"
                            sx={{ py: { xs: 2, xl: 3.5 } }}
                          >
                            <Grid item xs>
                              <Typography variant="h4" sx={{ pb: 0 }}>
                                Add Previous Employment
                              </Typography>
                            </Grid>
                            <Grid item xs="auto">
                              <Button
                                variant="text"
                                size="small"
                                onClick={() => setPreviousEmployment(false)}
                              >
                                Remove
                              </Button>
                            </Grid>
                          </Grid>
                        </>
                      )}
                      <FormControl required>
                        <InputLabel id="current-designation">
                          Current Designation
                        </InputLabel>
                        <Select
                          labelId="current-designation"
                          label="Current Designation"
                        >
                          <MenuItem value={1}>Option 1</MenuItem>
                          <MenuItem value={2}>Option 2</MenuItem>
                          <MenuItem value={3}>Option 3</MenuItem>
                        </Select>
                      </FormControl>
                      <FormControl required>
                        <InputLabel id="company-name">Company Name</InputLabel>
                        <Select labelId="company-name" label="Company Name">
                          <MenuItem value={1}>Option 1</MenuItem>
                          <MenuItem value={2}>Option 2</MenuItem>
                          <MenuItem value={3}>Option 3</MenuItem>
                        </Select>
                      </FormControl>
                      <Grid container spacing={{ xs: 2, xl: 3 }}>
                        <Grid item xs={12} md={6}>
                          <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DemoContainer components={["DatePicker"]}>
                              <DatePicker label="Start Date*" />
                            </DemoContainer>
                          </LocalizationProvider>
                        </Grid>
                        <Grid item xs={12} md={6}>
                          <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DemoContainer components={["DatePicker"]}>
                              <DatePicker label="End Date*" />
                            </DemoContainer>
                          </LocalizationProvider>
                        </Grid>
                      </Grid>
                      <FormControlLabel
                        sx={{ pb: { xs: 1, md: 2 } }}
                        control={<Checkbox defaultChecked />}
                        label="Currently working here"
                      />
                      <TextField
                        sx={{ mb: 0 }}
                        label="Current Salary"
                        required
                      />
                      <FormControlLabel
                        sx={{ pb: { xs: 1, md: 2 } }}
                        control={<Checkbox defaultChecked />}
                        label="Hide my salary from potential employers"
                      />
                      <FormControl>
                        <InputLabel id="notice-period">
                          Notice Period
                        </InputLabel>
                        <Select labelId="notice-period" label="Notice Period">
                          <MenuItem value={1}>Option 1</MenuItem>
                          <MenuItem value={2}>Option 2</MenuItem>
                          <MenuItem value={3}>Option 3</MenuItem>
                        </Select>
                      </FormControl>
                    </>
                  )}
                  {activeStep === 3 && (
                    <>
                      <Typography variant="h2" sx={{ pb: 1.5 }}>
                        Job Preferences
                      </Typography>
                      <Typography variant="body1" className="info-text">
                        Helps to find better matching jobs
                      </Typography>
                      <TextField label="Key Skills" required />
                      <FormControl required>
                        <InputLabel id="industry">Industry</InputLabel>
                        <Select labelId="industry" label="Industry">
                          <MenuItem value={1}>Option 1</MenuItem>
                          <MenuItem value={2}>Option 2</MenuItem>
                          <MenuItem value={3}>Option 3</MenuItem>
                        </Select>
                      </FormControl>
                      <FormControl required>
                        <InputLabel id="department">Department</InputLabel>
                        <Select labelId="department" label="Department">
                          <MenuItem value={1}>Option 1</MenuItem>
                          <MenuItem value={2}>Option 2</MenuItem>
                          <MenuItem value={3}>Option 3</MenuItem>
                        </Select>
                      </FormControl>
                      <FormControl required>
                        <InputLabel id="preferredLocation">
                          Preferred Location
                        </InputLabel>
                        <Select
                          labelId="preferredLocation"
                          label="Preferred Location"
                        >
                          <MenuItem value={1}>Option 1</MenuItem>
                          <MenuItem value={2}>Option 2</MenuItem>
                          <MenuItem value={3}>Option 3</MenuItem>
                        </Select>
                      </FormControl>
                    </>
                  )}
                  {activeStep === 4 && (
                    <>
                      <Typography variant="h2" sx={{ pb: 1.5 }}>
                        Education Details
                      </Typography>
                      <Typography variant="body1" className="info-text">
                        Tell recruiters about your educational qualifications
                      </Typography>
                      <FormControl required>
                        <InputLabel id="school">School</InputLabel>
                        <Select labelId="school" label="School">
                          <MenuItem value={1}>Option 1</MenuItem>
                          <MenuItem value={2}>Option 2</MenuItem>
                          <MenuItem value={3}>Option 3</MenuItem>
                        </Select>
                      </FormControl>
                      <FormControl required>
                        <InputLabel id="degree">Degree</InputLabel>
                        <Select labelId="degree" label="Degree">
                          <MenuItem value={1}>Option 1</MenuItem>
                          <MenuItem value={2}>Option 2</MenuItem>
                          <MenuItem value={3}>Option 3</MenuItem>
                        </Select>
                      </FormControl>
                      <FormControl required>
                        <InputLabel id="fieldOfStudy">
                          Field of study
                        </InputLabel>
                        <Select labelId="fieldOfStudy" label="Field of study">
                          <MenuItem value={1}>Option 1</MenuItem>
                          <MenuItem value={2}>Option 2</MenuItem>
                          <MenuItem value={3}>Option 3</MenuItem>
                        </Select>
                      </FormControl>
                      <Grid
                        container
                        spacing={{ xs: 2, xl: 3 }}
                        sx={{ pb: { xs: 2, md: 3 } }}
                      >
                        <Grid item xs={12} md={6}>
                          <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DemoContainer components={["DatePicker"]}>
                              <DatePicker label="Start Date*" />
                            </DemoContainer>
                          </LocalizationProvider>
                        </Grid>
                        <Grid item xs={12} md={6}>
                          <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DemoContainer components={["DatePicker"]}>
                              <DatePicker label="End Date*" />
                            </DemoContainer>
                          </LocalizationProvider>
                        </Grid>
                      </Grid>
                      <FormControl required>
                        <InputLabel id="grade">Grade</InputLabel>
                        <Select labelId="grade" label="Grade">
                          <MenuItem value={1}>Option 1</MenuItem>
                          <MenuItem value={2}>Option 2</MenuItem>
                          <MenuItem value={3}>Option 3</MenuItem>
                        </Select>
                      </FormControl>
                      <FormControl sx={{ mb: 2 }} required>
                        <FormLabel id="educationType" sx={{ fontWeight: 500 }}>
                          Education Type
                        </FormLabel>
                        <RadioGroup
                          row
                          aria-labelledby="educationType"
                          name="education-type-group"
                          defaultValue="fullTime"
                        >
                          <FormControlLabel
                            value="fullTime"
                            control={<Radio />}
                            label="Full Time"
                          />
                          <FormControlLabel
                            value="partTime"
                            control={<Radio />}
                            label="Part Time"
                          />
                          <FormControlLabel
                            value="correspondence"
                            control={<Radio />}
                            label="Correspondence"
                          />
                        </RadioGroup>
                      </FormControl>
                    </>
                  )}
                  <React.Fragment>
                    <Grid container spacing={{ xs: 2, xl: 3 }}>
                      <Grid item xs="auto">
                        <Button
                          variant="contained"
                          onClick={handleNext}
                          component={Link}
                          to={
                            activeStep === steps.length - 1
                              ? ROUTES.JobSeekerDashboard
                              : ""
                          }
                        >
                          {activeStep === steps.length - 1
                            ? "Start Job Search"
                            : "Continue"}
                        </Button>
                      </Grid>
                      {activeStep === 2 && (
                        <Grid item xs="auto">
                          <Button
                            variant="outlined"
                            onClick={() => setPreviousEmployment(true)}
                          >
                            Add Previous Employment
                          </Button>
                        </Grid>
                      )}
                    </Grid>
                  </React.Fragment>
                </div>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    </>
  );
};

export default JobSeekerRegister;
