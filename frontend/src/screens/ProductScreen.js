/* eslint-disable react/prop-types */
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Box, Button, Container, TextField } from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  image: {
    width: "100%"
  },
  form: {
    width: "20%",
    margin: "10px 0 10px 0"
  }
}));

function ProductScreen(props) {
  const classes = useStyles();
  const product = data.products.find(x => x._id === props.match.params.id);
  if (!product) {
    return <div>Product Not Found</div>;
  }

  return (
    <div className={classes.root}>
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item sm={4}>
            <img src={product.image} alt={product.image} />
          </Grid>
          <Grid item sm={4}>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <ul>
                <li style={{ listStyleType: "none" }}>
                  <h2>{product.name}</h2>
                </li>
                <li
                  style={{
                    display: "flex",
                    alignItems: "center",
                    listStyleType: "none"
                  }}
                >
                  <Rating
                    value={product.rating}
                    style={{ marginRight: "10px" }}
                  />
                  <h3>{product.numReviews} Reviews</h3>
                </li>
                <li
                  style={{
                    display: "flex",
                    alignItems: "center",
                    listStyleType: "none"
                  }}
                >
                  <h3>Price: {product.price}</h3>
                </li>
                <li
                  style={{
                    display: "flex",
                    alignItems: "center",
                    listStyleType: "none"
                  }}
                >
                  <h3>Description: {product.description}</h3>
                </li>
              </ul>
            </div>
          </Grid>
          <Grid item sm={3}>
            <Box
              border={1}
              borderRadius="4px"
              marginTop="10px"
              marginLeft="30px"
            >
              <div style={{ margin: "10px" }}>
                <div>
                  <h2>Seller: {product.seller}</h2>
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <h3>Status:{"\u00A0"}</h3>
                  {product.countInStock > 0 ? (
                    <h3 style={{ color: "green" }}>In Stock</h3>
                  ) : (
                    <h3 style={{ color: "red" }}>Out Of Stock</h3>
                  )}
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <h3>Quantity:{"\u00A0"}</h3>
                  <form className={classes.form} noValidate autoComplete="off">
                    <TextField
                      id="outlined-basic"
                      label="1"
                      variant="outlined"
                    />
                  </form>
                </div>
                <div>
                  <Button variant="contained" color="primary">
                    Add Cart
                  </Button>
                </div>
              </div>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default ProductScreen;
