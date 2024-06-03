
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import React, { useEffect } from 'react';
import { CCarousel, CCarouselItem, CImage } from '@coreui/react';
import './Main.css';
import { Link } from 'react-router-dom';


const features = [
  {
    icon: 'fas fa-truck',
    title: 'Free Shipping',
    description: 'On order over $100',
    bgColor: 'orange',
  },
  {
    icon: 'fas fa-seedling',
    title: 'Always Fresh',
    description: 'Product well package',
    bgColor: 'purple', // Light green background
  },
  {
    icon: 'fas fa-award',
    title: 'Superior Quality',
    description: 'Quality Products',
    bgColor: 'gray', // Dark green background
  },
  {
    icon: 'fas fa-headset',
    title: 'Support',
    description: '24/7 Support',
    bgColor: 'yellow', // Medium green background
  },
];


const vegetables = [
  { name: 'Carrots', image: 'images/category-1.jpg', description: 'Fresh and organic carrots.', price: '$2.99 / lb' },
  { name: 'Broccoli', image: 'images/category-2.jpg', description: 'Green and healthy broccoli.', price: '$1.99 / lb' },
  { name: 'Tomatoes', image: 'images/category-3.jpg', description: 'Juicy and ripe tomatoes.', price: '$3.49 / lb' },
  { name: 'Spinach', image: 'images/category-4.jpg', description: 'Leafy green spinach.', price: '$2.49 / lb' },
];

const testimonials = [
  {
    name: 'Jane Doe',
    feedback: 'Great quality and fresh vegetables!',
    image: 'images/person_2.jpg',
  },
  {
    name: 'John Smith',
    feedback: 'Fast delivery and excellent customer service.',
    image: 'images/person_1.jpg',
  },
];


