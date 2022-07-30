import React from "react";
import {Card, CardContent, Typography} from "@mui/material";
import {Home} from "./components/Home"
import "./components/common.css";
import { blue } from "@mui/material/colors";


function App() {
  return (
    <Card  >
      <CardContent >
      
      <Home/>
      </CardContent>
    </Card>
    
  );
}

export default App;
