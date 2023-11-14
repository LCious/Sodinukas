// import {  useState } from "react";
// import axios from "axios";

// function Register() {

//     const [employeename, setEmployeename] = useState("");
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");


//     async function save(event) {
//         event.preventDefault();
//         try {
//           await axios.post("http://localhost:8085/api/v1/user/save", {
//           employeename: employeename,
//           email: email,
//           password: password,
//           });
//           alert("Employee Registation Successfully");

//         } catch (err) {
//           alert(err);
//         }
//       }

//     return (
//     <div>
//     <div class="container mt-4" >
//     <div class="card">
//             <h1>Student Registation</h1>

//     <form>
//         <div class="form-group">
//           <label>Employee name</label>
//           <input type="text"  class="form-control" id="employeename" placeholder="Enter Name"

//           value={employeename}
//           onChange={(event) => {
//             setEmployeename(event.target.value);
//           }}
//           />

//         </div>

//         <div class="form-group">
//           <label>email</label>
//           <input type="email"  class="form-control" id="email" placeholder="Enter Email"

//           value={email}
//           onChange={(event) => {
//             setEmail(event.target.value);
//           }}

//           />

//         </div>

//         <div class="form-group">
//             <label>password</label>
//             <input type="password"  class="form-control" id="password" placeholder="Enter password"

//             value={password}
//             onChange={(event) => {
//               setPassword(event.target.value);
//             }}

//             />
//           </div>

//         <button type="submit" class="btn btn-primary mt-4" onClick={save} >Save</button>

//       </form>
//     </div>
//     </div>
//      </div>
//     );
//   }

//   export default Register;


import { useState } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';

function Register() {
  const [employeename, setEmployeename] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function save(event) {
    event.preventDefault();
    try {
      await axios.post("http://localhost:8085/api/v1/user/save", {
        employeename: employeename,
        email: email,
        password: password,
      });
      alert("Employee Registation Successfully");

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
            <label>Employee name</label>
            <input type="text" class="form-control" id="username" placeholder="Enter Name"

              value={employeename}
              onChange={(event) => {
                setEmployeename(event.target.value);
              }}
            />

          </div>

          <div class="form-group">
            <label>email</label>
            <input type="email" class="form-control" id="email" placeholder="Enter Email"

              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
              }}

            />

          </div>

          <div class="form-group">
            <label>password</label>
            <input type="password" class="form-control" id="password" placeholder="Enter password"

              value={password}
              onChange={(event) => {
                setPassword(event.target.value);
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
