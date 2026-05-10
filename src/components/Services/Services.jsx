import React from 'react'
import { FaLeaf, FaSeedling, FaTree, FaTractor, FaWater, FaTools } from "react-icons/fa";
const Services = () => {
    return (
        <section className='services-containner'>
            <div className="services-text">
                <h1>Our landscaping Work and <span className="highlight">Services</span></h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam est sunt dolores possimus, illum asperiores earum maxime voluptatibus expedita esse minima rerum. Quisquam neque, voluptatum saepe quae animi perferendis nihil.</p>
            </div>
            <div className="services">
                <div className="service-card">
                    <FaSeedling />
                    <h3>Lawn <span className="highlight">Care</span></h3>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos perferendis labore sint neque? Vitae aspernatur, earum hic sapiente est explicabo placeat praesentium illum, saepe reprehenderit ex, dolorum recusandae expedita illo.</p>
                </div>

                <div className="service-card">
                    <FaTree />
                    <h3>Tree and <span className="highlight">Shurb Care</span></h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis quidem molestiae vel neque, minus provident corporis cupiditate? Eum, laborum officiis? Voluptates quo nesciunt hic autem dignissimos aut atque non id!.</p>
                </div>

                <div className="service-card">
                    <FaTractor />
                    <h3>Free <span className="highlight">Consulattions</span></h3>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum eius est, molestias, magnam voluptatum molestiae sapiente quod soluta laudantium officia recusandae? Doloribus quia veritatis voluptatem consectetur commodi minus unde necessitatibus.</p>
                </div>

                <div className="service-card">
                    <FaWater />
                    <h3>Garden <span className="highlight">Design </span></h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium quo dolore voluptatibus, illum molestiae, debitis similique eius incidunt ex quisquam aliquam saepe aspernatur a maxime quod reprehenderit, autem qui cumque.</p>
                </div>

                <div className="service-card">
                    <FaTools />
                    <h3>Water <span className="highlight">Features </span></h3>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed explicabo esse ullam ex iusto tenetur, placeat non optio impedit omnis commodi quod totam earum, nobis facere, similique cumque dolores sunt?</p>
                </div>
                     <div className="service-card">
                    <FaTools />
                    <h3>Irrigation <span className="highlight">System </span></h3>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed explicabo esse ullam ex iusto tenetur, placeat non optio impedit omnis commodi quod totam earum, nobis facere, similique cumque dolores sunt?</p>
                </div>
            </div>



        </section>
    )
}

export default Services
