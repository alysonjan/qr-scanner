import {Grid, Button, Typography} from '@material-ui/core';
import Icon from '@mdi/react'
import { mdiQrcode, mdiQrcodeScan } from '@mdi/js';
import { Link, useParams } from "react-router-dom";

function Home() {
    const { classID } = useParams()
    return (
        <div sx={{ display: 'flex', justifyContent:'center', alignItems:'center', flexDirection:'column'}}>
            <Typography style={{ textAlign:'center'}} variant="h4">
            Scan
            </Typography>

            <Grid container spacing={3}>
                {/* <Grid item xs={6}>
                    <Link to="/qr_generator">
                    <Button variant="contained" size="large" color="primary">
                        <Icon 
                        style={{padding:10}}
                        path={mdiQrcode}
                        title="QR Generator"
                        size={10}
                        color="white"
                        />
                    </Button>
                    </Link>
                </Grid> */}
                <Grid item xs={6}>
                    <Link to={`/qr_scanner/${classID}`}>
                    <Button variant="contained" size="large" color="primary">
                        <Icon 
                        style={{padding:10}}
                        path={mdiQrcodeScan}
                        title="QR Scanner"
                        size={10}
                        color="white"
                        />
                    </Button>
                    </Link>
                </Grid>
            </Grid>
        
        </div>
    );
  }
  
  export default Home;
  