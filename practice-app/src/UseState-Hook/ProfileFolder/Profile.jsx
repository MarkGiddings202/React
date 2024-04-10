import React, { useState } from "react";
import Button from "./Button";

function Profile() {

  let [loginText, setLoginText] = useState("Logged In");

  return (
      <>
      <p>{loginText}</p>
      <Button setLoginText={setLoginText} loginText={loginText}/>
      </>
  )
}

export default Profile;
