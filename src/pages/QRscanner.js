import React, {useEffect, useState} from 'react'
import {Fab, TextareaAutosize} from '@material-ui/core'
import {ArrowBack} from '@material-ui/icons'
import { Link } from "react-router-dom";
import QrScan from 'react-qr-reader'
import axiosInstance from '../helpers/axios';
import { useParams } from 'react-router-dom'

function QRscanner() {
    const { id } = useParams()
    const [qrscan, setQrscan] = useState('');
    const handleScan = data => {
        if (data) {
            setQrscan(data)
        }
    }
    const handleError = err => {
    console.error(err)
    }
    const object1 = JSON.parse(qrscan ? qrscan : null);
    let studentID = object1?.student_id

    useEffect(() => {
        const sendQr = async() => {
            try {
                await axiosInstance.post('/attendance',{
                    student_id:studentID,
                    class_id:id
                }).then(res => {
                    if(res.status === 201){
                        alert('Success!! ayt ayt 👌')
                    }
                })
                window.location.reload(false)
            } catch (err) {
                alert(err.response.data.msg) 
            }
        }
        sendQr()
    },[studentID,id])

    return (
        <div>
            <Link to="/subject-list">
            <Fab style={{marginRight:10}} color="primary">
                <ArrowBack/>
            </Fab>
            </Link>
            <span>QR Scanner</span>
            
            <center>
            <div style={{marginTop:30}}>
                <QrScan
                    delay={300}
                    onError={handleError}
                    onScan={handleScan}
                    style={{ height: 240, width: 320 }}
                />
            </div>
            </center>
{/* 
            <TextareaAutosize
                style={{fontSize:18, width:320, height:100, marginTop:100}}
                rowsMax={4}
                defaultValue=''
                value={qrscan}
            /> */}

      </div>
    );
  }
  
  export default QRscanner;
  