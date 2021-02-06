import React, { useState } from 'react'

const Register =()=>{


    const [email,setEmail]=useState();


    const handleSubmit=()=>{
        //this function will send request to firebase, so that firebase send email to user 


    }






    const registrationForm=()=><form onSubmit={handleSubmit}>

        <input type="email"
         className="form-control"
         value={email}
         onChange={e=>setEmail(e.target.value)}
         autoFocus   />

         <button type="submit" className="btn btn-raised">Register</button>

    </form>




    return(
    <div className="container p-5">

       <div className="row">
           <div className=" col-md-6 offset-md-3">
            <h1>Register</h1>
             {registrationForm()}
           </div>

       </div>


    </div>
    )
}

export default Register;