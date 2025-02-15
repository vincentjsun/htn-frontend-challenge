import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import {
  LoginContainer,
  ContentBox,
  LoginTitle,
  LoginForm,
  LoginTextField,
  LoginButton,
} from "./Login.styles";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === "hacker" && password === "htn2025") {
      login();
      navigate("/events");
    } else {
      setError(true);
      setPassword("");
    }
  };

  return (
    <LoginContainer>
      <ContentBox>
        <LoginTitle>Login</LoginTitle>

        <LoginForm onSubmit={handleSubmit}>
          <LoginTextField
            label="Username"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
              setError(false);
            }}
            error={error}
            helperText={error ? "Invalid username or password" : ""}
          />

          <LoginTextField
            label="Password"
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setError(false);
            }}
            error={error}
            helperText={error ? "Invalid username or password" : ""}
          />

          <LoginButton>Login</LoginButton>
        </LoginForm>
      </ContentBox>
    </LoginContainer>
  );
}

export default Login;
