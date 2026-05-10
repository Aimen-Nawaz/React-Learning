import React from "react";
import "../../styel/Testinmoial.css";

const testimonials = [
  {
    id: 1,
    name: "Eko Susianto",
    role: "Regional Mobility Manager",
    image: "/images/test1.png",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lobortis nisi at est euismod volutpat.",
    active: true,
  },

  {
    id: 2,
    name: "Tri Cahyono",
    role: "Human Accounts Supervisor",
    image: "/images/test2.png",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lobortis nisi at est euismod volutpat.",
  },

  {
    id: 3,
    name: "Tjandra Mangkualam",
    role: "District Directives Producer",
    image: "/images/test3.png",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lobortis nisi at est euismod volutpat.",
  },

  {
    id: 4,
    name: "Cak Mukidi",
    role: "Forward Paradigm Manager",
    image: "/images/test4.png",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lobortis nisi at est euismod volutpat.",
  },
];

const Testimonial = () => {
  return (
    <section className="testimonial-section">
      <div className="testimonial-heading">
        <h1>
          See What They Are Saying <br />
          <span>About EcoSculpt</span>
        </h1>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Vivamus hendrerit suscipit egestas.
        </p>
      </div>

      <div className="testimonial-container">
        {testimonials.map((item) => (
          <div
            key={item.id}
            className={`testimonial-card ${
              item.active ? "active-card" : ""
            }`}
          >
            <div className="testimonial-image">
              <img src={item.image} alt={item.name} />
            </div>

            <div className="testimonial-content">
              <p>{item.text}</p>

              <div className="testimonial-bottom">
                <div>
                  <h2>{item.name}</h2>
                  <span>{item.role}</span>
                </div>

                <div className="stars">★★★★★</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;