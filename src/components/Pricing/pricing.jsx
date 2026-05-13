import React from "react";
import pricingPlans from "../../assets/pricingPlans";

import {pricingSection, pricingContainer, pricingHeading, pricingCard, cardTop, priceBox, features, whiteTop, whiteBtn, activeCard, activePrice, activeFeatures,badge, purchaseBtn} from "../../styel/Pricing.module.css";

const Pricing = () => {

  return (
    <section className={pricingSection}>

      <div className={pricingHeading}>
        <h1>
          Pricing <span>Table</span>
        </h1>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Vivamus hendrerit suscipit egestas.
        </p>
      </div>

      <div className={pricingContainer}>

        {pricingPlans.map((plan, index) => (

          <div
            key={index}
            className={`${pricingCard} ${
              plan.active ? activeCard : ""
            }`}
          >

            <div
              className={`${cardTop} ${
                plan.active ? whiteTop : ""
              }`}
            >
              <h2>{plan.title}</h2>

        
              <span className={badge}>
                {plan.tag}
              </span>

            </div>

            <div
              className={`${priceBox} ${
                plan.active ? activePrice : ""
              }`}
            >
              <h1>{plan.price}</h1>
              <p>/Per month</p>
            </div>

            <ul
              className={`${features} ${
                plan.active ? activeFeatures : ""
              }`}
            >

              {plan.featuresList.map((item, i) => (
                <li key={i}>✔ {item}</li>
              ))}

            </ul>

            <button
              className={`${purchaseBtn} ${
                plan.active ? whiteBtn : ""
              }`}
            >
              Purchase
            </button>

          </div>
        ))}

      </div>

    </section>
  );
};

export default Pricing;