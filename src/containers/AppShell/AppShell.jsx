import Grid from '@mui/material/Grid';
import { Outlet } from 'react-router-dom';

const AppShell = () => {
    return(
        <div
            className="appshell__container"
            style={{
                backgroundImage: `url(${process.env.REACT_APP_MONOLITHAI_URL}/hubfs/Group_39403_min.png)`, // url to the image has been stored on the .env file created, normally this file is not to be committed but for this assessment I committed the file to avoid a lot of admin when someone tries to run the application
            }}
            >
            <Grid container justifyContent="center" alignItems="center" style={{ minHeight: '100vh' }}>
                <Outlet /> 
            </Grid>
        </div>
    )
}
export default AppShell;
