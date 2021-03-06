import { useContext, useState } from "react";
import { parsePath, useParams } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { Form, Button } from "react-bootstrap";

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const auth = useContext(AuthContext);
  // not need but nice for UX
  // const [confirmPassword, setConfirmPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    // with devise_token_auth
    // email must be 'valid' email and unique
    // password must be greater than = 6 chars in length
    auth.handleRegister({ email, password, name });
  };
  return (
    <div className="head">
      <h1 className="heading">Register</h1>
      <br />
      <Form onSubmit={handleSubmit} className="container">
        <div className=" mainbox2 form-outline mb-4">
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="name"
            id="form2Example4"
            className="form-control"
            placeholder="Name"
          />
        </div>
        <div className="mainbox2">
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            id="form2Example3"
            className="form-control"
            placeholder="Email"
          />
        </div>

        <br />
        <div className="mainbox2">
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            type="password"
            className="form-control"
          />
        </div>
        <br />
        <br />
        <button
          type="button"
          className="signin btn btn-primary btn-block mb-4"
          onClick={(e) => {
            handleSubmit(e);
          }}
        >
          Register
        </button>
        <hr></hr>
      </Form>
    </div>
  );
};
export default Register;
