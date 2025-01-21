import { Box, Button, TextField } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'

const Signup =({user2}) => {
    const[form,setForm]=useState({
   
        myname:user2.myname,
        email:user2.email,
        password:'',
        conpass:'',
        phone:'',
        address:''

    })
    const capvalue=()=>{
       // console.log(form);
       axios.post('https://dummyjson.com/users/add',form).then((res)=>{
        //console.log(res)
        alert(res.data.id)
       })
       
       }
    
  return (
    <>
    <Box 
    style={{textAlign:'center'}}
    component="form"
    sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}
    noValidate
    autoComplete="off"
  >
   
      <h2 style={{backgroundColor:"yellow"}}>Student Registration Form</h2>
    <div>
      <TextField
        required
        id="outlined-required"
        label="Name"
        defaultValue=""
        value={form.myname}
        onChange={(e)=>{
            setForm({...form,myname:e.target.value})
        }}
      />
      <TextField
      
        id="outlined-disabled"
        label="Email Id"
        defaultValue=""
        value={form.email}
        onChange={(e)=>{
            setForm({...form,email:e.target.value})
        }}
      />
      </div>
      <div>
      <TextField
        id="outlined-password-input"
        label="Password"
        type="password"
     
        value={form.password}
        onChange={(e)=>{
            setForm({...form,password:e.target.value})
        }}
      />
      <TextField
        id="outlined-read-only-input"
        label="confirm password"
        type="password"
        defaultValue=""
        value={form.conpass}
        onChange={(e)=>{
            setForm({...form,conpass:e.target.value})
        }}
      />
      </div>
      <div>
      <TextField
        id="outlined-number"
        label=" ph Number"
        type="tel"
        value={form. phone}
        onChange={(e)=>{
            setForm({...form, phone:e.target.value})
        }}
      />
   
      <TextField
        id="outlined-helperText"
        label="Address"
        defaultValue=""
        helperText=""
        value={form.address}
        onChange={(e)=>{
            setForm({...form, address:e.target.value})
        }}
      />
    </div>
    <Button variant="contained" onClick={capvalue}>Sign up</Button>
  </Box>
 
  </> 
  
  )
}

export default Signup