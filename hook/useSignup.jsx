import { useState } from "react";


let useSignup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userError, setUserError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();
    let hasError = false;

    if (username.trim() === "") {
      setUserError("Username nya isi dulu");
      hasError = true;
    } else {
      setUserError("");
    }
    if (!validateEmail(email)) {
      setEmailError("Alamat email tidak valid.");
      hasError = true;
    } else {
      setEmailError("");
    }
    if (password.trim() === "") {
      setPasswordError("isi dulu Passwordnya");
      hasError = true;
    } else {
      setPasswordError("");
    }

    if (!hasError) {
      const existingAccounts =
        JSON.parse(localStorage.getItem("accounts")) || [];

      const accountExists = existingAccounts.some(
        (account) => account.email === email
      );

      if (accountExists) {
        setEmailError("Akun dengan email tersebut sudah ada.");
      } else {
        existingAccounts.push({ username, email, password });

        localStorage.setItem("accounts", JSON.stringify(existingAccounts));

        window.location.href = "/from/login";
      }
    }
  };

  const validateEmail = (email) => {
    const emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
    return emailPattern.test(email);
  };

  return {
    handleSignup,
    username,
    email,
    password,
    setUsername,
    setEmail,
    setPassword,
    setUserError,
    setEmailError,
    setPasswordError,
    userError,
    emailError,
    passwordError,
  };
};

export default useSignup;
