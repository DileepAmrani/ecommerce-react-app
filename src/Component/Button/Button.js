import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
    color: '#fff',
    backgroundColor: '#2c4160',
    // width: '100px'
  },
  input: {
    display: 'none',
  },
}));

export default function TextButtons(props) {
  const classes = useStyles();

  return (
    <div>
      <Button className={classes.button} onClick = {props.onclick}>{props.name}</Button>
    </div>
  );
}