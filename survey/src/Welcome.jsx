// import './Welcome.css';
// import Ques from './Ques'


// const Welcome=()=>{
//     return (
//         <>
//             <h1>Welcome To Survey Form</h1>
//             <button className="start" onClick={()=>{
//     return(
//        <>
//         <Ques q="What is your name" a1="hi"/>
//        </>
//     )
// }}>Start your Survey</button>
//         </>
//     )
// }


// export default Welcome;
import React from 'react'
import './Welcome.css';
import Ques from './Ques';
import { useState } from 'react';
import questionsAndAnswers from './Question';
import { useNavigate } from "react-router-dom";

const Welcome = () => {

  const [username, setusername] = useState("");
  const [email, setemail] = useState("");
  const [showQues, setShowQues] = React.useState(false);
  const navigate = useNavigate();
  return (
    <><body>
      <h1 className='ph1'>Welcome To Survey Form</h1>
      
      <div className='container'>
      <p className='email'>Name</p>
      <input type="text" name="email" id="in" onChange={(e)=>{setusername(e.target.value)}} />
      <br/>
      <p className='email'>Enter Email Addresss</p>
      <input type="text" name="email" id="in" onChange={(e)=>{setemail(e.target.value)}}/>
      <br/>
      
     
        <button className="start" onClick={()=>{
          if(email== "" || username=="")
          {
            alert("please add all the fields")
            return;
          }

          if(localStorage.getItem("email")== email)
          {
            navigate("/alreadydone")
          }
          else{

          
            localStorage.setItem("email",email);
            localStorage.setItem("username",username);

            navigate("/ques");
          }
        }} >
          Start your Survey
        </button>

      
      </div>
      </body>
    </>
  );
};

export default Welcome;