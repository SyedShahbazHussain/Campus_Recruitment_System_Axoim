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
import AdminStudentTable from "../Tables/adminStudentTable";
import AdminCompanyTable from "../Tables/adminCompanyTable";
import AdminJobsTable from "../Tables/adminJobsTable";
import { connect } from "react-redux";
import { adminSignout } from "../../Store/Actions/adminLoginAction";

const HomepageHeading = () => (
  <Container text>
    <Header
      as="h1"
      content="Welcome To Admin Portal"
      inverted
      style={{
        widthTop: 50 , fontSize:40, marginTop:100
      }}
    />
  </Container>
);

class AdminDashboard extends Component {
  state = {
    screen: "company"
  };

  handleScreen = event => {
    this.setState({
      screen: event.target.name
    });
  };

  renderScreen = () => {
    switch (this.state.screen) {
      case "student":
        return <AdminStudentTable />;
      case "company":
        return <AdminCompanyTable />;
      case "job":
        return <AdminJobsTable />;
      default:
        break;
    }
  };

  hideFixedMenu = () => this.setState({ fixed: false });
  showFixedMenu = () => this.setState({ fixed: true });

  render() {
    const { fixed } = this.state;

    return (
      <React.Fragment>
        <Responsive>
          <Visibility
            once={false}
            onBottomPassed={this.showFixedMenu}
            onBottomPassedReverse={this.hideFixedMenu}
          >
            <Segment
              inverted
              
              // backgroundColor={"red"}
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
                <Container style={{width:"90%", alignItems:"center"}}>
                  <Button
                    as="a"
                    inverted={!fixed}
                    primary={fixed}
                    style={{ marginTop:0, height:35 , marginLeft: "0.5em" }}
                    name="student"
                    onClick={this.handleScreen}
                  >
                    View students
                  </Button>
                  <Button
                    as="a"
                    inverted={!fixed}
                    primary={fixed}
                    style={{ marginTop:0, height:35, marginLeft: "0.5em" }}
                    name="company"
                    onClick={this.handleScreen}
                  >
                    View companies
                  </Button>
                  <Button
                    as="a"
                    inverted={!fixed}
                    primary={fixed}
                    style={{ marginTop:0, height:35,marginLeft: "0.5em" }}
                    name="job"
                    onClick={this.handleScreen}
                  >
                    View Posted Jobs
                  </Button>
                  <Menu.Item position="right">
                    <Button
                      as="a"
                      inverted={!fixed}
                      primary={fixed}
                      style={{ marginLeft: "0.5em" }}
                      onClick={this.props.adminSignout}
                    >
                      Sign Out
                    </Button>
                  </Menu.Item>
                </Container>
              </Menu>
              <HomepageHeading />
            </Segment>
            <br />
            {this.renderScreen()}
          </Visibility>
        </Responsive>
      </React.Fragment>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    adminSignout: () => {
      dispatch(adminSignout());
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(AdminDashboard);
