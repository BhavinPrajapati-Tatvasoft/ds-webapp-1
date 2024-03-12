import {
  Avatar,
  Button,
  Card,
  Divider,
  FormControl,
  Grid,
  Hidden,
  IconButton,
  InputAdornment,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import {
  LoginLogo,
  closeIcon,
  hidePasswordIcon,
  plusPrimaryIcon,
  showPasswordIcon,
} from "../../../assets/images";
import { useEffect, useState } from "react";
import { ROUTES } from "../../../Shared/route";
import Aos from "aos";

const RecruiterRegister: React.FC = () => {
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
      <div className="recruiter-sign-up-outer">
        <div className="header-block">
          <Link
            to={ROUTES.RecruiterDashboard}
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
          <Typography
            variant="h2"
            sx={{ pb: { xs: 2, md: 3 } }}
            data-aos="fade-in"
            data-aos-delay="200"
          >
            Create an account
          </Typography>
          <Grid container spacing={{ xs: 2, md: 2.5, xl: 4 }}>
            <Grid item xs={12} md={5} data-aos="fade-in" data-aos-delay="300">
              <Card sx={{ pb: { xs: 1 }, height: "100%" }}>
                <Typography variant="h4" sx={{ pb: { xs: 1.5, sm: 2, lg: 3 } }}>
                  Personal Details
                </Typography>
                <Grid container spacing={{ xs: 2, md: 3 }}>
                  <Grid item xs={12} lg={6}>
                    <TextField
                      label="Full Name"
                      defaultValue="Jonh"
                      sx={{ mb: { xs: 0 } }}
                    />
                  </Grid>
                  <Grid item xs={12} lg={6}>
                    <TextField label="Last Name" defaultValue="Walker" />
                  </Grid>
                </Grid>
                <TextField label="Email ID" type="email" />
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
                              showPassword1 ? "Hide Password" : "Show Password"
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
                  <InputLabel htmlFor="cpassword">Confirm Password</InputLabel>
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
                              showPassword2 ? "Hide Password" : "Show Password"
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
                <Grid container spacing={{ xs: 2, xl: 3 }}>
                  <Grid item xs="auto">
                    <FormControl sx={{ minWidth: 90 }}>
                      <Select defaultValue={1}>
                        <MenuItem value={1}>+91</MenuItem>
                        <MenuItem value={2}>+92</MenuItem>
                        <MenuItem value={3}>+93</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs>
                    <TextField label="Mobile Number" />
                  </Grid>
                </Grid>
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
                <Hidden mdDown>
                  <Divider sx={{ pt: 0.75 }} />
                </Hidden>
                <Typography
                  variant="h4"
                  sx={{
                    pb: { xs: 1.5, sm: 2, lg: 3 },
                    pt: { xs: 0.5, sm: 1, md: 2.5 },
                  }}
                >
                  Achievements
                </Typography>
                <TextField multiline label="Description" rows={5} />
                <FormControl>
                  <InputLabel id="yearOfAchievement">
                    Year of Achievement
                  </InputLabel>
                  <Select
                    labelId="yearOfAchievement"
                    label="Year of Achievement"
                  >
                    <MenuItem value={1}>Option 1</MenuItem>
                    <MenuItem value={2}>Option 2</MenuItem>
                    <MenuItem value={3}>Option 3</MenuItem>
                  </Select>
                </FormControl>
                <Button
                  variant="text"
                  startIcon={<Avatar src={plusPrimaryIcon} alt="Add" />}
                >
                  Add More
                </Button>
              </Card>
            </Grid>
            <Grid item xs={12} md={7} data-aos="fade-in" data-aos-delay="400">
              <Card sx={{ height: "100%" }}>
                <Typography variant="h4" sx={{ pb: { xs: 1.5, sm: 2, lg: 3 } }}>
                  Professional Details
                </Typography>
                <Grid
                  container
                  spacing={{ xs: 2, xl: 3 }}
                  sx={{ pb: { xs: 3, md: 4 } }}
                >
                  <Grid item xs={12} lg={6}>
                    <TextField
                      label="Current Comapny Name"
                      sx={{ mb: { xs: 0 } }}
                    />
                  </Grid>
                  <Grid item xs={12} lg={6}>
                    <TextField
                      label="Current Designation"
                      sx={{ mb: { xs: 0 } }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} lg={4}>
                    <FormControl sx={{ mb: { xs: 0 } }}>
                      <InputLabel id="from">From</InputLabel>
                      <Select labelId="from" label="From">
                        <MenuItem value={1}>Option 1</MenuItem>
                        <MenuItem value={2}>Option 2</MenuItem>
                        <MenuItem value={3}>Option 3</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} sm={6} lg={4}>
                    <FormControl sx={{ mb: { xs: 0 } }}>
                      <InputLabel id="to">To</InputLabel>
                      <Select labelId="to" label="To">
                        <MenuItem value={1}>Option 1</MenuItem>
                        <MenuItem value={2}>Option 2</MenuItem>
                        <MenuItem value={3}>Option 3</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                </Grid>
                <Typography variant="h4" sx={{ pb: { xs: 1.5, sm: 2, lg: 3 } }}>
                  Company Address
                </Typography>
                <Grid container spacing={{ xs: 2, xl: 3 }}>
                  <Grid item xs={12} xl={6}>
                    <TextField label="Address 1" sx={{ mb: { xs: 0 } }} />
                  </Grid>
                  <Grid item xs={12} xl={6}>
                    <TextField label="Address 2" sx={{ mb: { xs: 0 } }} />
                  </Grid>
                  <Grid item xs={12} sm={6} lg={4} xl={3}>
                    <TextField label="City" sx={{ mb: { xs: 0 } }} />
                  </Grid>
                  <Grid item xs={12} sm={6} lg={4} xl={3}>
                    <TextField label="State" sx={{ mb: { xs: 0 } }} />
                  </Grid>
                  <Grid item xs={12} sm={6} lg={4} xl={3}>
                    <TextField label="Country" sx={{ mb: { xs: 0 } }} />
                  </Grid>
                  <Grid item xs={12} sm={6} lg={4} xl={3}>
                    <TextField label="Zipcode" sx={{ mb: { xs: 0 } }} />
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    sx={{ display: "flex", justifyContent: "flex-end" }}
                  >
                    <Button startIcon={<Avatar src={plusPrimaryIcon} />}>
                      Add Previous Company
                    </Button>
                  </Grid>
                </Grid>
                <Divider
                  sx={{ pt: { xs: 1.5, lg: 2.5 }, mb: { xs: 3, lg: 4 } }}
                />
                <Typography variant="h4" sx={{ pb: { xs: 1.5, sm: 2, lg: 3 } }}>
                  Hiring Preferences
                </Typography>
                <Grid container spacing={{ xs: 2, xl: 3 }} sx={{ pb: 3 }}>
                  <Grid item xs={12} lg={6}>
                    <FormControl sx={{ mb: { xs: 0 } }}>
                      <InputLabel id="total-exp">
                        Total Experience in Hiring
                      </InputLabel>
                      <Select
                        labelId="total-exp"
                        label="Total Experience in Hiring"
                      >
                        <MenuItem value={1}>Option 1</MenuItem>
                        <MenuItem value={2}>Option 2</MenuItem>
                        <MenuItem value={3}>Option 3</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} sm={6} lg={3}>
                    <FormControl sx={{ mb: { xs: 0 } }}>
                      <InputLabel id="hiring-for">Hiring For</InputLabel>
                      <Select labelId="hiring-for" label="Hiring For">
                        <MenuItem value={1}>Option 1</MenuItem>
                        <MenuItem value={2}>Option 2</MenuItem>
                        <MenuItem value={3}>Option 3</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} sm={6} lg={3}>
                    <TextField label="Referal Code" sx={{ mb: { xs: 0 } }} />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <FormControl sx={{ mb: { xs: 0 } }}>
                      <InputLabel id="industry">Industry</InputLabel>
                      <Select labelId="industry" label="Industry">
                        <MenuItem value={1}>Option 1</MenuItem>
                        <MenuItem value={2}>Option 2</MenuItem>
                        <MenuItem value={3}>Option 3</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <FormControl sx={{ mb: { xs: 0 } }}>
                      <InputLabel id="position">Position</InputLabel>
                      <Select labelId="position" label="Position">
                        <MenuItem value={1}>Option 1</MenuItem>
                        <MenuItem value={2}>Option 2</MenuItem>
                        <MenuItem value={3}>Option 3</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      label="Skills I hire for"
                      sx={{ mb: { xs: 0 } }}
                    />
                  </Grid>
                </Grid>
                <Button
                  variant="contained"
                  component={Link}
                  to={ROUTES.RecruiterDashboard}
                >
                  Submit
                </Button>
              </Card>
            </Grid>
          </Grid>
        </div>
      </div>
    </>
  );
};

export default RecruiterRegister;
