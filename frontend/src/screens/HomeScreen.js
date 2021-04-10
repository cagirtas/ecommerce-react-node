import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { CircularProgress, Container } from "@material-ui/core";
import axios from "axios";
import MessageBox from "../components/MessageBox";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  }
}));

function HomeScreen() {
  const classes = useStyles();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get("/api/products");
        setLoading(false);
        setProducts(data);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div className={classes.root}>
      <Container maxWidth="lg">
        {loading ? (
          <CircularProgress />
        ) : error ? (
          <MessageBox>{error}</MessageBox>
        ) : (
          <Grid container spacing={12} justify="space-evenly">
            {products.map(product => (
              <ProductCard key={product._id} product={product} />
            ))}
          </Grid>
        )}
      </Container>
    </div>
  );
}

export default HomeScreen;
