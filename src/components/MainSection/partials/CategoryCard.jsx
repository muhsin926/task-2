import React from "react";
import Button from "../../Elements/Button";
import "../style.css";

const CategoryCard = ({ item }) => {
  return (
    <div className="card">
      <div className="left-side">
        <div style={{ backgroundColor: item.btnColor }} className="subTitle">
          {item.subTitle}
        </div>
        <h1>{item.title}</h1>
        <p>{item.text}</p>
        <Button style={{ backgroundColor: item.btnColor, marginTop: "10px" }}>
          {item.btnContent}
        </Button>
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
  );
};

export default CategoryCard;
