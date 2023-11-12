const Portfolio = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg sticky-top">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img src="imgs/logo.png" alt="" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#main"
            aria-controls="main"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fa-solid fa-bars" />
          </button>
          <div className="collapse navbar-collapse" id="main">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link p-2 p-lg-3" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link p-2 p-lg-3" href="#">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link p-2 p-lg-3 active"
                  aria-current="page"
                  href="#"
                >
                  Portfolio
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link p-2 p-lg-3" href="#">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link p-2 p-lg-3" href="#">
                  Contact
                </a>
              </li>
            </ul>
            <div className="search ps-3 pe-3 d-none d-lg-block">
              <i className="fa-solid fa-magnifying-glass" />
            </div>
            <a className="btn rounded-pill main-btn" href="#">
              Login
            </a>
          </div>
        </div>
      </nav>
      <div className="landing d-flex justify-content-center align-items-center">
        <div className="text-center text-light">
          <h1>Taste the Creativity</h1>
          <p className="fs-6 text-white-50 mb-5">
            We make awesome graphic and web design
          </p>
          <a className="btn rounded-pill main-btn" href="#">
            Get Started
          </a>
        </div>
      </div>
      <div className="features text-center pt-5 pb-5">
        <div className="container">
          <div className="main-title mt-5 mb-5 position-relative">
            <img className="mb-4" src="imgs/title.png" alt="" />
            <h2>We are Good at</h2>
            <p className="text-black-50 text-uppercase">
              Some Of These Stuff Under
            </p>
          </div>
          <div className="row">
            <div className="col-md-6 col-lg-4">
              <div className="feat">
                <div className="icon-holder position-relative">
                  <i className="fa-solid fa-1 position-absolute bottom-0 number" />
                  <i className="fa-solid fa-pencil fa-4x position-absolute bottom-0 icon" />
                </div>
                <h4 className="mb-3 mt-3 text-uppercase">Graphic Design</h4>
                <p className="text-black-50 lh-lg">
                  Pellentesque in ipsum id orci porta dapibus. Vivamus magna
                  justo, lacinia eget consectetur sed, convallis at tellus.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="feat">
                <div className="icon-holder position-relative">
                  <i className="fa-solid fa-2 position-absolute bottom-0 number" />
                  <i className="fa-solid fa-tv fa-4x position-absolute bottom-0 icon" />
                </div>
                <h4 className="mb-3 mt-3 text-uppercase">Graphic Design</h4>
                <p className="text-black-50 lh-lg">
                  Pellentesque in ipsum id orci porta dapibus. Vivamus magna
                  justo, lacinia eget consectetur sed, convallis at tellus.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="feat">
                <div className="icon-holder position-relative">
                  <i className="fa-solid fa-3 position-absolute bottom-0 number" />
                  <i className="fa-solid fa-plug fa-4x position-absolute bottom-0 icon" />
                </div>
                <h4 className="mb-3 mt-3 text-uppercase">Graphic Design</h4>
                <p className="text-black-50 lh-lg">
                  Pellentesque in ipsum id orci porta dapibus. Vivamus magna
                  justo, lacinia eget consectetur sed, convallis at tellus.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="our-work text-center pt-5 pb-5">
        <div className="container">
          <div className="main-title mt-5 mb-5 position-relative">
            <img className="mb-4" src="imgs/title.png" alt="" />
            <h2>We Make This</h2>
            <p className="text-black-50 text-uppercase">Prepare To Be Amazed</p>
          </div>
          <ul className="list-unstyled d-flex justify-content-center mt-5 mb-5">
            <li className="active rounded-pill">All</li>
            <li>Design</li>
            <li>Code</li>
            <li>Photo</li>
            <li>App</li>
          </ul>
          <div className="row">
            <div className="col-sm-6 col-md-4 col-lg-3">
              <div className="box mb-3 bg-white" data-work="Application">
                <img className="img-fluid" src="imgs/work-01.jpg" alt="" />
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3">
              <div className="box mb-3 bg-white" data-work="Application">
                <img className="img-fluid" src="imgs/work-02.jpg" alt="" />
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3">
              <div className="box mb-3 bg-white" data-work="Application">
                <img className="img-fluid" src="imgs/work-03.jpg" alt="" />
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3">
              <div className="box mb-3 bg-white" data-work="Application">
                <img className="img-fluid" src="imgs/work-04.jpg" alt="" />
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3">
              <div className="box mb-3 bg-white" data-work="Application">
                <img className="img-fluid" src="imgs/work-05.jpg" alt="" />
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3">
              <div className="box mb-3 bg-white" data-work="Application">
                <img className="img-fluid" src="imgs/work-06.jpg" alt="" />
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3">
              <div className="box mb-3 bg-white" data-work="Application">
                <img className="img-fluid" src="imgs/work-07.jpg" alt="" />
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3">
              <div className="box mb-3 bg-white" data-work="Application">
                <img className="img-fluid" src="imgs/work-08.jpg" alt="" />
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-center mt-5">
            <a className="btn rounded-pill main-btn text-uppercase" href="#">
              I Want More
            </a>
          </div>
        </div>
      </div>
      <div className="stuff pt-5">
        <div className="container">
          <div className="main-title text-center mt-5 mb-5 position-relative">
            <img className="mb-4" src="imgs/title.png" alt="" />
            <h2>Some Stuff About Us</h2>
            <p className="text-black-50 text-uppercase">The Great Team</p>
          </div>
          <p className="description text-center mb-5 text-black-50 m-auto">
            Donec rutrum congue leo eget malesuada. Mauris blandit aliquet elit,
            eget tincidunt nibh pulvinar a. Pellentesque in ipsum id orci porta
            dapibus. Proin eget tortor risus. Donec sollicitudin molestie
            malesuada.
          </p>
          <div className="row align-items-center">
            <div className="col-lg-4 mb-4 text-center text-md-start">
              <div className="text">
                <h4>Retina Design</h4>
                <p className="text-black-50 fs-6">
                  Vestibulum ac diam sit amet quam vehicula elementum sed sit
                  amet dui. Mauris blandit aliquet elit, eget tincidunt nibh
                  pulvinar a.
                </p>
                <p className="text-black-50 fs-6">
                  Donec rutrum congue leo eget malesuada. Mauris blandit aliquet
                  elit, eget tincidunt nibh pulvinar a. Pellentesque in ipsum id
                  orci porta dapibus. Proin eget tortor risus. Donec
                  sollicitudin molestie malesuada.
                </p>
                <a
                  className="btn rounded-pill main-btn text-uppercase"
                  href="#"
                >
                  Order Me One
                </a>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="image">
                <img className="img-fluid" src="imgs/laptop.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="team text-center pb-5 pt-5">
        <div className="container pb-5 pt-5">
          <h2 className="fw-bold">Meet The Team</h2>
          <p className="text-black-50 mb-5">
            Donec rutrum congue leo eget malesuada. Mauris blandit aliquet elit,
            eget tincidunt nibh pulvinar a. Pellentesque in ipsum id orci porta
            dapibus. Proin eget tortor risus. Donec sollicitudin molestie
            malesuada.
          </p>
          <div className="row">
            <div className="col-md-6 col-lg-3">
              <div className="box bg-white">
                <img className="img-fluid" src="imgs/team-1.png" alt="" />
                <h4 className="p-3 text-light">Luke Skywalker</h4>
                <blockquote className="text-black-50 p-3">
                  “I don't understand how we got by those troops. I thought we
                  were dead.“
                </blockquote>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="box bg-white">
                <img className="img-fluid" src="imgs/team-2.png" alt="" />
                <h4 className="p-3 text-light">Luke Skywalker</h4>
                <blockquote className="text-black-50 p-3">
                  “I don't understand how we got by those troops. I thought we
                  were dead.“
                </blockquote>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="box bg-white">
                <img className="img-fluid" src="imgs/team-3.png" alt="" />
                <h4 className="p-3 text-light">Luke Skywalker</h4>
                <blockquote className="text-black-50 p-3">
                  “I don't understand how we got by those troops. I thought we
                  were dead.“
                </blockquote>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="box bg-white">
                <img className="img-fluid" src="imgs/team-4.png" alt="" />
                <h4 className="p-3 text-light">Luke Skywalker</h4>
                <blockquote className="text-black-50 p-3">
                  “I don't understand how we got by those troops. I thought we
                  were dead.“
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="techs pt-5 pb-5 text-center">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-sm-6 col-md-4 col-lg-2 mt-3 mb-3">
              <img className="img-fluid" src="imgs/tech-1.png" alt="" />
            </div>
            <div className="col-sm-6 col-md-4 col-lg-2 mt-3 mb-3">
              <img className="img-fluid" src="imgs/tech-2.png" alt="" />
            </div>
            <div className="col-sm-6 col-md-4 col-lg-2 mt-3 mb-3">
              <img className="img-fluid" src="imgs/tech-3.png" alt="" />
            </div>
            <div className="col-sm-6 col-md-4 col-lg-2 mt-3 mb-3">
              <img className="img-fluid" src="imgs/tech-4.png" alt="" />
            </div>
            <div className="col-sm-6 col-md-4 col-lg-2 mt-3 mb-3">
              <img className="img-fluid" src="imgs/tech-1.png" alt="" />
            </div>
            <div className="col-sm-6 col-md-4 col-lg-2 mt-3 mb-3">
              <img className="img-fluid" src="imgs/tech-2.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="project text-center pt-5 pb-5 text-light">
        <h2>Start Your Project Now</h2>
        <p className="text-white-50">
          Leave your description and we start the engine.Don't worry,you can
          cancel anytime
        </p>
        <div className="d-flex justify-content-center mt-5 mb-5">
          <a className="btn rounded-pill main-btn text-uppercase" href="#">
            Start Project
          </a>
        </div>
      </div>
      <div className="blog pt-5 pb-5">
        <div className="container">
          <div className="main-title text-center mt-5 mb-5 position-relative">
            <img className="mb-2" src="imgs/title.png" alt="" />
            <h2>Read Our Blog</h2>
            <p className="text-uppercase text-black-50">New Stories</p>
          </div>
          <div className="row">
            <div className="col-md-6 col-lg-4">
              <div className="card">
                <img
                  src="imgs/blog-1.jpg"
                  className="card-img-top"
                  alt="Blog Post"
                />
                <div className="card-body">
                  <span className="text-black-50">Jan 17, 2022</span>
                  <h5 className="card-title">Some Awesome Blog Title Here</h5>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="card">
                <img
                  src="imgs/blog-2.jpg"
                  className="card-img-top"
                  alt="Blog Post"
                />
                <div className="card-body">
                  <span className="text-black-50">Jan 17, 2022</span>
                  <h5 className="card-title">Some Awesome Blog Title Here</h5>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="card">
                <img
                  src="imgs/blog-3.jpg"
                  className="card-img-top"
                  alt="Blog Post"
                />
                <div className="card-body">
                  <span className="text-black-50">Jan 17, 2022</span>
                  <h5 className="card-title">Some Awesome Blog Title Here</h5>
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-center mt-5 mb-5">
            <a className="btn rounded-pill main-btn text-uppercase" href="#">
              More Stories
            </a>
          </div>
        </div>
      </div>
      <div className="subscribe pt-5 pb-5 text-center text-md-start">
        <div className="container">
          <form className="row align-items-center">
            <div className="col-md-6 col-lg-3">
              <div className="fw-bold fs-5 mb-3">
                Subscribe to our Newsletter:
              </div>
            </div>
            <div className="col-md-6 col-lg-7 mb-3">
              <input
                className="w-100 text-light p-2 bg-transparent"
                type="text"
                placeholder="Enter Email Address"
              />
            </div>
            <div className="col-md-6 col-lg-2">
              <input
                className="btn rounded-pill"
                type="submit"
                defaultValue="Subscribe"
              />
            </div>
          </form>
        </div>
      </div>
      <div className="footer pt-5 pb-5 text-white-50 text-center text-md-start">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-4">
              <div className="info mb-5">
                <img src="imgs/logo.png" alt="" className="mb-4" />
                <p className="mb-5">
                  Pellentesque in ipsum id orci porta dapibus. Vivamus magna
                  justo, lacinia eget consectetur sed, convallis at tellus.
                </p>
                <div className="copyright">
                  Created By <span>Graphberry</span>
                  <div>
                    © 2022 - <span>Bondi Inc</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-2">
              <div className="links">
                <h5 className="text-light">Links</h5>
                <ul className="list-unstyled lh-lg">
                  <li>Home</li>
                  <li>Our Services</li>
                  <li>Portfolio</li>
                  <li>Testimonials</li>
                  <li>Support</li>
                  <li>Terms and Condition</li>
                </ul>
              </div>
            </div>
            <div className="col-md-6 col-lg-2">
              <div className="links">
                <h5 className="text-light">About Us</h5>
                <ul className="list-unstyled lh-lg">
                  <li>Sign In</li>
                  <li>Register</li>
                  <li>About Us</li>
                  <li>Blog</li>
                  <li>Contact Us</li>
                </ul>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="contact">
                <h5 className="text-light">Contact Us</h5>
                <p className="lh-lg mt-3 mb-5">
                  Get in touch with us via mail phone.We are waiting for your
                  call or message
                </p>
                <a className="btn rounded-pill main-btn w-100" href="#">
                  graphberry@gmail.com
                </a>
                <ul className="d-flex mt-5 list-unstyled gap-3">
                  <li>
                    <a className="d-block text-light" href="#">
                      <i className="fa-brands fa-facebook fa-lg facebook rounded-circle p-2" />
                    </a>
                  </li>
                  <li>
                    <a className="d-block text-light" href="#">
                      <i className="fa-brands fa-twitter fa-lg twitter rounded-circle p-2" />
                    </a>
                  </li>
                  <li>
                    <a className="d-block text-light" href="#">
                      <i className="fa-brands fa-linkedin fa-lg linkedin rounded-circle p-2" />
                    </a>
                  </li>
                  <li>
                    <a className="d-block text-light" href="#">
                      <i className="fa-brands fa-youtube fa-lg youtube rounded-circle p-2" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
