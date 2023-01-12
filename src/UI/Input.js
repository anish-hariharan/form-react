import React from "react";
import style from "./Input.module.css";

const Input = (props) => {
  return (
    <>
      <div className={style["labelCont"]}>
        <label className={style["label"]}>{props.name}</label>
        <input
          onInput={props.method}
          type={props.type ? props.type : ""}
          className={!props.valid ? style["input"] : style["redInput"]}
        />
      </div>
    </>
  );
};

export default Input;
