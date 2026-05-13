

import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import faqData from "../../assets/faqData";
import { faqQuestion, faqHeading, faqContainer, faqAnswer, faqBox, faqBoxActive, faqSection } from "../../styel/FAQ.module.css"
const FAQ = () => {

  const [openIndex, setOpenIndex] = useState(0);


  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={faqSection}>

      <div className={faqHeading}>
        <h1>
          Frequently Asked <span>Questions</span>
        </h1>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Vivamus hendrerit suscipit egestas. Nunc eget congue ante.
          Vivamus ut sapien et ex volutpat tincidunt eget at felis.
        </p>
      </div>

      <div className={faqContainer}>

        {faqData.map((item, index) => (
          <div
            key={index}
            className={`${faqBox} ${openIndex === index ? faqBoxActive : ""}`}
          >

            <div
              className={faqQuestion}
              onClick={() => toggleFAQ(index)}
            >
              <h2>{item.question}</h2>

              <span>
                {openIndex === index ? (
                  <FaChevronUp />
                ) : (
                  <FaChevronDown />
                )}
              </span>
            </div>

            {openIndex === index && (
              <div className={faqAnswer}>
                <p>{item.answer}</p>
              </div>
            )}

          </div>
        ))}

      </div>
    </div>
  );
};

export default FAQ;