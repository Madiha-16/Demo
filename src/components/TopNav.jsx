import React from "react";
import{Link} from "react-router-dom";
import{Grid,Button,} from "@mui/material";
export const TopNav=()=>{
    return(
        <React.Fragment>
            <Grid container spacing={1}>
                <Grid item xs={2} className="img">
                <img src="pickkkupbizzz.jpg" alt="Pickupbiz" width="150px" height="50px"/>
            </Grid>
            <Grid item xs={1}>
            <Link to="/number" className="tabnav">
               <Button variant="contained" color="success">number</Button>
             
             </Link>
            </Grid>
            <Grid item xs={1} >
                <Link to="/tables" className="tabnav">
                <Button variant="contained" color="success">Tables</Button>

                </Link>
            </Grid>
            <Grid item xs={1} >
                <Link to="/square" className="tabnav">
                <Button variant="contained" color="success">Square</Button>
                  </Link>
            </Grid>
            <Grid item xs={1}>
            <Link to="/geo" className="tabnav">
                <Button variant="contained" color="success">Geometry</Button>
            </Link>
            </Grid>
            </Grid>


        </React.Fragment>
    )
}