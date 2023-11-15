import { useState } from "react";
import { useNavigate, Link } from 'react-router-dom';
import axios from "axios";

function Login() {
  const [email, setUserEmail] = useState("");
  const [password, setUserPassword] = useState("");
  const navigate = useNavigate();

  async function login(event) {
    event.preventDefault();
    try {
      await axios.post("http://localhost:8085/api/v1/user/login", {
        email: email,
        password: password,
      }).then((res) => {
        console.log(res.data);

        if (res.data.message === "Email not exits") {
          alert("User with given email does not exist");
        }
        else if (res.data.message === "Login Success") {

          navigate('/home');
        }
        else {
          alert("Incorrect Email and Password not match");
        }
      }, fail => {
        console.error(fail); // Error!
      });
    } catch (err) {
      alert(err);
    }
  }

  return (
    <div className="container mt-4">
      <h2>Sodinukas</h2>
      <div className="card">
        <h1 className="p-4">Login</h1>
        <form className="p-4">
          <div class="form-group">
            <label>Email</label>
            <input type="email" class="form-control" id="email" placeholder="Enter Name"

              value={email}
              onChange={(event) => {
                setUserEmail(event.target.value);
              }}

            />

          </div>

          <div class="form-group">
            <label>password</label>
            <input type="password" class="form-control" id="password" placeholder="Enter Fee"

              value={password}
              onChange={(event) => {
                setUserPassword(event.target.value);
              }}

            />
          </div>


          <button type="submit" className="btn btn-primary mt-4" onClick={login}>Login</button>

          <p className="mt-3">
            Don't have an account? <Link to="/register">Register here</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
