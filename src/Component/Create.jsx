import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';


function Create() {
  const [values,setValues]= useState({
    name: '',
    email: '',
    password: '',
    phone: ''
  })

  const navigate = useNavigate();

  const handleSubmit =(event)=>{
    event.preventDefault();
    axios.post('http://localhost:1000/user',values)
      .then(res=> {
        console.log(res)
        navigate('/')
  })
      .catch(err => console.log(err))
  }
  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center bg-light'>
      <div className='w-50 border bg-white shadow px-5 pt-3 pb-5 rounded'>
        <h1>Add a User</h1>
        <form action="" onSubmit={handleSubmit}>
          <div className='mb-1'>
              <label htmlFor="">Name</label>
              <input type="text" name='name' className='form-control' placeholder='Enter your name' 
              onChange={e=>setValues({...values,name:e.target.value})}/>
          </div>
          <div className='mb-2'>
              <label htmlFor="">Email</label>
              <input type="email" name='email' className='form-control' placeholder='Enter your email' 
              onChange={e=>setValues({...values,email:e.target.value})}/>

          </div> 
          <div className='mb-3'>
              <label htmlFor="">password</label>
              <input type="psw" name='password' className='form-control' placeholder='Enter your password' 
              onChange={e=>setValues({...values,password:e.target.value})}/>

          </div>
          <div className='mb-4'>
              <label htmlFor="">phone</label>
              <input type="text" name='phone' className='form-control' placeholder='Enter your phone number'
              onChange={e=>setValues({...values,phone:e.target.value})}/>

          </div>
          <button className='btn btn-success'>Submit</button>
          <Link to="/" className='btn btn-primary ms-3'>Back</Link>
        </form>
      </div>
    </div>
  )
}

export default Create