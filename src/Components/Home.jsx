import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Sign_img from "./Sign_img";
import { NavLink } from "react-router-dom";
const Home = () => {
  const [inpval, setInpval] = useState({
    name: "",
    email: "",
    date: "",
    password: "",
  });

  const [data, setData] = useState([]);
  // console.log(inpval)

  const getdata = (e) => {
    console.log(e.target.value)

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
     console.log(inpval)
    const { name, email, date, password } = inpval;
    if (name === "") {
      alert("name field is required");
    } else if (email === "") {
      alert("email field is required");
    } else if (!email.includes("@")) {
      alert(" please enter valid email address");
    } else if (date === "") {
      alert("date field is required");
    } else if (password === "") {
    } else if (password.length < 5) {
      alert("password length greater than five");
    } else {
      console.log("data added sussefully");
      localStorage.setItem("useryoutube", JSON.stringify([...data, inpval]));
    }
  };

  return (
    <div>
      <div className="container mt-3">
        <section className="d-flex justify-content-between">
          <div className="left_data mt-3 " style={{ width: "100%" }}>
            <h3 className="text-center col-lg-6">Sign Up</h3>
            <Form>
              <Form.Group className="mb-3 col-lg-6" controlId="formBasicName">
                <Form.Control
                  type="text"
                  name="name"
                  onChange={getdata}
                  placeholder="Enter Your Name"
                />
              </Form.Group>
              <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                <Form.Control
                  type="email"
                  name="email"
                  onChange={getdata}
                  placeholder="Enter email"
                />
              </Form.Group>

              <Form.Group className="mb-3 col-lg-6" controlId="formBasicDate">
                <Form.Control name="date" onChange={getdata} type="date" />
              </Form.Group>
              <Form.Group
                className="mb-3 col-lg-6"
                controlId="formBasicPassword"
              >
                <Form.Control
                  name="password"
                  onChange={getdata}
                  type="password"
                  placeholder="Password"
                />
              </Form.Group>

              <Form.Group
                className="mb-3"
                controlId="formBasicCheckbox"
              ></Form.Group>
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
              Already have an Account <span><NavLink to="/login">SignIn</NavLink></span>
            </p>
          </div>
          <Sign_img />
        </section>
      </div>
    </div>
  );
};

export default Home;
