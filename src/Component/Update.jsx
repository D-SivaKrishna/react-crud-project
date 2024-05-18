import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'



function Update() {
  //const [data,setData]=useState([])
  const {id} = useParams();

  const [values,setValues]= useState({
    name: '',
    email: '',
    password: '',
    phone: ''
  })

  const navigate =useNavigate();

  useEffect(()=>{
      axios.get('http://localhost:1000/user/' + id )
      .then(res=> 
        setValues(res.data)
      )
      .catch(err => console.log(err))
  },[])

  const handleUpdate= (event) => {
    event.preventDefault();
    axios.put('http://localhost:1000/user/' +id,values)
      .then(res=> {
        console.log(res)
        navigate('/')
  })
      .catch(err => console.log(err))
  }
  
  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center bg-light'>
      <div className='w-50 border bg-white shadow px-5 pt-3 pb-5 rounded'>
        <h1>Update a User</h1>
        <form onSubmit={handleUpdate}>
          <div className='mb-1'>
              <label htmlFor="">Name</label>
              <input type="text" name='name' className='form-control' placeholder='Enter your name' 
             value={values.name} onChange={e=>setValues({...values,name:e.target.value})}/>
          </div>
          <div className='mb-2'>
              <label htmlFor="">Email</label>
              <input type="email" name='email' className='form-control' placeholder='Enter your email' 
             value={values.email} onChange={e=>setValues({...values,email:e.target.value})}/>

          </div> 
          <div className='mb-3'>
              <label htmlFor="">password</label>
              <input type="psw" name='password' className='form-control' placeholder='Enter your password' 
             value={values.password} onChange={e=>setValues({...values,password:e.target.value})}/>

          </div>
          <div className='mb-4'>
              <label htmlFor="">phone</label>
              <input type="text" name='phone' className='form-control' placeholder='Enter your phone number'
              value={values.phone} onChange={e=>setValues({...values,phone:e.target.value})}/>

          </div>
          <button className='btn btn-success'>Update</button>
          <Link to="/" className='btn btn-primary ms-3'>Back</Link>
        </form>
      </div>
    </div>
  )
}

export default Update