import { TextField,Grid } from "@mui/material";
import React,{useState} from "react";
export const PowNum=()=>
{
    const[num,setNum]=useState(2)
    const[pow,setPow]=useState(3)
        return(
        <Grid container spacing={3}>
        <Grid item xs={4}>
            <TextField label="Enter Number" varaint="outlined" onChange={e=>setNum(e.target.value)} />
        </Grid>
        <Grid item xs={4}>
            <TextField label="Enter Power" variant="outlined" onChange={e=>setPow(e.target.value)}/>
        </Grid>
        <h1>{num} to the power {pow} is {num**pow}</h1> 
        </Grid>
    )
}