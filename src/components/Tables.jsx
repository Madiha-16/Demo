import React from "react";
import{Card,CardContent,Typography} from "@mui/material"
import { DynTable } from "../Tables/DynTable";
import { Table2 } from "../Tables/Table2";
import { StudentsCard } from "./Geo/StudentsCard";

export const Tables=()=>{
    return(
        <Card sx={{bgcolor:"coral "}}>
            <CardContent>
                <Typography variant="h4">Tables</Typography>
                <StudentsCard/>
                <DynTable/><br/>
                {/* <Table2/> */}
            </CardContent>
        </Card>
       
    

    )

}