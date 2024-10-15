import React from "react";
function NumberInput({ setNumber }) {
  const handleChange = (e) => {
    setNumber(e.target.value);
  };
  return (
    <div style={{ margin: "100px" }}>
      <label for="a">Number input </label>
      <input id="a" type="number" onChange={handleChange} />
    </div>
  );
}

export default NumberInput;
