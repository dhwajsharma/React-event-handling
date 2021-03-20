import './App.css';
import { useState } from "react";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showpassword, setShowpassword] = useState(true);

  return (
    <div className="Container">
      <input
        type="text"
        placeholder="Enter username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Enter password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <h2>{username}</h2>

      <h2>{showpassword ? password : "*".repeat(password.length)}</h2>
      <button onClick={(e) => setShowpassword(!showpassword)} >Show/Hide password</button>
    </div>
  );
}

export default App;
