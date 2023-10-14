import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Create.css'
import {API_URL} from '../constants/URL'

function Create() {
  
  const [firstname, setFirstName] = useState("");
  const [age, setAge] = useState("");
  const navigate = useNavigate();

  const postData = async ()=> {

    await axios.post(API_URL, {

      firstname,
      age
    })
    navigate('/ReadT')

  }
  return (
    <div>
      <form class = "formdsn center1">
        Name: <input class = "inputtxt center" value = {firstname} type="text" placeholder="Enter Your Name" 
        onChange={ event =>
        {
          setFirstName(event.target.value)
        } }>
          </input><br></br><br></br>


         Age:  <input class = "age center" value = {age} type = "number" placeholder="Enter Your Number" onChange={ event => 
         {
            setAge(event.target.value)

         } }></input><br></br><br></br>
        <button class = "btn center" type="button" onClick={postData}>Submit</button>

      </form>
    </div>
  )
}

export default Create