import React, { useState } from "react";
import "./style.css";
import { PLANS, PLAN_CATEGORIES } from "../../constants";
import PlanCard from "./partials/PlanCard";
import CategoryCard from "./partials/CategoryCard";

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
          <CategoryCard key={item.title} item={item} />
        ))}
      </div>
    </>
  );
};

export default MainSection;
