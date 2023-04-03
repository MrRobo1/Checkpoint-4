import React, { useState } from "react";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

  return (
    <form>
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

export default Login;