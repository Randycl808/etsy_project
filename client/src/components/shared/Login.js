import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Form, Button } from "react-bootstrap";

const Login = () => {
  const [email, setEmail] = useState("test1@test.com");
  const [password, setPassword] = useState("123456");
  const auth = useContext(AuthContext);
  // not need but nice for UX
  // const [confirmPassword, setConfirmPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    auth.handleLogin({ email, password });
  };
  return (
    <div>
      <h1>
        Login
        <hr></hr>
      </h1>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox"></Form.Group>
        <Button
          onClick={(e) => {
            handleSubmit(e);
          }}
          variant="primary"
          type="submit"
        >
          Login
        </Button>
      </Form>
    </div>
  );
};
export default Login;

{
  /* <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>; */
}
// {
//   <p>email</p>
//         <input value={email} onChange={(e) => setEmail(e.target.value)} />
//         <p>password</p>
//         <input value={password} onChange={(e) => setPassword(e.target.value)} />
//         <button>login</button>
//         <hr></hr>
// }
