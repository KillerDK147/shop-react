import { Form, Button, Toast } from "react-bootstrap";
import React, { useState } from "react";
import { login } from "../../services/authService";
import { toast, ToastContainer } from "react-toastify";
const LoginForm = () => {
  let [Account, setAccount] = useState({
    Email: "",
    password: "",
  });

  let handerSubmit = async (e) => {
    e.preventDefault();
    console.log(Account);
    // await axios
    //   .post("http://localhost:3001/api/login", { ...Account })
    //   .then((res) => {
    //     localStorage.setItem("x-auth-token", JSON.stringify(res.data));
    //     Window.location.href = "/";
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    try {
      await login(Account.Email, Account.password);
      window.location.href = "/";
      toast.success("Login Success");
    } catch (err) {
      console.log(err);
    }
    await login(Account.Email, Account.password);
    console.log("submitted");
  };

  let handlerChange = (e) => {
    setAccount({
      ...Account,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="container mt-5">
      <Form onSubmit={handerSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="Email"
            value={Account.email}
            onChange={handlerChange}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
            value={Account.password}
            onChange={handlerChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default LoginForm;
