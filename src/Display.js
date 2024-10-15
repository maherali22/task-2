import React from "react";

function Display({ number }) {
  const checkOddorEven = (num) => {
    if (num === "") return "";
    return num % 2 === 0 ? "even" : "odd";
  };
  return (
    <div style={{margin:"100px"}}>
      <h2>The number is: {checkOddorEven(number)}</h2>
    </div>
  );
}

export default Display;
