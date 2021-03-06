import {
  Button,
  Grid,
  TextField,
} from "@material-ui/core";
import { AccountCircle } from "@material-ui/icons";
import React, { ReactElement, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";

import clsx from "clsx";
import {
  makeStyles,
  Theme,
  createStyles,
} from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import Input from "@material-ui/core/Input";
import EmailRoundedIcon from "@material-ui/icons/EmailRounded";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import PhoneAndroidRoundedIcon from "@material-ui/icons/PhoneAndroidRounded";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import BlogImg from "../images/blogImg.svg";
import { Link } from "react-router-dom";
import { userSignUp } from "../service/service";

interface Props {}
interface State {
  password: string;
  showPassword: boolean;
}
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    margin: {
      margin: theme.spacing(1),
    },
    textField: {
      width: "25ch",
    },
    root: {
      display: "flex",
      flexWrap: "wrap",
    },
  })
);
export default function SignupPage({}: Props): ReactElement {
  const classes = useStyles();
  const [values, setValues] = React.useState<State>({
    password: "",
    showPassword: false,
  });
  const [userName, setuserName] = useState("");
  const [email, setemail] = useState("");
const [phoneNumber, setphoneNumber] = useState("")


  const handleChange =
    (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [prop]: event.target.value });
    };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };
  const submitFormData =(e:any) =>{
    e.preventDefault();
    const data = {
      username : userName,
      email: email,
      phone:phoneNumber,
      password: values.password,
    }
    const response = userSignUp(data);
    response.then((res)=>console.log(res))
  }
  return (
    <div className="bg-c wh-100">
      <Container className="mt-10 bradius img-shadow">
        <Row className="h-600">
          <Col xs={12} md={7} className="bg-color blb-blt ">
            <img className="wh-100 blb-blt" src={BlogImg}></img>
          </Col>

          <Col xs={12} md={5} className="white borderR">
            <Container className="mt-10">
              <div className="mt-10">
                <Link to="/user/login">
                <Button variant="outlined" color="primary" size="small">
                  Sign In
                </Button>
                </Link>
              </div>
              <div className="vertically-center">
                <div className="text-center">
                  <h2>Create an account</h2>
                </div>
                <form onSubmit={submitFormData}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <div>
                    <Grid
                      className={classes.margin}
                      container
                      alignItems="flex-end"
                    >
                      <Grid item>
                        <TextField
                          id="input-with-icon-grid"
                          label="User Name"
                          onChange={(e:any)=>{setuserName(e.target.value)}}
                          value={userName}
                        />
                      </Grid>
                      <Grid item style={{borderBottom:"1px solid #949494"}}>
                        <AccountCircle />
                      </Grid>
                    </Grid>
                  </div>
                  <div>
                    <Grid
                      className={classes.margin}
                      container
                      alignItems="flex-end"
                    >
                      <Grid item>
                        <TextField  label="Email" 
                        onChange={(e:any)=>{setemail(e.target.value)}}
                        value={email}
                        />
                        
                      </Grid>
                      <Grid item style={{borderBottom:"1px solid #949494"}}>
                        <EmailRoundedIcon />
                      </Grid>
                    </Grid>
                  </div>
                  <div>
                    <Grid
                      className={classes.margin}
                      container
                      alignItems="flex-end"
                    >
                      <Grid item>
                        <TextField
                          label="Mobile Number"
                          onChange={(e:any)=>{setphoneNumber(e.target.value)}}
                          value={phoneNumber}
                        />
                      </Grid>
                      <Grid item style={{borderBottom:"1px solid #949494"}}>
                        <PhoneAndroidRoundedIcon />
                      </Grid>
                    </Grid>
                  </div>
                  <div></div>
                  <div className={classes.root}>
                    <div>
                      <FormControl
                        className={clsx(classes.margin, classes.textField)}
                      >
                        <InputLabel htmlFor="standard-adornment-password">
                          Password
                        </InputLabel>
                        <Input
                          id="standard-adornment-password"
                          type={values.showPassword ? "text" : "password"}
                          value={values.password}
                          onChange={handleChange("password")}
                          endAdornment={
                            <InputAdornment position="end">
                              <IconButton
                                className="p-0"
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                              >
                                {values.showPassword ? (
                                  <Visibility />
                                ) : (
                                  <VisibilityOff />
                                )}
                              </IconButton>
                            </InputAdornment>
                          }
                        />
                      </FormControl>
                    </div>
                  </div>
                  <div className="mt-10 text-center">
                    <Button
                      variant="contained"
                      style={{
                        backgroundColor: "#4349BE",
                        color: "white",
                        padding: " 8px 55px",
                      }}
                      type="submit"
                    >
                      Sign up
                    </Button>
                  </div>
                </div>
                </form>
              </div>
            </Container>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
