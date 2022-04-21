import { Form, Button } from "react-bootstrap";
import { useState } from "react";
import { saveSeller } from "../../services/sellerService";
import { toast } from "react-toastify";
const Seller = () => {
  const [Account, setAccount] = useState({
    navn: "",
    Email: "",
    password: "",
    acces: "seller",
  });

  let handleSubmit = async (e) => {
    e.preventDefault();
    console.log(Account);
    const user = await saveSeller(Account);
    if (user) {
      window.location.href = "/home";
      toast.error("Login Failed");
    }
  };

  let handlerChange = (e) => {
    setAccount({
      ...Account,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="navn"
            placeholder="Enter Your Name"
            name="navn"
            value={Account.navn}
            onChange={handlerChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="Email"
            placeholder="Enter email"
            name="Email"
            value={Account.Email}
            onChange={handlerChange}
          />
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

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Seller;
