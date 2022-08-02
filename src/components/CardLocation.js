import React from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import Carousel from "react-material-ui-carousel";
import { AiFillStar } from "react-icons/ai";
import { locations } from "../data/moc-data";
import { carouselImage, dFlex, flexBetween } from "../theme/commonTheme";
const CardLocation = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
      }}
    >
      {locations.map((e) => {
        return (
          <Box
            sx={{ width: { lg: "25%", md: "33.3%", sm: "50%", xs: "100%" } }}
            key={e.id}
          >
            <Card sx={{ weight: "100%" }}>
              <CardContent>
                <Carousel
                  autoPlay={false}
                  height="245px"
                  swipe={true}
                  animation="slide"
                >
                  {e.locationImages.map((e) => {
                    return (
                      <img
                        style={{ ...carouselImage, borderRadius: "10px" }}
                        src={e.url}
                        key={e.id}
                      />
                    );
                  })}
                </Carousel>
                <Box sx={{ mt: 2, ...dFlex, ...flexBetween }}>
                  <Box>
                    <Typography>{e.location}</Typography>
                    <Typography>{e.days}</Typography>
                    <Typography>{e.price}</Typography>
                  </Box>
                  <Box>
                    <Typography>
                      {" "}
                      {e.isNew ? <>New</> : <> {e.rating}</>}
                      <AiFillStar />
                    </Typography>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Box>
        );
      })}
    </Box>
  );
};

export default CardLocation;
