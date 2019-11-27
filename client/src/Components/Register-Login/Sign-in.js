import React, { Component } from "react";
import {
  Grid,
  Form,
  Segment,
  Button,
  Header,
  Message
} from "semantic-ui-react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { asyncLogin } from "../../Store/Middlewares/StudentLogin_middleware";
import { companyAsyncLogin } from "../../Store/Middlewares/companyLoginMiddleware";
import "./Registration.css"

class SignIn extends Component {
  state = {
    email: "",
    password: "",
    role: "company"
  };
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleRole = event => {
    this.setState({
      role: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { email, password, role } = this.state;
    const newObj = {
      email,
      password,
      role
    };
    if (this.state.role === "company") {
      this.props.companyAsyncLogin(newObj);
    } else {
      this.props.asyncLogin(newObj);
    }
  };

  componentWillReceiveProps(newProps) {
    const oldProps = this.props;
    if (oldProps.currentUser !== newProps.currentUser) {
      this.props.history.push("/studentdashboard");
    } else if (oldProps.companyUser !== newProps.companyUser) {
      this.props.history.push("/companydashboard");
    }
  }

  render() {
    return (
      <div  className="container" >
      <Grid textAlign="center" verticalAlign="middle" >
        <Grid.Column style={{ maxWidth: 550,  marginTop:80 , backgroundColor:"#74a4ae", marginBottom:163}}>
          <Header as="h2" icon color="blue" textAlign="center" style={{backgroundColor:"#1a292c",paddingTop:12, height:60,}}>
        <text style={{marginTop:20, color:"white"}}>Login Here</text>
          </Header>
          <Form
            onSubmit={this.handleSubmit}
            size="large"
            inverted
            widths="equal"
          >
            <Segment inverted color="#538590" style={{borderWidth:1, backgroundColor:"#538590"}}> 
              <Form.Input
                fluid
                name="email"
                icon="mail"
                iconPosition="left"
                placeholder="Please Enter Email"
                onChange={this.handleChange}
                type="email"
                label="Email Address"
          
                style={{fontSize: '16px'}}
              />

              <Form.Input
                fluid
                name="password"
                icon="lock"
                iconPosition="left"
                placeholder="Please Enter password"
                onChange={this.handleChange}
                type="password"
                label="Password"
              />
              <label
                style={{
                  fontWeight: "bold"
                }}
              >
                Type
              </label>
              <select
                value={this.state.role}
                name="role"
                onChange={this.handleRole}
              >
                <option value="company">Company</option>
                <option value="student">Student</option>
              </select>
              <br />
              <br />
              <Button color="blue" fluid size="large">
                Submit
              </Button>
            </Segment>
          </Form>
          {this.props.errorMessage && (
            <Message color="red"> {this.props.errorMessage}</Message>
          )}

          <Message color="black" backgroundColor="#1a292c">
            Not Registered? <Link to="/register" style={{fontSize:18}} >Create an account</Link> <br />{" "}
            Or Are you Admin ? <Link to="/adminLogin" style={{fontSize:18}}>Admin Login</Link>
          </Message>
        </Grid.Column>
      </Grid>
      </div>
    );
  }
}

const mapStateToProps = ({ loginReducer, companyLoginReducer }) => {
  return {
    currentUser: loginReducer.currentUser,
    errorMessage: loginReducer.errorMessage,
    companyUser: companyLoginReducer.companyUser
  };
};

const mapDispatchToProps = dispatch => {
  return {
    asyncLogin: data => {
      dispatch(asyncLogin(data));
    },
    companyAsyncLogin: data => {
      dispatch(companyAsyncLogin(data));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignIn);
