import React from "react";
import { TiTick } from "react-icons/ti";

const Choose = () => {
  return (
    <section className="choose">


      <div className="choose-image">
        <img src="/images/choose.png" alt="choose us" />
      </div>


      <div className="choose-text">

        <h1>They <span className="highlight"> Choose Us </span> </h1>

        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt voluptatem facilis molestiae dignissimos.
        </p>

        <div className="choose-list">

          <div className="item">
            <TiTick /> <span>Expertise</span>
          </div>

          <div className="item">
            <TiTick /> <span>Timelines</span>
          </div>

          <div className="item">
            <TiTick /> <span>Customization</span>
          </div>

          <div className="item">
            <TiTick /> <span>Quality</span>
          </div>

        </div>

      </div>

    </section>
  );
};

export default Choose;