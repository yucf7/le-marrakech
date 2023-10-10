import './home-component.css'; 
import { useNavigate } from 'react-router-dom';

import React, { useEffect, useState } from 'react';
import { isAuthenticated } from '../../utils/auth-middleware'


const HomeComponent = () => {
  const [isAuthenticatedVar, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  function logout(){
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/login');
  }
  useEffect(() => {
    async function checkAuthentication() {
      const authenticated = await isAuthenticated(); 
      setIsAuthenticated(authenticated);
    }

    checkAuthentication();
  }, []);

  return (
    <div>
      
      <header id="mu-header">
      <nav className="navbar" role="navigation">
        <div className="container">
          
          {!isAuthenticatedVar ? (
            <>
              <a href="/login" className="brand-link">
              Login<span></span>
          </a>
            <a href="/signup" className="brand-link signup-btn">
            Signup<span></span>
          </a>
          </>
        ) : null}
          

          <ul id="top-menu" className="nav-links">
            <li>
              <a href="/" className="nav-link">
                LE MARRAKECH
              </a>
            </li>
            <li>
              <a href="#mu-about-us" className="nav-link">
                ABOUT US
              </a>
            </li>
            <li>
              <a href="/menu" className="nav-link">
                MENU
              </a>
            </li>
            <li>
              <a href="#mu-gallery" className="nav-link">
                GALLERY
              </a>
            </li>
            <li>
              <a href="/cart" className="nav-link">
                CART
              </a>
            </li>
            <li>
            {!isAuthenticatedVar ? (
            null
        ) : <button onClick={logout}className="logout brand-link">
        Logout
      </button>}

            </li>
          </ul>
        </div>
      </nav>
    </header>


    <section id="mu-slider">
        
    <div id="carouselExampleCaptions" className="carousel slide">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner mu-top-slider">
    <div className="carousel-item mu-top-slider-single active">
    <img className='carousel-img' src={process.env.PUBLIC_URL + "images/home/slider/1.jpg"} alt="img" />
        <div className="mu-top-slider-content">
            <span className="mu-slider-small-title">Welcome</span>
            <h2 className="mu-slider-title">To MARRAKECH</h2>
            <p>Une histoire d'amour avec la cuisine marocaine traditionnelle commence ici, à chaque plat, une aventure sensorielle dans les ruelles envoûtantes de Marrakech.</p>           
            <a href='/menu' className="mu-readmore-btn mu-reservation-btn">Commander</a>
          </div>
    </div>
    <div className="carousel-item mu-top-slider-single">
    <img className='carousel-img' src={process.env.PUBLIC_URL + "images/home/slider/2.jpg"} alt="img" />
        <div className="mu-top-slider-content">
            <span className="mu-slider-small-title">The Elegant</span>
            <h2 className="mu-slider-title">Moroccan Restaurant</h2>
            <p>Découvrez un voyage gustatif unique au Marrakech, où les saveurs marocaines authentiques se mêlent à l'élégance française.</p>           
            <a href='/menu' className="mu-readmore-btn mu-reservation-btn">Commander</a>
          </div>
    </div>
    <div className="carousel-item mu-top-slider-single">
    <img className='carousel-img' src={process.env.PUBLIC_URL + "images/home/slider/3.jpg"} alt="img" />
        <div className="mu-top-slider-content">
            <span className="mu-slider-small-title">Delicious</span>
            <h2 className="mu-slider-title">Delicious Meals</h2>
            <p>Bienvenue chez nous, bienvenue au Marrakech.</p>           
            <a href='/menu' className="mu-readmore-btn mu-reservation-btn">Commander</a>
          </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
  </section>

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
                 <p>Bienvenue au Marrakech - Votre Oasis Culinaire en France.</p> 
                 <p>Découvrez un voyage gustatif unique au Marrakech, où les saveurs marocaines authentiques se mêlent à l'élégance française. Notre histoire commence avec une passion inébranlable pour la cuisine marocaine traditionnelle. Chaque plat que nous servons est une histoire d'amour, une expérience sensorielle qui vous transporte directement dans les ruelles envoûtantes de Marrakech.</p>
                 <p>Au Marrakech, nous croyons que la nourriture est bien plus qu'une simple nécessité, c'est une célébration de la vie. C'est pourquoi nous mettons un point d'honneur à utiliser les ingrédients les plus frais et les épices les plus authentiques pour garantir que chaque bouchée est une explosion de saveurs.</p>
                 <p>Notre restaurant est bien plus qu'un simple endroit pour manger ; c'est un lieu où les amis se réunissent, où les familles se retrouvent et où les âmes curieuses découvrent de nouveaux horizons culinaires. L'atmosphère chaleureuse et accueillante de notre établissement, agrémentée d'une décoration marocaine authentique, vous transporte instantanément dans un monde de beauté et de convivialité.</p>                              
                  <ul>
                    <li>Une ambiance chaleureuse et une décoration marocaine authentique vous transportent dans un monde de beauté et de convivialité.</li>
                    <li>Des ingrédients frais et des épices authentiques pour chaque bouchée, une explosion de saveurs à chaque instant.</li>
                    <li>Nous sommes bien plus qu'un restaurant, nous sommes une passerelle vers le Maroc, une invitation à explorer de nouvelles saveurs et à créer des souvenirs précieux.</li>                    
                  </ul>
                  <p>Bienvenue chez nous, bienvenue au Marrakech.</p>  
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

                <li className="mu-single-counter-container col-md-3 col-sm-3 col-xs-6">
                  <div className="mu-single-counter">
                    <span>Fresh</span>
                    <h3><span className="counter-value" data-count="60">40</span><sup>+</sup></h3>
                    <p>Breakfast Items</p>
                  </div>
                </li>

                

              </ul>

            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

      {/* Gallery Section */}

            <section id="mu-gallery">
                <div className="container">
                <div className="row">
                    <div className="col-md-12">
                    <div className="mu-gallery-area">

                        <div className="mu-title">
                        <span className="mu-subtitle">Discover</span>
                        <h2>Our Gallery</h2>
                        </div>

                        <div className="mu-gallery-content">
                        
                        <div className="mu-gallery-body">
                            <div className="mu-single-gallery col-md-4">
                                <div className="mu-single-gallery-item">
                                    <figure className="mu-single-gallery-img">
                                    <div className="mu-imglink">
                                    <img alt="img" src= {process.env.PUBLIC_URL + "images/home/gallery/1.jpg"}/>
                                    <div className="mu-single-gallery-info">
                                        <img className="mu-view-btn" src={process.env.PUBLIC_URL + "images/home/plus.png"} alt="plus icon img"/>
                                    </div> 
                                    </div>
                                    </figure>            
                                </div>
                            </div>

                            <div className="mu-single-gallery col-md-4">
                                <div className="mu-single-gallery-item">
                                    <figure className="mu-single-gallery-img">
                                    <div className="mu-imglink" >
                                        <img alt="img" src="images/home/gallery/2.jpg"/>
                                        <div className="mu-single-gallery-info">
                                            <img className="mu-view-btn" src={process.env.PUBLIC_URL + "images/home/plus.png"} alt="plus icon img"/>
                                        </div> 
                                    </div>
                                    </figure>            
                                </div>
                            </div>               

                            <div className="mu-single-gallery col-md-4">                  
                                <div className="mu-single-gallery-item">
                                <figure className="mu-single-gallery-img">
                                    <div className="mu-imglink">
                                    <img alt="img" src= {process.env.PUBLIC_URL + "images/home/gallery/3.jpg"}/>
                                    <div className="mu-single-gallery-info">
                                        <img className="mu-view-btn" src= {process.env.PUBLIC_URL + "images/home/plus.png"} alt="plus icon img"/>
                                    </div> 
                                    </div>
                                </figure>            
                                </div>
                            </div>               

                            <div className="mu-single-gallery col-md-4">                  
                                <div className="mu-single-gallery-item">
                                <figure className="mu-single-gallery-img">
                                    <div className="mu-imglink">
                                    <img alt="img" src= {process.env.PUBLIC_URL + "images/home/gallery/4.jpg"}/>
                                    <div className="mu-single-gallery-info">
                                        <img className="mu-view-btn" src= {process.env.PUBLIC_URL + "images/home/plus.png" } alt="plus icon img"/>
                                    </div> 
                                    </div>
                                </figure>            
                                </div>
                            </div>

                            <div className="mu-single-gallery col-md-4">                  
                                <div className="mu-single-gallery-item">
                                <figure className="mu-single-gallery-img">
                                    <div className="mu-imglink">
                                    <img alt="img" src= {process.env.PUBLIC_URL + "images/home/gallery/5.jpg"}/>
                                    <div className="mu-single-gallery-info">
                                        <img className="mu-view-btn" src= {process.env.PUBLIC_URL + "images/home/plus.png" } alt="plus icon img"/>
                                    </div> 
                                    </div>
                                </figure>            
                                </div>
                            </div>               

                            <div className="mu-single-gallery col-md-4">                  
                            <div className="mu-single-gallery-item">
                                <figure className="mu-single-gallery-img">
                                    <div className="mu-imglink">
                                    <img alt="img" src= {process.env.PUBLIC_URL + "images/home/gallery/6.jpg"}/>
                                    <div className="mu-single-gallery-info">
                                        <img className="mu-view-btn" src= {process.env.PUBLIC_URL + "images/home/plus.png"} alt="plus icon img"/>
                                    </div> 
                                    </div>
                                </figure>            
                                </div>
                            </div>

                            <div className="mu-single-gallery col-md-4">                  
                                <div className="mu-single-gallery-item">
                                <figure className="mu-single-gallery-img">
                                    <div className="mu-imglink" >
                                    <img alt="img" src= {process.env.PUBLIC_URL + "images/home/gallery/7.jpg"}/>
                                    <div className="mu-single-gallery-info">
                                        <img className="mu-view-btn" src= {process.env.PUBLIC_URL + "images/home/plus.png"} alt="plus icon img"/>
                                    </div> 
                                    </div>
                                </figure>            
                                </div>
                            </div>               

                            <div className="mu-single-gallery col-md-4">                  
                                <div className="mu-single-gallery-item">
                                <figure className="mu-single-gallery-img">
                                    <div className="mu-imglink" >
                                    <img alt="img" src= {process.env.PUBLIC_URL + "images/home/gallery/8.jpg"}/>
                                    <div className="mu-single-gallery-info">
                                        <img className="mu-view-btn" src= {process.env.PUBLIC_URL + "images/home/plus.png" } alt="plus icon img"/>
                                    </div> 
                                    </div>
                                </figure>            
                                </div>
                            </div>               

                            <div className="mu-single-gallery col-md-4">                  
                                <div className="mu-single-gallery-item">
                                <figure className="mu-single-gallery-img">
                                    <div className="mu-imglink" >
                                    <img alt="img" src= {process.env.PUBLIC_URL + "images/home/gallery/9.jpg"}/>
                                    <div className="mu-single-gallery-info">
                                        <img className="mu-view-btn" src= {process.env.PUBLIC_URL + "images/home/plus.png"} alt="plus icon img"/>
                                    </div> 
                                    </div>
                                </figure>            
                                </div>
                            </div>

                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </section>



    
       
      <section id="mu-map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9207.358598888495!2d-85.64847801496286!3d30.183918972289003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0000000000000000%3A0x2320479d70eb6202!2sDillard&#39;s!5e0!3m2!1sbn!2sbd!4v1462359735720" width="100%" height="100%" frameBorder="0" allowFullScreen></iframe>
      </section>
    </div>
  );
};

export default HomeComponent;
