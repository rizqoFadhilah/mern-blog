import React from "react";
import { Input, Button, Gap, Link } from "../../componenets";
import { LoginBg } from "../../Assets";
import { useHistory } from "react-router-dom";

const Login = () => {
  const history = useHistory();
  return (
    <div className="main-page">
      <div className="left">
        <img className="img-bg" src={LoginBg} />
      </div>
      <div className="right">
        <p className="title">Login</p>
        <Input Label="Email" placeholder="Email" />
        <Gap height={18} />
        <Input Label="Password" placeholder="Password" />
        <Gap height={50} />
        <Button tittle="Login" onClick={() => history.push("/")} />
        <Gap height={50} />
        <Link
          tittle="Belum punya akun? Silahkan daftar"
          onClick={() => history.push("./register")}
        />
      </div>
    </div>
  );
};

export default Login;
