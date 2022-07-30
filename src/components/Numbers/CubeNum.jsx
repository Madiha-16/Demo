import { TextField,Grid } from "@mui/material";
import React,{useState} from "react";
export const CubeNum=()=>{
    const[num,setNum]=useState(0)
    return(
        <Grid container spacing={5}>
            <Grid item xs={9}>
                <TextField label="Enter number" variant="outlined" onChange={e=>setNum(e.target.value)} />
            </Grid>
            <Grid item xs={3}>
                <h2>Cube of {num} is {num**3}</h2>
            </Grid>
        </Grid>
    )
}