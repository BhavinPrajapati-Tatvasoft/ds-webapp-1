import {
  AppBar,
  Avatar,
  Badge,
  Button,
  Hidden,
  IconButton,
  InputAdornment,
  InputBase,
  Menu,
  MenuItem,
  Toolbar,
  useMediaQuery,
} from "@mui/material";
import {
  logoutIcon,
  mailIcon,
  menuIcon,
  mobileLogo,
  notificationIcon,
  profileIcon,
  profileImg,
  searchIcon,
  searchWhiteIcon,
  searchXSIcon,
  selectArrowIcon,
  settingIcon,
} from "../../assets/images";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import userTypeService from "../../services/userService";
import { ROUTES } from "../../Shared/route";
import Aos from "aos";

const Header: React.FC = () => {
  let smDown = useMediaQuery("(max-width:599px)");
  const [userType, setUserType] = useState(userTypeService.getDefaultRole());

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const isMenuOpen = Boolean(anchorEl);

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const profileMenuId = "profileMenu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      id={profileMenuId}
      keepMounted
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      {userType === "recruiter" && (
        <MenuItem
          component={Link}
          to={ROUTES.RecruiterProfile}
          onClick={handleMenuClose}
        >
          <Avatar src={profileIcon} alt="Profile" />
          Profile
        </MenuItem>
      )}
      <MenuItem onClick={handleMenuClose}>
        <Avatar src={settingIcon} alt="Setting" />
        Setting
      </MenuItem>
      <MenuItem component={Link} to={ROUTES.Blank} onClick={handleMenuClose}>
        <Avatar src={logoutIcon} alt="Logout" />
        Logout
      </MenuItem>
    </Menu>
  );
  const openDrawer = () => {
    document.body.classList.toggle("open-sidebar");
  };

  const toggleSearch = () => {
    document.body.classList.toggle("open-search");
  };
  const removeSearch = () => {
    document.body.classList.remove("open-search");
  };
  window.addEventListener("resize", () => {
    document.body.classList.remove("open-search");
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
      <AppBar position="fixed" color="inherit">
        <Toolbar>
          <Hidden lgUp>
            <IconButton
              size="large"
              edge="start"
              color="primary"
              sx={{ mr: { xs: 0.5, sm: 1 } }}
              onClick={openDrawer}
            >
              <Avatar src={menuIcon} alt="Menu" />
            </IconButton>
            <Link
              to={
                userType === "jobSeeker"
                  ? ROUTES.JobSeekerDashboard
                  : ROUTES.RecruiterDashboard
              }
            >
              <Avatar src={mobileLogo} alt="TalentHub" className="img-auto" />
            </Link>
          </Hidden>
          <InputBase
            placeholder="Search here..."
            className="search-input"
            startAdornment={
              <InputAdornment position="start">
                <IconButton aria-label="Search" edge="start" color="primary">
                  <Avatar
                    alt="Search"
                    src={smDown ? searchWhiteIcon : searchIcon}
                  />
                </IconButton>
              </InputAdornment>
            }
          />
          <div className="action-wrapper">
            <Hidden smUp>
              <IconButton
                onClick={toggleSearch}
                color="primary"
                data-aos="zoom-in"
              >
                <Avatar src={searchXSIcon} alt="Search" />
              </IconButton>
            </Hidden>
            <IconButton color="primary" data-aos="zoom-in" data-aos-delay="100">
              <Badge badgeContent={17} color="error">
                <Avatar src={notificationIcon} alt="Notificarion" />
              </Badge>
            </IconButton>
            <IconButton color="primary" data-aos="zoom-in" data-aos-delay="200">
              <Avatar src={mailIcon} alt="Mail" />
            </IconButton>
            <Button
              aria-controls={profileMenuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="primary"
              className="profile-btn"
              data-aos="zoom-in"
              data-aos-delay="300"
            >
              <Avatar src={profileImg} alt="Profile" className="profile-img" />
              <Avatar
                src={selectArrowIcon}
                alt="Select"
                className="arrow-icon"
              />
            </Button>
          </div>
          <Hidden smUp>
            <div className="search-overlay" onClick={removeSearch}></div>
          </Hidden>
        </Toolbar>
      </AppBar>
      {renderMenu}
    </>
  );
};
export default Header;
