// import {  useState } from "react";
// import { useNavigate } from 'react-router-dom';
// import axios from "axios";


// function Login() {

//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const navigate = useNavigate();


// async function login(event) {
//   event.preventDefault();
//   try {
//     await axios.post("http://localhost:8085/api/v1/user/login", {
//       email: email,
//       password: password,
//     }).then((res) => {
//       console.log(res.data);

//       if (res.data.message === "Email not exits") {
//         alert("Email not exits");
//       }
//       else if (res.data.message === "Login Success") {

//         navigate('/home');
//       }
//       else {
//         alert("Incorrect Email and Password not match");
//       }
//     }, fail => {
//       console.error(fail); // Error!
//     });
//   }


//   catch (err) {
//     alert(err);
//   }

// }

//     return (
//        <div>
//             <div class="container">
//             <div class="row">
//                 <h2>Login</h2>
//              <hr/>
//              </div>

//              <div class="row">
//              <div class="col-sm-6">

//             <form>
//         <div class="form-group">
//           <label>Email</label>
//           <input type="email"  class="form-control" id="email" placeholder="Enter Name"

//           value={email}
//           onChange={(event) => {
//             setEmail(event.target.value);
//           }}

//           />

//         </div>

//         <div class="form-group">
//             <label>password</label>
//             <input type="password"  class="form-control" id="password" placeholder="Enter Fee"

//             value={password}
//             onChange={(event) => {
//               setPassword(event.target.value);
//             }}

//             />
//           </div>
//                   <button type="submit" class="btn btn-primary" onClick={login} >Login</button>
//               </form>

//             </div>
//             </div>
//             </div>

//      </div>
//     );
//   }

//   export default Login;

import { useState } from "react";
import { useNavigate, Link } from 'react-router-dom';
import axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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
          alert("Email not exits");
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
      navigate('/home');

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
                  setEmail(event.target.value);
                }}

              />

            </div>

            <div class="form-group">
              <label>password</label>
              <input type="password" class="form-control" id="password" placeholder="Enter Fee"

                value={password}
                onChange={(event) => {
                  setPassword(event.target.value);
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
