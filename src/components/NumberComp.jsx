import React from "react";
import {Card,CardContent,Typography} from "@mui/material";
import { NextNum } from "./Numbers/NextNum";
import { Previous } from "./Numbers/Previous";
import {Counter} from "./Numbers/Counter"

export const NumberComp=()=>{
    return(
        <Card sx={{bgcolor:"blueviolet"}}>
            <CardContent>
                <Typography variant="h4">Numbers</Typography>
                <NextNum/>
                <Counter/>
                <Previous/>
            </CardContent>
        </Card>

    );
};