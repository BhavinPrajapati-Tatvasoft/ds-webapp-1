import {
  Avatar,
  Button,
  Card,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  Grid,
  IconButton,
  InputLabel,
  Menu,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import {
  actionIcon,
  addSmIcon,
  angularIcon,
  closeIcon,
  experienceIcon,
  fullTimeIcon,
  inOfficeIcon,
  javaIcon,
  pythonIcon,
  salaryIcon,
} from "../../../assets/images";
import React, { useEffect } from "react";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import Aos from "aos";

const RecruiterJobs: React.FC = () => {
  // Add New Opening Dialog
  const [openAddNewOpening, setOpenAddNewOpening] = React.useState(false);
  const handleClickOpenAddNewOpening = () => {
    setOpenAddNewOpening(true);
  };
  const handleCloseAddNewOpening = () => {
    setOpenAddNewOpening(false);
  };

  // Action Menu
  const [anchorEl1, setAnchorEl1] = React.useState<null | HTMLElement>(null);
  const open1 = Boolean(anchorEl1);
  const handleClick1 = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl1(event.currentTarget);
  };
  const handleClose1 = () => {
    setAnchorEl1(null);
  };

  const [anchorEl2, setAnchorEl2] = React.useState<null | HTMLElement>(null);
  const open2 = Boolean(anchorEl2);
  const handleClick2 = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl2(event.currentTarget);
  };
  const handleClose2 = () => {
    setAnchorEl2(null);
  };

  const [anchorEl3, setAnchorEl3] = React.useState<null | HTMLElement>(null);
  const open3 = Boolean(anchorEl3);
  const handleClick3 = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl3(event.currentTarget);
  };
  const handleClose3 = () => {
    setAnchorEl3(null);
  };

  const [anchorEl4, setAnchorEl4] = React.useState<null | HTMLElement>(null);
  const open4 = Boolean(anchorEl4);
  const handleClick4 = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl4(event.currentTarget);
  };
  const handleClose4 = () => {
    setAnchorEl4(null);
  };

  const [anchorEl5, setAnchorEl5] = React.useState<null | HTMLElement>(null);
  const open5 = Boolean(anchorEl5);
  const handleClick5 = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl5(event.currentTarget);
  };
  const handleClose5 = () => {
    setAnchorEl5(null);
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
      <Grid
        container
        spacing={2}
        justifyContent="space-between"
        alignItems="center"
        sx={{ pb: 3 }}
      >
        <Grid item xs="auto">
          <Typography
            variant="h3"
            className="pb-0"
            data-aos="zoom-in"
            data-aos-delay="100"
          >
            Job Opening
          </Typography>
        </Grid>
        <Grid item xs="auto">
          <Button
            variant="contained"
            size="small"
            startIcon={<Avatar src={addSmIcon} alt="Add" />}
            onClick={handleClickOpenAddNewOpening}
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            New Opening
          </Button>
        </Grid>
      </Grid>
      <Grid container spacing={{ xs: 2, xl: 3 }}>
        <Grid item xs={12} md={6} xl={3}>
          <Card
            sx={{ p: { xs: 2 }, height: "100%" }}
            data-aos="zoom-in-up"
            data-aos-delay="300"
          >
            <Grid container spacing={1.25} alignItems="center" sx={{ pb: 1.5 }}>
              <Grid item xs="auto">
                <div className="icon-outer-md">
                  <Avatar
                    src={javaIcon}
                    alt="Frontend Developer"
                    className="img-auto"
                  />
                </div>
              </Grid>
              <Grid item xs="auto">
                <Typography variant="h5" className="pb-0">
                  Frontend Developer
                </Typography>
                <Typography variant="body2" className="text-color pb-0">
                  IOS
                </Typography>
              </Grid>
              <Grid item xs="auto" alignSelf="start" sx={{ ml: "auto" }}>
                <IconButton
                  color="primary"
                  sx={{ m: -1 }}
                  id="action-btn1"
                  aria-controls={open1 ? "action-menu1" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open1 ? "true" : undefined}
                  onClick={handleClick1}
                >
                  <Avatar src={actionIcon} alt="Action" />
                </IconButton>
                <Menu
                  id="action-menu1"
                  anchorEl={anchorEl1}
                  open={open1}
                  onClose={handleClose1}
                  MenuListProps={{
                    "aria-labelledby": "action-btn1",
                  }}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "right",
                  }}
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                >
                  <MenuItem onClick={handleClose1}>Edit</MenuItem>
                  <MenuItem onClick={handleClose1}>Delete</MenuItem>
                </Menu>
              </Grid>
            </Grid>
            <Grid container spacing={1.25}>
              <Grid item xs={12}>
                <Grid container spacing={1.5}>
                  <Grid item xs="auto">
                    <Avatar src={inOfficeIcon} alt="In Office" />
                  </Grid>
                  <Grid item xs>
                    <Typography variant="body1" className="pb-0 text-color">
                      In-office (New York, US)
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <Grid container spacing={1.5}>
                  <Grid item xs="auto">
                    <Avatar src={fullTimeIcon} alt="Full Time" />
                  </Grid>
                  <Grid item xs>
                    <Typography variant="body1" className="pb-0 text-color">
                      Full Time
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <Grid container spacing={1.5}>
                  <Grid item xs="auto">
                    <Avatar src={salaryIcon} alt="Salary" />
                  </Grid>
                  <Grid item xs>
                    <Typography variant="body1" className="pb-0 text-color">
                      $135k - $170k
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <Grid container spacing={1.5}>
                  <Grid item xs="auto">
                    <Avatar src={experienceIcon} alt="Experience" />
                  </Grid>
                  <Grid item xs>
                    <Typography variant="body1" className="pb-0 text-color">
                      3 years
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Card>
        </Grid>
        <Grid item xs={12} md={6} xl={3}>
          <Card
            sx={{ p: { xs: 2 }, height: "100%" }}
            data-aos="zoom-in-up"
            data-aos-delay="400"
          >
            <Grid container spacing={1.25} alignItems="center" sx={{ pb: 1.5 }}>
              <Grid item xs="auto">
                <div className="icon-outer-md">
                  <Avatar
                    src={angularIcon}
                    alt="Angular"
                    className="img-auto"
                  />
                </div>
              </Grid>
              <Grid item xs="auto">
                <Typography variant="h5" className="pb-0">
                  Frontend Developer
                </Typography>
                <Typography variant="body2" className="text-color pb-0">
                  IOS
                </Typography>
              </Grid>
              <Grid item xs="auto" alignSelf="start" sx={{ ml: "auto" }}>
                <IconButton
                  color="primary"
                  sx={{ m: -1 }}
                  id="action-btn2"
                  aria-controls={open2 ? "action-menu2" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open2 ? "true" : undefined}
                  onClick={handleClick2}
                >
                  <Avatar src={actionIcon} alt="Action" />
                </IconButton>
                <Menu
                  id="action-menu2"
                  anchorEl={anchorEl2}
                  open={open2}
                  onClose={handleClose2}
                  MenuListProps={{
                    "aria-labelledby": "action-btn2",
                  }}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "right",
                  }}
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                >
                  <MenuItem onClick={handleClose2}>Edit</MenuItem>
                  <MenuItem onClick={handleClose2}>Delete</MenuItem>
                </Menu>
              </Grid>
            </Grid>
            <Grid container spacing={1.25}>
              <Grid item xs={12}>
                <Grid container spacing={1.5}>
                  <Grid item xs="auto">
                    <Avatar src={inOfficeIcon} alt="In Office" />
                  </Grid>
                  <Grid item xs>
                    <Typography variant="body1" className="pb-0 text-color">
                      In-office (New York, US)
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <Grid container spacing={1.5}>
                  <Grid item xs="auto">
                    <Avatar src={fullTimeIcon} alt="Full Time" />
                  </Grid>
                  <Grid item xs>
                    <Typography variant="body1" className="pb-0 text-color">
                      Full Time
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <Grid container spacing={1.5}>
                  <Grid item xs="auto">
                    <Avatar src={salaryIcon} alt="Salary" />
                  </Grid>
                  <Grid item xs>
                    <Typography variant="body1" className="pb-0 text-color">
                      $135k - $170k
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <Grid container spacing={1.5}>
                  <Grid item xs="auto">
                    <Avatar src={experienceIcon} alt="Experience" />
                  </Grid>
                  <Grid item xs>
                    <Typography variant="body1" className="pb-0 text-color">
                      3 years
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Card>
        </Grid>
        <Grid item xs={12} md={6} xl={3}>
          <Card
            sx={{ p: { xs: 2 }, height: "100%" }}
            data-aos="zoom-in-up"
            data-aos-delay="500"
          >
            <Grid container spacing={1.25} alignItems="center" sx={{ pb: 1.5 }}>
              <Grid item xs="auto">
                <div className="icon-outer-md">
                  <Avatar src={pythonIcon} alt="Angular" className="img-auto" />
                </div>
              </Grid>
              <Grid item xs="auto">
                <Typography variant="h5" className="pb-0">
                  Python Developer
                </Typography>
                <Typography variant="body2" className="text-color pb-0">
                  Android
                </Typography>
              </Grid>
              <Grid item xs="auto" alignSelf="start" sx={{ ml: "auto" }}>
                <IconButton
                  color="primary"
                  sx={{ m: -1 }}
                  id="action-btn3"
                  aria-controls={open3 ? "action-menu3" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open3 ? "true" : undefined}
                  onClick={handleClick3}
                >
                  <Avatar src={actionIcon} alt="Action" />
                </IconButton>
                <Menu
                  id="action-menu3"
                  anchorEl={anchorEl3}
                  open={open3}
                  onClose={handleClose3}
                  MenuListProps={{
                    "aria-labelledby": "action-btn3",
                  }}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "right",
                  }}
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                >
                  <MenuItem onClick={handleClose3}>Edit</MenuItem>
                  <MenuItem onClick={handleClose3}>Delete</MenuItem>
                </Menu>
              </Grid>
            </Grid>
            <Grid container spacing={1.25}>
              <Grid item xs={12}>
                <Grid container spacing={1.5}>
                  <Grid item xs="auto">
                    <Avatar src={inOfficeIcon} alt="In Office" />
                  </Grid>
                  <Grid item xs>
                    <Typography variant="body1" className="pb-0 text-color">
                      In-office (New York, US)
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <Grid container spacing={1.5}>
                  <Grid item xs="auto">
                    <Avatar src={fullTimeIcon} alt="Full Time" />
                  </Grid>
                  <Grid item xs>
                    <Typography variant="body1" className="pb-0 text-color">
                      Full Time
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <Grid container spacing={1.5}>
                  <Grid item xs="auto">
                    <Avatar src={salaryIcon} alt="Salary" />
                  </Grid>
                  <Grid item xs>
                    <Typography variant="body1" className="pb-0 text-color">
                      $135k - $170k
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <Grid container spacing={1.5}>
                  <Grid item xs="auto">
                    <Avatar src={experienceIcon} alt="Experience" />
                  </Grid>
                  <Grid item xs>
                    <Typography variant="body1" className="pb-0 text-color">
                      3 years
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Card>
        </Grid>
        <Grid item xs={12} md={6} xl={3}>
          <Card
            sx={{ p: { xs: 2 }, height: "100%" }}
            data-aos="zoom-in-up"
            data-aos-delay="600"
          >
            <Grid container spacing={1.25} alignItems="center" sx={{ pb: 1.5 }}>
              <Grid item xs="auto">
                <div className="icon-outer-md">
                  <Avatar
                    src={javaIcon}
                    alt="Frontend Developer"
                    className="img-auto"
                  />
                </div>
              </Grid>
              <Grid item xs="auto">
                <Typography variant="h5" className="pb-0">
                  Frontend Developer
                </Typography>
                <Typography variant="body2" className="text-color pb-0">
                  IOS
                </Typography>
              </Grid>
              <Grid item xs="auto" alignSelf="start" sx={{ ml: "auto" }}>
                <IconButton
                  color="primary"
                  sx={{ m: -1 }}
                  id="action-btn4"
                  aria-controls={open4 ? "action-menu4" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open4 ? "true" : undefined}
                  onClick={handleClick4}
                >
                  <Avatar src={actionIcon} alt="Action" />
                </IconButton>
                <Menu
                  id="action-menu4"
                  anchorEl={anchorEl4}
                  open={open4}
                  onClose={handleClose4}
                  MenuListProps={{
                    "aria-labelledby": "action-btn4",
                  }}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "right",
                  }}
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                >
                  <MenuItem onClick={handleClose4}>Edit</MenuItem>
                  <MenuItem onClick={handleClose4}>Delete</MenuItem>
                </Menu>
              </Grid>
            </Grid>
            <Grid container spacing={1.25}>
              <Grid item xs={12}>
                <Grid container spacing={1.5}>
                  <Grid item xs="auto">
                    <Avatar src={inOfficeIcon} alt="In Office" />
                  </Grid>
                  <Grid item xs>
                    <Typography variant="body1" className="pb-0 text-color">
                      In-office (New York, US)
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <Grid container spacing={1.5}>
                  <Grid item xs="auto">
                    <Avatar src={fullTimeIcon} alt="Full Time" />
                  </Grid>
                  <Grid item xs>
                    <Typography variant="body1" className="pb-0 text-color">
                      Full Time
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <Grid container spacing={1.5}>
                  <Grid item xs="auto">
                    <Avatar src={salaryIcon} alt="Salary" />
                  </Grid>
                  <Grid item xs>
                    <Typography variant="body1" className="pb-0 text-color">
                      $13k - $17k
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <Grid container spacing={1.5}>
                  <Grid item xs="auto">
                    <Avatar src={experienceIcon} alt="Experience" />
                  </Grid>
                  <Grid item xs>
                    <Typography variant="body1" className="pb-0 text-color">
                      3 years
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Card>
        </Grid>
        <Grid item xs={12} md={6} xl={3}>
          <Card
            sx={{ p: { xs: 2 }, height: "100%" }}
            data-aos="zoom-in-up"
            data-aos-delay="700"
          >
            <Grid container spacing={1.25} alignItems="center" sx={{ pb: 1.5 }}>
              <Grid item xs="auto">
                <div className="icon-outer-md">
                  <Avatar
                    src={angularIcon}
                    alt="Angular"
                    className="img-auto"
                  />
                </div>
              </Grid>
              <Grid item xs="auto">
                <Typography variant="h5" className="pb-0">
                  Frontend Developer
                </Typography>
                <Typography variant="body2" className="text-color pb-0">
                  IOS
                </Typography>
              </Grid>
              <Grid item xs="auto" alignSelf="start" sx={{ ml: "auto" }}>
                <IconButton
                  color="primary"
                  sx={{ m: -1 }}
                  id="action-btn5"
                  aria-controls={open5 ? "action-menu5" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open5 ? "true" : undefined}
                  onClick={handleClick5}
                >
                  <Avatar src={actionIcon} alt="Action" />
                </IconButton>
                <Menu
                  id="action-menu5"
                  anchorEl={anchorEl5}
                  open={open5}
                  onClose={handleClose5}
                  MenuListProps={{
                    "aria-labelledby": "action-btn5",
                  }}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "right",
                  }}
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                >
                  <MenuItem onClick={handleClose5}>Edit</MenuItem>
                  <MenuItem onClick={handleClose5}>Delete</MenuItem>
                </Menu>
              </Grid>
            </Grid>
            <Grid container spacing={1.25}>
              <Grid item xs={12}>
                <Grid container spacing={1.5}>
                  <Grid item xs="auto">
                    <Avatar src={inOfficeIcon} alt="In Office" />
                  </Grid>
                  <Grid item xs>
                    <Typography variant="body1" className="pb-0 text-color">
                      In-office (New York, US)
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <Grid container spacing={1.5}>
                  <Grid item xs="auto">
                    <Avatar src={fullTimeIcon} alt="Full Time" />
                  </Grid>
                  <Grid item xs>
                    <Typography variant="body1" className="pb-0 text-color">
                      Full Time
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <Grid container spacing={1.5}>
                  <Grid item xs="auto">
                    <Avatar src={salaryIcon} alt="Salary" />
                  </Grid>
                  <Grid item xs>
                    <Typography variant="body1" className="pb-0 text-color">
                      $135k - $170k
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <Grid container spacing={1.5}>
                  <Grid item xs="auto">
                    <Avatar src={experienceIcon} alt="Experience" />
                  </Grid>
                  <Grid item xs>
                    <Typography variant="body1" className="pb-0 text-color">
                      3 years
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Card>
        </Grid>
      </Grid>
      {/* Edit Profile Dialog */}
      <Dialog
        open={openAddNewOpening}
        onClose={handleCloseAddNewOpening}
        maxWidth="md"
        fullWidth
      >
        <div className="dialog-header">
          <DialogTitle>Add New Opening</DialogTitle>
          <IconButton color="primary" onClick={handleCloseAddNewOpening}>
            <Avatar src={closeIcon} alt="Close" />
          </IconButton>
        </div>
        <DialogContent>
          <Grid container spacing={{ xs: 2, xl: 3 }}>
            <Grid item xs={12} md={6}>
              <TextField label="Job Title" className="mb-0"></TextField>
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField label="Company Name" className="mb-0"></TextField>
            </Grid>
            <Grid item xs={12} md={6}>
              <FormControl className="mb-0">
                <InputLabel id="industry">Industry</InputLabel>
                <Select labelId="industry" label="Industry">
                  <MenuItem value={1}>Option 1</MenuItem>
                  <MenuItem value={2}>Option 2</MenuItem>
                  <MenuItem value={3}>Option 3</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField label="Location" className="mb-0"></TextField>
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Job Description"
                multiline
                rows={5}
                className="mb-0"
              ></TextField>
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Company Overview"
                multiline
                rows={5}
                className="mb-0"
              ></TextField>
            </Grid>
            <Grid item xs={12} md={6}>
              <FormControl className="mb-0">
                <InputLabel id="employmentType">Employment Type</InputLabel>
                <Select labelId="employmentType" label="Employment Type">
                  <MenuItem value={1}>Option 1</MenuItem>
                  <MenuItem value={2}>Option 2</MenuItem>
                  <MenuItem value={3}>Option 3</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} md={6}>
              <FormControl className="mb-0">
                <InputLabel id="experienceLevel">Experience Level</InputLabel>
                <Select labelId="experienceLevel" label="Experience Level">
                  <MenuItem value={1}>Option 1</MenuItem>
                  <MenuItem value={2}>Option 2</MenuItem>
                  <MenuItem value={3}>Option 3</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} md={6}>
              <FormControl className="mb-0">
                <InputLabel id="educationLevel">Education Level</InputLabel>
                <Select labelId="educationLevel" label="Education Level">
                  <MenuItem value={1}>Option 1</MenuItem>
                  <MenuItem value={2}>Option 2</MenuItem>
                  <MenuItem value={3}>Option 3</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField label="Key Skills" className="mb-0"></TextField>
            </Grid>
            <Grid item xs={12} md={6}>
              <FormControl className="mb-0">
                <InputLabel id="salaryRange">Salary Range</InputLabel>
                <Select labelId="salaryRange" label="Salary Range">
                  <MenuItem value={1}>Option 1</MenuItem>
                  <MenuItem value={2}>Option 2</MenuItem>
                  <MenuItem value={3}>Option 3</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} md={6}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={["DatePicker"]}>
                  <DatePicker label="Application Deadline" />
                </DemoContainer>
              </LocalizationProvider>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseAddNewOpening} variant="contained">
            Publish
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
export default RecruiterJobs;
