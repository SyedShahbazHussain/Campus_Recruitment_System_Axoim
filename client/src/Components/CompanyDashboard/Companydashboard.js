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
import PostJob from "./PostJob";
import StudentTable from "../Tables/studentTable";
import { connect } from "react-redux";
import { companySignout } from "../../Store/Actions/companyLoginAction";

const HomepageHeading = () => (
  <Container text>
    <Header
      as="h1"
      content="Welcome To Company Portal"
      inverted
      style={{
        widthTop: 50 , fontSize:40, marginTop:100
      }}
    />
  </Container>
);

class CompanyDashboard extends Component {
  state = {
    screen: "student"
  };

  handleScreen = event => {
    if (event.target.name === "student") {
      this.setState({
        screen: "student"
      });
    } else {
      this.setState({
        screen: "job"
      });
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
                <Container  style={{ width:"90%", alignItems:"center"}}>
                  <Button
                    as="a"
                    inverted={!fixed}
                    primary={fixed}
                    style={{ marginTop:0, height:35 , marginLeft: "0.5em" }}

                    name="student"
                    onClick={this.handleScreen}
                  >
                    View Students
                  </Button>

                  <Button
                    as="a"
                    inverted={!fixed}
                    primary={fixed}
                    style={{ marginTop:0, height:35 , marginLeft: "0.5em" }}

                    name="job"
                    onClick={this.handleScreen}
                  >
                    Post Jobs
                  </Button>
                  <Menu.Item position="right">
                    <Button
                      as="a"
                      inverted={!fixed}
                      primary={fixed}
                      style={{ marginTop:0, height:35 , marginLeft: "0.5em" }}

                      onClick={this.props.companySignout}
                    >
                      Sign Out
                    </Button>
                  </Menu.Item>
                </Container>
              </Menu>
              <HomepageHeading />
            </Segment>
            <br />
            {this.state.screen === "student" ? <StudentTable /> : <PostJob />}
          </Visibility>
        </Responsive>
      </React.Fragment>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    companySignout: () => {
      dispatch(companySignout());
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(CompanyDashboard);
