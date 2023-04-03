import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import assetAPI from "../services/assetAPI";

function SignUp() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleForm = (e) => {
      e.preventDefault();

      if (firstName, lastName, email, password) {
        assetAPI
          .post("/user", { firstName, lastName, email, password })
          .then(() => navigate("/login"))
          .catch((err) => console.log(err));
        console.log("Form submitted");
      } else {
        alert("Please specify all fields");
      }
    };

  return (
    <form
      onSubmit={handleForm}
    >
        <div>
            <input 
              type="firstName"
              name="firstName" 
              id="firstName"
              onChange={(e) => setFirstName(e.target.value)} 
            />
        </div>
        <div>
            <input 
              type="lastName"
              name="lastName" 
              id="lastName"
              onChange={(e) => setLastName(e.target.value)} 
            />
        </div>
        <div>
            <input 
              type="email"
              name="email" 
              id="email"
              onChange={(e) => setEmail(e.target.value)} 
            />
        </div>
        <div>
            <input 
              type="password" 
              name="password" 
              id="password"
              onChange={(e) => setPassword(e.target.value)}
            />
        </div>
        <button type="submit">Log In</button>
    </form>
  );
}

export default SignUp;