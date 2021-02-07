import React, { useState,useEffect } from "react";
import { auth } from "../../firebase";
import { toast } from "react-toastify";





//history is object from react routerdom to redirect user to other page.
const RegisterComplete = ({history}) => {
  const [email, setEmail] = useState("");
  const [password,setPassword] =useState("");


  useEffect(()=>{

    setEmail(window.localStorage.getItem("emailForRegistration"));

  },[])



  const handleSubmit = async (e) => {

    e.preventDefault();


    if(!email || !password){

        toast.error('Email and password is required');
        return;
    }
    if(password.length<6){

        toast.error('Password should be atleast 6 character or more');
    }

    try{


        //emai, is user entered email and location.href is user current url
        const result= await auth.signInWithEmailLink(email,window.location.href);

        console.log(result);

        //result.user.emailVerified mean when user is registered in firebase
        if(result.user.emailVerified===true){

            console.log("email verifieddd")

            //remove user email from localstorage
            window.localStorage.removeItem("emailForRegistration");


           
            //currently loggedin user
            const user = auth.currentUser;

             //get user id token
            const idTokenResult= await user.getIdTokenResult(); 

            //redux store



            history.push('/');

        }



    }catch(error){

        toast.error(error);

    }


  
  };

  const completeRegistrationForm = () => (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        className="form-control"
        value={email}
        disabled
      />

      <input
        type="password"
        className="form-control"
        value={password}
        onChange={e=>{setPassword(e.target.value)}}
        placeholder="Enter Password"
        autoFocus
      />



      <button type="submit" className="btn btn-raised">
        Register
      </button>
    </form>
  );

  return (
    <div className="container p-5">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <h4>CompleteRegistration</h4>
         
          {completeRegistrationForm()}
        </div>
      </div>
    </div>
  );
};

export default RegisterComplete;
