'use client'
import { Api, Directions, LineAxisOutlined, Password } from '@mui/icons-material'
import { Button, Container, Paper, TextField } from '@mui/material'
import { useFormik } from 'formik'
import React from 'react'
import axios from 'axios'
import { useRouter } from 'next/navigation'

export default function page() {
  const user = { 
    email: "", 
    password:'',
  }
  const user_to = useRouter(); 

  async function Login_fn(userValues: any){ 
      const api = await axios.post('https://linked-posts.routemisr.com/users/signin', userValues)

      
      console.log('response : ', api )
      console.log(api.data.token)
      localStorage.setItem('tkn', api.data.token)
      
      if(localStorage.getItem('tkn') !== null ){user_to.push('/profile')}
  }
const Data_Login =   useFormik({
  initialValues:user , 
  onSubmit: Login_fn, 
}); 
  return (
  <Container maxWidth='sm'>
    <Paper elevation={20} >
        <form style={{margin:'2rem 0 ', padding:'2rem',  display: 'flex' , flexDirection:'column', gap:'1rem'}} onSubmit={Data_Login.handleSubmit}>
        <h1>Enter Your Credentails</h1>

        <TextField id="email" label="Email" type='email' variant="outlined"  value={Data_Login.values.email} onChange={Data_Login.handleChange}/>
        <TextField id="password" label="Password" type='password' variant="outlined"  value={Data_Login.values.password} onChange={Data_Login.handleChange}/>

        <Button sx={{padding:'1rem 0 ' , bgcolor:'#09c' , color:'#fff' , fontWeight:'Bold',
          ":hover" : { bgcolor:'#f3ed' }
        }} type='submit'>Login</Button>
        </form>

    </Paper>

  </Container>
  )
}
