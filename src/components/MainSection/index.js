import React, { useState } from "react";
import "./style.css";
import { PLANS, PLAN_CATEGORIES } from "../../constants";
import Button from "../Elements/Button";
import PlanCard from "./partials/PlanCard";

const MainSection = () => {
  const [selectPlan, setSelectPlan] = useState(false);
  return (
    <>
      <h1 className="title">Choose a plan that's just right for you !</h1>
      <div>
        <div>
          <div className="plan-btn">
            <div
              onClick={() => setSelectPlan(false)}
              style={{ backgroundColor: !selectPlan && "#a5d9fa" }}
              className="planDate"
            >
              Monthly
            </div>
            <div
              onClick={() => setSelectPlan(true)}
              style={{ backgroundColor: selectPlan && "#a5d9fa" }}
              className="planDate"
            >
              Annually
              <p className="ten">-10%</p>
            </div>
          </div>
        </div>
      </div>
      <div className="plan-card-wrapper">
        {PLANS.map((plan) => (
          <PlanCard key={plan.name} plan={plan} />
        ))}
      </div>
      <div className="card-wrapper">
        {PLAN_CATEGORIES.map((item) => (
          <div className="card">
            <div className="left-side">
              <div style={{backgroundColor: item.btnColor}} className="subTitle">{item.subTitle}</div>
              <h1>{item.title}</h1>
              <p>{item.text}</p>
              <Button style={{backgroundColor: item.btnColor, marginTop: '10px'}}>{item.btnContent}</Button>
            </div>
            <div className="right-side">
              <p style={{ marginBottom: "10px" }}>What you'll get:</p>
              {item.willGet.map((data) => (
                <div className="flex">
                  {data.icon}
                  <p>{data.text}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default MainSection;
