import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Create.css'
import './CreateT.css'
import { API_URL1 } from '../constants/URL1'

function CreateT() {
  
  const [firstname, setFirstName] = useState("");
  const [age, setAge] = useState("");
  const [subject, setSubject] = useState("");
  const navigate = useNavigate();

  const postData = async ()=> {

    await axios.post(API_URL1, {

      firstname,
      age,
      subject
    })
    navigate('/ReadT')

  }
  return (
    <div>
      <form class = "formdsn center1">
        Teacher Name: <input class = "inputtxt center" value = {firstname} type="text" placeholder="Enter The Name of The Teacher" 
        onChange={ event =>
        {
          setFirstName(event.target.value)
        } }>
          </input><br></br><br></br>


         Teacher Age:  <input class = "age center" value = {age} type = "number" placeholder="Enter Your Number" onChange={ event => 
         {
            setAge(event.target.value)

         } }></input><br></br><br></br>         
         
         Subject:  <input class = "subject center" value = {subject} type = "text" placeholder="Enter the Subject" onChange={ event => 
            {
               setSubject(event.target.value)
   
            } }></input><br></br><br></br>



        <button class = "btn center" type="button" onClick={postData}>Submit</button>



      </form>
    </div>
  )
}

export default CreateT