import React from 'react'

const Gallery = () => {
    return (

        <section className='Gallery'>
            <div className="Gallery-text">
                <h1>
                    Our <span className='highlight'>Gallery</span>
                </h1>

                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vivamus hendrerit suscipit egestas.
                    <br />
                    Nunc eget congue ante. Vivamus ut sapien et ex volutpat
                    tincidunt eget at felis.
                </p>
            </div>
            <div className='Gallery-img'>
                <div className="Gallery-img1">
                    <img src="/images/Gallery1.png" alt="Blog3" />
                </div>
                <div className="Gallery-img2">
                    <img src="/images/Gallery2.png" alt="Blog3" />
                </div>
                <div className="Gallery-img3">
                    <img src="/images/Gallery3.png" alt="Blog3" />
                </div>
                <div className="Gallery-img4">
                    <img src="/images/Gallery4.png" alt="Blog3" />
                </div>
                <div className="Gallery-img5">
                    <img src="/images/Gallery5.png" alt="Blog3" />
                </div>
            </div>

        </section>
    )
}

export default Gallery
