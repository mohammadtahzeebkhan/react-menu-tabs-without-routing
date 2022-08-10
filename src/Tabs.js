import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";

const Tabs = ({ active, onChange, children }) => {
  return (
    <>
      <div
        style={{
          display: "flex"
        }}
      >
        {children.map((c, index) => (
          <Link
            to={""}
            onClick={() => onChange(index)}
            className={active === index ? "activeTab" : ""}
            style={{
              width: 100
            }}
          >
            {c.props.title}
          </Link>
        ))}
      </div>
      <div>{children[active]}</div>
    </>
  );
};

export default Tabs;
