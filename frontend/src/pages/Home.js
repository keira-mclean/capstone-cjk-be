import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import heroImage from '../../src/Hero1.jpg';
import './Home.css';




export default function Home() {

  const rowStyle = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  };

  const imageStyle = {
    flex: '1',
    height: '200px',
    margin: '0 10px',
    objectFit: 'cover'
  };


  return (
    <>
      <div className="jumboTron container-fluid bg-light p-5" style={{ backgroundImage: `url(${heroImage})` }}>
        <h1 className="display-4">Jumbotron</h1>
        <p className="lead">This is a jumbotron created using Bootstrap 5</p>
        <hr className="my-4" />
        <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
        <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
      </div>

      <p>The Lot is a company that aims to make private party car sales easier and safer for both buyers and sellers. The company provides a platform where people can list their cars for sale, browse through available options, and contact potential sellers. The Lot also offers a range of services to ensure that people get the car they are expecting, such as vehicle inspection, title transfer, financing, and warranty. The Lot’s mission is to simplify the car buying and selling process, while also protecting the interests of both parties.</p>
      {/* <Container>
      <Row style={rowStyle}>
        <Col xs>
          <Image src="https://raw.githubusercontent.com/keira-mclean/capstone-cjk-be/main/frontend/Images/buycar.jpg" style={imageStyle} />
        </Col>
        <Col xs>
          <Image src="https://raw.githubusercontent.com/keira-mclean/capstone-cjk-be/main/frontend/Images/sellcar.jpg" style={imageStyle} />
        </Col>
        <Col xs>
          <Image src="https://raw.githubusercontent.com/keira-mclean/capstone-cjk-be/main/frontend/Images/ContactUsKiera.jpg" style={imageStyle} />
        </Col>
      </Row>
    </Container> */}


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
                    <div className="text-white">

                      <a
                        className="homeMenuButton btn btn-outline-dark btn-lg"
                        href="#!"
                        role="button"
                      >
                        Call to action
                      </a>
                    </div >
                  </div >
                </div >
              </div >
            </header >
          </Col >
          <Col xs>
            {" "}
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
                    <div className="text-white">
                      <a
                        className="btn btn-outline-dark btn-lg"
                        href="#!"
                        role="button"
                      >
                        Call to action
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
                        className="btn btn-outline-dark btn-lg"
                        href="#!"
                        role="button"
                      >
                        Contact Us
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </header>
          </Col>
        </Row >
      </Container >
    </>
  );
}
