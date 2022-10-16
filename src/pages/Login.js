import { Button, TextField, Typography } from '@material-ui/core'
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import axiosInstance from '../helpers/axios'

const Login = () => {

const [username, setUsername] = useState('')
const [password, setPassword] = useState('')
  let navigate = useHistory()
  const handleSubmit = async(e) => {
    e.preventDefault()
    try {
        await axiosInstance.post('/employee/login/teacher',{
            username:username,
            password:password
        }).then(res => {
            if(res.status === 200){
                localStorage.setItem('qrScannerTeacherID',res.data[0].user_id)
            }
        })
        navigate.push('/subject-list')
    } catch (err) {
        alert(err.response.data.msg)
    }
 
  }
  return (
    <div style={{ width:'100%', margin:'auto'}}>
      <div style={{ display:'flex', justifyContent:'center',alignItems:'center'}}>
        <img src='/wink.png' alt='logo' width={50}/>
        <Typography variant='title' style={{ color:'#6EA0EA', fontWeight:'bolder'}} >QR SCANNER</Typography>
      </div>
        <form onSubmit={handleSubmit}>
            <div style={{ display:'flex', flexDirection:'column', padding:'3rem'}}>
            <TextField id="outlined-basic" label="username" variant="outlined" size='small' value={username} onChange={(e) => setUsername(e.target.value)} style={{ marginBottom:'10px'}} />
            <TextField id="outlined-basic" type='password' label="password" variant="outlined" size='small' value={password} onChange={(e) => setPassword(e.target.value)} style={{ marginBottom:'10px'}} />
            <Button variant='contained' size='medium' color='primary' type='submit'>Login</Button>
            </div>
        </form>
      
    </div>
  )
}

export default Login
