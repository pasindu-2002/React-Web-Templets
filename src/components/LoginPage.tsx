import React from "react";
import "../style/LoginPage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faGoogle,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";

function LoginPage() {

  return (
    <>
      <div className="main">
        <div className="top-container">
          <div>
            <span>Sign in</span>
          </div>
          <div className="social-icons">
            <FontAwesomeIcon icon={faGithub} />

            <FontAwesomeIcon icon={faGoogle} />

            <FontAwesomeIcon icon={faFacebook} />
          </div>
        </div>

        <div className="mian-container">
          <div className="input-box">
            <input type="text" name="" id="" placeholder="Username" />
            <input type="text" name="" id="" placeholder="Password" />
          </div>
          <div className="remember-box">
            <label className="switch">
              <input type="checkbox" />
              <span className="slider round"></span>
            </label>
            <span> Remember me</span>
          </div>
          <div className="button-box">
            <button>SIGN IN</button>
          </div>
          <div className="footer">
            <span>Forget password? &nbsp; </span> <a href=""> Click Here </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
