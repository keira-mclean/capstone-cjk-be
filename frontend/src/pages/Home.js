import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import heroImage from '../../src/home_photo.avif';
import './Home.css';

export default function Home(props) {
  const handleClick = (page) => {
    props.setPage(page);
    window.scrollTo(0, 0);
  };

  return (
    <>
      <div className="homeMenu jumboTron container-fluid bg-light p-5" style={{ backgroundImage: `url(${heroImage})` }}>
        <h1 className="display-4">Making the Car Buying and Selling Experience Easy</h1>

        <h5 className="heroText">On the road to happiness</h5>
      </div>

      <p className="companyInfo">
        The Lot is a company that aims to make private party car sales easier and safer for both buyers and sellers.
        The company provides a platform where people can list their cars for sale, browse through available options,
        and contact potential sellers. The Lot also offers a range of services to ensure that people get the car they
        are expecting, such as vehicle inspection, title transfer, financing, and warranty. The Lot’s mission is to
        simplify the car buying and selling process, while also protecting the interests of both parties.
      </p>


      <Container>
        <Row>
          <Col xs>
            <header style={{ paddingLeft: 0 }}>
              <div
                className="homeMenu p-5 text-center bg-image"
                style={{
                  backgroundImage:
                    "url('https://raw.githubusercontent.com/keira-mclean/capstone-cjk-be/main/frontend/Images/buycar.jpg')",
                  backgroundSize: "cover"
                }}
              >
                <div
                  className="mask"
                  style={{ backgroundColor: "rgba(0, 0, 0, 0)" }}
                >
                  <div className="d-flex justify-content-center align-items-center h-100">
                    <div className="text-black">
                      <a
                        className="btn btn-outline-dark buttonLink"
                        href="https://www.google.com" onClick={(event) => { handleClick("Buy"); event.preventDefault(); }} role="button">
                        Find your vehicle
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </header>
          </Col>
          <Col xs>
            <header style={{ paddingLeft: 0 }}>
              <div
                className="homeMenu p-5 text-center bg-image"
                style={{
                  backgroundImage:
                    "url('https://raw.githubusercontent.com/keira-mclean/capstone-cjk-be/main/frontend/Images/sellcar.jpg')",
                  backgroundSize: "cover"
                }}
              >
                <div
                  className="mask"
                  style={{ backgroundColor: "rgba(0, 0, 0, 0)" }}
                >
                  <div className="d-flex justify-content-center align-items-center h-100">
                    <div className="text-black">
                      <a
                        className="btn btn-outline-dark buttonLink"
                        href="https://www.google.com" onClick={(event) => { handleClick("Sell"); event.preventDefault(); }} role="button">
                        Sell your vehicle
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </header>
          </Col>
          <Col xs>
            <header style={{ paddingLeft: 0 }}>
              <div
                className="homeMenu p-5 text-center bg-image"
                style={{
                  backgroundImage:
                    "url('https://raw.githubusercontent.com/keira-mclean/capstone-cjk-be/main/frontend/Images/ContactUsKiera.jpg')",
                  backgroundSize: "cover"
                }}
              >
                <div
                  className="mask"
                  style={{ backgroundColor: "rgba(0, 0, 0, 0)" }}
                >
                  <div className="d-flex justify-content-center align-items-center h-100">
                    <div className="text-black">
                      <a
                        className="btn btn-outline-dark buttonLink"
                        href="https://www.google.com" onClick={(event) => { handleClick("Contact"); event.preventDefault(); }} role="button">
                        Contact Us
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </header>
          </Col>
        </Row>
      </Container>

    </>
  );
}
