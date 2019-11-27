import React from "react";
import {
  Grid,
  Form,
  Segment,
  Button,
  Header,
  Message
} from "semantic-ui-react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Registration.css"
// import backgroundImg from "../../../public/backgroundImg.jpg"
// import { url } from "inspector";

const baseUrl = "http://localhost:3002";

class Register extends React.Component {
  state = {
    companyName: "",
    username: "",
    lastname: "",
    email: "",
    contact: "",
    password: "",
    passwordConfirmation: "",
    errors: [],
    role: "company"
  };

  isFormValid = () => {
    let errors = [];
    let error;

    if (this.isFormEmpty(this.state)) {
      error = { message: "Fill in all fields" };
      this.setState({ errors: errors.concat(error) });
      return false;
    } else if (!this.isPasswordValid(this.state)) {
      error = { message: "Password is invalid" };
      this.setState({ errors: errors.concat(error) });
      return false;
    } else {
      return true;
    }
  };

  isFormEmpty = ({
    username,
    companyName,
    email,
    password,
    contact,
    lastname,
    passwordConfirmation
  }) => {
    if (this.state.role === "company") {
      return (
        !username.length ||
        !email.length ||
        !password.length ||
        !companyName ||
        !passwordConfirmation.length
      );
    } else {
      return (
        !username.length ||
        !email.length ||
        !password.length ||
        !companyName ||
        !passwordConfirmation.length ||
        !lastname.length ||
        !contact.length
      );
    }
  };

  isPasswordValid = ({ password, passwordConfirmation }) => {
    if (password.length < 6 || passwordConfirmation.length < 6) {
      return false;
    } else if (password !== passwordConfirmation) {
      return false;
    } else {
      return true;
    }
  };

  displayErrors = errors =>
    errors.map((error, i) => <p key={i}>{error.message}</p>);

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleRole = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  getData = async () => {
    const {
      companyName,
      role,
      email,
      password,
      username,
      lastname,
      contact
    } = this.state;
    if (role === "student") {
      try {
        const { data } = await axios.post(`${baseUrl}/api/student/register`, {
          name: username,
          lastname: lastname,
          email: email,
          password: password,
          contact: contact,
          role: "student"
        });

        if (data.success) {
          alert("You can now login");
        } else {
          alert("Sorry please try again later");
        }
      } catch (err) {
        console.log(err);
      }
    } else if (role === "company") {
      try {
        const { data } = await axios.post(`${baseUrl}/api/company/register`, {
          email: email,
          CompanyName: companyName,
          password: password,
          CompanyCeo: username,
          role: "company"
        });

        if (data.success) {
          alert("You can now login");

          this.setState(
            {
              companyName: "",
              username: "",
              lastname: "",
              email: "",
              contact: "",
              password: "",
              passwordConfirmation: "",
              errors: []
            },
            () => {
              this.props.history.push("/");
            }
          );
        } else {
          alert("Sorry please try again later");
        }
      } catch (err) {
        console.log(err);
      }
    }
  };

  handleSubmit = event => {
    if (this.isFormValid()) {
      event.preventDefault();
      this.getData();
    }
  };

  render() {
    console.log(this.state.role);
    const {
      username,
      email,
      lastname,
      contact,
      password,
      passwordConfirmation,
      errors,
      companyName
    } = this.state;

    return (
      <div  className="container" >
        
      <Grid textAlign="center" verticalAlign="middle"   >
        <Grid.Column
          style={{ maxWidth: 550,  marginTop:80 , backgroundColor:"#73a3ae", marginBottom:60}}
        >
          <Header as="h2" icon color="violet" textAlign="center" style={{backgroundColor:"#1a292c",paddingTop:12, height:60,}}>
          <text style={{marginTop:26, color:"white"}}>SignUp Here</text>
          </Header>
          <Form
            onSubmit={this.handleSubmit}
            size="large"
            inverted
            widths="equal"
          >
            <Segment  inverted color="#538590" style={{borderWidth:1, backgroundColor:"#538590"}}>
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
              <Form.Input
                fluid
                name="username"
                icon="user"
                iconPosition="left"
                placeholder="Please Enter First Name"
                onChange={this.handleChange}
                value={username}
                type="text"
                label="User Name"
              />
              {this.state.role !== "company" ? (
                <div>
                  <Form.Input
                    fluid
                    name="lastname"
                    icon="user"
                    iconPosition="left"
                    placeholder="Please Enter Last Name"
                    onChange={this.handleChange}
                    value={lastname}
                    type="text"
                    label="Lastname"
                  />
                  <Form.Input
                    fluid
                    name="contact"
                    icon="user"
                    iconPosition="left"
                    placeholder="Please Enter Cell No"
                    onChange={this.handleChange}
                    value={contact}
                    type="number"
                    label="Contact-No"
                  />
                </div>
              ) : null}

              <Form.Input
                fluid
                name="email"
                icon="mail"
                iconPosition="left"
                placeholder="Please Enter Email"
                onChange={this.handleChange}
                value={email}
                type="email"
                label="Email"
              />

              <Form.Input
                fluid
                name="password"
                icon="lock"
                iconPosition="left"
                placeholder="Please Enter password"
                onChange={this.handleChange}
                value={password}
                type="password"
                label="Password"
              />

              <Form.Input
                fluid
                name="passwordConfirmation"
                icon="repeat"
                iconPosition="left"
                placeholder="Please Enter Confirm Password"
                onChange={this.handleChange}
                value={passwordConfirmation}
                type="password"
                label="Password Confirmation"
              />
              {this.state.role === "company" ? (
                <Form.Input
                  fluid
                  name="companyName"
                  icon="copyright outline"
                  iconPosition="left"
                  placeholder="Please Enter Company Name"
                  onChange={this.handleChange}
                  value={companyName}
                  type="text"
                  label="Company name"
                />
              ) : null}
              <Button color="blue" fluid size="large" style={{fontSize:18}}>
                Submit
              </Button>
            </Segment>
          </Form>
          {errors.length > 0 && (
            <Message error>
              <h3>Error</h3>
              {this.displayErrors(errors)}
            </Message>
          )}
          <Message color="black">
            Have already an account ? <Link to="/" style={{fontSize:18}}>Login here</Link>
          </Message>
        </Grid.Column>
      </Grid>
     </div>
    );
  }
}

export default Register;