const Main = () => {
  useEffect(() => {
    // Check if the `mdb` object is available on window
    if (window.mdb) {
      const carouselElement = document.querySelector('#carouselDarkVariant');
      if (carouselElement) {
        new window.mdb.Carousel(carouselElement);
      }
    } else {
      console.error('MDB library not loaded');
    }
  }, [])

  return (

    <Container fluid className="text-center">



      <CCarousel controls interval={3000} transition="crossfade" className="mb-6">
        <CCarouselItem>
          <CImage className="d-block w-100" src="images/bg1.jpg" alt="slide 1" style={{ height: '500px', objectFit: 'cover', filter: 'blur(1px)' }} />
          <div className="carousel-caption text-white mb-10" style={{ fontSize: '2vw', fontFamily: 'Roboto, Arial, sans-serif', textAlign: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)', padding: '20px', borderRadius: '10px' }}>
            <h5 className="text-white" style={{ fontSize: '2.5vw' }}>100% Fresh &amp; Organic Foods</h5>
            <p className="text-white" style={{ fontSize: '2vw' }}>We deliver organic vegetables &amp; fruits</p>
            <p><Link to="#" className="btn btn-success" style={{ borderRadius: '20px', padding: '10px 20px' }}>View Details</Link></p>
          </div>
        </CCarouselItem>
        <CCarouselItem>
          <CImage className="d-block w-100" src="images/bg2.jpg" alt="slide 2" style={{ height: '500px', objectFit: 'cover', filter: 'blur(1px)' }} />
          <div className="carousel-caption text-white mb-10" style={{ fontSize: '2vw', fontFamily: 'Roboto, Arial, sans-serif', textAlign: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)', padding: '20px', borderRadius: '10px' }}>
            <h5 className="text-white" style={{ fontSize: '2.5vw' }}>We serve Fresh Vegetables &amp; Fruits</h5>
            <p className="text-white" style={{ fontSize: '2vw' }}>We deliver organic vegetables &amp; fruits</p>
            <p><Link to="#" className="btn btn-success" style={{ borderRadius: '20px', padding: '10px 20px' }}>View Details</Link></p>
          </div>
        </CCarouselItem>
        <CCarouselItem>
          <CImage className="d-block w-100" src="images/bg3.jpg" alt="slide 3" style={{ height: '500px', objectFit: 'cover', filter: 'blur(1px)' }} />
          <div className="carousel-caption text-white mb-10" style={{ fontSize: '2vw', fontFamily: 'Roboto, Arial, sans-serif', textAlign: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)', padding: '20px', borderRadius: '10px' }}>
            <h5 className="text-white" style={{ fontSize: '2.5vw' }}>We serve Fresh Vegetables &amp; Fruits</h5>
            <p className="text-white" style={{ fontSize: '2vw' }}>We deliver organic vegetables &amp; fruits</p>
            <p><Link to="#" className="btn btn-success" style={{ borderRadius: '20px', padding: '10px 20px' }}>View Details</Link></p>
          </div>
        </CCarouselItem>
      </CCarousel>









      {/* Features Section */}
      <Row className="mb-5">
        {features.map((feature, index) => (
          <Col key={index} xs={12} md={6} lg={3} className="mb-4">
            <div className="feature-box" style={{ backgroundColor: feature.bgColor }}>
              <i className={`${feature.icon} feature-icon`}></i>
            </div>
            <h5 className="mt-3">{feature.title}</h5>
            <p className="text-muted">{feature.description}</p>
          </Col>
        ))}
      </Row>

      {/* Vegetables Section */}
      <h2 className="my-5">Our Vegetables</h2>
      <Row className="mb-5">
        {vegetables.map((veg, index) => (
          <Col key={index} xs={12} md={6} lg={3} className="mb-4">
            <Card className="veg-card">
              <Card.Img variant="top" src={veg.image} alt={veg.name} className="veg-img" />
              <Card.Body>
                <Card.Title>{veg.name}</Card.Title>
                <Card.Text>{veg.description}</Card.Text>
                <Card.Text className="text-success font-weight-bold">{veg.price}</Card.Text>
                <Button variant="success">Buy Now</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <div className="container">
        <div className="section-title">
          <h2>Vegetables</h2>
          <p>Protect the health of every home</p>
        </div>
        <div className="shop-now">
          <button>Shop now</button>
        </div>

        <div className="row">
          <div className="col-md-6 mb-4">
            <div className="category-image">
              <img src="images/fruites.jpg" alt="Fruits" />
              <div className="category-label">Fruits</div>
            </div>
          </div>
          <div className="col-md-6 mb-4">
            <div className="category-image">
              <img src="images/juice.jpg" alt="Juices" />
              <div className="category-label">Juices</div>
            </div>
          </div>
        </div>

        <div className="row mt-4">
          <div className="col-md-6 mb-4">
            <div className="category-image">
              <img src="images/vegitables.jpg" alt="Vegetables" />
              <div className="category-label">Vegetables</div>
            </div>
          </div>
          <div className="col-md-6 mb-4">
            <div className="category-image">
              <img src="images/dry.jpg" alt="Dried" />
              <div className="category-label">Dried</div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="cta-section text-white text-center py-5 my-5">
        <h2>Get Fresh Vegetables Delivered to Your Doorstep!</h2>
        <p>Sign up for our newsletter to stay updated on the latest deals and fresh arrivals.</p>
        <Button variant="light">Sign Up</Button>
      </div>



      <div className="deal-container">
        <div className="deal-background">
          <div className="deal-content">
            <h4 className="best-price">Best Price For You</h4>
            <h1 className="deal-title">Deal of the day</h1>
            <p className="deal-description">
              Far far away, behind the word mountains, far from the countries Vokalia and Consonantia
            </p>
            <h2 className="item-name">Spinach</h2>

            <p className="item-price">$10 <span className="discounted-price">now $5 only</span></p>
            <div className="countdown">
              <div className="countdown-item">
                <span className="countdown-number">-1615</span>
                <span className="countdown-label">DAYS</span>
              </div>
              <div className="countdown-item">
                <span className="countdown-number">22</span>
                <span className="countdown-label">HOURS</span>
              </div>
              <div className="countdown-item">
                <span className="countdown-number">42</span>
                <span className="countdown-label">MINUTES</span>
              </div>
              <div className="countdown-item">
                <span className="countdown-number">51</span>
                <span className="countdown-label">SECONDS</span>
              </div>
            </div>
          </div>
        </div>
      </div>




      <div className="about-container">
        <div className="about-header">
          <h1>About Us</h1>
        </div>
        <div className="about-content">
          <img src="images/vegitables.jpg" alt="Vegetable Farm" className="about-image" />
          <div className="about-text">
            <p>
              Welcome to Fresh Veggies, your number one source for all things vegetable.
              We're dedicated to providing you the very best of fresh and organic produce,
              with an emphasis on quality, freshness, and customer service.
            </p>
            <p>
              Founded in 2020, Fresh Veggies has come a long way from its beginnings on a small farm.
              When we first started out, our passion for organic farming drove us to start our own business.
            </p>
            <p>
              We hope you enjoy our products as much as we enjoy offering them to you. If you have any questions
              or comments, please don't hesitate to contact us.
            </p>
            <p>
              Sincerely,<br />
              The Fresh Veggies Team
            </p>
          </div>
        </div>
      </div>






      {/* Testimonials Section */}
      <h2 className="my-5">What Our Customers Say</h2>
      <Row>
        {testimonials.map((testimonial, index) => (
          <Col key={index} xs={12} md={6} className="mb-4">
            <Card className="testimonial-card">
              <Card.Img
                variant="top"
                src={testimonial.image}
                alt={testimonial.name}
                style={{ height: '200px', objectFit: 'cover' }} // Adjusted height
              />
              <Card.Body>
                <Card.Title>{testimonial.name}</Card.Title>
                <Card.Text>"{testimonial.feedback}"</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>




      <section className="gradient-custom">
        <div className="container my-5 py-5">
          <div className="row d-flex justify-content-center">
            <div className="col-md-12">
              <div className="text-center mb-4 pb-2">
                <i className="fas fa-quote-left fa-3x text-white"></i>
              </div>

              <div className="card">
                <div className="card-body px-4 py-5">
                  <div id="carouselDarkVariant" className="carousel slide carousel-dark" data-mdb-ride="carousel">
                    <div className="carousel-indicators mb-0">
                      <button data-mdb-target="#carouselDarkVariant" data-mdb-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                      <button data-mdb-target="#carouselDarkVariant" data-mdb-slide-to="1" aria-label="Slide 2"></button>
                      <button data-mdb-target="#carouselDarkVariant" data-mdb-slide-to="2" aria-label="Slide 3"></button>
                    </div>

                    <div className="carousel-inner pb-5">
                      <div className="carousel-item active">
                        <div className="row d-flex justify-content-center">
                          <div className="col-lg-10 col-xl-8">
                            <div className="row">
                              <div className="col-lg-4 d-flex justify-content-center">
                                <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp" className="rounded-circle shadow-1 mb-4 mb-lg-0" alt="woman avatar" width="150" height="150" />
                              </div>
                              <div className="col-9 col-md-9 col-lg-7 col-xl-8 text-center text-lg-start mx-auto mx-lg-0">
                                <h4 className="mb-4">Maria Smantha - Web Developer</h4>
                                <p className="mb-0 pb-3">
                                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam amet animi blanditiis consequatur debitis dicta distinctio, enim error eum iste libero modi nam natus perferendis possimus quasi sint sit tempora voluptatem. Est, exercitationem id ipsa ipsum laboriosam perferendis.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="carousel-item">
                        <div className="row d-flex justify-content-center">
                          <div className="col-lg-10 col-xl-8">
                            <div className="row">
                              <div className="col-lg-4 d-flex justify-content-center">
                                <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp" className="rounded-circle shadow-1 mb-4 mb-lg-0" alt="woman avatar" width="150" height="150" />
                              </div>
                              <div className="col-9 col-md-9 col-lg-7 col-xl-8 text-center text-lg-start mx-auto mx-lg-0">
                                <h4 className="mb-4">Lisa Cudrow - Graphic Designer</h4>
                                <p className="mb-0 pb-3">
                                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="carousel-item">
                        <div className="row d-flex justify-content-center">
                          <div className="col-lg-10 col-xl-8">
                            <div className="row">
                              <div className="col-lg-4 d-flex justify-content-center">
                                <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(9).webp" className="rounded-circle shadow-1 mb-4 mb-lg-0" alt="woman avatar" width="150" height="150" />
                              </div>
                              <div className="col-9 col-md-9 col-lg-7 col-xl-8 text-center text-lg-start mx-auto mx-lg-0">
                                <h4 className="mb-4">John Smith - Marketing Specialist</h4>
                                <p className="mb-0 pb-3">
                                  At vero eos et accusamus et iusto odio dignissimos qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia mollitia animi id laborum et dolorum fuga.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <button className="carousel-control-prev" type="button" data-mdb-target="#carouselDarkVariant" data-mdb-slide="prev">
                      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-mdb-target="#carouselDarkVariant" data-mdb-slide="next">
                      <span className="carousel-control-next-icon" aria-hidden="true"></span>
                      <span className="visually-hidden">Next</span>
                    </button>
                  </div>
                </div>
              </div>

              <div className="text-center mt-4 pt-2">
                <i className="fas fa-quote-right fa-3x text-white"></i>
              </div>
            </div>
          </div>
        </div>
      </section>




      <section className="newsletter-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8 newsletter-content">
              <h2 className="newsletter-title">Subscribe to our Newsletter</h2>
              <p className="newsletter-description">Get e-mail updates about our latest shops and special offers</p>
              <form action="#" className="subscribe-form">
                <div className="form-group">
                  <input type="text" className="form-control" placeholder="Enter email address" />
                  <input type="submit" value="Subscribe" className="submit" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>




    </Container>

  );
};

export default Main;
