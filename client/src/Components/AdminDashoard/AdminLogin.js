import React, { Component } from "react";
import {
  Grid,
  Form,
  Segment,
  Button,
  Header,
  Message
} from "semantic-ui-react";
import { connect } from "react-redux";
import { adminAsyncLogin } from "../../Store/Middlewares/adminLoginMiddleware";
import "./Admin.css"

class AdminLogin extends Component {
  state = {
    email: "",
    password: ""
  };
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { email, password } = this.state;
    const newObj = {
      email,
      password
    };

    this.props.adminAsyncLogin(newObj);
  };

  componentWillReceiveProps(newProps) {
    const oldProps = this.props;
    if (oldProps.adminUser !== newProps.adminUser) {
      this.props.history.push("/admindashboard");
    } else {
      this.props.history.push("/adminlogin");
    }
  }

  render() {
    return (
      <div  className="container" >
      <Grid textAlign="center" verticalAlign="middle"  >
        <Grid.Column style={{ maxWidth: 550,  marginTop:80 , backgroundColor:"#74a4ae", marginBottom:282}}>
          <Header as="h2" icon color="violet" textAlign="center" style={{backgroundColor:"#1a292c",paddingTop:12, height:60,}}>
          <text style={{marginTop:20, color:"white"}}>Admin Login Here</text>
          </Header>
          <Form
            onSubmit={this.handleSubmit}
            size="large"
            inverted
            widths="equal"
          >
            <Segment  inverted color="#538590" style={{borderWidth:1, backgroundColor:"#538590"}}>
              <Form.Input
                fluid
                name="email"
                icon="mail"
                iconPosition="left"
                placeholder="Please Enter Email"
                value={email}
                onChange={this.handleChange}
                type="email"
                label="Email Address"
              />

              <Form.Input
                fluid
                name="password"
                icon="lock"
                iconPosition="left"
                placeholder="Please Enter Password"
                value={password}
                onChange={this.handleChange}
                type="password"
                label="Password"
              />
              <Button color="blue" fluid size="large"
              onClick={this.handleSubmit}
              >
                Submit
              </Button>
            </Segment>
          </Form>
          {this.props.errorMessage && (
            <Message color="red"> {this.props.errorMessage}</Message>
          )}
        </Grid.Column>
      </Grid>
      </div>
    );
  }
}

const mapStateToProps = ({ adminLoginReducer }) => {
  return {
    adminUser: adminLoginReducer.adminUser,
    errorMessage: adminLoginReducer.errorMessage
  };
};

const mapDispatchToProps = dispatch => {
  return {
    adminAsyncLogin: data => {
      dispatch(adminAsyncLogin(data));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AdminLogin);
