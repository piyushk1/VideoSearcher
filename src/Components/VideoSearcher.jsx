import react, { useEffect, useState } from "react";
import data from "../mockData.json";
import VideoCard from "./VideoCard";
import { Grid, Box, TextField } from "@mui/material";
import axios from "axios";
export default function VideoSearcher(props) {
  const [videosData, setVideosData] = useState([]);
  const [searchText, setSearchText] = useState("");
  const handleChange = (e) => {
    setSearchText(e.target.value);
  };

  const getData = async (text) => {
    let url = "https://content-xflix-backend.azurewebsites.net/v1/videos";
    if (text !== "") {
      url = `${url}?title=${text}`;
    }
    const response = await axios.get(url);
    console.log(response.data.videos);
    const videos = response.data.videos;
    setVideosData(videos);
  };

  useEffect(() => {
    getData(searchText);
  }, [searchText]);

  return (
    <div>
      <Box mb={2}>
        <TextField
          size="small"
          type="text"
          name="search-box"
          placeholder="Search for video title"
          value={searchText}
          onChange={handleChange}
        />
      </Box>

      <Grid container spacing={1}>
        {videosData.map((video) => {
          const { id, genre, releaseDate, title, previewImage } = video;
          return (
            <Grid item key={id} sm={12} xs={12} md={6} lg={3} xl={2}>
              <VideoCard
                imgLink={previewImage}
                genre={genre}
                title={title}
                releaseDate={releaseDate}
              />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}
