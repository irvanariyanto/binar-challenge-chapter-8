import React from "react";

function Result(props) {
  return (
    <>
      <div className="card" style={{width: "18rem"}}>
        <div className="card-body">
          <h5 className="card-title">{props.username}</h5>
          <h5 className="card-title">{props.email}</h5>
          <h5 className="card-title">{props.password}</h5>
          <h5 className="card-title">{props.experience}</h5>
        </div>
      </div>
    </>
  )
}

export default Result;
