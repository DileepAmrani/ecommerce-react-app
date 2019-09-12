import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { FaShoppingCart } from "react-icons/fa";


const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function RecipeReviewCard(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  function handleExpandClick() {
    setExpanded(!expanded);
  }

  return (
      <div style={{width: '320px'}}>
    <Card className={classes.card} >
      <CardHeader
     
     action={
         <IconButton aria-label="settings">
          </IconButton>
        }
        title={props.name}
        subheader={props.prize}
        />
      <CardMedia
        className={classes.media}
        image={props.image }
        title="Paella dish"
        onClick={()=> props.history.push('/product', {name: props.name, image: props.image, prize: props.prize, description : props.description} )}
        />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
         {props.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        {/* <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton> */}
        <IconButton aria-label="add to cart">

          <FaShoppingCart  onClick={()=> {props.history.push('/product', { name: props.name, image: props.image, prize: props.prize, description : props.description }) }}/>


        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
        })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
          >
        </IconButton>
      </CardActions>

    </Card>
          </div>
  );
}