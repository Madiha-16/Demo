import React from "react";
import {Grid,Card,CardContent} from "@mui/material";
import { RectFenc } from "../Geo/RectFenc";
import { Students } from "../Geo/Students";
import { StudentOptm } from "../Geo/Students Optm";

export const Geo=()=>{
    return(
        <React.Fragment>
            <Card>
                <CardContent>
                    <h1>Geomatry</h1>
                    <StudentOptm/>
                    <Students/>
                    <RectFenc/>
                </CardContent>
            </Card>

        </React.Fragment>
    )
}