import React from "react";

function Button({ setLoginText,loginText }) {
  const handleClick = () => {
    if (loginText === "Logged out") {
      setLoginText("Logged In");
    } else {
      setLoginText("Logged out");
    }
  };

  return (
    <>
      <button onClick={handleClick}>Toggle Login</button>
    </>
  );
}

export default Button;
