import React, { useState, useEffect } from 'react'
import { API_URL } from '../constants/URL';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Update.css'


function Update() {

  const [firstname, setFirstName] = useState("");
  const [age, setAge] = useState("");
  const [id, setId] = useState("");
  const navigate = useNavigate();

 const updateUser = async () => {
      await axios.put((API_URL + id), {

        firstname,
        age
      }
      )
      navigate('/ReadT')
  }

  useEffect(()=> {

    setId(localStorage.getItem('id', id))
    setFirstName(localStorage.getItem('firstname', firstname))
    setAge(localStorage.getItem('age', age))

  }, [])


  return (
    <div>
      <form class = "formdsn1 center">
        Name: <input class = "inputtxt1" value = {firstname} type="text" placeholder="Enter Your Name" onChange={ event =>
        {
          setFirstName(event.target.value)
        } }>
          </input><br></br><br></br>


         Age: <input class = "age1 center" value = {age} type = "number" placeholder="Enter Your Number" onChange={ event => 
         {
            setAge(event.target.value)

         } }></input><br></br><br></br>
        <button class = "btn1 center" type="button" onClick={updateUser}>Update</button>

      </form>
    </div>
  )
}

export default Update