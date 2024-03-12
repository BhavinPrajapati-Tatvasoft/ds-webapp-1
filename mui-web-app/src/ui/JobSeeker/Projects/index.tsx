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
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
  Typography,
} from "@mui/material";
import {
  addSmIcon,
  browseFileUpload,
  closeIcon,
  pencilIcon,
  project1,
  project2,
  project3,
  project4,
  urlIcon,
} from "../../../assets/images";
import React, { useEffect } from "react";
import Aos from "aos";

const JobSeekerProjects: React.FC = () => {
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
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
        sx={{ pb: { xs: 2, sm: 3, xl: 4 } }}
        alignItems="center"
      >
        <Grid item xs="auto">
          <Typography
            variant="h4"
            className="pb-0"
            data-aos="zoom-in"
            data-aos-delay="100"
          >
            Project Showcase
          </Typography>
        </Grid>
        <Grid item xs="auto">
          <Button
            variant="contained"
            size="small"
            startIcon={<Avatar src={addSmIcon} alt="Add" />}
            data-aos="zoom-in"
            data-aos-delay="200"
            onClick={handleClickOpen}
          >
            New Project
          </Button>
        </Grid>
      </Grid>
      <Grid container spacing={{ xs: 2, lg: 3 }}>
        <Grid item xs={12} sm={6} lg={4}>
          <Card sx={{ p: { xs: 2 } }} data-aos="fade-in" data-aos-delay="300">
            <div className="project-img">
              <Avatar src={project1} alt="Project" className="img-auto" />
              <div className="img-hover-block">
                <IconButton onClick={handleClickOpen}>
                  <Avatar src={pencilIcon} alt="Edit" />
                </IconButton>
              </div>
            </div>
            <Typography variant="h5" sx={{ pb: 1 }}>
              Roast - Figma Scroll
            </Typography>
            <Typography variant="body1" className="pb-0 text-color">
              Ut enim ad minima veniam, quis nostrum exercitationem ullam
              corporis suscipit
            </Typography>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} lg={4}>
          <Card sx={{ p: { xs: 2 } }} data-aos="fade-in" data-aos-delay="400">
            <div className="project-img">
              <Avatar src={project2} alt="Project" className="img-auto" />
              <div className="img-hover-block">
                <IconButton onClick={handleClickOpen}>
                  <Avatar src={pencilIcon} alt="Edit" />
                </IconButton>
              </div>
            </div>
            <Typography variant="h5" sx={{ pb: 1 }}>
              Ai-Powered Carrer
            </Typography>
            <Typography variant="body1" className="pb-0 text-color">
              Ut enim ad minima veniam, quis nostrum exercitationem ullam
              corporis suscipit
            </Typography>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} lg={4}>
          <Card sx={{ p: { xs: 2 } }} data-aos="fade-in" data-aos-delay="500">
            <div className="project-img">
              <Avatar src={project3} alt="Project" className="img-auto" />
              <div className="img-hover-block">
                <IconButton onClick={handleClickOpen}>
                  <Avatar src={pencilIcon} alt="Edit" />
                </IconButton>
              </div>
            </div>
            <Typography variant="h5" sx={{ pb: 1 }}>
              Cars 24 Partners
            </Typography>
            <Typography variant="body1" className="pb-0 text-color">
              Ut enim ad minima veniam, quis nostrum exercitationem ullam
              corporis suscipit
            </Typography>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} lg={4}>
          <Card sx={{ p: { xs: 2 } }} data-aos="fade-in" data-aos-delay="600">
            <div className="project-img">
              <Avatar src={project4} alt="Project" className="img-auto" />
              <div className="img-hover-block">
                <IconButton onClick={handleClickOpen}>
                  <Avatar src={pencilIcon} alt="Edit" />
                </IconButton>
              </div>
            </div>
            <Typography variant="h5" sx={{ pb: 1 }}>
              Saas App Data
            </Typography>
            <Typography variant="body1" className="pb-0 text-color">
              Ut enim ad minima veniam, quis nostrum exercitationem ullam
              corporis suscipit
            </Typography>
          </Card>
        </Grid>
      </Grid>
      <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
        <div className="dialog-header">
          <DialogTitle>Add Project</DialogTitle>
          <IconButton color="primary" onClick={handleClose}>
            <Avatar src={closeIcon} alt="Close" />
          </IconButton>
        </div>
        <DialogContent>
          <Grid container spacing={2} sx={{ pb: { xs: "20px", md: "28px" } }}>
            <Grid item xs={12} md={6}>
              <TextField
                label="Project Name"
                sx={{ mb: { xs: 0 } }}
              ></TextField>
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField label="Title" sx={{ mb: { xs: 0 } }}></TextField>
            </Grid>
            <Grid item xs={12} md={6}>
              <FormControl variant="outlined" sx={{ mb: { xs: 0 } }}>
                <InputLabel htmlFor="password">Project Url</InputLabel>
                <OutlinedInput
                  id="password"
                  type="text"
                  endAdornment={
                    <InputAdornment position="end">
                      <Avatar alt="URL" src={urlIcon} />
                    </InputAdornment>
                  }
                  label="Project Url"
                />
              </FormControl>
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField label="Key Skills" sx={{ mb: { xs: 0 } }}></TextField>
            </Grid>
          </Grid>
          <Typography
            variant="body1"
            className="label-color"
            sx={{ pb: "6px" }}
          >
            Cover Image
          </Typography>
          <div className="file-upload-outer">
            <Avatar src={browseFileUpload} alt="Upload" />
            <Typography variant="body1" className="text-color pb-0">
              Browse Files to upload
            </Typography>
          </div>
          <Typography
            variant="caption"
            sx={{ pb: { xs: 2, sm: 2.5, md: 4 }, display: "block" }}
            className="label-color"
          >
            No selected File
          </Typography>
          <TextField
            label="Describe Your Project"
            multiline
            rows={5}
            sx={{ mb: { xs: 0 } }}
          ></TextField>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant="contained">
            Publish
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default JobSeekerProjects;
