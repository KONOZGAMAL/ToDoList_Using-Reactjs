import { React, useState } from "react";
import "../Input/Input.css";
export default function Item(props) {
  const [hide, setHide] = useState(true);
  const deleteElement = (id) => {
    props.deleteItem(id);
  };
  const hidePr = () => {
    setHide(!hide);
  };
  return (
    <div className="parent">
      {props.item.length > 0 ? (
        ""
      ) : (
        <div className="item">
          <p onClick={() => hidePr()} className={hide ? "" : "line-through"}>
            {props.item.text}
          </p>
          <button className="btn" onClick={() => deleteElement(props.item.id)}>
            Delete
          </button>
        </div>
      )}
    </div>
  );
}
