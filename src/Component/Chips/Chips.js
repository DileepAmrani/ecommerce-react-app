import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import FaceIcon from '@material-ui/icons/Face';
import '../../Component/Chips/Chips.css'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  chip: {
    margin: theme.spacing(1),
    backgroundColor: '#2c4160',
    color: '#fff'
  }

}));

export default function OutlinedChips(props) {
  const classes = useStyles();

  // function handleDelete() {
  //   alert('You clicked the delete icon.');
  // }


  return (
    <div className={classes.root} style={{display: 'inline'}}>
 
      <Chip
        id='categeries'
        icon={<FaceIcon />}
        label={props.name}
        clickable
        className={classes.chip}
        color="primary"
        variant="outlined"
        onClick={props.onclick}
      />
     
    </div>
  );
}