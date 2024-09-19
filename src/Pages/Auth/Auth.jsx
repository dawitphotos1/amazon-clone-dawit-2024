
import React, { useContext, useState} from 'react'
import classes from './signUp.module.css'
import { Link, useNavigate } from "react-router-dom";
import { auth} from '../../Utility/firebse';
import {signInWithEmailAndPassword,createUserWithEmailAndPassword} from "firebase/auth";
import { ClipLoader} from 'react-spinners';
import { DataContext } from '../../Components/DataProvider/DataProvider';
import { Type } from '../../Utility/action.type';


function Auth() {
  const [email,setEmail]=useState("");
  const [password,SetPassword]=useState("")
  const [error, setError]=useState("");
  const [loading,setLoading]=useState({
      signIn:false,
      signUp:false
  })
  const [{user},dispatch]=useContext(DataContext)
  const navigate=useNavigate()
  // console.log(user);

  const authHandler = async(e)=>{
   e.preventDefault();
  console.log(e.target.name);
  if (e.target.name == "signin"){
// firebase authentication
        setLoading({...loading,signin:true})
       signInWithEmailAndPassword(auth,email,password)
       .then((userInfo)=>{
        dispatch({
          type:Type.SET_USER,
          user:userInfo.user
        })
        setLoading(({ ...loading, signin: false }));
        navigate("/")
       }).catch((err)=>{
        setError(err.message)
        setLoading({ ...loading, signin: false });
       })
  }else{
        
    createUserWithEmailAndPassword(auth,email,password).then((userInfo)=>{
      setLoading({ ...loading, signUp: true });
       dispatch({
         type: Type.SET_USER,
         user: userInfo.user,
       });
       setLoading({ ...loading, signUp: false });
       navigate("/");
    }).catch((err)=>{
      setError(err.message);
      setLoading({ ...loading, signUp: false });
    })
  }
  };

  // console.log(password,email);
  return (
    <section className={classes.login}>
      {/* {logo} */}
      <Link>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo_.svg.png"
          alt=""
        />
      </Link>
      {/* {form} */}
      <div className={classes.login__container}>
        <h1>Sign In</h1>
        <form action="">
          <div>
            <label htmlFor="email">Email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              id="email"
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              value={password}
              onChange={(e) => SetPassword(e.target.value)}
              type="password"
              id="password"
            />
          </div>
          <button
            type="submit"
            onClick={authHandler}
            name="signin"
            className={classes.login__signInButton}
          >
            {loading.signin ? (
              <ClipLoader color="#000" size={20}></ClipLoader>
            ) : (
              "Sign In"
            )}
          </button>
        </form>
        {/* {agreement} */}
        <p>
          By signing-in you agree to the AMAZON FAKE CLONE condition of use &
          Sale.Plaese see our Privacy Notice,our Cookies Notice and our
          Interest-Based Ads Notice.
        </p>
        {/* {Create account btn} */}
        <button
          type="submit"
          name="signup"
          onClick={authHandler}
          className="classes.login__registerButton"
        >
          {loading.signUp ? (
            <ClipLoader color="#000" size={20}></ClipLoader>
          ) : (
            "Create your Amazon Account"
          )}
        </button>
        {error && (
          <small style={{ paddingTop: "5px", color: "red" }}> {error} </small>
        )}
      </div>
    </section>
  );
  
}

export default Auth;
