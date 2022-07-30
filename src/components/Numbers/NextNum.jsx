import { Grid,TextField,Card,CardContent, Typography} from "@mui/material";
import React,{useState} from "react";
// import {Previous} from "../Previous"


export const NextNum=()=>{
    const[num,setNum]=useState(0);
    return(

        <React.Fragment>
            <Card>
                <CardContent>
            <Grid container spacing={3}>
            <Grid item xs={6}>
                 Enter Number :
              </Grid>
             <Grid item xs={6}>
               Next Number
        </Grid>
        
             <Grid item xs={6}>
            <TextField label="Enter number" variant="outlined" onChange={e=>setNum(e.target.value)}/>
            </Grid>
              <Grid item xs={6}>
                <Typography variant="h2">{Number(num)+1}</Typography>
               </Grid>
            
            </Grid>
            {/* <Previous/> */}
         
            </CardContent>
            </Card>
            
            
        </React.Fragment>
    )
}