import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import Sign_img from "./Sign_img";

const Login = () => {
  const history = useNavigate();

  const [inpval, setInpval] = useState({
    email: "",
    password: "",
  });

  const [data, setData] = useState([]);
  //console.log(inpval)

  const getdata = (e) => {
    console.log(e.target.value);

    const { value, name } = e.target;
    // console.log(value,name)

    //this is a callback function
    setInpval(() => {
      return {
        ...inpval,
        [name]: value,
      };
    });
  };

  const addData = (e) => {
    e.preventDefault();
    //console.log(inpval)

    const getUserArr = localStorage.getItem("useryoutube");
    console.log(getUserArr);

    const { email, password } = inpval;
    if (email === "") {
      alert("email field is required");
    } else if (!email.includes("@")) {
      alert(" please enter valid email address");
    } else if (password === "") {
    } else if (password.length < 5) {
      alert("password length greater than five");
    } else {
      if (getUserArr && getUserArr.length) {
        const userData = JSON.parse(getUserArr);
        const userlogin = userData.filter((el, k) => {
          return el.email === email && el.password;
        });
        if (userlogin.length === 0) {
          alert("invalid Details");
        } else {
          // console.log("user login success");
          localStorage.setItem("user_login", JSON.stringify(getUserArr));
          history("/details");
        }
      }
    }
  };
  return (
    <div>
      <div className="container mt-3">
        <section className="d-flex justify-content-between">
          <div className="left_data mt-3 " style={{ width: "100%" }}>
            <h3 className="text-center col-lg-6"> Login </h3>
            <Form>
              <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                <Form.Control
                  type="email"
                  name="email"
                  onChange={getdata}
                  placeholder="Enter email"
                />
              </Form.Group>

              <Form.Group
                className="mb-3 col-lg-6"
                controlId="formBasicPassword"
              >
                <Form.Control
                  name="password"
                  onChange={getdata}
                  type="password"
                  placeholder="password"
                />
              </Form.Group>

              <Button
                variant="primary"
                className="col-lg-6"
                style={{ background: "#1e6fc4" }}
                onClick={addData}
                type="submit"
              >
                Submit
              </Button>
            </Form>
            <p className="mt-3">
              Already have an Account <span>SignIn</span>
            </p>
          </div>
          <Sign_img />
        </section>
      </div>
    </div>
  );
};

export default Login;
