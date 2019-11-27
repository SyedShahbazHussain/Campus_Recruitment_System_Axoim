import React, { Component } from "react";
import { Button, Icon, Table } from "semantic-ui-react";
import Axios from "axios";

class JobsTable extends Component {
  state = {
    dataSave: [],
    applied: false
  };

  componentDidMount() {
    Axios.get("http://localhost:3002/api/company/jobs").then(res => {
      const data = res.data.userData;
      this.setState({
        dataSave: data
      });
      // console.log(this.state.dataSave)
    });
  }

  handleEvent = () => {
    alert("you applied on this job successfully");
    this.setState({
      applied: true
    });
  };

  render() {
    return (
      <div>
        <h2
          style={{
            textAlign: "center"
          }}
        >
          Posted Jobs Information
        </h2>
        <Table compact celled definition>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell />
              <Table.HeaderCell>S.no</Table.HeaderCell>
              <Table.HeaderCell>Job Title</Table.HeaderCell>
              <Table.HeaderCell>Company Name</Table.HeaderCell>
              <Table.HeaderCell>Job Description</Table.HeaderCell>
              <Table.HeaderCell>Salary</Table.HeaderCell>
              <Table.HeaderCell>Date</Table.HeaderCell>
              <Table.HeaderCell>Applid To</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {this.state.dataSave.map((item, i) => {
              return (
                <Table.Row key={item._id}>
                  <Table.Cell collapsing />
                  <Table.Cell>{i + 1}</Table.Cell>
                  <Table.Cell>{item.title}</Table.Cell>
                  <Table.Cell>{item.companyName}</Table.Cell>
                  <Table.Cell>{item.description}</Table.Cell>
                  <Table.Cell>{item.salary}</Table.Cell>
                  <Table.Cell>{item.date}</Table.Cell>
                  <Table.Cell>
                    <Button
                      floated="right"
                      icon
                      labelPosition="left"
                      primary
                      size="small"
                      onClick={this.handleEvent}
                      disabled={this.state.applied ? true : false}
                    >
                      <Icon name="eraser" /> Apply
                    </Button>
                  </Table.Cell>
                </Table.Row>
              );
            })}
          </Table.Body>
        </Table>
      </div>
    );
  }
}

export default JobsTable;
