import {
  Avatar,
  Button,
  Card,
  Grid,
  IconButton,
  InputAdornment,
  InputBase,
  Menu,
  MenuItem,
  PopoverVirtualElement,
  Typography,
} from "@mui/material";
import {
  actionIcon,
  searchIcon,
  selectArrowIcon,
  sortAscIcon,
  sortDescIcon,
} from "../../../assets/images";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import React, { useEffect } from "react";
import Aos from "aos";

const RecruiterReport: React.FC = () => {
  // Menu
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

  // Table Menu
  const [tableActionAnchorEl, setTableActionAnchorEl] = React.useState<
    (
      | Element
      | (() => Element)
      | PopoverVirtualElement
      | (() => PopoverVirtualElement)
      | null
      | undefined
    )[]
  >([]);

  const handleOpenAction = (
    event: React.MouseEvent<EventTarget>,
    id: number
  ) => {
    const newTableActionAnchorEl = [...tableActionAnchorEl];
    newTableActionAnchorEl[id] = event.target as Element; // Assuming event.target is an Element
    setTableActionAnchorEl(newTableActionAnchorEl);
  };

  const handleCloseAction = (id: number) => {
    const newTableActionAnchorEl = [...tableActionAnchorEl];
    newTableActionAnchorEl[id] = null;
    setTableActionAnchorEl(newTableActionAnchorEl);
  };

  function sortAscendingIcon() {
    return <Avatar src={sortAscIcon} alt="Ascending" className="sort-icon" />;
  }
  function sortDescendingIcon() {
    return <Avatar src={sortDescIcon} alt="Descendig" className="sort-icon" />;
  }

  //   Data Table
  const columns: GridColDef[] = [
    {
      field: "candidateName",
      headerName: "Candidate Name",
      flex: 1,
      minWidth: 185,
    },
    { field: "jobTitle", headerName: "Job Title", flex: 1, minWidth: 130 },
    {
      field: "emailAddres",
      headerName: "Email addres",
      flex: 1,
      minWidth: 160,
    },
    {
      field: "applicationDate",
      headerName: "Application Date",
      flex: 1,
      minWidth: 180,
    },
    {
      field: "interviewer",
      headerName: "Interviewer",
      flex: 1,
      minWidth: 130,
    },
    {
      field: "interviewDate",
      headerName: "Interview Date",
      flex: 1,
      minWidth: 130,
    },
    {
      field: "source",
      headerName: "Source",
      flex: 1,
      minWidth: 100,
    },
    {
      field: "offerStatus",
      headerName: "Offer Status",
      flex: 1,
      width: 144,
      minWidth: 144,
      align: "center",
      headerAlign: "center",
      sortable: false,
      renderCell: (data: any) => {
        let statusClassName = "";
        switch (data.row.offerStatus) {
          case "Pending":
            statusClassName = "warning";
            break;
          case "Accepted":
            statusClassName = "success";
            break;
          case "Rejected":
            statusClassName = "declined";
            break;
          default:
            break;
        }
        return (
          <span className={`table-status ${statusClassName}`}>
            {data.row.offerStatus}
          </span>
        );
      },
    },
    {
      field: "actions",
      headerName: "Actions",
      width: 90,
      headerAlign: "center",
      align: "center",
      sortable: false,
      renderCell: (row) => (
        <>
          <IconButton
            color="primary"
            aria-haspopup="true"
            onClick={(event) =>
              handleOpenAction(event, parseInt(row.id.toString(), 10))
            }
          >
            <Avatar src={actionIcon} alt="Action" />
          </IconButton>
          <Menu
            id={row.id.toString()}
            anchorEl={tableActionAnchorEl[parseInt(row.id.toString(), 10)]}
            open={Boolean(tableActionAnchorEl[parseInt(row.id.toString(), 10)])}
            onClose={() => handleCloseAction(parseInt(row.id.toString(), 10))}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
          >
            <MenuItem
              onClick={() => handleCloseAction(parseInt(row.id.toString(), 10))}
            >
              Profile
            </MenuItem>
            <MenuItem
              onClick={() => handleCloseAction(parseInt(row.id.toString(), 10))}
            >
              My account
            </MenuItem>
            <MenuItem
              onClick={() => handleCloseAction(parseInt(row.id.toString(), 10))}
            >
              Logout
            </MenuItem>
          </Menu>
        </>
      ),
    },
  ];

  const rows = [
    {
      id: 1,
      candidateName: "Jane Cooper",
      jobTitle: "SRE",
      emailAddres: "jan@gmail.com",
      applicationDate: "December 2, 2023",
      interviewer: "Theresa Webb",
      interviewDate: "10/28/12",
      source: "Refferal",
      offerStatus: "Accepted",
    },
    {
      id: 2,
      candidateName: "Wade Warren",
      jobTitle: "Web Designer",
      emailAddres: "Wacd@gmail.com",
      applicationDate: "August 2, 2023",
      interviewer: "Cody Fisher",
      interviewDate: "10/28/12",
      source: "Job board",
      offerStatus: "Rejected",
    },
    {
      id: 3,
      candidateName: "Esther Howard",
      jobTitle: "Developer",
      emailAddres: "ester@gmail.com",
      applicationDate: "September 9, 2023",
      interviewer: "Kristin Watson",
      interviewDate: "7/11/19",
      source: "Website",
      offerStatus: "Pending",
    },
    {
      id: 4,
      candidateName: "Cameron Williamson",
      jobTitle: ".net",
      emailAddres: "Cam@gmail.com",
      applicationDate: "February 28, 2023",
      interviewer: "Savannah Nguyen",
      interviewDate: "10/28/12",
      source: "Refferal",
      offerStatus: "Rejected",
    },
    {
      id: 5,
      candidateName: "Brooklyn Simmons",
      jobTitle: "Java",
      emailAddres: "Brook@gmail.com",
      applicationDate: "September 24023",
      interviewer: "Floyd Miles",
      interviewDate: "10/28/12",
      source: "Website",
      offerStatus: "Accepted",
    },
    {
      id: 6,
      candidateName: "Warren Buffet",
      jobTitle: "Designer",
      emailAddres: "warren@gmail.com",
      applicationDate: "September 24,2023",
      interviewer: "Floyd Jatt",
      interviewDate: "10/28/12",
      source: "Website",
      offerStatus: "Accepted",
    },
    {
      id: 7,
      candidateName: "Joy Rich",
      jobTitle: "Android Developer",
      emailAddres: "Joy@gmail.com",
      applicationDate: "September 24,2023",
      interviewer: "Floyd Jatt",
      interviewDate: "10/28/8",
      source: "Refferal",
      offerStatus: "Rejected",
    },
    {
      id: 8,
      candidateName: "Jenil Roy",
      jobTitle: "Developer",
      emailAddres: "Jenil@gmail.com",
      applicationDate: "September 24,2023",
      interviewer: "Richie",
      interviewDate: "10/28/8",
      source: "Refferal",
      offerStatus: "Pending",
    },
    {
      id: 9,
      candidateName: "Cameron Williamson",
      jobTitle: "SRE",
      emailAddres: "william@gmail.com",
      applicationDate: "September 24,2023",
      interviewer: "Richie",
      interviewDate: "10/28/8",
      source: "Job board",
      offerStatus: "Pending",
    },
    {
      id: 10,
      candidateName: "Brooklyn Simmons",
      jobTitle: "SRE",
      emailAddres: "sim@gmail.com",
      applicationDate: "September 15,2023",
      interviewer: "Theresa Webb",
      interviewDate: "10/28/8",
      source: "Job board",
      offerStatus: "Pending",
    },
  ];

  // AOS Animation
  useEffect(() => {
    Aos.init({
      duration: 500,
      once: true,
    });
  }, []);
  return (
    <>
      <Grid container spacing={2} sx={{ pb: 2.5 }}>
        <Grid item xs="auto">
          <Typography
            variant="h3"
            className="pb-0"
            data-aos="zoom-in"
            data-aos-delay="100"
          >
            Report
          </Typography>
        </Grid>
      </Grid>
      <Card sx={{ p: { xs: 2 } }} data-aos="fade-in" data-aos-delay="200">
        <Grid container spacing={2} alignItems="center" sx={{ pb: 3 }}>
          <Grid item xs={12} sm="auto">
            <InputBase
              placeholder="Search here..."
              className="search-input rounded-input mb-0"
              startAdornment={
                <InputAdornment position="start">
                  <IconButton aria-label="Search" edge="start" color="primary">
                    <Avatar alt="Search" src={searchIcon} />
                  </IconButton>
                </InputAdornment>
              }
            />
          </Grid>
          <Grid item xs="auto" sx={{ ml: "auto" }}>
            <Grid container spacing={{ xs: 1, lg: 2 }} alignItems="center">
              <Grid item xs="auto">
                <Button
                  id="action-btn1"
                  variant="outlined"
                  color="info"
                  className="rounded-md-btn"
                  aria-controls={open1 ? "action-menu1" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open1 ? "true" : undefined}
                  onClick={handleClick1}
                >
                  All Job Title
                  <Avatar src={selectArrowIcon} alt="Arrow" />
                </Button>
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
                  <MenuItem onClick={handleClose1}>Web Designer</MenuItem>
                  <MenuItem onClick={handleClose1}>Developer</MenuItem>
                  <MenuItem onClick={handleClose1}>Java</MenuItem>
                  <MenuItem onClick={handleClose1}>.net</MenuItem>
                </Menu>
              </Grid>
              <Grid item xs="auto">
                <Button
                  id="action-btn2"
                  variant="outlined"
                  color="info"
                  className="rounded-md-btn"
                  aria-controls={open2 ? "action-menu2" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open2 ? "true" : undefined}
                  onClick={handleClick2}
                >
                  All Status
                  <Avatar src={selectArrowIcon} alt="Arrow" />
                </Button>
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
                  <MenuItem onClick={handleClose2}>
                    <span className="accepted status"></span>
                    <span>Accepted</span>
                  </MenuItem>
                  <MenuItem onClick={handleClose2}>
                    <span className="rejected status"></span>
                    <span>Rejected</span>
                  </MenuItem>
                  <MenuItem onClick={handleClose2}>
                    <span className="pending status"></span>
                    <span>Pending</span>
                  </MenuItem>
                </Menu>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <DataGrid
          rows={rows}
          columns={columns}
          disableColumnMenu
          rowHeight={62}
          columnHeaderHeight={44}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          slots={{
            columnSortedAscendingIcon: sortAscendingIcon,
            columnSortedDescendingIcon: sortDescendingIcon,
          }}
          pageSizeOptions={[5, 10]}
          checkboxSelection
        />
      </Card>
    </>
  );
};
export default RecruiterReport;
