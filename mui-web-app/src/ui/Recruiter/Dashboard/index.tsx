import {
  Avatar,
  Button,
  Card,
  Divider,
  Grid,
  Hidden,
  IconButton,
  InputBase,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import {
  actionIcon,
  calendarIcon,
  commentIcon,
  curveLineGraph,
  emojiIcon,
  galleryIcon,
  gifIcon,
  girlWithLaptop,
  googleIcon,
  likeIcon,
  lineGraph,
  linkedInIcon,
  listItemIcon,
  mapIcon,
  mapSmIcon,
  saveIcon,
  sendIcon,
  shareIcon,
  user1,
  user2,
  user3,
  youtubeIcon,
} from "../../../assets/images";
import { ROUTES } from "../../../Shared/route";
import { useEffect } from "react";
import Aos from "aos";

const RecruiterDashboard: React.FC = () => {
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
          <Card className="post-card" data-aos="fade-in" data-aos-delay="100">
            <div className="post-editor">
              <Grid container spacing={{ xs: 1.5, sm: 2.5 }}>
                <Grid item xs="auto">
                  <Avatar src={user1} alt="User" className="profile-icon" />
                </Grid>
                <Grid item xs>
                  <InputBase placeholder="What is happening?" sx={{ mb: 1 }} />
                  <Grid container spacing={{ xs: 0, sm: 0.25 }}>
                    <Grid item xs="auto">
                      <IconButton
                        size="small"
                        color="primary"
                        sx={{ ml: "-5px" }}
                      >
                        <Avatar src={galleryIcon} alt="Gallery" />
                      </IconButton>
                    </Grid>
                    <Grid item xs="auto">
                      <IconButton size="small" color="primary">
                        <Avatar src={gifIcon} alt="GIF" />
                      </IconButton>
                    </Grid>
                    <Grid item xs="auto">
                      <IconButton size="small" color="primary">
                        <Avatar src={listItemIcon} alt="List" />
                      </IconButton>
                    </Grid>
                    <Grid item xs="auto">
                      <IconButton size="small" color="primary">
                        <Avatar src={emojiIcon} alt="Emoji" />
                      </IconButton>
                    </Grid>
                    <Grid item xs="auto">
                      <IconButton size="small" color="primary">
                        <Avatar src={calendarIcon} alt="Calendar" />
                      </IconButton>
                    </Grid>
                    <Grid item xs="auto">
                      <IconButton size="small" color="primary">
                        <Avatar src={mapIcon} alt="Map" />
                      </IconButton>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs="auto" alignSelf="end">
                  <Button
                    variant="contained"
                    color="primary"
                    disabled
                    className="xs-icon-btn"
                  >
                    <Hidden smDown>Post</Hidden>
                    <Hidden smUp>
                      <Avatar src={sendIcon} alt="Post" />
                    </Hidden>
                  </Button>
                </Grid>
              </Grid>
              <Divider
                className="secondary-divider"
                sx={{
                  margin: {
                    xs: "16px -16px 20px",
                    sm: "20px -20px 24px",
                    lg: "24px -24px 32px",
                  },
                }}
              />
            </div>
            <ul className="post-content-wrapper">
              <li className="post-content-list">
                <Grid
                  container
                  spacing={{ xs: 1.5, sm: 2.5 }}
                  alignItems="center"
                >
                  <Grid item xs="auto">
                    <Avatar src={user2} alt="User" className="profile-icon" />
                  </Grid>
                  <Grid item xs>
                    <Typography variant="h4" sx={{ py: 0.25 }}>
                      Jonkkee
                    </Typography>
                    <div className="show-wrapper">
                      <Typography variant="body2">12h</Typography>
                      <Typography variant="body2" className="show-text">
                        #show
                      </Typography>
                    </div>
                  </Grid>
                  <Grid item xs="auto">
                    <IconButton color="primary" sx={{ mr: -1 }}>
                      <Avatar src={actionIcon} alt="Action" />
                    </IconButton>
                  </Grid>
                </Grid>
                <Typography
                  variant="body1"
                  className="text-color"
                  sx={{ pt: 1.5, pb: 0 }}
                >
                  Great video if you want to learn about information archterture
                  in design. #UX #designer
                </Typography>
                <Grid container spacing={2} alignItems="center" sx={{ pt: 3 }}>
                  <Grid item xs>
                    <Grid container spacing={3}>
                      <Grid item xs="auto">
                        <Button
                          size="small"
                          color="info"
                          variant="text"
                          className="fw-400 min-width-auto"
                          startIcon={<Avatar src={commentIcon} alt="Comment" />}
                        >
                          6
                        </Button>
                      </Grid>
                      <Grid item xs="auto">
                        <Button
                          size="small"
                          color="info"
                          variant="text"
                          className="fw-400 min-width-auto"
                          startIcon={<Avatar src={likeIcon} alt="Like" />}
                        >
                          134
                        </Button>
                      </Grid>
                      <Grid item xs="auto">
                        <Button
                          size="small"
                          color="info"
                          variant="text"
                          className="fw-400 min-width-auto"
                          startIcon={<Avatar src={saveIcon} alt="Save" />}
                        >
                          5
                        </Button>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs="auto">
                    <IconButton color="primary">
                      <Avatar src={shareIcon} alt="Share" />
                    </IconButton>
                  </Grid>
                </Grid>
              </li>
              <li className="post-content-list">
                <Grid
                  container
                  spacing={{ xs: 1.5, sm: 2.5 }}
                  alignItems="center"
                >
                  <Grid item xs="auto">
                    <Avatar src={user3} alt="User" className="profile-icon" />
                  </Grid>
                  <Grid item xs>
                    <Typography variant="h4" sx={{ py: 0.25 }}>
                      Saurabh
                    </Typography>
                    <div className="show-wrapper">
                      <Typography variant="body2">12h</Typography>
                      <Typography variant="body2" className="show-text">
                        #show
                      </Typography>
                    </div>
                  </Grid>
                  <Grid item xs="auto">
                    <IconButton color="primary" sx={{ mr: -1 }}>
                      <Avatar src={actionIcon} alt="Action" />
                    </IconButton>
                  </Grid>
                </Grid>
                <Typography
                  variant="body1"
                  className="text-color"
                  sx={{ pt: 1.5, pb: 1 }}
                >
                  Great video if you want to learn about information archterture
                  in design. #UX #designer
                </Typography>
                <Link to={ROUTES.RecruiterDashboard} className="primary-link">
                  https://www.youtube.com/watch?v=vBJ5HSs-N9o
                </Link>
                <Avatar
                  src={girlWithLaptop}
                  alt="Banner"
                  className="img-auto"
                  sx={{ mt: 4 }}
                />
                <Grid container spacing={2} alignItems="center" sx={{ pt: 3 }}>
                  <Grid item xs>
                    <Grid container spacing={3}>
                      <Grid item xs="auto">
                        <Button
                          size="small"
                          color="info"
                          variant="text"
                          className="fw-400 min-width-auto"
                          startIcon={<Avatar src={commentIcon} alt="Comment" />}
                        >
                          6
                        </Button>
                      </Grid>
                      <Grid item xs="auto">
                        <Button
                          size="small"
                          color="info"
                          variant="text"
                          className="fw-400 min-width-auto"
                          startIcon={<Avatar src={likeIcon} alt="Like" />}
                        >
                          134
                        </Button>
                      </Grid>
                      <Grid item xs="auto">
                        <Button
                          size="small"
                          color="info"
                          variant="text"
                          className="fw-400 min-width-auto"
                          startIcon={<Avatar src={saveIcon} alt="Save" />}
                        >
                          5
                        </Button>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs="auto">
                    <IconButton color="primary">
                      <Avatar src={shareIcon} alt="Share" />
                    </IconButton>
                  </Grid>
                </Grid>
              </li>
            </ul>
          </Card>
        </Grid>
        <Grid item xs={12} xl={4}>
          <Grid container spacing={{ xs: 2, lg: 3 }}>
            <Grid item xs={12} md={6} xl={12}>
              <Card
                sx={{ p: 2, pb: 0.5, height: "100%" }}
                data-aos="fade-in"
                data-aos-delay="200"
              >
                <Typography variant="h4" sx={{ pb: 1 }}>
                  Complete Basic Profile
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ pb: 0 }}
                  className="text-color"
                >
                  Make sure you add website, profile tags and social links.
                </Typography>
                <Button variant="text" sx={{ ml: "-6px" }}>
                  Update Profile
                </Button>
              </Card>
            </Grid>
            <Grid item xs={12} md={6} xl={12}>
              <Card
                sx={{ p: 2, height: "100%" }}
                data-aos="fade-in"
                data-aos-delay="300"
              >
                <Grid
                  container
                  spacing={2}
                  alignItems="center"
                  sx={{ pb: 1.5 }}
                >
                  <Grid item xs>
                    <Typography
                      variant="h4"
                      className="flex-row pb-0"
                      sx={{ gap: 1.5 }}
                    >
                      Analytics
                      <Typography
                        variant="body2"
                        sx={{ pb: 0 }}
                        className="text-color"
                      >
                        (Last 7 days)
                      </Typography>
                    </Typography>
                  </Grid>
                  <Grid item xs="auto">
                    <Link
                      to={ROUTES.RecruiterDashboard}
                      className="primary-link"
                    >
                      View More
                    </Link>
                  </Grid>
                </Grid>
                <Grid
                  container
                  spacing={2}
                  sx={{ pb: 2.5 }}
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Grid item xs="auto">
                    <Typography variant="h6" className="pb-0">
                      11
                    </Typography>
                    <Typography variant="body2" className="text-color pb-0">
                      Hire
                    </Typography>
                  </Grid>
                  <Grid item xs="auto">
                    <Avatar
                      src={curveLineGraph}
                      alt="Graph"
                      className="img-auto"
                    />
                  </Grid>
                </Grid>
                <Grid
                  container
                  spacing={2}
                  sx={{ pb: 2.5 }}
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Grid item xs="auto">
                    <Typography variant="h6" className="pb-0">
                      0
                    </Typography>
                    <Typography variant="body2" className="text-color pb-0">
                      Join
                    </Typography>
                  </Grid>
                  <Grid item xs="auto">
                    <Avatar src={lineGraph} alt="Graph" className="img-auto" />
                  </Grid>
                </Grid>
                <Grid
                  container
                  spacing={2}
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Grid item xs="auto">
                    <Typography variant="h6" className="pb-0">
                      0
                    </Typography>
                    <Typography variant="body2" className="text-color pb-0">
                      Rejected
                    </Typography>
                  </Grid>
                  <Grid item xs="auto">
                    <Avatar src={lineGraph} alt="Graph" className="img-auto" />
                  </Grid>
                </Grid>
              </Card>
            </Grid>
            <Grid item xs={12}>
              <Card
                sx={{ p: 2, pb: 3, height: "100%" }}
                data-aos="fade-in"
                data-aos-delay="400"
              >
                <Grid container spacing={2} alignItems="center" sx={{ pb: 3 }}>
                  <Grid item xs>
                    <Typography variant="h4" className="pb-0">
                      Open Jobs
                    </Typography>
                  </Grid>
                  <Grid item xs="auto">
                    <Link
                      to={ROUTES.RecruiterDashboard}
                      className="primary-link"
                    >
                      View More
                    </Link>
                  </Grid>
                </Grid>
                <Grid container spacing={1.5} sx={{ pb: 2.5 }}>
                  <Grid item xs="auto">
                    <div className="icon-outer">
                      <Avatar src={youtubeIcon} alt="YouTube" />
                    </div>
                  </Grid>
                  <Grid item xs>
                    <Typography variant="h6" className="pb-0">
                      Frontend Developer
                    </Typography>
                    <Typography
                      variant="body2"
                      className="text-color"
                      sx={{ pb: 0.75 }}
                    >
                      Youtube
                    </Typography>
                    <div className="flex-row">
                      <Avatar
                        src={mapSmIcon}
                        className="map-icon"
                        alt="Map"
                        sx={{ mr: 0.5 }}
                      />
                      <Typography
                        variant="body2"
                        className="text-color flex-row pb-0"
                      >
                        83 Woodhedge Drive, Notting, 6LW
                      </Typography>
                    </div>
                  </Grid>
                </Grid>
                <Grid container spacing={1.5} sx={{ pb: 2.5 }}>
                  <Grid item xs="auto">
                    <div className="icon-outer">
                      <Avatar src={googleIcon} alt="Google" />
                    </div>
                  </Grid>
                  <Grid item xs>
                    <Typography variant="h6" className="pb-0">
                      Ui/Ux Designer
                    </Typography>
                    <Typography
                      variant="body2"
                      className="text-color"
                      sx={{ pb: 0.75 }}
                    >
                      Google
                    </Typography>
                    <div className="flex-row">
                      <Avatar
                        src={mapSmIcon}
                        className="map-icon"
                        alt="Map"
                        sx={{ mr: 0.5 }}
                      />
                      <Typography variant="body2" className="text-color pb-0">
                        83 Woodhedge Drive, Notting, 6LW
                      </Typography>
                    </div>
                  </Grid>
                </Grid>
                <Grid container spacing={1.5}>
                  <Grid item xs="auto">
                    <div className="icon-outer">
                      <Avatar src={linkedInIcon} alt="LinkedIn" />
                    </div>
                  </Grid>
                  <Grid item xs>
                    <Typography variant="h6" className="pb-0">
                      Frontend Developer
                    </Typography>
                    <Typography
                      variant="body2"
                      className="text-color"
                      sx={{ pb: 0.75 }}
                    >
                      Linkdin
                    </Typography>
                    <div className="flex-row">
                      <Avatar
                        src={mapSmIcon}
                        className="map-icon"
                        alt="Map"
                        sx={{ mr: 0.5 }}
                      />
                      <Typography variant="body2" className="text-color pb-0">
                        83 Woodhedge Drive, Notting, 6LW
                      </Typography>
                    </div>
                  </Grid>
                </Grid>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
export default RecruiterDashboard;
