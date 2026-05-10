// FAQ.jsx

import React, { useState } from "react";
import "../../styel/FAQ.css"
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const FAQ = () => {

  const [openIndex, setOpenIndex] = useState(0);

  const faqData = [
    {
      question:
        "Do you specialize in both residential and commercial landscaping?",
      answer:
        "Yes, we have extensive experience in both residential and commercial landscaping. Whether you need to enhance your home's curb appeal or create an inviting outdoor space for your business, we can help.",
    },

    {
      question:
        "Do you provide sustainable and eco-friendly landscaping options?",
      answer:
        "Yes, we provide eco-friendly landscaping solutions including water-saving irrigation systems and sustainable garden designs.",
    },

    {
      question:
        "How do I request a consultation or estimate for my landscaping project?",
      answer:
        "You can contact us through our website, email, or phone number to schedule a consultation for your landscaping project.",
    },

    {
      question:
        "What factors influence the cost of a landscaping project?",
      answer:
        "The cost depends on project size, materials, labor, design complexity, and maintenance requirements.",
    },

    {
      question:
        "How often should I schedule landscape maintenance services?",
      answer:
        "Landscape maintenance is usually recommended weekly or monthly depending on your garden size and needs.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-section">

      <div className="faq-heading">
        <h1>
          Frequently Asked <span>Questions</span>
        </h1>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Vivamus hendrerit suscipit egestas. Nunc eget congue ante.
          Vivamus ut sapien et ex volutpat tincidunt eget at felis.
        </p>
      </div>

      <div className="faq-container">

        {faqData.map((item, index) => (
          <div
            key={index}
            className={`faq-box ${openIndex === index ? "active" : ""}`}
          >

            <div
              className="faq-question"
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
              <div className="faq-answer">
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