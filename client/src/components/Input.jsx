import React from "react";

function Input(props) {
  return (
    <div className="mb-3">
      <label htmlFor="titleInput" className="form-label">{props.label}</label>
      <input type="text" value={props.value || ""} className="form-control" id="titleInput" onChange={props.onChange} />
    </div>
  )
}

export default Input;
