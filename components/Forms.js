import React, { useState } from "react";
import {
  Typography,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
} from "@mui/material";

function Form() {
  const [clickedButton, setClickedButton] = useState("");

  const handleClick = (buttonName) => {
    setClickedButton(buttonName);
  };
  return (
    <div className="h-screen flex items-center justify-center bg-gray-200">
      <form className="h-auto w-auto rounded-lg bg-white   ">
        <div className=" text-center p-10">
          <Typography
            sx={{
              fontSize: 25,
              textAlign: "center",
              fontWeight: "bold",
              pb: 2,
            }}
          >
            XYZ
          </Typography>
          <Typography
            sx={{
              fontSize: 18,
              textAlign: "center",
              fontWeight: "semibold",
              pb: 2,
            }}
          >
            Welcome OnBoard
          </Typography>
          <TextField
            sx={{ width: 280, pb: 2, px: 0.1 }}
            id="filled-basic"
            label="Your Name"
            variant="filled"
          />
          <br></br>
          <TextField
            sx={{ width: 280, pb: 2 }}
            id="filled-basic"
            label="Company Name"
            variant="filled"
          />
          <br></br>

          <FormControl variant="filled" fullWidth sx={{ pb: 2, width: 280 }}>
            <InputLabel id="demo-simple-select-label">
              Select Industry
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Age"
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
          <br></br>

          <Typography sx={{ textAlign: "left", ml: 3, pb: 1 }}>
            {" "}
            Select Number Of Locations
          </Typography>
          <div className="flex justify-center px-5 mb-4">
            <Button
              onClick={() => handleClick("1-10")}
              sx={{
                mx: 0.5,
                p: 1,
                fontWeight: "bold",
                color: clickedButton === "1-10" ? "black" : "initial",
                
              }}
            >
              1-10
            </Button>
            <Button
              onClick={() => handleClick("10-50")}
              sx={{
                mx: 0.5,
                p: 1,
                fontWeight: "bold",
                color: clickedButton === "10-50" ? "black" : "initial",
              }}
            >
              10-50
            </Button>
            <Button
              onClick={() => handleClick("50-150")}
              sx={{
                mx: 0.5,
                p: 1,
                fontWeight: "bold",
                color: clickedButton === "50-150" ? "black" : "initial",
              }}
            >
              50-150
            </Button>
            <Button
              onClick={() => handleClick("150+")}
              sx={{
                mx: 0.5,
                p: 1,
                fontWeight: "bold",
                color: clickedButton === "150+" ? "black" : "initial",
              }}
            >
              150+
            </Button>
          </div>
          <Button
            sx={{
              backgroundColor: "black",
              width: 280,
              color: "white",
              fontWeight: "bold",
              mb: 2,
            }}
          >
            Continue
          </Button>
        </div>
      </form>
    </div>
  );
}

export default Form;
