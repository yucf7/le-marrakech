import React from 'react';
import './home-component.css'; 

const HomeComponent = () => {

  return (
    <div>
      
      <header id="mu-header">
      <nav className="navbar" role="navigation">
        <div className="container">
          <a href="/" className="brand-link">
            Le Marrakech<span></span>
          </a>

          <ul id="top-menu" className="nav-links">
            <li>
              <a href="index.html" className="nav-link">
                HOME
              </a>
            </li>
            <li>
              <a href="#mu-about-us" className="nav-link">
                ABOUT US
              </a>
            </li>
            <li>
              <a href="#mu-restaurant-menu" className="nav-link">
                MENU
              </a>
            </li>
            <li>
              <a href="#mu-reservation" className="nav-link">
                RESERVATION
              </a>
            </li>
            <li>
              <a href="#mu-gallery" className="nav-link">
                GALLERY
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>

      <div className="wide-picture">
        <img src={process.env.PUBLIC_URL + "images/home/slider/1.jpg"} alt="img" />
      </div>

      {/* About Us Section */}
  <section id="mu-about-us">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="mu-about-us-area">

            <div className="mu-title">
              <span className="mu-subtitle">Discover</span>
              <h2>ABOUT US</h2>
            </div>

            <div className="about-sec row">
              <div className="col col-md-6">
               <div className="mu-about-us-left">     
               <img src={process.env.PUBLIC_URL + "images/home/slider/4.jpg"} alt="img" />
                </div>
              </div>
              <div className="col col-md-6">
                 <div className="mu-about-us-right">
                 <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam minus aliquid, itaque illum assumenda repellendus dolorem, dolore numquam totam saepe, porro delectus, libero enim odio quo. Explicabo ex sapiente sit eligendi, facere voluptatum! Quia vero rerum sunt porro architecto corrupti eaque corporis eum, enim soluta, perferendis dignissimos, repellendus, beatae laboriosam.</p>                              
                  <ul>
                    <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</li>
                    <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</li>
                    <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia.</li>                    
                    <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</li>
                    <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</li>
                    <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia.</li>
                  </ul>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque similique molestias est quod reprehenderit, quibusdam nam qui, quam magnam.</p>  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>


{/* mi counter */}
  <section id="mu-counter">
    <div className="counter-container mu-counter-overlay">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="mu-counter-area">

              <ul className="mu-counter-nav">

                <li className="mu-single-counter-container col-md-3 col-sm-3 col-xs-6">
                  <div className="mu-single-counter">
                    <span>Delicious</span>
                    <h3><span className="counter-value" data-count="60">40</span><sup>+</sup></h3>
                    <p>Lunch Items</p>
                  </div>
                </li>

                 <li className="mu-single-counter-container col-md-3 col-sm-3 col-xs-6">
                  <div className="mu-single-counter">
                    <span>Hot</span>
                     <h3><span className="counter-value" data-count="45">30</span><sup>+</sup></h3>
                    <p>Coffee Items</p>
                  </div>
                </li>

                 <li className="mu-single-counter-container col-md-3 col-sm-3 col-xs-6">
                  <div className="mu-single-counter">
                    <span>Satisfied</span>
                    <h3><span className="counter-value" data-count="6560">200</span><sup>+</sup></h3>
                    <p>Customers</p>
                  </div>
                </li>

              </ul>

            </div>
          </div>
        </div>
      </div>
    </div>
  </section>


      {/* Menu Section */}
      <section className="menu" id="menu">
        <div className="container">
          <h2>Menu</h2>
          {/* Add your menu items here */}
        </div>
      </section>

      {/* Gallery Section */}
      <section className="gallery" id="gallery">
        <div className="container">
          <h2>Gallery</h2>
          {/* Add your image gallery here */}

      <section id="mu-map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9207.358598888495!2d-85.64847801496286!3d30.183918972289003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0000000000000000%3A0x2320479d70eb6202!2sDillard&#39;s!5e0!3m2!1sbn!2sbd!4v1462359735720" width="100%" height="100%" frameBorder="0" allowFullScreen></iframe>
      </section>

    
        </div>
      </section>
    </div>
  );
};

export default HomeComponent;
