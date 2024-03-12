import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
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
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { addSmIcon, closeIcon, timeIcon } from "../../../assets/images";
import React, { useEffect } from "react";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import Aos from "aos";

function renderEventContent(eventInfo: any) {
  return (
    <div className="week-grid-event">
      <Typography variant="caption" className="event-title">
        {eventInfo.event.title}
      </Typography>
      <div className="event-time">
        <Avatar src={timeIcon} />
        <Typography variant="caption">{eventInfo.timeText}</Typography>
      </div>
    </div>
  );
}

const ReacruiterSchedule: React.FC = () => {
  // Add New Opening Dialog
  const [openAddNewOpening, setOpenAddNewOpening] = React.useState(false);
  const handleClickOpenAddNewOpening = () => {
    setOpenAddNewOpening(true);
  };
  const handleCloseAddNewOpening = () => {
    setOpenAddNewOpening(false);
  };

  // Events
  const events = [
    {
      title: "Interview with Team",
      start: "2024-03-12T09:00:00",
      end: "2024-03-12T12:40:00",
    },
    {
      title: "Mobile App. Team play",
      start: "2024-03-14T11:00:00",
      end: "2024-03-14T14:30:00",
    },
  ];
  window.addEventListener("load", function () {
    const axisDiv = document.body.querySelectorAll(
      ".week-grid-calendar .fc-timegrid-axis .fc-timegrid-axis-frame"
    )[0];
    axisDiv.innerHTML = "Week";
  });

  // AOS Animation
  useEffect(() => {
    Aos.init({
      duration: 500,
      once: true,
    });
  }, []);
  return (
    <>
      <Grid container spacing={{ xs: 2, xl: 3 }}>
        <Grid item xs={12} xl order={{ xs: 1, xl: 0 }}>
          <Card
            className="week-grid-calendar"
            data-aos="fade-in"
            data-aos-delay="100"
          >
            <Grid container spacing={1}>
              <Grid item xs="auto" sm={12}>
                <Typography variant="h4" sx={{ pb: 0.5 }}>
                  Schedule
                </Typography>
              </Grid>
              <Grid item xs="auto" sx={{ ml: "auto" }}>
                <FormControl color="primary" size="small" className="mb-0">
                  <Select
                    defaultValue={10}
                    MenuProps={{ className: "month-menu" }}
                  >
                    <MenuItem value={10}>February</MenuItem>
                    <MenuItem value={20}>March</MenuItem>
                    <MenuItem value={30}>April</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs="auto">
                <Button
                  onClick={handleClickOpenAddNewOpening}
                  variant="contained"
                  size="small"
                  startIcon={<Avatar src={addSmIcon} alt="Add" />}
                >
                  Add New
                </Button>
              </Grid>
            </Grid>
            <FullCalendar
              plugins={[timeGridPlugin]}
              initialView="timeGridWeek"
              events={events}
              eventContent={renderEventContent}
              headerToolbar={{ left: "title", end: "" }}
              titleFormat={{
                month: "long",
                day: "numeric",
              }}
              slotLabelFormat={{
                hour: "numeric",
                minute: "2-digit",
                hour12: false,
              }}
              slotDuration="01:00:00"
              slotMinTime="09:00:000"
              slotMaxTime="19:00:00"
              allDaySlot={false}
              dayHeaderFormat={{
                day: "2-digit",
                month: "short",
                omitCommas: true,
              }}
            />
          </Card>
        </Grid>
        <Grid item xs={12} xl="auto" order={{ xs: 0, xl: 1 }}>
          <Card
            className="month-calendar"
            sx={{ p: { xs: 2 } }}
            data-aos="fade-in"
            data-aos-delay="200"
          >
            <FullCalendar
              plugins={[dayGridPlugin]}
              contentHeight={"auto"}
              initialView="dayGridMonth"
              dayHeaderFormat={{ weekday: "narrow" }}
              headerToolbar={{ left: "prev", center: "title", right: "next" }}
              titleFormat={{
                month: "long",
              }}
            />
          </Card>
        </Grid>
      </Grid>

      {/* Add New Opening Dialog */}
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
            <Grid item xs={12} sm={6}>
              <TextField label="Job Title" className="mb-0"></TextField>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField label="Company Name" className="mb-0"></TextField>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl className="mb-0">
                <InputLabel id="industry">Industry</InputLabel>
                <Select labelId="industry" label="Industry">
                  <MenuItem value={1}>Option 1</MenuItem>
                  <MenuItem value={2}>Option 2</MenuItem>
                  <MenuItem value={3}>Option 3</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField label="Location" className="mb-0"></TextField>
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                label="Job Description"
                multiline
                rows={3}
                className="mb-0"
              ></TextField>
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                label="Company Overview"
                multiline
                rows={3}
                className="mb-0"
              ></TextField>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl className="mb-0">
                <InputLabel id="employmentType">Employment Type</InputLabel>
                <Select labelId="employmentType" label="Employment Type">
                  <MenuItem value={1}>Option 1</MenuItem>
                  <MenuItem value={2}>Option 2</MenuItem>
                  <MenuItem value={3}>Option 3</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl className="mb-0">
                <InputLabel id="experienceLevel">Experience Level</InputLabel>
                <Select labelId="experienceLevel" label="Experience Level">
                  <MenuItem value={1}>Option 1</MenuItem>
                  <MenuItem value={2}>Option 2</MenuItem>
                  <MenuItem value={3}>Option 3</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl className="mb-0">
                <InputLabel id="educationLevel">Education Level</InputLabel>
                <Select labelId="educationLevel" label="Education Level">
                  <MenuItem value={1}>Option 1</MenuItem>
                  <MenuItem value={2}>Option 2</MenuItem>
                  <MenuItem value={3}>Option 3</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl className="mb-0">
                <InputLabel id="keySkill">Key Skills</InputLabel>
                <Select labelId="keySkill" label="Key Skills">
                  <MenuItem value={1}>Option 1</MenuItem>
                  <MenuItem value={2}>Option 2</MenuItem>
                  <MenuItem value={3}>Option 3</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl className="mb-0">
                <InputLabel id="salaryRange">Salary Range</InputLabel>
                <Select labelId="salaryRange" label="Salary Range">
                  <MenuItem value={1}>Option 1</MenuItem>
                  <MenuItem value={2}>Option 2</MenuItem>
                  <MenuItem value={3}>Option 3</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
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
export default ReacruiterSchedule;
