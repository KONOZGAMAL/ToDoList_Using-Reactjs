import { React, useState } from "react";
import "./Input.css";
export default function Input(props) {
  const [val, setVal] = useState("");
  const hendleEvent = (el) => {
    el.preventDefault();
    if (val !== "") {
      console.log(val);
      props.addData(val);
    }
    setVal("");
  };
  return (
    <>
      <h1 className="head">todos</h1>
      <form onSubmit={hendleEvent} className={"headForm"}>
        <input
          type="text"
          value={val}
          onChange={(e) => {
            setVal(e.target.value);
          }}
        />
        <button className="btn" type="submit">
          AddTask
        </button>
      </form>
    </>
  );
}
