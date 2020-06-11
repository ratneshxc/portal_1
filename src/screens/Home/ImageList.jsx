import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Typography from "@material-ui/core/Typography";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ImageView from './ImageView';

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  avatar: {
    backgroundColor: red[500]
  },
  inline: {
    display: "inline"
  },
  inlineActive: {
    display: "inline",
    color: 'white'
  }, 
   gradient: {
    background: 'linear-gradient(45deg, #03A9F4 49%, #3F51B5 96%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white'
   }
}));

const data = [
  {
    imgUrl: require("../../static/images/image1.jpg"),
    title: "FIS 2020",
    uploadDate: new Date(),
    desc: "Welcome screen"
  },
  {
    imgUrl: require("../../static/images/image2.jpg"),
    title: "FIS 2020",
    uploadDate: new Date(),
    desc: "Welcome screen"
  },
  {
    imgUrl: require("../../static/images/image3.jpg"),
    title: "FIS 2020",
    uploadDate: new Date(),
    desc: "Welcome screen"
  },
  {
    imgUrl: require("../../static/images/image4.jpeg"),
    title: "FIS 2020",
    uploadDate: new Date(),
    desc: "Welcome screen"
  }
];

export default function ImageList() {
  const classes = useStyles();
  const [listData, setListData] = useState(data);
  const [currentData, setCurrentData] = useState(data[0]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const renderImage = (item, index) => {
    setCurrentData(item);
    setCurrentIndex(index);
  }

  return (
    <React.Fragment>
      <Grid container>
        <Box
          boxShadow={10}
          bgcolor="background.paper"
          m={1}
          p={1}
          style={{ width: "25rem", height: "30rem", padding: 0 }}
        >
          <List className={classes.root}>
          <ListItem alignItems="center">
           <h3>Image List</h3>
          </ListItem>
            {listData.map((item, index) => (
              <div className={currentIndex === index ? classes.gradient :{}}
              style={{ cursor: 'pointer' }}>
                <ListItem alignItems="center" onClick={() => renderImage(item, index)}>
                  <ListItemAvatar>
                    <Avatar variant="square" alt="Remy Sharp" src={item.imgUrl} />
                  </ListItemAvatar>
                  <ListItemText
                    primary="FIS 2020"
                    secondary={
                      <React.Fragment>
                        <Typography
                          component="span"
                          variant="body2"
                          className={currentIndex === index? classes.inlineActive:classes.inline}
                          color="textPrimary"
                        >
                          {item.desc}
                        </Typography>
                      </React.Fragment>
                    }
                  />
                  <ChevronRightIcon />
                </ListItem>
                <Divider variant="inset" component="li" />
              </div>
            ))}
          </List>
        </Box>
        <Box
          boxShadow={10}
          bgcolor="background.paper"
          m={1}
          p={1}
          style={{ width: "25rem", height: "30rem", display: 'flex', flexDirection:'column', justifyContent: 'center', alignItems:'center' }}
        >
          <ImageView currentData={currentData} />
        </Box>
      </Grid>
    </React.Fragment>
  );
}
