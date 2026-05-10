import React from "react";
import "../../styel/Blog.css";
import { FaRegCommentDots, FaClock } from "react-icons/fa";

const Blog = () => {
  return (
    <section className="Blog-section">

      
      <div className="Blog-heading">
        <h1>
          Blog and <span>Articles</span>
        </h1>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Vivamus hendrerit suscipit egestas.
        </p>
      </div>

      {/* Cards */}
      <div className="Blog-cards">

        {/* Card 1 */}
        <div className="Blog-card">

          <div className="image">
           <img src="/images/Blog1.png" alt="Blog1" />
          </div>

          <div className="Blog-content">

            <span className="Blog-label">Tips</span>

            <h2>
              Chossing The Right Plant For Your Climate Zone
            </h2>

            <div className="Blog-icons">

              <div className="icon-box">
                <FaRegCommentDots />
                <p>25 </p>
              </div>

              <div className="icon-box">
                <FaClock />
                <p>5 min </p>
              </div>

            </div>

            <p className="Blog-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Adipisci, tempora. Quibusdam facere illo veniam
              molestiae.
            </p>

            <button>Read More</button>

          </div>
        </div>

        {/* Card 2 */}
        <div className="Blog-card">

          <div className="image">
           <img src="/images/Blog2.png" alt="Blog2" />
          </div>

          <div className="Blog-content">

            <span className="Blog-label">Design</span>

            <h2>
              How to Create low Maintenance LandScape
            </h2>

            <div className="Blog-icons">

              <div className="icon-box">
                <FaRegCommentDots />
                <p>18 </p>
              </div>

              <div className="icon-box">
                <FaClock />
                <p>7 min</p>
              </div>

            </div>

            <p className="Blog-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Adipisci, tempora. Quibusdam facere illo veniam
              molestiae.
            </p>

            <button>Read More</button>

          </div>
        </div>

        <div className="Blog-card">

          <div className="image">
          <img src="/images/Blog3.png" alt="Blog3" />
          </div>

          <div className="Blog-content">

            <span className="Blog-label">Garden</span>

            <h2>
              Land Scaping trend For The Modern HomeOwner
            </h2>

            <div className="Blog-icons">

              <div className="icon-box">
                <FaRegCommentDots />
                <p>30</p>
              </div>

              <div className="icon-box">
                <FaClock />
                <p>6 min </p>
              </div>

            </div>

            <p className="Blog-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Adipisci, tempora. Quibusdam facere illo veniam
              molestiae.
            </p>

            <button>Read More</button>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Blog;