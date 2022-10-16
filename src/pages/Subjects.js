import React, { useEffect, useState } from 'react'
import { Button, Paper } from '@material-ui/core'
import { useHistory } from 'react-router-dom'
import axiosInstance from '../helpers/axios'

const Subjects = () => {
  let navigate = useHistory()
  const [data, setData] = useState([])

  useEffect(() => {
    const getSubjects = async() => {
      await axiosInstance.post('/subject/get-all-subjects-by-teacher',{
        teacherId:localStorage.getItem('qrScannerTeacherID')
      }).then(res => {
        if(res.status === 200){
          setData(res?.data)
        }
      })
    }
    getSubjects()
  },[])
  return (
    <Paper elevation={5} style={{ 
      margin: 0,
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      display:'flex',
      flexDirection:'column',
      padding:'2rem'
      }}>
        {data && data.map(subj => {
          return (
            <>
            <Button color='secondary' variant='contained' size='medium' style={{marginBottom:'10px'}} onClick={() => navigate.push(`/home/${subj.class_id}`)}>{subj.sub_desc}</Button>
            </>
          )
        })}
        {/* <Button color='secondary' variant='contained' size='medium' style={{marginBottom:'10px'}} onClick={() => navigate.push('/home')}>Programming I</Button>
        <Button color='secondary' variant='contained' size='medium' style={{marginBottom:'10px'}} onClick={() => navigate.push('/home')}>Database II</Button>
        <Button color='secondary' variant='contained' size='medium' style={{marginBottom:'10px'}} onClick={() => navigate.push('/home')}>P.E</Button> */}
    </Paper>
  )
}

export default Subjects
