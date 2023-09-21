import React from "react";
import Button from "../../Elements/Button";
import '../style.css'

const PlanCard = ({plan}) => {
  return (
    <div className="plan-card">
      <h1>{plan.name}</h1>
      <del>{plan.amount}</del>
      <h1 className="amount">{plan.offerAmount}</h1>
      <Button style={{ backgroundColor: plan.btnColor }}>Get Started</Button>
      <div
        style={{
          border: "none",
          height: "1px",
          background: "#333",
          margin: ".5rem 0",
        }}
      />
      <p style={{ marginBottom: "5px" }}>What you'll get:</p>
      {plan.wilGet.map((data) => (
        <div className="flex">
          {data.icon}
          <p>{data.text}</p>
        </div>
      ))}
      <u>EXPLORE FEATURES</u>
    </div>
  );
};

export default PlanCard;
