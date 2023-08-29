import React from 'react';
import './LastPage.css'
import { useNavigate } from "react-router-dom";

export default function LastPage() {

  const responsearr = localStorage.getItem("response");
  console.log(typeof(responsearr))
  // const rr = JSON.parse(responsearr);
  console.log(typeof(rr));
  // console.log(JSON.parse(responsearr));
  // console.log(typeof(responsearr))
  const username = localStorage.getItem("username");
  const email = localStorage.getItem("email");
  const submitresponse = ()=>
  {
    console.log("submitting.......")
    console.log(localStorage.getItem("response"))
      // submitting response to the backend
   
      fetch("http://localhost:8000/submit",
        {
          method :"post",
          headers:{ "Content-Type":"application/json"},
          body: JSON.stringify({
   
           username:username,
           email:email,
           response:responsearr
          })
      
        }).then(res => res.json()).then(data => {
        
            if(data.message)
            {
              console.log("success")
              localStorage.setItem("submitted","true");
              navigate("/thankyou");              
            }
            else{
                console.log("error saving data");    
          }

        });

        

  }
  const navigate = useNavigate();
  return (
    <div className='lastpagecontainer'>
          <h1 className='lastpage'>Survey is completed Click Submit Button to Submit the Response</h1>
         <button className='submit' onClick={()=>{submitresponse()}}>Submit</button>

    </div>
  )
}