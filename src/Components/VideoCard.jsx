import react from "react";
import { Card, CardMedia, CardContent } from "@mui/material";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function VideoCard(props) {
  return (
    <div>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="140"
          width="200"
          image={props.imgLink}
          alt="Thumbnail"
        />
        <CardContent>
          <Typography align="left" variant="body2" color="text.secondary">
            {props.genre}{" "}
          </Typography>

          <Typography align="left" gutterBottom variant="h5" component="div">
            {props.title}{" "}
          </Typography>

          <Typography align="left" variant="body1">
            {props.releaseDate}{" "}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
