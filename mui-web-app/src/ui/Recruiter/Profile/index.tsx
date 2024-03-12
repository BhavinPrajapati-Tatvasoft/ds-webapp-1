import {
  Autocomplete,
  Avatar,
  Button,
  Card,
  Checkbox,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  FormControlLabel,
  Grid,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  Tab,
  Tabs,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import {
  aditProfile,
  bagIcon,
  callIcon,
  closeGreyIcon,
  closeIcon,
  designerProfile,
  dragIcon,
  editIcon,
  googleIcon,
  linkedInIcon,
  mailPrimaryIcon,
  plusPrimaryIcon,
  profileImgLG,
  schoolIconSm,
  universityIcon,
  youtubeIcon,
} from "../../../assets/images";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import Aos from "aos";
import { DragDropContext, Draggable, DropResult, Droppable } from "react-beautiful-dnd";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      className="tab-wrapper"
      {...other}
    >
      {value === index && <>{children}</>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const RecruiterProfile: React.FC = () => {
  // Edit Profile Dialog
  const [openEditProfile, setOpenEditProfile] = React.useState(false);
  const handleClickOpenEditProfile = () => {
    setOpenEditProfile(true);
  };
  const handleCloseEditProfile = () => {
    setOpenEditProfile(false);
  };

  // Edit About Dialog
  const [openEditAbout, setOpenEditAbout] = React.useState(false);
  const handleClickOpenEditAbout = () => {
    setOpenEditAbout(true);
  };
  const handleCloseEditAbout = () => {
    setOpenEditAbout(false);
  };

  // Edit Experienece Dialog
  const [openEditExperience, setOpenEditExperience] = React.useState(false);
  const handleClickOpenEditExperience = () => {
    setOpenEditExperience(true);
  };
  const handleCloseEditExperience = () => {
    setOpenEditExperience(false);
  };

  // Edit Certificaiton Dialog
  const [openEditCertificaiton, setOpenEditCertificaiton] =
    React.useState(false);
  const handleClickOpenEditCertificaiton = () => {
    setOpenEditCertificaiton(true);
  };
  const handleCloseEditCertificaiton = () => {
    setOpenEditCertificaiton(false);
  };

  // Edit Education Dialog
  const [openEditEducation, setOpenEditEducation] = React.useState(false);
  const handleClickOpenEditEducation = () => {
    setOpenEditEducation(true);
  };
  const handleCloseEditEducation = () => {
    setOpenEditEducation(false);
  };

  // Add Experienece Dialog
  const [openAddExperience, setOpenAddExperience] = React.useState(false);
  const handleClickOpenAddExperience = () => {
    setOpenAddExperience(true);
  };
  const handleCloseAddExperience = () => {
    setOpenAddExperience(false);
  };

  // Profile Tab
  const [value, setValue] = React.useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const skillsOption = ["Prototyping", "Figma", "Wireframe", "UX"];

  // AOS Animation
  useEffect(() => {
    Aos.init({
      duration: 500,
      once: true,
    });
  }, []);

  const [skills, setSkills] = useState([
    { id: "prototyping", content: "Prototyping" },
    { id: "figma", content: "Figma" },
    { id: "wireframe", content: "Wireframe" },
    { id: "ux", content: "Ux" },
  ]);

  const handleDragEnd = (result: DropResult) => {
    if (!result.destination) return;

    const reorderedSkills = Array.from(skills);
    const [reorderedSkill] = reorderedSkills.splice(result.source.index, 1);
    reorderedSkills.splice(result.destination.index, 0, reorderedSkill);

    // Update state with the reordered skills
    setSkills(reorderedSkills);
  };
  return (
    <>
      <Card
        sx={{ pt: { xs: 1, xl: 2 }, mb: 3 }}
        className="profile-info-card"
        data-aos="fade-in"
        data-aos-delay="100"
      >
        <Grid
          container
          spacing={2}
          alignItems="center"
          justifyContent="space-between"
          sx={{ pb: 1.5 }}
        >
          <Grid item xs="auto">
            <Typography variant="h4" className="pb-0">
              Profile
            </Typography>
          </Grid>
          <Grid item xs="auto">
            <Button
              variant="text"
              sx={{ mr: "-6px" }}
              onClick={handleClickOpenEditProfile}
            >
              Edit Profile
            </Button>
          </Grid>
        </Grid>
        <Grid
          container
          spacing={2}
          justifyContent="space-between"
          alignItems="center"
        >
          <Grid item xs={12} md="auto">
            <Grid container spacing={{ xs: 2, md: 2.5 }}>
              <Grid item xs="auto" alignSelf={{ xs: "center", sm: "start" }}>
                <Avatar
                  src={profileImgLG}
                  alt="Profile"
                  className="img-auto profile-img"
                />
              </Grid>
              <Grid item xs={12} sm="auto">
                <Typography variant="h5" sx={{ pb: 0.75 }}>
                  John Minee
                </Typography>
                <Typography
                  variant="body2"
                  className="text-color d-block"
                  sx={{ pb: 0.5 }}
                >
                  Ui/Ux Designer
                </Typography>
                <Typography
                  variant="caption"
                  className="label-color d-block"
                  sx={{ pb: 1.5 }}
                >
                  Anand, Gujarat, India
                </Typography>
                <Button variant="contained">Company Info</Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={6} md="auto">
            <Grid
              container
              spacing={{ xs: 2, lg: 3.75 }}
              flexDirection="column"
              justifyContent="space-between"
            >
              <Grid item xs="auto">
                <Grid container spacing={2} alignItems="center">
                  <Grid item xs="auto">
                    <div className="icon-outer">
                      <Avatar src={bagIcon} alt="Bag" />
                    </div>
                  </Grid>
                  <Grid item xs="auto">
                    <Typography variant="h6" className="pb-0">
                      Youtube
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs="auto">
                <Grid container spacing={2} alignItems="center">
                  <Grid item xs="auto">
                    <div className="icon-outer">
                      <Avatar src={universityIcon} alt="Bag" />
                    </div>
                  </Grid>
                  <Grid item xs="auto">
                    <Typography variant="h6" className="pb-0">
                      10k Designer University
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={6} md="auto">
            <Grid
              container
              spacing={{ xs: 2, lg: 3.75 }}
              flexDirection="column"
              justifyContent="space-between"
            >
              <Grid item xs="auto">
                <Grid container spacing={2} alignItems="center">
                  <Grid item xs="auto">
                    <div className="icon-outer">
                      <Avatar src={mailPrimaryIcon} alt="Mail" />
                    </div>
                  </Grid>
                  <Grid item xs="auto">
                    <Typography variant="h6" className="pb-0">
                      Jenne@gmail.com
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs="auto">
                <Grid container spacing={2} alignItems="center">
                  <Grid item xs="auto">
                    <div className="icon-outer">
                      <Avatar src={callIcon} alt="Bag" />
                    </div>
                  </Grid>
                  <Grid item xs="auto">
                    <Typography variant="h6" className="pb-0">
                      +01 2193011291
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Card>
      <Card sx={{ p: { xs: 0 } }} data-aos="fade-in" data-aos-delay="200">
        <div className="tabs-outer">
          <Tabs
            value={value}
            variant="scrollable"
            scrollButtons="auto"
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="About" {...a11yProps(0)} />
            <Tab label="Experience " {...a11yProps(1)} />
            <Tab label="Education" {...a11yProps(2)} />
            <Tab label="Certification & Skills" {...a11yProps(3)} />
          </Tabs>
        </div>
        <CustomTabPanel value={value} index={0}>
          <Grid container spacing={2}>
            <Grid item xs>
              <Typography variant="body1" className="text-color pb-0">
                Accumulating nearly 3 years of experience at Youtube and an
                alumni member of 10k designers, I have actively served as a
                UI/UX Designer, focusing on digital design and user experience
                enhancements. Hands-on experience in designing Website Layouts,
                Web Applications, and Mobile Applications. Team player with good
                listening skills and innovative ideas to make attractive designs
                Accumulating nearly 3 years of experience at Youtube and an
                alumni member of 10k designers, I have actively served as a
                UI/UX Designer, focusing on digital design and user experience
                enhancements. Hands-on experience in designing Website Layouts,
                Web Applications, and Mobile Applications. Team player with good
                listening skills and innovative ideas to make attractive designs
              </Typography>
            </Grid>
            <Grid item xs="auto">
              <IconButton
                color="primary"
                sx={{ m: "-8px" }}
                onClick={handleClickOpenEditAbout}
              >
                <Avatar src={editIcon} alt="Edit" />
              </IconButton>
            </Grid>
          </Grid>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <ul className="experiance-outer">
            <li>
              <Grid container spacing={{ xs: 1.5, sm: 2 }}>
                <Grid item xs="auto">
                  <div className="icon-outer-md">
                    <Avatar src={youtubeIcon} alt="YouTube" />
                  </div>
                </Grid>
                <Grid item xs>
                  <Grid container spacing={2}>
                    <Grid item xs>
                      <Typography variant="h5" className="pb-0">
                        Ui/Ux Designer
                      </Typography>
                      <Typography
                        variant="body2"
                        className="text-color dot-separator"
                        sx={{ pb: 1.25 }}
                      >
                        <span>Youtube</span>
                        <span>Full Time</span>
                      </Typography>
                    </Grid>
                    <Grid item xs="auto">
                      <IconButton
                        size="small"
                        color="primary"
                        onClick={handleClickOpenEditExperience}
                      >
                        <Avatar src={editIcon} alt="Edit" />
                      </IconButton>
                    </Grid>
                  </Grid>
                  <Typography
                    variant="body1"
                    className="label-color dot-separator pb-0"
                  >
                    <span>Jul 2020 - Present</span>
                    <span>3 Years</span>
                  </Typography>
                  <Typography
                    variant="body1"
                    className="label-color job-location dot-separator pb-0"
                  >
                    <span>Mumbai, Maharashtra, India</span>
                    <span>On-Site</span>
                  </Typography>
                </Grid>
              </Grid>
            </li>
            <li>
              <Grid container spacing={{ xs: 1.5, sm: 2 }}>
                <Grid item xs="auto">
                  <div className="icon-outer-md">
                    <Avatar src={linkedInIcon} alt="LinkedIn" />
                  </div>
                </Grid>
                <Grid item xs>
                  <Grid container spacing={2}>
                    <Grid item xs>
                      <Typography variant="h5" className="pb-0">
                        Ui/Ux Designer
                      </Typography>
                      <Typography
                        variant="body2"
                        className="text-color dot-separator"
                        sx={{ pb: 1.25 }}
                      >
                        <span>Linkdin</span>
                        <span>Full Time</span>
                      </Typography>
                    </Grid>
                    <Grid item xs="auto">
                      <IconButton
                        size="small"
                        color="primary"
                        onClick={handleClickOpenEditExperience}
                      >
                        <Avatar src={editIcon} alt="Edit" />
                      </IconButton>
                    </Grid>
                  </Grid>

                  <Typography
                    variant="body1"
                    className="label-color dot-separator pb-0"
                  >
                    <span>Jul 2017 - 2019</span>
                    <span>3 Years</span>
                  </Typography>
                  <Typography
                    variant="body1"
                    className="label-color job-location dot-separator pb-0"
                  >
                    <span>Mumbai, Maharashtra, India</span>
                    <span>On-Site</span>
                  </Typography>
                </Grid>
              </Grid>
            </li>
          </ul>
          <Button
            variant="text"
            startIcon={<Avatar src={plusPrimaryIcon} />}
            onClick={handleClickOpenAddExperience}
          >
            Add Experience
          </Button>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          <Grid
            container
            spacing={2.5}
            justifyContent={{ xs: "space-between", sm: "start" }}
          >
            <Grid item xs="auto">
              <Avatar
                src={designerProfile}
                alt="Profile"
                className="img-auto"
              />
            </Grid>
            <Grid item xs={12} sm order={{ xs: 2, sm: 1 }}>
              <Typography variant="h5" className="pb-0">
                10k Designer
              </Typography>
              <Typography
                variant="body2"
                className="text-color"
                sx={{ pb: 1.25 }}
              >
                Product Designer, Information Technology
              </Typography>
              <Typography variant="body1" className="label-color pb-0">
                2020 - 2023
              </Typography>
              <Typography
                variant="body1"
                className="label-color"
                sx={{ pb: 1.25 }}
              >
                Mumbai, Maharashtra, India
              </Typography>
              <Typography
                variant="body1"
                className="text-color"
                sx={{ pb: 1.5 }}
              >
                Become a part of 10kdesigners to learn and grow with a cohort of
                like-minded people. Worked on Various design Challenges,
                Including B2B and B2C mobile apps and websites.
              </Typography>
              <Typography
                variant="body1"
                className="flex-row skill-outer"
                sx={{ gap: "4px", pb: 1.25 }}
              >
                <span className="title-color fw-500">Skills:</span>
                <span className="dot-separator text-color">
                  <span>Prototyping</span>
                  <span>Figma (Software)</span>
                  <span>Wireframing</span>
                  <span>User Experience (UX)</span>
                  <span>User Interface Design</span>
                </span>
              </Typography>
            </Grid>
            <Grid item xs="auto" order={{ xs: 1, sm: 2 }}>
              <IconButton
                color="primary"
                onClick={handleClickOpenEditEducation}
              >
                <Avatar src={editIcon} alt="Edit" />
              </IconButton>
            </Grid>
          </Grid>
          <Button
            variant="text"
            sx={{ ml: "-6px" }}
            startIcon={<Avatar src={plusPrimaryIcon} alt="Add" />}
          >
            Add Education
          </Button>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={3}>
          <ul className="cerfication-list">
            <li>
              <Grid
                container
                spacing={2.5}
                justifyContent={{ xs: "space-between", sm: "start" }}
              >
                <Grid item xs="auto">
                  <Avatar
                    src={designerProfile}
                    alt="Profile"
                    className="img-auto"
                  />
                </Grid>
                <Grid item xs={12} sm order={{ xs: 2, sm: 1 }}>
                  <Typography variant="h5" className="pb-0">
                    Programming for Everyday
                  </Typography>
                  <Typography
                    variant="body2"
                    className="text-color"
                    sx={{ pb: 1.25 }}
                  >
                    Coursera
                  </Typography>
                  <Typography variant="body1" className="label-color pb-0">
                    Issued May 2020
                  </Typography>
                </Grid>
                <Grid item xs="auto" order={{ xs: 1, sm: 2 }}>
                  <IconButton
                    color="primary"
                    onClick={handleClickOpenEditCertificaiton}
                  >
                    <Avatar src={editIcon} alt="Edit" />
                  </IconButton>
                </Grid>
              </Grid>
            </li>
            <li>
              <Grid
                container
                spacing={2.5}
                justifyContent={{ xs: "space-between", sm: "start" }}
              >
                <Grid item xs="auto">
                  <Avatar
                    src={aditProfile}
                    alt="Profile"
                    className="img-auto"
                  />
                </Grid>
                <Grid item xs={12} sm order={{ xs: 2, sm: 1 }}>
                  <Typography variant="h5" className="pb-0">
                    Fundamental of IOT Development With Thingworkx
                  </Typography>
                  <Typography
                    variant="body2"
                    className="text-color"
                    sx={{ pb: 1.25 }}
                  >
                    IOT
                  </Typography>
                  <Typography variant="body1" className="label-color pb-0">
                    Issued May 2019
                  </Typography>
                </Grid>
                <Grid item xs="auto" order={{ xs: 1, sm: 2 }}>
                  <IconButton
                    color="primary"
                    onClick={handleClickOpenEditCertificaiton}
                  >
                    <Avatar src={editIcon} alt="Edit" />
                  </IconButton>
                </Grid>
              </Grid>
            </li>
          </ul>
          <Button
            variant="text"
            startIcon={<Avatar src={plusPrimaryIcon} alt="Add" />}
          >
            Add Certification
          </Button>
        </CustomTabPanel>
      </Card>

      {/* Edit Profile Dialog */}
      <Dialog
        open={openEditProfile}
        onClose={handleCloseEditProfile}
        maxWidth="md"
        fullWidth
      >
        <div className="dialog-header">
          <DialogTitle>Edit Profile</DialogTitle>
          <IconButton color="primary" onClick={handleCloseEditProfile}>
            <Avatar src={closeIcon} alt="Close" />
          </IconButton>
        </div>
        <DialogContent>
          <TextField
            label="First Name"
            required
            defaultValue="John"
          ></TextField>
          <TextField
            label="Last Name"
            required
            defaultValue="Minee"
          ></TextField>
          <TextField
            variant="outlined"
            label="Headline"
            defaultValue="Ui/Ux Designer"
            multiline
            rows={3}
          ></TextField>
          <TextField
            label="Email"
            required
            type="email"
            defaultValue="Jenne@gmail.com"
          ></TextField>
          <Grid
            container
            spacing={{ xs: 1.2 }}
            sx={{ pb: { xs: 2, md: 3, lg: 4 } }}
          >
            <Grid item xs="auto">
              <FormControl sx={{ minWidth: 90 }} className="mb-0">
                <Select defaultValue={1}>
                  <MenuItem value={1}>+01</MenuItem>
                  <MenuItem value={2}>+91</MenuItem>
                  <MenuItem value={3}>+92</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs>
              <TextField
                label="Contact Number"
                className="mb-0"
                defaultValue="2193011291"
              />
            </Grid>
          </Grid>
          <Typography variant="h6" sx={{ pb: { xs: 2, md: 3 } }}>
            Location
          </Typography>
          <TextField
            variant="outlined"
            label="Country"
            defaultValue="India"
          ></TextField>
          <TextField
            variant="outlined"
            label="City"
            defaultValue="Anand, Gujarat"
            className="mb-0"
          ></TextField>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseEditProfile} variant="contained">
            Save
          </Button>
        </DialogActions>
      </Dialog>

      {/* Edit About Dialog */}
      <Dialog
        open={openEditAbout}
        onClose={handleCloseEditAbout}
        maxWidth="md"
        fullWidth
      >
        <div className="dialog-header">
          <DialogTitle>Edit About</DialogTitle>
          <IconButton color="primary" onClick={handleCloseEditAbout}>
            <Avatar src={closeIcon} alt="Close" />
          </IconButton>
        </div>
        <DialogContent>
          <Typography className="label-color" sx={{ pb: 1.5 }}>
            You can write about your years of experience, industry, or skills.
            People also talk about their achievements or previous job
            experiences.
          </Typography>
          <TextField
            multiline
            rows={5}
            defaultValue="Accumulating nearly 3 years of experience at Youtube and an alumni member of 10k designers, I have actively served as a UI/UX Designer, focusing on digital design and user experience enhancements. Hands-on experience in designing Website Layouts, Web Applications, and Mobile Applications. Team player with good listening skills and innovative ideas to make attractive designs"
          ></TextField>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseEditAbout} variant="contained">
            Save
          </Button>
        </DialogActions>
      </Dialog>

      {/* Edit Experience Dialog */}
      <Dialog
        open={openEditExperience}
        onClose={handleCloseEditExperience}
        maxWidth="md"
        fullWidth
      >
        <div className="dialog-header">
          <DialogTitle>Edit Experience</DialogTitle>
          <IconButton color="primary" onClick={handleCloseEditExperience}>
            <Avatar src={closeIcon} alt="Close" />
          </IconButton>
        </div>
        <DialogContent>
          <FormControl required>
            <InputLabel id="designation">Designation</InputLabel>
            <Select defaultValue={1} labelId="designation" label="Designation">
              <MenuItem value={1}>Ui/Ux Designer</MenuItem>
              <MenuItem value={2}>Software Developer</MenuItem>
              <MenuItem value={3}>Frontend Developer</MenuItem>
            </Select>
          </FormControl>
          <FormControl required>
            <InputLabel id="companyName">Company Name</InputLabel>
            <Select defaultValue={1} labelId="companyName" label="Company Name">
              <MenuItem value={1}>
                <Avatar src={youtubeIcon} alt="Youtube" />
                Youtube
              </MenuItem>
              <MenuItem value={2}>
                <Avatar src={googleIcon} alt="Google" />
                Google
              </MenuItem>
              <MenuItem value={3}>
                <Avatar src={linkedInIcon} alt="LinkedIn" />
                LinkedIn
              </MenuItem>
            </Select>
          </FormControl>
          <Grid container spacing={{ xs: 2, xl: 4 }}>
            <Grid item xs={12} sm={6}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={["DatePicker"]}>
                  <DatePicker label="Start Date*" />
                </DemoContainer>
              </LocalizationProvider>
            </Grid>
            <Grid item xs={12} sm={6}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={["DatePicker"]}>
                  <DatePicker label="End Date*" />
                </DemoContainer>
              </LocalizationProvider>
            </Grid>
          </Grid>
          <FormControlLabel
            sx={{ pb: 2 }}
            control={<Checkbox defaultChecked />}
            label="Currently working here"
          />
          <FormControl required>
            <InputLabel id="locationType">Location Type</InputLabel>
            <Select
              defaultValue={1}
              labelId="locationType"
              label="Location Type"
            >
              <MenuItem value={1}>On-site</MenuItem>
              <MenuItem value={2}>Rmote</MenuItem>
            </Select>
          </FormControl>
          <Typography variant="h6" sx={{ pb: 3 }}>
            Location
          </Typography>
          <TextField label="Country" defaultValue="India"></TextField>
          <TextField
            label="City"
            className="mb-0"
            defaultValue="Anand, Gujarat "
          ></TextField>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseEditExperience} variant="contained">
            Save
          </Button>
        </DialogActions>
      </Dialog>

      {/* Add Experience Dialog */}
      <Dialog
        open={openAddExperience}
        onClose={handleCloseAddExperience}
        maxWidth="md"
        fullWidth
      >
        <div className="dialog-header">
          <DialogTitle>Edit Experience</DialogTitle>
          <IconButton color="primary" onClick={handleCloseAddExperience}>
            <Avatar src={closeIcon} alt="Close" />
          </IconButton>
        </div>
        <DialogContent>
          <FormControl required>
            <InputLabel id="designation">Designation</InputLabel>
            <Select labelId="designation" label="Designation">
              <MenuItem value={1}>Ui/Ux Designer</MenuItem>
              <MenuItem value={2}>Software Developer</MenuItem>
              <MenuItem value={3}>Frontend Developer</MenuItem>
            </Select>
          </FormControl>
          <FormControl required>
            <InputLabel id="companyName">Company Name</InputLabel>
            <Select labelId="companyName" label="Company Name">
              <MenuItem value={1}>
                <Avatar src={youtubeIcon} alt="Youtube" />
                Youtube
              </MenuItem>
              <MenuItem value={2}>
                <Avatar src={googleIcon} alt="Google" />
                Google
              </MenuItem>
              <MenuItem value={3}>
                <Avatar src={linkedInIcon} alt="LinkedIn" />
                LinkedIn
              </MenuItem>
            </Select>
          </FormControl>
          <Grid container spacing={{ xs: 2, xl: 4 }}>
            <Grid item xs={12} sm={6}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={["DatePicker"]}>
                  <DatePicker label="Start Date*" />
                </DemoContainer>
              </LocalizationProvider>
            </Grid>
            <Grid item xs={12} sm={6}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={["DatePicker"]}>
                  <DatePicker label="End Date*" />
                </DemoContainer>
              </LocalizationProvider>
            </Grid>
          </Grid>
          <FormControlLabel
            sx={{ pb: 2 }}
            control={<Checkbox defaultChecked />}
            label="Currently working here"
          />
          <FormControl required>
            <InputLabel id="locationType">Location Type</InputLabel>
            <Select labelId="locationType" label="Location Type">
              <MenuItem value={1}>On-site</MenuItem>
              <MenuItem value={2}>Rmote</MenuItem>
            </Select>
          </FormControl>
          <Typography variant="h6" sx={{ pb: 3 }}>
            Location
          </Typography>
          <TextField label="Country" defaultValue="India"></TextField>
          <TextField
            label="City"
            className="mb-0"
            defaultValue="Anand, Gujarat "
          ></TextField>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseAddExperience} variant="contained">
            Save
          </Button>
        </DialogActions>
      </Dialog>

      {/* Edit Certificaiton Dialog */}
      <Dialog
        open={openEditCertificaiton}
        onClose={handleCloseEditCertificaiton}
        maxWidth="md"
        fullWidth
      >
        <div className="dialog-header">
          <DialogTitle>Edit Certificaiton</DialogTitle>
          <IconButton color="primary" onClick={handleCloseEditCertificaiton}>
            <Avatar src={closeIcon} alt="Close" />
          </IconButton>
        </div>
        <DialogContent>
          <FormControl required>
            <InputLabel id="name">Name</InputLabel>
            <Select defaultValue={1} labelId="name" label="Name">
              <MenuItem value={1}>Programming for everyday</MenuItem>
              <MenuItem value={2}>Option 2</MenuItem>
              <MenuItem value={3}>Option 3</MenuItem>
            </Select>
          </FormControl>
          <FormControl required>
            <InputLabel id="school">School</InputLabel>
            <Select defaultValue={1} labelId="school" label="School">
              <MenuItem value={1}>
                <Avatar src={schoolIconSm} alt="Coursera" />
                Coursera
              </MenuItem>
              <MenuItem value={2}>
                <Avatar src={googleIcon} alt="Google" />
                Google
              </MenuItem>
              <MenuItem value={3}>
                <Avatar src={linkedInIcon} alt="LinkedIn" />
                LinkedIn
              </MenuItem>
            </Select>
          </FormControl>
          <Grid container spacing={{ xs: 2, xl: 4 }} sx={{ pb: 3 }}>
            <Grid item xs={12} sm={6}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={["DatePicker"]}>
                  <DatePicker label="Issue Date*" />
                </DemoContainer>
              </LocalizationProvider>
            </Grid>
            <Grid item xs={12} sm={6}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={["DatePicker"]}>
                  <DatePicker label="Expiration Date*" />
                </DemoContainer>
              </LocalizationProvider>
            </Grid>
          </Grid>
          <Typography variant="h6" sx={{ pb: 3 }}>
            Skills
          </Typography>
          <TextField label="Skills" className="mb-0"></TextField>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseEditCertificaiton} variant="contained">
            Save
          </Button>
        </DialogActions>
      </Dialog>

      {/* Edit Education Dialog */}
      <Dialog
        open={openEditEducation}
        onClose={handleCloseEditEducation}
        maxWidth="md"
        fullWidth
      >
        <div className="dialog-header">
          <DialogTitle>Edit Education</DialogTitle>
          <IconButton color="primary" onClick={handleCloseEditEducation}>
            <Avatar src={closeIcon} alt="Close" />
          </IconButton>
        </div>
        <DialogContent>
          <FormControl>
            <InputLabel id="school">School</InputLabel>
            <Select defaultValue={1} labelId="school" label="School">
              <MenuItem value={1}>
                <Avatar src={schoolIconSm} alt="Coursera" />
                Coursera
              </MenuItem>
              <MenuItem value={2}>
                <Avatar src={googleIcon} alt="Google" />
                Google
              </MenuItem>
              <MenuItem value={3}>
                <Avatar src={linkedInIcon} alt="LinkedIn" />
                LinkedIn
              </MenuItem>
            </Select>
          </FormControl>
          <FormControl required>
            <InputLabel id="degree">Degree</InputLabel>
            <Select defaultValue={1} labelId="degree" label="Degree">
              <MenuItem value={1}>Product Design</MenuItem>
              <MenuItem value={2}>AI</MenuItem>
              <MenuItem value={3}>ML</MenuItem>
            </Select>
          </FormControl>
          <FormControl required>
            <InputLabel id="fieldOfStudy">Field of Study</InputLabel>
            <Select
              defaultValue={1}
              labelId="fieldOfStudy"
              label="Field of Study"
            >
              <MenuItem value={1}>Information Technology</MenuItem>
              <MenuItem value={2}>Computer Science</MenuItem>
              <MenuItem value={3}>Computer Engineering</MenuItem>
            </Select>
          </FormControl>
          <Grid container spacing={{ xs: 2, xl: 4 }} sx={{ pb: 3 }}>
            <Grid item xs={12} sm={6}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={["DatePicker"]}>
                  <DatePicker label="Issue Date*" />
                </DemoContainer>
              </LocalizationProvider>
            </Grid>
            <Grid item xs={12} sm={6}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={["DatePicker"]}>
                  <DatePicker label="Expiration Date*" />
                </DemoContainer>
              </LocalizationProvider>
            </Grid>
          </Grid>
          <TextField label="Grade" defaultValue="8.20"></TextField>
          <TextField
            multiline
            label="Description"
            rows={3}
            defaultValue="Become a part of 10kdesigners to learn and grow with a cohort of like-minded people. Worked on Various design Challenges, Including B2B and B2C mobile apps and websites."
          ></TextField>
          <Typography variant="h6" sx={{ pb: 3 }}>
            Skills
          </Typography>
          <Autocomplete
            disablePortal
            id="skills"
            options={skillsOption}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="Skills" />}
          />
          <DragDropContext onDragEnd={handleDragEnd}>
            <ul className="skill-list">
              <Droppable droppableId="skills">
                {(provided) => (
                  <div ref={provided.innerRef} {...provided.droppableProps}>
                    {skills.map((skill: any, index: any) => (
                      <Draggable
                        key={skill.id}
                        draggableId={skill.id}
                        index={index}
                      >
                        {(provided) => (
                          <li
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            className="flex-row"
                          >
                            <IconButton
                              color="primary"
                              sx={{ mr: 1.25, ml: -1 }}
                            >
                              <Avatar src={closeGreyIcon} alt="Close" />
                            </IconButton>
                            <Typography
                              variant="body1"
                              className="title-color fw-500 pb-0"
                            >
                              {skill.content}
                            </Typography>
                            <IconButton color="primary" sx={{ ml: "auto" }}>
                              <Avatar src={dragIcon} alt="Drag" />
                            </IconButton>
                          </li>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </ul>
          </DragDropContext>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseEditEducation} variant="contained">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
export default RecruiterProfile;
