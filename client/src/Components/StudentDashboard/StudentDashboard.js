import PropTypes from "prop-types";
import React, { Component } from "react";
import {
  Button,
  Container,
  Header,
  Menu,
  Responsive,
  Segment,
  Visibility
} from "semantic-ui-react";
import JobsTable from "../Tables/jobsTable";
import CompanyTable from "../Tables/companyTable";
import { connect } from "react-redux";
import { studentSignout } from "../../Store/Actions/studentLogin-actions";

const HomepageHeading = () => (
  <Container text>
    <Header
      as="h1"
      content="Welcome To Student Portal"
      inverted
      style={{
        widthTop: 50 , fontSize:40, marginTop:100
      }}
    />
  </Container>
);

class StudentDashboard extends Component {
  state = {
    screen: "jobs"
  };

  handleScreen = event => {
    if (event.target.name === "jobs") {
      this.setState({
        screen: "jobs"
      });
    } else {
      this.setState({
        screen: "company"
      });
    }
  };

  hideFixedMenu = () => this.setState({ fixed: false });
  showFixedMenu = () => this.setState({ fixed: true });

  render() {
    const { fixed } = this.state;

    return (
      <React.Fragment>
        {/* <HomepageHeading /> */}
        <Responsive>
          <Visibility
            once={false}
            onBottomPassed={this.showFixedMenu}
            onBottomPassedReverse={this.hideFixedMenu}
          >
            <Segment
              inverted
              textAlign="center"
              style={{ minHeight: 250, padding: "1em 0em" }}
              vertical
            >
              <Menu
                fixed={fixed ? "top" : null}
                inverted={!fixed}
                pointing={!fixed}
                secondary={!fixed}
                size="large"
              >
                <Container style={{backgroundColor:'red', width:"90%", alignItems:"center"}}>
                  <Button
                    as="a"
                    inverted={!fixed}
                    primary={fixed}
                    style={{ marginTop:0, height:35 , marginLeft: "0.5em" }}

                    name="jobs"
                    onClick={this.handleScreen}
                  >
                    View Jobs
                  </Button>

                  <Button
                    as="a"
                    inverted={!fixed}
                    primary={fixed}
                    style={{ marginTop:0, height:35 , marginLeft: "0.5em" }}

                    name="company"
                    onClick={this.handleScreen}
                  >
                    View companies
                  </Button>
                  <Menu.Item position="right">
                    <Button
                      as="a"
                      inverted={!fixed}
                      primary={fixed}
                      style={{ marginTop:0, height:35 , marginLeft: "0.5em" }}

                      onClick={this.props.studentSignout}
                    >
                      Sign Out
                    </Button>
                  </Menu.Item>
                </Container>
              </Menu>
              <HomepageHeading />
            </Segment>

            <br />

            {this.state.screen === "jobs" ? <JobsTable /> : <CompanyTable />}
          </Visibility>
        </Responsive>
      </React.Fragment>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    studentSignout: () => {
      dispatch(studentSignout());
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(StudentDashboard);
