import React from 'react'
import {galleryContainer, highlight, galleryText,galleryImg,galleryImg1,galleryImg2,galleryImg3,galleryImg4,galleryImg5} from"../../styel/LandScaping.module.css"
const Gallery = () => {
    return (

        <section className={galleryContainer}>
            <div className={galleryText}>
                <h1>
                    Our <span className={highlight}>Gallery</span>
                </h1>

                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vivamus hendrerit suscipit egestas.
                    <br />
                    Nunc eget congue ante. Vivamus ut sapien et ex volutpat
                    tincidunt eget at felis.
                </p>
            </div>
            <div className={galleryImg}>
                <div className={galleryImg1}>
                    <img src="/images/Gallery1.png" alt="Blog3" />
                </div>
                <div className={galleryImg2}>
                    <img src="/images/Gallery2.png" alt="Blog3" />
                </div>
                <div className={galleryImg3}>
                    <img src="/images/Gallery3.png" alt="Blog3" />
                </div>
                <div className={galleryImg4}>
                    <img src="/images/Gallery4.png" alt="Blog3" />
                </div>
                <div className={galleryImg5}>
                    <img src="/images/Gallery5.png" alt="Blog3" />
                </div>
            </div>

        </section>
    )
}

export default Gallery
