import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import ProductScreen from "./screens/ProductScreen";
import HomeScreen from "./screens/HomeScreen";
import CssBaseline from "@material-ui/core/CssBaseline";

function App() {
  return (
    <>
      <BrowserRouter>
        <CssBaseline />
        <NavigationBar />
        <Route exact path="/" component={HomeScreen}></Route>
        <Route path="/product/:id" component={ProductScreen}></Route>
      </BrowserRouter>
    </>
  );
}

export default App;
