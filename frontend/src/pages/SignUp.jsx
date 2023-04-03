import React, { useState } from "react";

function SignUp() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

  return (
    <form>
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