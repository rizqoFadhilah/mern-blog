import React from "react";
import "./Register.scss";
import { Input, Button, Gap, Link } from "../../componenets";
import { RegisterBg } from "../../Assets";
import { useHistory } from "react-router-dom";

const Register = () => {
  const history = useHistory();
  return (
    <div className="main-page">
      <div className="left">
        <img className="img-bg" src={RegisterBg} />
      </div>
      <div className="right">
        <p className="title">Register</p>
        <Input Label="Full Name" placeholder="Full Name" />
        <Gap height={18} />
        <Input Label="Email" placeholder="Email" />
        <Gap height={18} />
        <Input Label="Password" type="password" placeholder="Password" />
        <Gap height={50} />
        <Button
          classname="py-4"
          tittle="Register"
          onClick={() => history.push("./login")}
        />
        <Gap height={50} />
        <Link
          tittle="Kembali ke login"
          onClick={() => history.push("./login")}
        />
      </div>
    </div>
  );
};

export default Register;
