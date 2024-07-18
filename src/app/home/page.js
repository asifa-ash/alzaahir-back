"use client";
import React, { useState } from "react";
import "./page.scss";
import PersonPinCircleIcon from "@mui/icons-material/PersonPinCircle";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import { Select, MenuItem, FormControl, InputLabel } from "@mui/material";
import { MantineProvider, SimpleGrid, Box } from '@mantine/core';

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
export default function Home() {
  const [age, setAge] = useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div className="container">
      <div className="nav-container">
        <div className="sub-container">
          <div className="nav">
            <div className="nav1">
              <h1>Alzaahir</h1>
            </div>
            <div className="nav2">
              <h5>Discover</h5>
              <h5>Special Deals</h5>
              <h5>Community</h5>
              <h5>About Us</h5>
            </div>
            <div className="nav3">
              <button className="btn-nav">Register</button>
            </div>
          </div>
          <div className="caption-container">
            <h1>
              Make Your Holiday
              <br /> Memorable
            </h1>
          </div>
          <div>
            <h5 style={{ color: "white" }}>
              Thinking of taking a break from every day's busy life?
              <br />
              Don't worry, we take care of your trip
            </h5>
          </div>
        </div>
      </div>
      <div className="body-part">
        <div className="box">
          <div className="sub-box1">
            <div className="icon-part">
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <PersonPinCircleIcon sx={{ fontSize: 25, color: "red" }} />
                <h6 style={{ margin: 0, color: "rgb(158, 171, 158)" }}>
                  LOCATION
                </h6>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <PermIdentityIcon sx={{ fontSize: 25, color: "blue" }} />
                <h6 style={{ margin: 0, color: "rgb(158, 171, 158)" }}>
                  PERSON
                </h6>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <PersonPinCircleIcon sx={{ fontSize: 25, color: "red" }} />
                <h6 style={{ margin: 0, color: "rgb(158, 171, 158)" }}>
                  LOCATION
                </h6>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <PermIdentityIcon sx={{ fontSize: 25, color: "blue" }} />
                <h6 style={{ margin: 0, color: "rgb(158, 171, 158)" }}>
                  PERSON
                </h6>
              </div>
            </div>
            <div className="text-part">
              <div style={{ marginTop: "-45px" }}>
                <FormControl
                  variant="outlined"
                  margin="normal"
                  sx={{ minWidth: 120 }}
                >
                  <InputLabel
                    id="demo-simple-select-label"
                    style={{
                      fontSize: "0.875rem",
                      fontWeight: "bold",
                      marginLeft: "-15px",
                    }}
                  >
                    Age
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="Age"
                    onChange={handleChange}
                    size="small"
                    sx={{
                      fontSize: "0.875rem",
                      padding: "8px",
                      border: "none",
                      ".MuiOutlinedInput-notchedOutline": { border: 0 },
                      "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                        border: 0,
                      },
                      "& .MuiSelect-select": {
                        display: "flex",
                        alignItems: "center",
                        paddingRight: "24px",
                      },
                    }}
                  >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              </div>
              <div style={{ marginTop: "-45px" }}>
                <FormControl
                  variant="outlined"
                  margin="normal"
                  sx={{ minWidth: 120 }}
                >
                  <InputLabel
                    id="demo-simple-select-label"
                    style={{
                      fontSize: "0.875rem",
                      fontWeight: "bold",
                      marginLeft: "-80px",
                    }}
                  >
                    Age
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="Age"
                    onChange={handleChange}
                    size="small"
                    sx={{
                      fontSize: "0.875rem",
                      padding: "8px",
                      border: "none",
                      ".MuiOutlinedInput-notchedOutline": { border: 0 },
                      "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                        border: 0,
                      },
                      "& .MuiSelect-select": {
                        display: "flex",
                        alignItems: "center",
                        paddingRight: "24px",
                      },
                    }}
                  >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              </div>
              <div style={{ marginTop: "-45px" }}>
                <FormControl
                  variant="outlined"
                  margin="normal"
                  sx={{ minWidth: 120 }}
                >
                  <InputLabel
                    id="demo-simple-select-label"
                    style={{
                      fontSize: "0.875rem",
                      fontWeight: "bold",
                      marginLeft: "-15px",
                    }}
                  >
                    Age
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="Age"
                    onChange={handleChange}
                    size="small"
                    sx={{
                      fontSize: "0.875rem",
                      padding: "8px",
                      border: "none",
                      ".MuiOutlinedInput-notchedOutline": { border: 0 },
                      "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                        border: 0,
                      },
                      "& .MuiSelect-select": {
                        display: "flex",
                        alignItems: "center",
                        paddingRight: "24px",
                      },
                    }}
                  >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              </div>
            </div>
          </div>
          <div className="sub-box2">
            <div className="find-trip-btn">Find Trip</div>
          </div>
        </div>
        <div className="card-container">
       
       <div className="card">

       </div>
       
         
        </div>
      </div>
    </div>
  );
}
