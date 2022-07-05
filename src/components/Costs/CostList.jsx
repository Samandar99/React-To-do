import React from "react";
import "./CostList.css";

import CostItem from "./CostItem";

const CostList = (props) => {
  if (props.costs.length === 0) {
    return <h2 className="cost-list_fallback">V etom godu rasxodov netu</h2>;
  }

  return (
    <ul className="cost-list">
      {props.costs.map((cost) => (
        <CostItem
          date={cost.date}
          description={cost.description}
          amount={cost.amount}
          key={cost.id}
        />
      ))}
      
    </ul>
  );
};

export default CostList;
