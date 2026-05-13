import { useEffect, useState } from "react";
import{statsContainer,statBox} from "../../styel/LandScaping.module.css"
const Story = () => {
return (
    <div className={statsContainer}>
      <div className={statBox}>
        <h1>20K+</h1>
        <p>Experience</p>
      </div>

      <div className={statBox}>
        <h1>10K+</h1>
        <p>Products</p>
      </div>

      <div className={statBox}>
        <h1>5K+</h1>
        <p>Satisfied Clients</p>
      </div>
     <div className={statBox}>
        <h1>20K+</h1>
        <p> Local Team Members</p>
      </div>
</div >
  );
};

export default Story;