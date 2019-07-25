import React, { Component } from "react";
import {
  Box,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button
} from "@material-ui/core";

export default class Search extends Component {
  state = {
    searchText: "",
    amount: "",
    apiKey: "12785513-8372b6489e3de0dda8d71d823",
    images: []
  };

  onSearchTextChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onAmountChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSearchButtonClick = () => {
    console.log(this.state.searchText, this.state.amount);
  };

  render() {
    return (
      <React.Fragment>
        <TextField
          name="searchText"
          value={this.state.searchText}
          onChange={this.onSearchTextChange}
          label="Search for Images"
          type="search"
          margin="normal"
          fullWidth={true}
        />
        <Box
          display="flex"
          justifyContent="space-between"
          style={{ marginTop: "10px" }}
        >
          <FormControl>
            <InputLabel>Amount</InputLabel>
            <Select
              name="amount"
              value={this.state.amount}
              onChange={this.onAmountChange}
              style={{ width: "50vw" }}
            >
              <MenuItem value={5}>Five</MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
          <Button
            variant="contained"
            color="primary"
            onClick={this.onSearchButtonClick}
          >
            Search
          </Button>
        </Box>
      </React.Fragment>
    );
  }
}
