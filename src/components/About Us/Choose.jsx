import React from "react";
import { TiTick } from "react-icons/ti";
import{choose,chooseImage,chooseText,highlight,chooseList,item} from"../../styel/LandScaping.module.css"
const Choose = () => {
  return (
    <section className={choose}>


      <div className={chooseImage}>
        <img src="/images/choose.png" alt="choose us" />
      </div>


      <div className={chooseText}>

        <h1>They <span className={highlight}> Choose Us </span> </h1>

        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt voluptatem facilis molestiae dignissimos.
        </p>

        <div className={chooseList}>

          <div className={item}>
            <TiTick /> <span>Expertise</span>
          </div>

          <div className={item}>
            <TiTick /> <span>Timelines</span>
          </div>

          <div className={item}>
            <TiTick /> <span>Customization</span>
          </div>

          <div className={item}>
            <TiTick /> <span>Quality</span>
          </div>

        </div>

      </div>

    </section>
  );
};

export default Choose;