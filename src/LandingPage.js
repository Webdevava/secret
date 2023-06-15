import React, { useState, useEffect, useRef } from "react";
import VideoPage from "./VideoPage";

const LandingPage = () => {
  const [password, setPassword] = useState("");
  const [isValidPassword, setIsValidPassword] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [message, setMessage] = useState("");
  const [showVideoPage, setShowVideoPage] = useState(false);
  const inputRef = useRef(null);

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (password === "password") {
      setIsValidPassword(true);
      setMessage("Access Granted");
      setTimeout(() => {
        setShowVideoPage(true);
      }, 3000);
    } else {
      setMessage("Access Denied");
      setPassword("");
      setTimeout(() => {
        setShowMessage(false);
      }, 3000);
    }
    setShowMessage(true);
  };

  useEffect(() => {
    const input = inputRef.current;

    if (input) {
      input.setSelectionRange(input.value.length, input.value.length);
      input.focus();
    }
  }, []);

  useEffect(() => {
    document.body.style.overflow = showVideoPage ? "hidden" : "auto";
  }, [showVideoPage]);

  if (showVideoPage) {
    return <VideoPage />;
  }

  return (
    <div className="main">
      {showMessage && (
        <p
          style={{
            color: message === "Access Denied" ? "red" : "#04f71b",
            border:
              message === "Access Denied"
                ? "1px solid red"
                : "1px solid #04f71b",
            padding: "20px",
            fontSize: "18px",
          }}
        >
          {message}
        </p>
      )}
      {!showMessage && (
        <form onSubmit={handleFormSubmit}>
          <label htmlFor="pass">Enter Password</label>
          <span>[</span>
          <input
            id="pass"
            type="password"
            ref={inputRef}
            value={password}
            onChange={handlePasswordChange}
            maxLength={10}
          />
          <span>]</span>
        </form>
      )}
    </div>
  );
};

export default LandingPage;
