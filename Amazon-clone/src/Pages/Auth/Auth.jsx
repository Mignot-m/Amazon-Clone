import React from "react";
import classes from "./Signup.module.css";
import { Link } from "react-router-dom";

function Auth() {
  return (
    <section className={classes.login}>
      <Link>
        <img
          src="https://cdn4.iconfinder.com/data/icons/flat-brand-logo-2/512/amazon-512.png"
          alt=""
        />
      </Link>

      <div className={classes.login_container}>
        <h1>Sign In</h1>
        <form action="">
          <div>
            <label htmlFor="email">E-mail</label>
            <input type="email" id="email" />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
          </div>
          <button className={classes.login__signInButton}>Sign In</button>
        </form>
        <p>
          By signing-in you agree to the AMAZON FAKE CLONE conditions of use &
          sale.Please see our privacy Notice,our cookies Notice and our
          Interest-Based Ads Notice.
        </p>
        <button className={classes.login__registerButton}>
          Create your Amazon Acoount
        </button>
      </div>
    </section>
  );
}

export default Auth;
