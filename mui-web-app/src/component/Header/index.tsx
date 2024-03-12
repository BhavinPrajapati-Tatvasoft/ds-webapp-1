import {
  AppBar,
  Avatar,
  Badge,
  Box,
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
  actionIcon,
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
  let mdDown = useMediaQuery("(max-width:899px)");
  let smDown = useMediaQuery("(max-width:599px)");
  const [userType, setUserType] = useState(userTypeService.getDefaultRole());

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
    React.useState<null | HTMLElement>(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const profileMenuId = "profileMenu";
  const mobileMenuId = "mobileMenu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      id={profileMenuId}
      keepMounted
      anchorOrigin={{
        vertical: mdDown ? "top" : "bottom",
        horizontal: mdDown ? "left" : "right",
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
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem onClick={handleMobileMenuClose}>
        <Avatar src={mailIcon} alt="Mail" />
        Messages
      </MenuItem>
      <MenuItem onClick={handleMobileMenuClose}>
        <Badge badgeContent={17} color="error">
          <Avatar src={notificationIcon} alt="Notification" />
        </Badge>
        Messages
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <Avatar src={profileImg} alt="Profile" />
        Profile
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
            <Hidden mdDown>
              <IconButton color="primary" data-aos="zoom-in">
                <Badge badgeContent={17} color="error">
                  <Avatar src={notificationIcon} alt="Notificarion" />
                </Badge>
              </IconButton>
              <IconButton
                color="primary"
                data-aos="zoom-in"
                data-aos-delay="100"
              >
                <Avatar src={mailIcon} alt="Mail" />
              </IconButton>
              <Button
                aria-controls={profileMenuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="primary"
                className="profile-btn"
                data-aos="zoom-in"
                data-aos-delay="200"
              >
                <Avatar
                  src={profileImg}
                  alt="Profile"
                  className="profile-img"
                />
                <Avatar
                  src={selectArrowIcon}
                  alt="Select"
                  className="arrow-icon"
                />
              </Button>
            </Hidden>
            <Hidden smUp>
              <IconButton
                onClick={toggleSearch}
                color="primary"
                sx={{ mr: -1 }}
              >
                <Avatar src={searchXSIcon} alt="Search" />
              </IconButton>
            </Hidden>
            <Hidden mdUp>
              <IconButton
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="primary"
                sx={{ mr: -1 }}
              >
                <Avatar src={actionIcon} alt="More" />
              </IconButton>
            </Hidden>
          </div>
          <Hidden smUp>
            <div className="search-overlay" onClick={removeSearch}></div>
          </Hidden>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </>
  );
};
export default Header;
