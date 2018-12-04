import React from "react";
import Data from "../Data";
import {ProfileGallery, Card,Thumb,ThumbImg } from "../Components/Layout_Style";
import { Link } from "@reach/router";


const Home = () => {
  return (
    <ProfileGallery>

    {Data.map((info, index) => {
     return (
       <Card backColor = {info.label.color}  key={index}>
         <Thumb>
            <Link to={`/sample/${info.slug}`}  state={{ sampleId:info}}>
              <ThumbImg src={info.thumb} alt="hello" />
           </Link>
         </Thumb>
       </Card>
     );
   })}
       
    </ProfileGallery>
  );
};

export default Home;