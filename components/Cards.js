import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import DescriptionIcon from '@mui/icons-material/Description';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import DeleteOutlineIcon from '@mui/icons-material/Delete';
import VideocamOutlinedIcon from '@mui/icons-material/VideocamOutlined';
import AssessmentIcon from '@mui/icons-material/Assessment';
import img from "../assests/ss.jpeg";


export default function Cards() {
  return (
    <div className=" h-screen flex items-center justify-center bg-gray-200">
      <Card sx={{ maxWidth: 345, borderRadius: 2}}>
        <CardMedia sx={{ height: 220 }} image={img} title="green iguana" />
        <CardContent sx={{ px: 3}}>
          <Typography sx={{fontSize: 18, fontWeight: "bold" , mb:2}} component="div">
            Back Entrance-front-view Camera 1
          </Typography>
          <Typography sx = {{display:"flex",alignItems:"center", mb:1}} variant="body2" color="text.secondary">
            <DescriptionIcon/> 3 Recipes
          </Typography>
          <Typography sx = {{display:"flex",alignItems:"center", mb:1}} variant="body2" color="text.secondary">
            <DescriptionIcon/> today, 4:45pm: Unidentified face detected
          </Typography>
          <Typography sx = {{display:"flex",alignItems:"center"}} variant="body2" color="text.secondary">
            <FmdGoodOutlinedIcon/> Coimbatore branch
          </Typography>
        </CardContent>
        <CardActions sx={{ display: "flex", justifyContent: "space-between", px:3}}>
        <Button variant="contained" sx={{backgroundColor: "#00e676", mb:1 }} >Active</Button>
        <div className=" flex justify-between">
            <DeleteOutlineIcon sx={{ color: "red", ml: 1}} />
            <VideocamOutlinedIcon sx={{ml: 1}} />
            <AssessmentIcon sx={{ml: 1}} />
        </div>
        </CardActions>
      </Card>
    </div>
  );
}
