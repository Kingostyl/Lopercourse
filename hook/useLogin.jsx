import { useState } from "react";

let useLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    const storedEmail = localStorage.getItem("email");
    const storedPassword = localStorage.getItem("password");
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);

    console.log("email:", email);
    console.log("password:", password);
    console.log("storedEmail:", storedEmail);
    console.log("storedPassword:", storedPassword);

    if (email === storedEmail && password === storedPassword) {
      localStorage.setItem("isLoggedIn", "true");
      window.location.href = "/Home";
    } else {
      setError("Email atau password salah.");
    }
  };

  return {
    handleLogin,
    email,
    password,
    setEmail,
    error,
    setPassword,
    setError,
  };
};

export default useLogin;
