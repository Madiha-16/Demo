import { TextField,Grid, CardContent } from "@mui/material";
import React,{useState} from "react";
 export const SquareNum=()=>{
    const[num,setNum]=useState("0")
    return(
        <React.Fragment>
            <Grid container spacing={10}>
                <Grid item xs={9}>
                    
                <TextField label="Enter Number" variant="outlined" onChange={e=>setNum(e.target.value)}/>
                </Grid>
                <Grid item xs={3}>
                 <h2>{num**2}</h2>               
                  </Grid>
               
                   
                </Grid>
            

        
        </React.Fragment>
    )
 }