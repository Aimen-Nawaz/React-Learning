import React from "react";
import { testimonialSection, testimonialHeading, testimonialCard, activeCard, testimonialContainer, stars, testimonialImage, testimonialContent, testimonialBottom } from "../../styel/Testinmoial.module.css"
import testimonials from "../../assets/testimonials";


const Testimonial = () => {
  return (
    <section className={testimonialSection}>
      <div className={testimonialHeading}>
        <h1>
          See What They Are Saying <br />
          <span>About EcoSculpt</span>
        </h1>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Vivamus hendrerit suscipit egestas.
        </p>
      </div>

      <div className={testimonialContainer}>
        {testimonials.map((item) => (
          /* Fixed the template literal syntax here */
          <div
            key={item.id}
            className={`${testimonialCard} ${item.active ? activeCard : ""}`}
          >
            <div className={testimonialImage}>
              <img src={item.image} alt={item.name} />
            </div>

            <div className={testimonialContent}>
              <p>{item.text}</p>

              <div className={testimonialBottom}>
                <div>
                  <h2>{item.name}</h2>
                  <span>{item.role}</span>
                </div>

                <div className={stars}>★★★★★</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;