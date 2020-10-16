import React, { Component, Fragment } from "react";
import DataTable from "./DataTable";
import Nav from "./Nav";

export default class DataArea extends Component {
  state = {
    users: [],
    filteredUsers: []
  };

  headings = [
    { name: "Image" },
    { name: "Name" },
    { name: "Phone" },
    { name: "Email" },
    { name: "DOB" }
  ];

  handleSearchChange = event => {
    console.log(event.target.value);
  };

  render() {
    return (
      <Fragment>
        <Nav handleSearchChange={this.handleSearchChange} />
        <div className="data-area">
          <DataTable
            headings={this.headings}
            users={this.state.filteredUsers}
          />
        </div>
      </Fragment>
    );
  }
}
