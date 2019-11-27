import React, { Component } from "react";
import { Table } from "semantic-ui-react";
import Axios from "axios";

class CompanyTable extends Component {
  state = {
    dataSave: []
  };

  componentDidMount() {
    Axios.get("http://localhost:3002/api/company").then(res => {
      const data = res.data.userData;
      this.setState({
        dataSave: data
      });
      // console.log(this.state.dataSave)
    });
  }

  render() {
    return (
      <div>
        <h2
          style={{
            textAlign: "center"
          }}
        >
          Company Information
        </h2>
        <Table compact celled definition>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell />
              <Table.HeaderCell>S.no</Table.HeaderCell>
              <Table.HeaderCell>Company Name</Table.HeaderCell>
              <Table.HeaderCell>Company CEO</Table.HeaderCell>
              <Table.HeaderCell>Company Email</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {this.state.dataSave.map((item, i) => {
              return (
                <Table.Row key={item.email}>
                  <Table.Cell collapsing />
                  <Table.Cell>{i + 1}</Table.Cell>
                  <Table.Cell>{item.CompanyName}</Table.Cell>
                  <Table.Cell>{item.CompanyCeo}</Table.Cell>
                  <Table.Cell>{item.email}</Table.Cell>
                </Table.Row>
              );
            })}
          </Table.Body>
        </Table>
      </div>
    );
  }
}

export default CompanyTable;
