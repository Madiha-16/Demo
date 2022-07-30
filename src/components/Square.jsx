import React,{useState} from "react"
import {Card,CardContent, Typography} from "@mui/material"
import { SquareNum } from "./Numbers/SquareNum";
import {CubeNum} from "./Numbers/CubeNum";
import { PowNum } from "./Numbers/PowNum";

export const Square=()=>{
   
    return(
       
            <Card sx={{bgcolor:"coral"}}>
                <CardContent>
                    <Typography variant="h3">Square Number</Typography>
                    <SquareNum/><hr/>
                    <Typography variant="h3">Cube Number</Typography>
                    <CubeNum/><hr/>
                    <Typography variant="h3">Power Number</Typography>
                    <PowNum/>

                </CardContent>
            </Card>
    
    );

};