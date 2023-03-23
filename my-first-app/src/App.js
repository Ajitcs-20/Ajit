import "./App.css";

import React, { useState, useEffect } from "react";

import docLoadGif from "images/Ellipse24.jpg";

import iconWebsite from "images/Rectangle51.png";
import testiMonal from "images/testimonalfinal.png";
import vectorCompanyImg from "../../assets/images/VectorCompanyImg.png";

import weAreExten from "images/weAreExtensiveImg.png";
import vectorCompanyf from "images/VectorFdesign.png";
import iconTwitter from "images/VectorTwit.png";
import reebokSoes from "images/vector8.png";
import reebokSoes2 from "images/Vector9.png";
import reebokSoes3 from "images/vector10.png";
import reebokSoes4 from "images/vector11.png";
// import iconFotter from "../../assets/images/Vector2Icon.png";
import topImage from "images/Frame63.jpg";
import {
  AddNewTeamMember,
  DeleteTeamMember,
  getAllTeamMembers,
  UpdateTeamMember,
} from "../../services/TeamMemberServices";
import { TextField } from "@material-ui/core";
import { useSnackbar } from "notistack";
import { useSelector, useDispatch } from "react-redux";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

function SettingPage() {
  return (
    <>
      <div className="company-project-main-file">
        <div className="top-navbar-conatiner">
          <div className="top-nav-material-ui">
            <div className="top-navbar-imgo-logo"></div>

            <div>
              <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                  <Toolbar>
                    <Typography
                      variant="h6"
                      component="div"
                      sx={{ flexGrow: 1 }}
                    >
                      <img src={iconWebsite} alt="" />
                    </Typography>
                    <Button color="inherit" className="button-navbar-top">
                      Contact{" "}
                    </Button>
                    <Button color="inherit" className="button-navbar-top">
                      Work
                    </Button>
                    <IconButton
                      size="large"
                      edge="start"
                      color="inherit"
                      aria-label="menu"
                      sx={{ mr: 2 }}
                    >
                      <MenuIcon />
                    </IconButton>
                  </Toolbar>
                </AppBar>
              </Box>
            </div>
          </div>

          <div className="boy-image-extensive">
            <img src={topImage} alt="" />

            <img className="overlap-img" src={weAreExten} alt="" />
          </div>

          <div className="who-we-are">
            <p>Who we are</p>

            <h1 className="We-are-extensive">We are Extensive.</h1>

            <p className="extensive-paragrapgh">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
              aspernatur veritatis alias? Mollitia nemo adipisci quaerat,
              sapiente deleniti a dolorem.
            </p>

            <button className="book-button-fre">
              BOOK A FREE MARKETTING AUDIT
            </button>
          </div>

          <div className="digital-marketing-middle-portion d-flex">
            <div className="ecllipse-img">
              <img src={docLoadGif} className="gif" alt="" width="" />

              <h1>What We Do.</h1>
              <p>
                we do lots of stuff , bascially adding value to your product.
              </p>
            </div>

            <div className="text-digital-marketting">
              <ul className="text-name-digital-marketting">
                <li>Digital </li>
                <li>Digital </li>
                <li>Digital </li>
                <li>Digital </li>
              </ul>

              <button className="view-all-button-digital">View All</button>
            </div>
          </div>

          <div className="our-company-container">
            <div>
              <div className="out-copany-container">
                <h1 className="our-work-heading">Our Work</h1>
                <button>view all</button>

                <div>
                  <img src={{ reebokSoes }} alt="" />
                  <h3> Digital Marketting</h3>
                  <h1>STARBUCKS</h1>
                  <p>Our ad Company brought 80% footfall to the company</p>
                </div>

                <h1 className="our-work-heading">Our Work</h1>
                <button>view all</button>

                <div>
                  <img src={{ reebokSoes }} alt="" />
                  <h3> Digital Marketting</h3>
                  <h1>STARBUCKS</h1>
                  <p>Our ad Company brought 80% footfall to the company</p>
                </div>

                <h1 className="our-work-heading">Our Work</h1>
                <button>view all</button>

                <div>
                  <img src={{ reebokSoes }} alt="" />
                  <h3> Digital Marketting</h3>
                  <h1>STARBUCKS</h1>
                  <p>Our ad Company brought 80% footfall to the company</p>
                </div>

                <h1 className="our-work-heading">Our Work</h1>
                <button>view all</button>

                <div>
                  <img src={{ reebokSoes }} alt="" />
                  <h3> Digital Marketting</h3>
                  <h1>STARBUCKS</h1>
                  <p>Our ad Company brought 80% footfall to the company</p>
                </div>
              </div>
              <img src={reebokSoes} alt="" />
              <img src={reebokSoes2} alt="" />
              <img src={reebokSoes3} alt="" />
              <img src={reebokSoes4} alt="" />
            </div>
          </div>

          <div className="ours-partners-success">
            <h1>Ours Partners .</h1>
            <p>Your Success is our Success.</p>
            <div className="companyDownNameImg">
              <div className="compnyImgInterest">
                <img src={vectorCompanyf} alt="" />
                <img src={vectorCompanyImg} alt="" />
                <img src={vectorCompanyf} alt="" />
                <img src={vectorCompanyImg} alt="" />
                <img src={vectorCompanyImg} alt="" />
              </div>
              <div className="spanCompanyInterest">
                <span className="pinterestCompanyNumber">Pinterest</span>
                <span className="pinterestCompanyNumber">Pinterest</span>
                <span className="pinterestCompanyNumber">PWA</span>
                <span className="pinterestCompanyNumber">Saas</span>
                <span className="pinterestCompanyNumber">Pinterest</span>
              </div>
            </div>
            <div className="companyDownNameImg">
              <div className="compnyImgInterest">
                <img src={vectorCompanyImg} alt="" />
                <img src={vectorCompanyImg} alt="" />
                <img src={vectorCompanyf} alt="" />
                <img src={vectorCompanyImg} alt="" />
                <img src={vectorCompanyf} alt="" />
              </div>
              <div className="spanCompanyInterest">
                <span className="pinterestCompanyNumber">Pinterest</span>
                <span className="pinterestCompanyNumber">Pinterest</span>
                <span className="pinterestCompanyNumber">PWA</span>
                <span className="pinterestCompanyNumber">Saas</span>
                <span className="pinterestCompanyNumber">Pinterest</span>
              </div>
            </div>
          </div>

          <div className="testimonaldiv">
            <h1>Testimonal</h1>

            <div>
              <img src={testiMonal} alt="" />
            </div>
            <div className="workingIsGreat">
              <h1>"Working with Extensive is great"</h1>
            </div>
            <div className="workingIsGreat">
              <p>Hershel</p>
              <div>
                <p>Head of director</p>p
              </div>
            </div>
          </div>

          <div className="lookingresult">
            <h1>
              Looking to drive result ?{" "}
              <span className="letsChat">Lets Chat</span>
            </h1>
          </div>

          <div className="footer">
            <span className="logofilename">Logo</span>
            <span className="home-page-name">Home Page</span>
            <span className="home-page-name">About us</span>
            <span className="home-page-name">Book audit</span>
            <span className="home-page-name">Contact us</span>
            <span className="home-page-name">Our Services</span>
            <span className="home-page-name">Blogs</span>

            <span className="iconFooterImg">
              <img src={iconTwitter} alt="" />{" "}
              <img className="icon-footer-img-icon" src={iconTwitter} alt="" />{" "}
              <img src={iconTwitter} alt="" />
            </span>

            <div>
              <center className="copyrightFooter">Copy Right @2023.</center>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default SettingPage;
