import React from "react";
import Data from "../Data";
import {Profile_Gallery, Card,Thumb,Thumb_Img } from "../Components/Layout_Style";
import { Link } from "@reach/router";
const Home = () => {
  return (
    <Profile_Gallery>

    {Data.map((info, index) => {
     return (
       <Card backColor = {info.label.color}  key={index}>
 
         <Thumb>
            <Link to={`/sample/${info.slug}`}  state={{ sampleId:info}}>
              <Thumb_Img src={info.thumb} alt="hello" />
           </Link>
           
         
         </Thumb>
      
       </Card>
     );
   })}
       
    </Profile_Gallery>
  );
};

export default Home;