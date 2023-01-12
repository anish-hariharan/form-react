import React, { useState } from "react";
import Input from "../UI/Input";
import style from "./Form.module.css";
import { useMutation } from "@apollo/client";
import { CREATE_USER } from "../GraphQL/Mutation";

const Form = () => {
  let [names, setName] = useState("");
  let [isName, setIsname] = useState(false);
  let [emails, setEmail] = useState("");
  let [mobile, setMobile] = useState("");
  const [isCont, setCont] = useState(false);
  let [ages, setAge] = useState("");
  const [isAge, setIsAge] = useState(false);
  let object = {
    name: names,
    email: emails,
    contact: mobile,
    age: Number(ages),
  };

  const [createUser, { error }] = useMutation(CREATE_USER);

  const clicked = (e) => {
    e.preventDefault();
    createUser({
      variables: object,
    });
  };

  const name = (e) => {
    setName(e.target.value);
    if (names.length > 10) {
      setIsname(true);
    } else if (names.length < 10) {
      setIsname(false);
    }
  };

  const email = (e) => {
    setEmail(e.target.value);
  };

  const contact = (e) => {
    setMobile(e.target.value);
    if (mobile.length < 10 || mobile.length > 10 || !mobile) {
      setCont(true);
    } else if (mobile.length === 10) {
      setCont(false);
    }
  };

  const age = (e) => {
    setAge(e.target.value);
    if (ages.length === 1 || ages.length === 2 || ages.length === 3) {
      setIsAge(false);
    } else {
      setIsAge(true);
    }
  };
  return (
    <div className={style["formCont"]}>
      <form onSubmit={clicked}>
        <div className={style["form"]}>
          <div className={style["inputDiv"]}>
            <Input method={name} name="Name" valid={isName} />
          </div>
          <div className={style["inputDiv"]}>
            <Input type="email" method={email} name="email" />
          </div>
          <div className={style["inputDiv"]}>
            <Input method={contact} name="contact" valid={isCont} />
          </div>
          <div className={style["inputDiv"]}>
            <Input valid={isAge} method={age} name="age" />
          </div>
          <div className={style["inputDiv"]}>
            <button type="submit">Submit</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
