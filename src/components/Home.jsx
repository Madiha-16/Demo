import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import { NumberComp } from "./NumberComp";
import { Square } from "./Square";
import { Tables } from "./Tables";
import { NumSquare } from "./NumSquare";
import {TopNav} from "./TopNav";
import {Geo} from "./Numbers/Geo";


export const Home=()=>{
    return(
        <React.Fragment>
           <BrowserRouter>
           <TopNav/>
           <Routes>
            
                <Route path="/number" element={<NumberComp/>}/>
                <Route path="/square" element={<Square/>}/>
                <Route path="/tables" element={<Tables/>}/>
                <Route path="/numsquare" element={<NumSquare/>}/>
                <Route path="/geo" element={<Geo/>}/>
            
            </Routes>
        </BrowserRouter>
        </React.Fragment>
    )
}