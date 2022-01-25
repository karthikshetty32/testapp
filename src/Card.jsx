import React from "react";

import { NavLink } from "react-router-dom";

const Card = (props) => {
  return (
    <>
      <div className="col-md-4 col-12 mx-auto">
        <div className="card">
          <img src={props.imgsrc} className="card-img-top" alt={props.imgsrc} />
          <div className="card-body">
            <h5 className="card-title font-weight-bold">{props.title}</h5>
            <p className="card-text">
            Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a 
            document or a typeface without relying on meaningful content.
            </p>
            <NavLink to="" className="btn btn-primary">
              Check Now
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
