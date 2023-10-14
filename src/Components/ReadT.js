import React, { useEffect, useState } from 'react';
import { API_URL1 } from '../constants/URL1';
import { API_URL } from '../constants/URL';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Read.css'

function Read() {

    const [apiData, setAPIData] = useState([]);
    const [apiDataT, setAPIDataT] = useState([]);
    const navigate = useNavigate();

    const deleteFun = async (id)=> {
      await axios.delete(API_URL + id);
      callGetAPI();

  }

  const deleteFunT = async (id)=> {
    await axios.delete(API_URL1 + id);
    callGetAPI();

}

  const updateFun = ({ firstname, age, id })=> 
  {
      localStorage.setItem('id', id)
      localStorage.setItem('firstname', firstname)
      localStorage.setItem('age', age)
      
      navigate('/Update')

  }

  const updateFunT = ({ firstname, age, id, subject })=> 
  {
      localStorage.setItem('id', id)
      localStorage.setItem('firstname', firstname)
      localStorage.setItem('age', age)
      localStorage.setItem('subject', age)
      
      navigate('/UpdateT')

  }

    const callGetAPI = async () => {

      const resp = await axios.get(API_URL);
      setAPIData(resp.data);
      const respT = await axios.get(API_URL1);
      setAPIDataT(respT.data);

    }

    useEffect( ()=> {

      callGetAPI();

    },[])

  return (
    <div class = "bodyclass">
      {/* // Student */}
      <div className='left'>
      <h4 className='center'>Student Database</h4> 
      <table class = "tableread">
        <thead>
          <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Delete</th>
          <th>Update</th>
          </tr>
          </thead>
          <tbody>
          {
            apiData.map( data => (
              <tr key={data.id}>
          <td>{data.firstname}</td>
          <td>{data.age}</td>
          <td><button type="button" onClick={ ()=>

    deleteFun(data.id)}>Delete</button></td>
    <td><button type="button" onClick={ ()=>
        updateFun(data)}>Update</button></td>
          </tr>
             ) )
          }
          </tbody>
      </table>
      </div>

      {/* //Teacher */}
  <div className='right'> 
          <h4 className='center'>Teacher Database</h4>
    <table class = "tableread">
        <thead>
          <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Subject</th>
          <th>Delete</th>
          <th>Update</th>
          </tr>
          </thead>
          <tbody>
          {
            apiDataT.map( data1 => (
              <tr key={data1.id}>
          <td>{data1.firstname}</td>
          <td>{data1.age}</td>
          <td>{data1.subject}</td>
          <td><button type="button" onClick={ ()=>

    deleteFunT(data1.id)}>Delete</button></td>
    <td><button type="button" onClick={ ()=>
        updateFunT(data1)}>Update</button></td>
          </tr>
             ) )
          }
          </tbody>
      </table>
      </div>
    </div>
  )
}


export default Read