// Pricing.jsx
import React from "react";
import "../../styel/Pricing.css"

const Pricing = () => {
  return (
    <section className="pricing-section">
      <div className="pricing-heading">
        <h1>
          Pricing <span>Table</span>
        </h1>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Vivamus hendrerit suscipit egestas.
          <br />
          Nunc eget congue ante. Vivamus ut sapien et ex volutpat
          tincidunt eget at felis.
        </p>
      </div>

      <div className="pricing-cards">

    
        <div className="pricing-card">
          <div className="card-top">
            <h2>Basic Plan</h2>
            <button>Package</button>
          </div>

          <div className="price-box">
            <h1>$40.00</h1>
            <p>/Per month</p>
          </div>

          <div className="features">
            <li>✔ Initial Consultation</li>
            <li>✔ Labor Costs</li>
            <li>✔ Materials and Plants</li>
            <li>✔ Equipment and Machinery</li>
          </div>

          <button className="purchase-btn">Purchase</button>
        </div>

        {/* Card 2 */}
        <div className="pricing-card2">
          <div className="card-top">
            <h2>Standard Plan</h2>
            <button>Package</button>
          </div>

          <div className="price-box">
            <h1>$80.00</h1>
            <p>/Per month</p>
          </div>

          <div className="features">
            <li>✔ Initial Consultation</li>
            <li>✔ Labor Costs</li>
            <li>✔ Materials and Plants</li>
            <li>✔ Equipment and Machinery</li>
            <li>✔ Permits and Inspection Fees</li>
          </div>

          <button className="purchase-btn">Purchase</button>
        </div>

        {/* Card 3 */}
        <div className="pricing-card active-card">
          <div className="card-top white-top">
            <h2>Premium Plan</h2>
            <button>Promo</button>
          </div>

          <div className="price-box active-price">
            <h1>$120.00</h1>
            <p>/Per month</p>
          </div>

          <div className="features active-features">
            <li>✔ Initial Consultation</li>
            <li>✔ Labor Costs</li>
            <li>✔ Materials and Plants</li>
            <li>✔ Equipment and Machinery</li>
            <li>✔ Permits and Inspection Fees</li>
            <li>✔ Maintenance Packages</li>
          </div>

          <button className="purchase-btn white-btn">
            Purchase
          </button>
        </div>

      </div>
    </section>
  );
};

export default Pricing;