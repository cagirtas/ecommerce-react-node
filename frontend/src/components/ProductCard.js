/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import CardMedia from "@material-ui/core/CardMedia";
import Rating from "@material-ui/lab/Rating";

const useStyles = makeStyles({
  root: {
    minWidth: 275
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  name: {
    fontSize: 20
  },
  link: {
    textDecoration: "none"
  },
  pos: {
    marginBottom: 12
  },
  rating: {
    margin: "10px 0 0 0"
  },
  button: {
    margin: "10px 0 0 0"
  }
});

export default function ProductCard(props) {
  const classes = useStyles();
  const { product } = props;

  return (
    <>
      <Card key={product._id} className={classes.root}>
        <CardContent>
          <Link to={`/product/${product._id}`}>
            <CardMedia className={classes.media} image={product.image} />
          </Link>
          <Link to={`/product/${product._id}`} className={classes.link}>
            <Typography className={classes.name}>{product.name}</Typography>
          </Link>
          <Typography className={classes.pos} color="textSecondary">
            {product.category}
          </Typography>
          <Typography variant="body2" component="p">
            {product.description}
            <br />
          </Typography>
          <Rating
            className={classes.rating}
            name="read-only"
            value={product.rating}
            readOnly
          />
          <div>
            <Link to={`/product/${product._id}`}>
              <Button
                className={classes.button}
                variant="contained"
                color="primary"
              >
                {product.price}
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </>
  );
}
