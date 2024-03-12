import {
  Avatar,
  Button,
  Card,
  Checkbox,
  FormControl,
  FormControlLabel,
  Grid,
  IconButton,
  InputLabel,
  Menu,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import {
  googleLgIcon,
  linkedInLgIcon,
  saveIcon,
  selectArrowDarkIcon,
  youtubeLgIcon,
} from "../../../assets/images";
import Aos from "aos";

const JobSeekerJobs: React.FC = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
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
      <Grid container spacing={{ xs: 2, lg: 3 }}>
        <Grid item xs={12} xl={8}>
          <Card className="list-card" data-aos="fade-in" data-aos-delay="100">
            <Button
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
              className="title-color"
              color="info"
              size="small"
            >
              All Jobs
              <Avatar sx={{ ml: 1 }} src={selectArrowDarkIcon} alt="Select" />
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem onClick={handleClose}>All Jobs</MenuItem>
              <MenuItem onClick={handleClose}>Saved</MenuItem>
              <MenuItem onClick={handleClose}>Applied</MenuItem>
            </Menu>
            <ul className="job-list">
              <li className="job-list-item">
                <Grid container spacing={{ xs: 1.5, sm: 2 }}>
                  <Grid item xs="auto">
                    <div className="jobs-icon-lg">
                      <Avatar src={youtubeLgIcon} alt="YouTube" />
                    </div>
                  </Grid>
                  <Grid item xs>
                    <Typography variant="h6" className="pb-0">
                      Frontend Developer
                    </Typography>
                    <Typography
                      variant="body2"
                      className="text-color"
                      sx={{ pb: 1.5 }}
                    >
                      Youtube
                    </Typography>
                    <Typography
                      variant="body2"
                      className="text-color job-type pb-0"
                    >
                      <span>New York</span>
                      <span>On-Site</span>
                      <span>Full Time</span>
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm="auto">
                    <Grid container spacing={2} justifyContent="end">
                      <Grid item xs="auto">
                        <Button variant="outlined" size="small">
                          Apply
                        </Button>
                      </Grid>
                      <Grid item xs="auto">
                        <IconButton size="small" color="primary">
                          <Avatar src={saveIcon} alt="Save" />
                        </IconButton>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </li>
              <li className="job-list-item">
                <Grid container spacing={{ xs: 1.5, sm: 2 }}>
                  <Grid item xs="auto">
                    <div className="jobs-icon-lg">
                      <Avatar src={googleLgIcon} alt="Google" />
                    </div>
                  </Grid>
                  <Grid item xs>
                    <Typography variant="h6" className="pb-0">
                      Ui/Ux Designer
                    </Typography>
                    <Typography
                      variant="body2"
                      className="text-color"
                      sx={{ pb: 1.5 }}
                    >
                      Google
                    </Typography>
                    <Typography
                      variant="body2"
                      className="text-color job-type pb-0"
                    >
                      <span>New York</span>
                      <span>Remote</span>
                      <span>Internship</span>
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm="auto">
                    <Grid container spacing={2} justifyContent="end">
                      <Grid item xs="auto">
                        <Button variant="outlined" size="small">
                          Apply
                        </Button>
                      </Grid>
                      <Grid item xs="auto">
                        <IconButton size="small" color="primary">
                          <Avatar src={saveIcon} alt="Save" />
                        </IconButton>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </li>
              <li className="job-list-item">
                <Grid container spacing={{ xs: 1.5, sm: 2 }}>
                  <Grid item xs="auto">
                    <div className="jobs-icon-lg">
                      <Avatar src={linkedInLgIcon} alt="LinkedIn" />
                    </div>
                  </Grid>
                  <Grid item xs>
                    <Typography variant="h6" className="pb-0">
                      Marketing Developer
                    </Typography>
                    <Typography
                      variant="body2"
                      className="text-color"
                      sx={{ pb: 1.5 }}
                    >
                      LinkedIn
                    </Typography>
                    <Typography
                      variant="body2"
                      className="text-color job-type pb-0"
                    >
                      <span>New York</span>
                      <span>On-site</span>
                      <span>Full time</span>
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm="auto">
                    <Grid container spacing={2} justifyContent="end">
                      <Grid item xs="auto">
                        <Button variant="outlined" size="small">
                          Apply
                        </Button>
                      </Grid>
                      <Grid item xs="auto">
                        <IconButton size="small" color="primary">
                          <Avatar src={saveIcon} alt="Save" />
                        </IconButton>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </li>
              <li className="job-list-item">
                <Grid container spacing={{ xs: 1.5, sm: 2 }}>
                  <Grid item xs="auto">
                    <div className="jobs-icon-lg">
                      <Avatar src={youtubeLgIcon} alt="YouTube" />
                    </div>
                  </Grid>
                  <Grid item xs>
                    <Typography variant="h6" className="pb-0">
                      Frontend Developer
                    </Typography>
                    <Typography
                      variant="body2"
                      className="text-color"
                      sx={{ pb: 1.5 }}
                    >
                      Youtube
                    </Typography>
                    <Typography
                      variant="body2"
                      className="text-color job-type pb-0"
                    >
                      <span>New York</span>
                      <span>On-Site</span>
                      <span>Full Time</span>
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm="auto">
                    <Grid container spacing={2} justifyContent="end">
                      <Grid item xs="auto">
                        <Button variant="outlined" size="small">
                          Apply
                        </Button>
                      </Grid>
                      <Grid item xs="auto">
                        <IconButton size="small" color="primary">
                          <Avatar src={saveIcon} alt="Save" />
                        </IconButton>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </li>
              <li className="job-list-item">
                <Grid container spacing={{ xs: 1.5, sm: 2 }}>
                  <Grid item xs="auto">
                    <div className="jobs-icon-lg">
                      <Avatar src={linkedInLgIcon} alt="LinkedIn" />
                    </div>
                  </Grid>
                  <Grid item xs>
                    <Typography variant="h6" className="pb-0">
                      Marketing Developer
                    </Typography>
                    <Typography
                      variant="body2"
                      className="text-color"
                      sx={{ pb: 1.5 }}
                    >
                      LinkedIn
                    </Typography>
                    <Typography
                      variant="body2"
                      className="text-color job-type pb-0"
                    >
                      <span>New York</span>
                      <span>On-site</span>
                      <span>Full time</span>
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm="auto">
                    <Grid container spacing={2} justifyContent="end">
                      <Grid item xs="auto">
                        <Button variant="outlined" size="small">
                          Apply
                        </Button>
                      </Grid>
                      <Grid item xs="auto">
                        <IconButton size="small" color="primary">
                          <Avatar src={saveIcon} alt="Save" />
                        </IconButton>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </li>
              <li className="job-list-item">
                <Grid container spacing={{ xs: 1.5, sm: 2 }}>
                  <Grid item xs="auto">
                    <div className="jobs-icon-lg">
                      <Avatar src={youtubeLgIcon} alt="YouTube" />
                    </div>
                  </Grid>
                  <Grid item xs>
                    <Typography variant="h6" className="pb-0">
                      Frontend Developer
                    </Typography>
                    <Typography
                      variant="body2"
                      className="text-color"
                      sx={{ pb: 1.5 }}
                    >
                      Youtube
                    </Typography>
                    <Typography
                      variant="body2"
                      className="text-color job-type pb-0"
                    >
                      <span>New York</span>
                      <span>Remote</span>
                      <span>Internship</span>
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm="auto">
                    <Grid container spacing={2} justifyContent="end">
                      <Grid item xs="auto">
                        <Button variant="outlined" size="small">
                          Apply
                        </Button>
                      </Grid>
                      <Grid item xs="auto">
                        <IconButton size="small" color="primary">
                          <Avatar src={saveIcon} alt="Save" />
                        </IconButton>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </li>
              <li className="job-list-item">
                <Grid container spacing={{ xs: 1.5, sm: 2 }}>
                  <Grid item xs="auto">
                    <div className="jobs-icon-lg">
                      <Avatar src={linkedInLgIcon} alt="LinkedIn" />
                    </div>
                  </Grid>
                  <Grid item xs>
                    <Typography variant="h6" className="pb-0">
                      Marketing Developer
                    </Typography>
                    <Typography
                      variant="body2"
                      className="text-color"
                      sx={{ pb: 1.5 }}
                    >
                      LinkedIn
                    </Typography>
                    <Typography
                      variant="body2"
                      className="text-color job-type pb-0"
                    >
                      <span>New York</span>
                      <span>On-site</span>
                      <span>Full time</span>
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm="auto">
                    <Grid container spacing={2} justifyContent="end">
                      <Grid item xs="auto">
                        <Button variant="outlined" size="small">
                          Apply
                        </Button>
                      </Grid>
                      <Grid item xs="auto">
                        <IconButton size="small" color="primary">
                          <Avatar src={saveIcon} alt="Save" />
                        </IconButton>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </li>
              <li className="job-list-item">
                <Grid container spacing={{ xs: 1.5, sm: 2 }}>
                  <Grid item xs="auto">
                    <div className="jobs-icon-lg">
                      <Avatar src={googleLgIcon} alt="Google" />
                    </div>
                  </Grid>
                  <Grid item xs>
                    <Typography variant="h6" className="pb-0">
                      Ui/Ux Designer
                    </Typography>
                    <Typography
                      variant="body2"
                      className="text-color"
                      sx={{ pb: 1.5 }}
                    >
                      Google
                    </Typography>
                    <Typography
                      variant="body2"
                      className="text-color job-type pb-0"
                    >
                      <span>New York</span>
                      <span>Remote</span>
                      <span>Internship</span>
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm="auto">
                    <Grid container spacing={2} justifyContent="end">
                      <Grid item xs="auto">
                        <Button variant="outlined" size="small">
                          Apply
                        </Button>
                      </Grid>
                      <Grid item xs="auto">
                        <IconButton size="small" color="primary">
                          <Avatar src={saveIcon} alt="Save" />
                        </IconButton>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </li>
            </ul>
          </Card>
        </Grid>
        <Grid item xs={12} xl={4}>
          <Card sx={{ mb: 3 }} data-aos="fade-in" data-aos-delay="200">
            <Grid
              container
              spacing={2}
              sx={{ pb: { xs: 2, md: 3, lg: 4 } }}
              alignItems="center"
              justifyContent="space-between"
            >
              <Grid item xs="auto">
                <Typography variant="h4" sx={{ pb: 0 }}>
                  Filters
                </Typography>
              </Grid>
              <Grid item xs="auto">
                <Button variant="outlined" size="small">
                  Clear
                </Button>
              </Grid>
            </Grid>
            <Grid container spacing={2.5}>
              <Grid item xs={12} md={6} xl={12}>
                <TextField
                  sx={{ mb: { xs: 0 } }}
                  select
                  helperText="Up to 3 only"
                  label="Roles"
                >
                  <MenuItem value={1}>Option 1</MenuItem>
                  <MenuItem value={2}>Option 2</MenuItem>
                  <MenuItem value={3}>Option 3</MenuItem>
                </TextField>
              </Grid>
              <Grid item xs={12} md={6} xl={12}>
                <FormControl sx={{ mb: { xs: 0 } }}>
                  <InputLabel id="jobType">Job Type</InputLabel>
                  <Select labelId="jobType" label="Job Type">
                    <MenuItem value={1}>Option 1</MenuItem>
                    <MenuItem value={2}>Option 2</MenuItem>
                    <MenuItem value={3}>Option 3</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} md={6} xl={12}>
                <FormControl sx={{ mb: { xs: 0 } }}>
                  <InputLabel id="skills">Skills</InputLabel>
                  <Select labelId="skills" label="Skills">
                    <MenuItem value={1}>Option 1</MenuItem>
                    <MenuItem value={2}>Option 2</MenuItem>
                    <MenuItem value={3}>Option 3</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} md={6} xl={12}>
                <FormControl sx={{ mb: { xs: 0 } }}>
                  <InputLabel id="minExperience">Min Experience</InputLabel>
                  <Select labelId="minExperience" label="Min Experience">
                    <MenuItem value={1}>Option 1</MenuItem>
                    <MenuItem value={2}>Option 2</MenuItem>
                    <MenuItem value={3}>Option 3</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} md={6} xl={12}>
                <FormControl sx={{ mb: { xs: 0 } }}>
                  <InputLabel id="maxExperience">Max Experience</InputLabel>
                  <Select labelId="maxExperience" label="Max Experience">
                    <MenuItem value={1}>Option 1</MenuItem>
                    <MenuItem value={2}>Option 2</MenuItem>
                    <MenuItem value={3}>Option 3</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} md={6} xl={12}>
                <FormControl sx={{ mb: { xs: 0 } }}>
                  <InputLabel id="country">Country</InputLabel>
                  <Select labelId="country" label="Country">
                    <MenuItem value={1}>Option 1</MenuItem>
                    <MenuItem value={2}>Option 2</MenuItem>
                    <MenuItem value={3}>Option 3</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} md={6} xl={12}>
                <FormControlLabel
                  sx={{ mt: -1 }}
                  control={<Checkbox />}
                  label="Remote Only"
                />
              </Grid>
            </Grid>
          </Card>
          <Card sx={{ p: 2, pb: 0.5 }} data-aos="fade-in" data-aos-delay="300">
            <Typography variant="h4" sx={{ pb: 1 }}>
              Complete Basic Profile
            </Typography>
            <Typography variant="body1" sx={{ pb: 0 }} className="text-color">
              Make sure you add website, profile tags and social links.
            </Typography>
            <Button variant="text" sx={{ ml: "-6px" }}>
              Update Profile
            </Button>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};
export default JobSeekerJobs;
