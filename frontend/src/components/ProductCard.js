import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import Rating from '@material-ui/lab/Rating';
import data from '../data'

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  name: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  rating: {
    margin: '10px 0 0 0',
  },
  button: {
    margin: '10px 0 0 0'
  }
});


export default function ProductCard() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  const [value, setValue] = React.useState(2);

  return (
    <>
    {data.products.map((item)=>(
    <Card key={item._id} className={classes.root}>
      <CardContent>
        <a href={`/item/${item._id}`}>
         <CardMedia className={classes.media} image={item.image}/>
        </a>
            <Typography variant="h5" component="h2">
          {item.name}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {item.category}
        </Typography>
        <Typography variant="body2" component="p">
          {item.description}
          <br />
        </Typography>
      <Rating className={classes.rating} name="read-only" value={item.rating} readOnly />
      <div>
      <Button className={classes.button} variant="contained" color="primary" href='#test'>{item.price}</Button>
      </div>
      </CardContent>
    </Card>
    ))}
    </>
  );
}
