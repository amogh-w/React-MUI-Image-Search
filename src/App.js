import React, { Component } from "react";
import { Paper } from "@material-ui/core";
import Navbar from "./components/Navbar";
import Search from "./components/Search";

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Paper square={true} style={{ marginTop: "20px", padding: "10px" }}>
          <Search />
        </Paper>
      </React.Fragment>
    );
  }
}
