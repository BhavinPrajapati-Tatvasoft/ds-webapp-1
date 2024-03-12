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
  candidate1,
  candidate2,
  candidate3,
  candidate4,
  candidate5,
  candidate6,
  saveIcon,
  selectArrowDarkIcon,
} from "../../../assets/images";
import Aos from "aos";

const RecruiterCandidates: React.FC = () => {
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
            All Candidates
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
                <Grid item xs={2} sm="auto">
                  <Avatar src={candidate1} alt="User" className="img-auto" />
                </Grid>
                <Grid item xs={10} sm>
                  <Typography variant="h6" className="pb-0">
                    Anmol Sharma
                  </Typography>
                  <Typography
                    variant="body2"
                    className="text-color"
                    sx={{ pb: 1.5 }}
                  >
                    Marketing Manager
                  </Typography>
                  <Typography
                    variant="body2"
                    className="label-color job-type pb-0"
                  >
                    <span>3.5 Years of Experience</span>
                    <span>On-Site</span>
                    <span>Full Time</span>
                  </Typography>
                </Grid>
                <Grid item xs={12} sm="auto" sx={{ ml: "auto" }}>
                  <Grid container spacing={2} justifyContent="end">
                    <Grid item xs="auto">
                      <Button variant="contained" size="small">
                        Send Message
                      </Button>
                    </Grid>
                    <Grid item xs="auto">
                      <Button variant="outlined" size="small">
                        View Resume
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
                <Grid item xs={2} sm="auto">
                  <Avatar src={candidate2} alt="User" className="img-auto" />
                </Grid>
                <Grid item xs={10} sm>
                  <Typography variant="h6" className="pb-0">
                    Sankar Maoon
                  </Typography>
                  <Typography
                    variant="body2"
                    className="text-color"
                    sx={{ pb: 1.5 }}
                  >
                    Product Desiger
                  </Typography>
                  <Typography
                    variant="body2"
                    className="label-color job-type pb-0"
                  >
                    <span>3.5 Years of Experience</span>
                    <span>Remote</span>
                    <span>Internship</span>
                  </Typography>
                </Grid>
                <Grid item xs={12} sm="auto" sx={{ ml: "auto" }}>
                  <Grid container spacing={2} justifyContent="end">
                    <Grid item xs="auto">
                      <Button variant="contained" size="small">
                        Send Message
                      </Button>
                    </Grid>
                    <Grid item xs="auto">
                      <Button variant="outlined" size="small">
                        View Resume
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
                <Grid item xs={2} sm="auto">
                  <Avatar
                    src={candidate3}
                    alt="Dkiin Janee"
                    className="img-auto"
                  />
                </Grid>
                <Grid item xs={10} sm>
                  <Typography variant="h6" className="pb-0">
                    Dkiin Janee
                  </Typography>
                  <Typography
                    variant="body2"
                    className="text-color"
                    sx={{ pb: 1.5 }}
                  >
                    Ui/Ux Designer
                  </Typography>
                  <Typography
                    variant="body2"
                    className="label-color job-type pb-0"
                  >
                    <span>3.5 Years of Experience</span>
                    <span>On-site</span>
                    <span>Full time</span>
                  </Typography>
                </Grid>
                <Grid item xs={12} sm="auto" sx={{ ml: "auto" }}>
                  <Grid container spacing={2} justifyContent="end">
                    <Grid item xs="auto">
                      <Button variant="contained" size="small">
                        Send Message
                      </Button>
                    </Grid>
                    <Grid item xs="auto">
                      <Button variant="outlined" size="small">
                        View Resume
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
                <Grid item xs={2} sm="auto">
                  <Avatar
                    src={candidate4}
                    alt="Jimee jikee"
                    className="img-auto"
                  />
                </Grid>
                <Grid item xs={10} sm>
                  <Typography variant="h6" className="pb-0">
                    Jimee jikee
                  </Typography>
                  <Typography
                    variant="body2"
                    className="text-color"
                    sx={{ pb: 1.5 }}
                  >
                    Ui/Ux Designer
                  </Typography>
                  <Typography
                    variant="body2"
                    className="label-color job-type pb-0"
                  >
                    <span>3.5 Years of Experience</span>
                    <span>Remote</span>
                    <span>Internship</span>
                  </Typography>
                </Grid>
                <Grid item xs={12} sm="auto" sx={{ ml: "auto" }}>
                  <Grid container spacing={2} justifyContent="end">
                    <Grid item xs="auto">
                      <Button variant="contained" size="small">
                        Send Message
                      </Button>
                    </Grid>
                    <Grid item xs="auto">
                      <Button variant="outlined" size="small">
                        View Resume
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
                <Grid item xs={2} sm="auto">
                  <Avatar
                    src={candidate5}
                    alt="Garbss jemiss"
                    className="img-auto"
                  />
                </Grid>
                <Grid item xs={10} sm>
                  <Typography variant="h6" className="pb-0">
                    Garbss jemiss
                  </Typography>
                  <Typography
                    variant="body2"
                    className="text-color"
                    sx={{ pb: 1.5 }}
                  >
                    Product Desiger
                  </Typography>
                  <Typography
                    variant="body2"
                    className="label-color job-type pb-0"
                  >
                    <span>3.5 Years of Experience</span>
                    <span>On-site</span>
                    <span>Full time</span>
                  </Typography>
                </Grid>
                <Grid item xs={12} sm="auto" sx={{ ml: "auto" }}>
                  <Grid container spacing={2} justifyContent="end">
                    <Grid item xs="auto">
                      <Button variant="contained" size="small">
                        Send Message
                      </Button>
                    </Grid>
                    <Grid item xs="auto">
                      <Button variant="outlined" size="small">
                        View Resume
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
                <Grid item xs={2} sm="auto">
                  <Avatar
                    src={candidate6}
                    alt="Smith Ian"
                    className="img-auto"
                  />
                </Grid>
                <Grid item xs={10} sm>
                  <Typography variant="h6" className="pb-0">
                    Smith Ian
                  </Typography>
                  <Typography
                    variant="body2"
                    className="text-color"
                    sx={{ pb: 1.5 }}
                  >
                    Marketing Manager
                  </Typography>
                  <Typography
                    variant="body2"
                    className="label-color job-type pb-0"
                  >
                    <span>3.5 Years of Experience</span>
                    <span>On-Site</span>
                    <span>Full Time</span>
                  </Typography>
                </Grid>
                <Grid item xs={12} sm="auto" sx={{ ml: "auto" }}>
                  <Grid container spacing={2} justifyContent="end">
                    <Grid item xs="auto">
                      <Button variant="contained" size="small">
                        Send Message
                      </Button>
                    </Grid>
                    <Grid item xs="auto">
                      <Button variant="outlined" size="small">
                        View Resume
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
                <Grid item xs={2} sm="auto">
                  <Avatar
                    src={candidate1}
                    alt="Sankar Maoon"
                    className="img-auto"
                  />
                </Grid>
                <Grid item xs={10} sm>
                  <Typography variant="h6" className="pb-0">
                    Sankar Maoon
                  </Typography>
                  <Typography
                    variant="body2"
                    className="text-color"
                    sx={{ pb: 1.5 }}
                  >
                    Ui/Ux Designer
                  </Typography>
                  <Typography
                    variant="body2"
                    className="label-color job-type pb-0"
                  >
                    <span>New York</span>
                    <span>On-site</span>
                    <span>Full time</span>
                  </Typography>
                </Grid>
                <Grid item xs={12} sm="auto" sx={{ ml: "auto" }}>
                  <Grid container spacing={2} justifyContent="end">
                    <Grid item xs="auto">
                      <Button variant="contained" size="small">
                        Send Message
                      </Button>
                    </Grid>
                    <Grid item xs="auto">
                      <Button variant="outlined" size="small">
                        View Resume
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
                <Grid item xs={2} sm="auto">
                  <Avatar
                    src={candidate4}
                    alt="Smith Ian"
                    className="img-auto"
                  />
                </Grid>
                <Grid item xs={10} sm>
                  <Typography variant="h6" className="pb-0">
                    Smith Ian
                  </Typography>
                  <Typography
                    variant="body2"
                    className="text-color"
                    sx={{ pb: 1.5 }}
                  >
                    Product Desiger
                  </Typography>
                  <Typography
                    variant="body2"
                    className="label-color job-type pb-0"
                  >
                    <span>New York</span>
                    <span>Remote</span>
                    <span>Internship</span>
                  </Typography>
                </Grid>
                <Grid item xs={12} sm="auto" sx={{ ml: "auto" }}>
                  <Grid container spacing={2} justifyContent="end">
                    <Grid item xs="auto">
                      <Button variant="contained" size="small">
                        Send Message
                      </Button>
                    </Grid>
                    <Grid item xs="auto">
                      <Button variant="outlined" size="small">
                        View Resume
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
  );
};
export default RecruiterCandidates;
