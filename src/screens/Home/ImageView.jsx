import React, { useState } from "react";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import Divider from "@material-ui/core/Divider";

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
  buttonEdit: {
    background: 'linear-gradient(45deg, #7387b2 30%, #1249e2 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(130, 128, 129, 0.30196078431372547)',
    color: 'white',
    height: 35,
    padding: '0 30px',
    fontWeight: 'bold',
    fontSize: 12
  },
  buttonDelete: {
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(130, 128, 129, 0.30196078431372547)',
    height: 35,
    margin: '0px 18px 0px 0px',
    fontWeight: 'bold',
    fontSize: 12
  },
  button: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between'
  },
  imageSize: {
      maxHeight: '38%',
      maxWidth: '40%',
      height: 175,
      width: '40%'
  }, 
  label: {
    fontSize: 12,
    fontWeight: 'bold',
    color: 'gray'
  },
  text: {
    fontSize: 12,
    marginLeft: 20,
    color: 'gray'
  },
  rowAlign: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  leftAlign: {
    alignItems: 'left'
  }
}));

export default function ImageList(props) {
  const classes = useStyles();
  const [state, setState] = useState({
    welcome: true,
    login: false
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <React.Fragment>
    <h3>Image Details</h3>
        <img src={props.currentData.imgUrl} className={classes.imageSize} alt={'imageAlt'} />
        <Box
          boxShadow={2}
          bgcolor="background.paper"
          m={1}
          p={1}
          style={{ width: "20rem", height: "10rem" }}
        >
        <div>
          <div>
            <span className={classes.label}>Image Name</span>
            <span className={classes.text}>Chelsea Otakan</span>
          </div>
          <div>
          <span className={classes.label}>Upload Date</span>
            <span className={classes.text}>Chelsea Otakan</span>
          </div>
          <div>
          <span className={classes.label}>Set as Wallpaper</span>
          </div>
        </div>
        
        <Divider />
        <div className={classes.rowAlign}>
            <span className={classes.label}>Welcome Screen</span>
            <Checkbox
            defaultChecked
                name="welcome"
                checked={state.welcome}
                color="default"
                inputProps={{ 'aria-label': 'checkbox with default color' }}
                onChange={handleChange}
            />
        </div>
        <Divider />
        <div className={classes.rowAlign}>
            <span className={classes.label}>Login Screen</span>
            <Checkbox
            defaultChecked
                name="login"
                checked={state.login}
                color="default"
                inputProps={{ 'aria-label': 'checkbox with default color' }}
                onChange={handleChange}
            />
        </div>
        </Box>
        <div className={classes.button}>
            <Button variant="outlined" className={classes.buttonDelete}>Delete</Button>
            <Button className={classes.buttonEdit}>Edit</Button>
        </div>
    </React.Fragment>
  );
}
