import React, { Component } from "react";
import { Table, Button, Icon } from "semantic-ui-react";
import Axios from "axios";

class AdminStudentTable extends Component {
  state = {
    dataSave: []
  };

  componentDidMount() {
    Axios.get("http://localhost:3002/api/student").then(res => {
      const data = res.data.userData;
      this.setState({
        dataSave: data
      });
      // console.log(this.state.dataSave)
    });
  }

  handleRemove = event => {
    Axios.delete("http://localhost:3002/api/student", {
      data: { email: event.target.name }
    })
      .then(res => {
        if (res.status === 200) {
          Axios.get("http://localhost:3002/api/student").then(res => {
            const data = res.data.userData;
            this.setState({
              dataSave: data
            });
          });
        }
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <h2
          style={{
            textAlign: "center"
          }}
        >
          Student Information
        </h2>
        <Table compact celled definition>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell />
              <Table.HeaderCell>S.no</Table.HeaderCell>
              <Table.HeaderCell>First Name</Table.HeaderCell>
              <Table.HeaderCell>Last Name</Table.HeaderCell>
              <Table.HeaderCell>E-mail address</Table.HeaderCell>
              <Table.HeaderCell>Contact No</Table.HeaderCell>
              <Table.HeaderCell>Applied To</Table.HeaderCell>
              <Table.HeaderCell>Remove</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {this.state.dataSave.map((item, i) => {
              return (
                <Table.Row key={item.email}>
                  <Table.Cell collapsing />
                  <Table.Cell>{i + 1}</Table.Cell>
                  <Table.Cell>{item.name}</Table.Cell>
                  <Table.Cell>{item.lastname}</Table.Cell>
                  <Table.Cell>{item.email}</Table.Cell>
                  <Table.Cell>{item.contact}</Table.Cell>
                  <Table.Cell>{item.applied}</Table.Cell>
                  <Table.Cell>
                    <Button
                      floated="right"
                      icon
                      labelPosition="left"
                      primary
                      size="small"
                      name={item.email}
                      onClick={this.handleRemove}
                    >
                      <Icon name="eraser" /> Remove
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

export default AdminStudentTable;
