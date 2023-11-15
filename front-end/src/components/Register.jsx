import { useState } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';

function Register() {
  const [username, setUserName] = useState("");
  const [email, setUserEmail] = useState("");
  const [password, setUserPassword] = useState("");

  async function save(event) {
    event.preventDefault();
    try {
      await axios.post("http://localhost:8085/api/v1/user/save", {
        username: username,
        email: email,
        password: password,
      });
      alert("User registration successful");

    } catch (err) {
      alert(err);
    }
  }

  return (
    <div className="container mt-4">
      <h2>Sodinukas</h2>
      <div className="card">
        <h1 className="p-4">User Registration</h1>
        <form className="p-4">
          <div class="form-group">
            <label>Username</label>
            <input type="text" class="form-control" id="username" placeholder="Enter Name"

              value={username}
              onChange={(event) => {
                setUserName(event.target.value);
              }}
            />

          </div>

          <div class="form-group">
            <label>email</label>
            <input type="email" class="form-control" id="email" placeholder="Enter Email"

              value={email}
              onChange={(event) => {
                setUserEmail(event.target.value);
              }}

            />

          </div>

          <div class="form-group">
            <label>password</label>
            <input type="password" class="form-control" id="password" placeholder="Enter password"

              value={password}
              onChange={(event) => {
                setUserPassword(event.target.value);
              }}

            />
          </div>

          <button type="submit" className="btn btn-primary mt-4" onClick={save}>Save</button>

          {/* Add a Link to navigate back to the login page */}
          <p className="mt-3">
            Already have an account? <Link to="/">Login here</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Register;
