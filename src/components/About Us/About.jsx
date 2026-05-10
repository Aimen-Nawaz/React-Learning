import React from "react";
import { FaLocationCrosshairs } from "react-icons/fa6";
import { RiLoader3Fill } from "react-icons/ri";

const About = () => {
  return (
    <section className="about">


      <div className="about-text">

        <h1>
          Caring For Your <span className="highlight">Private Plants</span>, Our Expertise
        </h1>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          hendrerit suscipit egestas. Nunc eget congue ante.
        </p>


        <div className="about-boxes">

          <div className="vision">
            < RiLoader3Fill />
            <h2>Our Vision</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat sint expedita asperiores et molestiae cumque voluptatibus dignissimos autem corporis rem dolorem amet ad enim esse molestias, excepturi consequatur quasi animi.</p>
          </div>

          <div className="mission">
            <FaLocationCrosshairs />
            <h2>Our Mission</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure quibusdam corporis iste beatae sit ab, enim nulla, illo natus ipsam quae ad veritatis, rem nesciunt repellat. Optio quo reiciendis repudiandae?</p>
          </div>

        </div>
      </div>

     <div className="about-image">
      <img src="../images/about.png" alt="about us" />
     </div>

    </section>
  );
};

export default About;