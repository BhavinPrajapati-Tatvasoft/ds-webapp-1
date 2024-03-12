import {
  Avatar,
  Card,
  Grid,
  Hidden,
  IconButton,
  InputAdornment,
  InputBase,
  Typography,
  useMediaQuery,
} from "@mui/material";
import {
  addFilledIcon,
  audioImg,
  backIcon,
  chatUser1,
  chatUser2,
  chatUser3,
  chatUser4,
  emojiIcon,
  infoIcon,
  micIcon,
  searchIcon,
} from "../../../assets/images";
import { useEffect, useState } from "react";
import Aos from "aos";

const JobSeekerInbox: React.FC = () => {
  const [mobileChatHistory, setMobileChatHistory] = useState(false);
  let mdDown = useMediaQuery("(max-width:899px)");

  window.addEventListener("resize", () => {
    if (!mdDown) {
      setMobileChatHistory(false);
    }
  });
  const toggleMobileChatHistory = () => {
    if (mdDown) {
      setMobileChatHistory(!mobileChatHistory);
    } else {
      setMobileChatHistory(mobileChatHistory);
    }
  };

  // AOS Animation
  useEffect(() => {
    Aos.init({
      duration: 500,
      once: true,
    });
  }, []);
  return (
    <div className="chat-outer">
      <Grid container spacing={1.2}>
        <Grid item xs={12} md={5} xl={4}>
          <Card
            className="inbox-card"
            sx={{ height: "100%" }}
            data-aos="fade-in"
            data-aos-delay="100"
          >
            <Typography variant="h4" sx={{ pb: { xs: 2, lg: 3 } }}>
              Inbox
            </Typography>
            <InputBase
              placeholder="Search Direct Messages"
              className="search-input rounded-input"
              startAdornment={
                <InputAdornment position="start">
                  <IconButton aria-label="Search" edge="start" color="primary">
                    <Avatar alt="Search" src={searchIcon} />
                  </IconButton>
                </InputAdornment>
              }
            />
            <ul className="chat-list">
              <li className="active" onClick={toggleMobileChatHistory}>
                <Avatar src={chatUser1} alt="User" className="user-img" />
                <div className="user-name">
                  <Typography variant="h6">James Cam</Typography>
                  <Typography variant="body2">
                    James Cam reacted with heart
                  </Typography>
                </div>
                <Typography variant="caption" className="time">
                  Jan 2
                </Typography>
              </li>
              <li onClick={toggleMobileChatHistory}>
                <Avatar src={chatUser2} alt="User" className="user-img" />
                <div className="user-name">
                  <Typography variant="h6">Albert Flores</Typography>
                  <Typography variant="body2">
                    James Cam reacted with heart
                  </Typography>
                </div>
                <Typography variant="caption" className="time">
                  Jan 1
                </Typography>
              </li>
              <li onClick={toggleMobileChatHistory}>
                <Avatar src={chatUser3} alt="User" className="user-img" />
                <div className="user-name">
                  <Typography variant="h6">Guy Hawkins</Typography>
                  <Typography variant="body2">
                    James Cam reacted with heart
                  </Typography>
                </div>
                <Typography variant="caption" className="time">
                  Jan 1
                </Typography>
              </li>
              <li onClick={toggleMobileChatHistory}>
                <Avatar src={chatUser4} alt="User" className="user-img" />
                <div className="user-name">
                  <Typography variant="h6">Jenny Wilso</Typography>
                  <Typography variant="body2">
                    James Cam reacted with heart
                  </Typography>
                </div>
                <Typography variant="caption" className="time">
                  Jan 1
                </Typography>
              </li>
              <li onClick={toggleMobileChatHistory}>
                <Avatar src={chatUser3} alt="User" className="user-img" />
                <div className="user-name">
                  <Typography variant="h6">Cody Fisher</Typography>
                  <Typography variant="body2">
                    James Cam reacted with heart
                  </Typography>
                </div>
                <Typography variant="caption" className="time">
                  Jan 1
                </Typography>
              </li>
              <li onClick={toggleMobileChatHistory}>
                <Avatar src={chatUser2} alt="User" className="user-img" />
                <div className="user-name">
                  <Typography variant="h6">Albert Flores</Typography>
                  <Typography variant="body2">
                    James Cam reacted with heart
                  </Typography>
                </div>
                <Typography variant="caption" className="time">
                  Jan 1
                </Typography>
              </li>
              <li onClick={toggleMobileChatHistory}>
                <Avatar src={chatUser3} alt="User" className="user-img" />
                <div className="user-name">
                  <Typography variant="h6">Guy Hawkins</Typography>
                  <Typography variant="body2">
                    James Cam reacted with heart
                  </Typography>
                </div>
                <Typography variant="caption" className="time">
                  Jan 1
                </Typography>
              </li>
              <li onClick={toggleMobileChatHistory}>
                <Avatar src={chatUser4} alt="User" className="user-img" />
                <div className="user-name">
                  <Typography variant="h6">Jenny Wilso</Typography>
                  <Typography variant="body2">
                    James Cam reacted with heart
                  </Typography>
                </div>
                <Typography variant="caption" className="time">
                  Jan 1
                </Typography>
              </li>
              <li onClick={toggleMobileChatHistory}>
                <Avatar src={chatUser3} alt="User" className="user-img" />
                <div className="user-name">
                  <Typography variant="h6">Cody Fisher</Typography>
                  <Typography variant="body2">
                    James Cam reacted with heart
                  </Typography>
                </div>
                <Typography variant="caption" className="time">
                  Jan 1
                </Typography>
              </li>
              <li onClick={toggleMobileChatHistory}>
                <Avatar src={chatUser2} alt="User" className="user-img" />
                <div className="user-name">
                  <Typography variant="h6">Albert Flores</Typography>
                  <Typography variant="body2">
                    James Cam reacted with heart
                  </Typography>
                </div>
                <Typography variant="caption" className="time">
                  Jan 1
                </Typography>
              </li>
              <li onClick={toggleMobileChatHistory}>
                <Avatar src={chatUser3} alt="User" className="user-img" />
                <div className="user-name">
                  <Typography variant="h6">Guy Hawkins</Typography>
                  <Typography variant="body2">
                    James Cam reacted with heart
                  </Typography>
                </div>
                <Typography variant="caption" className="time">
                  Jan 1
                </Typography>
              </li>
              <li onClick={toggleMobileChatHistory}>
                <Avatar src={chatUser4} alt="User" className="user-img" />
                <div className="user-name">
                  <Typography variant="h6">Jenny Wilso</Typography>
                  <Typography variant="body2">
                    James Cam reacted with heart
                  </Typography>
                </div>
                <Typography variant="caption" className="time">
                  Jan 1
                </Typography>
              </li>
              <li onClick={toggleMobileChatHistory}>
                <Avatar src={chatUser3} alt="User" className="user-img" />
                <div className="user-name">
                  <Typography variant="h6">Cody Fisher</Typography>
                  <Typography variant="body2">
                    James Cam reacted with heart
                  </Typography>
                </div>
                <Typography variant="caption" className="time">
                  Jan 1
                </Typography>
              </li>
            </ul>
            <Hidden mdUp>
              <Card
                className={`chat-history ${
                  mobileChatHistory ? "mobile-chat" : ""
                }`}
              >
                <div className="chat-header">
                  <IconButton
                    color="primary"
                    className="back-btn"
                    onClick={() => setMobileChatHistory(!mobileChatHistory)}
                  >
                    <Avatar src={backIcon} alt="Back" />
                  </IconButton>
                  <Avatar src={chatUser1} alt="User" className="user-img" />
                  <Typography variant="h4" className="pb-0">
                    James Cam
                  </Typography>
                  <IconButton color="primary" className="info-btn">
                    <Avatar src={infoIcon} alt="Info" />
                  </IconButton>
                </div>
                <div className="chat-content">
                  <ul>
                    <li className="receiver">
                      <div className="chat-cotent">
                        <Typography variant="body2">
                          Oh, hello! All perfectly. I will check it and get back
                          to you soon
                        </Typography>
                      </div>
                      <Typography variant="caption" className="time">
                        04:45 PM
                      </Typography>
                    </li>
                    <li className="sender">
                      <div className="chat-cotent">
                        <Typography variant="body2">
                          Oh, hello! All perfectly. I will check it and get back
                          to you soon
                        </Typography>
                      </div>
                      <Typography variant="caption" className="time">
                        04:45 PM
                      </Typography>
                    </li>
                    <li className="receiver">
                      <div className="chat-cotent">
                        <Typography variant="body2">
                          Oh, hello! All perfectly. I will check it and get back
                          to you soon
                        </Typography>
                      </div>
                      <Typography variant="caption" className="time">
                        04:45 PM
                      </Typography>
                    </li>
                    <li className="sender">
                      <div className="chat-cotent">
                        <Typography variant="body2">
                          Oh, hello! All perfectly. I will check it and get back
                          to you soon
                        </Typography>
                      </div>
                      <Typography variant="caption" className="time">
                        04:45 PM
                      </Typography>
                    </li>
                    <li className="receiver">
                      <div className="chat-cotent">
                        <Typography variant="body2">
                          Oh, hello! All perfectly. I will check it and get back
                          to you soon
                        </Typography>
                      </div>
                      <Typography variant="caption" className="time">
                        04:45 PM
                      </Typography>
                    </li>
                    <li className="sender">
                      <div className="chat-cotent">
                        <Typography variant="body2">
                          Oh, hello! All perfectly. I will check it and get back
                          to you soon
                        </Typography>
                      </div>
                      <Typography variant="caption" className="time">
                        04:45 PM
                      </Typography>
                    </li>
                    <li className="receiver">
                      <div className="chat-cotent">
                        <Typography variant="body2">
                          Oh, hello! All perfectly. I will check it and get back
                          to you soon
                        </Typography>
                      </div>
                      <Typography variant="caption" className="time">
                        04:45 PM
                      </Typography>
                    </li>
                    <li className="sender">
                      <div className="chat-cotent">
                        <Typography variant="body2">
                          Oh, hello! All perfectly. I will check it and get back
                          to you soon
                        </Typography>
                      </div>
                      <Typography variant="caption" className="time">
                        04:45 PM
                      </Typography>
                    </li>
                    <li className="receiver">
                      <div className="chat-cotent">
                        <Avatar
                          src={audioImg}
                          alt="Audio"
                          className="img-auto"
                        />
                      </div>
                      <Typography variant="caption" className="time">
                        04:45 PM
                      </Typography>
                    </li>
                  </ul>
                </div>
                <div className="chat-footer">
                  <IconButton color="primary" className="emoji-btn">
                    <Avatar src={emojiIcon} alt="Emoji" />
                  </IconButton>
                  <InputBase
                    placeholder="Type your message here ..."
                    className="search-input"
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton edge="end" color="primary">
                          <Avatar alt="add" src={addFilledIcon} />
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                  <IconButton color="primary" className="mic-btn">
                    <Avatar src={micIcon} alt="Mic" />
                  </IconButton>
                </div>
              </Card>
            </Hidden>
          </Card>
        </Grid>
        <Hidden mdDown>
          <Grid item xs={12} md={7} xl={8}>
            <Card
              className="chat-history"
              data-aos="fade-in"
              data-aos-delay="200"
            >
              <div className="chat-header">
                <Avatar src={chatUser1} alt="User" className="user-img" />
                <Typography variant="h4" className="pb-0">
                  James Cam
                </Typography>
                <IconButton color="primary" className="info-btn">
                  <Avatar src={infoIcon} alt="Info" />
                </IconButton>
              </div>
              <div className="chat-content">
                <ul>
                  <li className="receiver">
                    <div className="chat-cotent">
                      <Typography variant="body2">
                        Oh, hello! All perfectly. I will check it and get back
                        to you soon
                      </Typography>
                    </div>
                    <Typography variant="caption" className="time">
                      04:45 PM
                    </Typography>
                  </li>
                  <li className="sender">
                    <div className="chat-cotent">
                      <Typography variant="body2">
                        Oh, hello! All perfectly. I will check it and get back
                        to you soon
                      </Typography>
                    </div>
                    <Typography variant="caption" className="time">
                      04:45 PM
                    </Typography>
                  </li>
                  <li className="receiver">
                    <div className="chat-cotent">
                      <Typography variant="body2">
                        Oh, hello! All perfectly. I will check it and get back
                        to you soon
                      </Typography>
                    </div>
                    <Typography variant="caption" className="time">
                      04:45 PM
                    </Typography>
                  </li>
                  <li className="sender">
                    <div className="chat-cotent">
                      <Typography variant="body2">
                        Oh, hello! All perfectly. I will check it and get back
                        to you soon
                      </Typography>
                    </div>
                    <Typography variant="caption" className="time">
                      04:45 PM
                    </Typography>
                  </li>
                  <li className="receiver">
                    <div className="chat-cotent">
                      <Typography variant="body2">
                        Oh, hello! All perfectly. I will check it and get back
                        to you soon
                      </Typography>
                    </div>
                    <Typography variant="caption" className="time">
                      04:45 PM
                    </Typography>
                  </li>
                  <li className="sender">
                    <div className="chat-cotent">
                      <Typography variant="body2">
                        Oh, hello! All perfectly. I will check it and get back
                        to you soon
                      </Typography>
                    </div>
                    <Typography variant="caption" className="time">
                      04:45 PM
                    </Typography>
                  </li>
                  <li className="receiver">
                    <div className="chat-cotent">
                      <Typography variant="body2">
                        Oh, hello! All perfectly. I will check it and get back
                        to you soon
                      </Typography>
                    </div>
                    <Typography variant="caption" className="time">
                      04:45 PM
                    </Typography>
                  </li>
                  <li className="sender">
                    <div className="chat-cotent">
                      <Typography variant="body2">
                        Oh, hello! All perfectly. I will check it and get back
                        to you soon
                      </Typography>
                    </div>
                    <Typography variant="caption" className="time">
                      04:45 PM
                    </Typography>
                  </li>
                  <li className="receiver">
                    <div className="chat-cotent">
                      <Avatar src={audioImg} alt="Audio" className="img-auto" />
                    </div>
                    <Typography variant="caption" className="time">
                      04:45 PM
                    </Typography>
                  </li>
                </ul>
              </div>
              <div className="chat-footer">
                <IconButton color="primary" className="emoji-btn">
                  <Avatar src={emojiIcon} alt="Emoji" />
                </IconButton>
                <InputBase
                  placeholder="Type your message here ..."
                  className="search-input"
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton edge="end" color="primary">
                        <Avatar alt="add" src={addFilledIcon} />
                      </IconButton>
                    </InputAdornment>
                  }
                />
                <IconButton color="primary" className="mic-btn">
                  <Avatar src={micIcon} alt="Mic" />
                </IconButton>
              </div>
            </Card>
          </Grid>
        </Hidden>
      </Grid>
    </div>
  );
};
export default JobSeekerInbox;
