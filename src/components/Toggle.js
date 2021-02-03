import React, { useState } from "react";


function Toggle() {

  let [isOff, setItOff] = useState(true)

  function handleClick() {
    setItOff((isOff) => !isOff);
  }

  const color = isOff ? "white" : "red";

  return <button style={{ background: color }} onClick={handleClick}>{isOff ? "OFF" : "ON"}</button>;
}

export default Toggle;
