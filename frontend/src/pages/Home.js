import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export default function Home() {
  return (
    <>
      <Container fluid="md">
        <Row>
          <header style={{ paddingLeft: 0 }}>
            <div
              className="p-5 text-center bg-image"
              style={{
                backgroundImage:
                  "url('https://raw.githubusercontent.com/keira-mclean/capstone-cjk-be/main/frontend/Images/Hero2.jpg')",
                height: 350,
                width: 600,
              }}
            >
              <div
                className="mask"
                style={{ backgroundColor: "rgba(0, 0, 0, 0)" }}
              >
                <div className="d-flex justify-content-center align-items-center h-100">
                  <div className="text-white">
                    {/* <h1 className="mb-3">Heading</h1>
                    <h4 className="mb-3">Subheading</h4> */}
                    {/* <a
                      className="btn btn-outline-light btn-lg"
                      href="#!"
                      role="button"
                    >
                      Call to action
                    </a> */}
                  </div>
                </div>
              </div>
            </div>
          </header>
          {/* <Col>1 of 1</Col> */}
        </Row>
      </Container>
      <Container>
        <Row>
          <Col xs>
            {" "}
            <header style={{ paddingLeft: 0 }}>
              <div
                className="p-5 text-center bg-image"
                style={{
                  backgroundImage:
                    "url('https://raw.githubusercontent.com/keira-mclean/capstone-cjk-be/main/frontend/Images/buycar.jpg')",
                  height: 350,
                  width: 600,
                }}
              >
                <div
                  className="mask"
                  style={{ backgroundColor: "rgba(0, 0, 0, 0)" }}
                >
                  <div className="d-flex justify-content-center align-items-center h-100">
                    <div className="text-white">
                      {/* <h1 className="mb-3">Heading</h1>
                    <h4 className="mb-3">Subheading</h4> */}
                      <a
                        className="btn btn-outline-light btn-lg"
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
          <Col xs={{ order: 12 }}>
            {" "}
            <header style={{ paddingLeft: 0 }}>
              <div
                className="p-5 text-center bg-image"
                style={{
                  backgroundImage:
                    "url('https://raw.githubusercontent.com/keira-mclean/capstone-cjk-be/main/frontend/Images/sellcar.jpg')",
                  height: 350,
                  width: 600,
                }}
              >
                <div
                  className="mask"
                  style={{ backgroundColor: "rgba(0, 0, 0, 0)" }}
                >
                  <div className="d-flex justify-content-center align-items-center h-100">
                    <div className="text-white">
                      {/* <h1 className="mb-3">Heading</h1>
                    <h4 className="mb-3">Subheading</h4> */}
                      <a
                        className="btn btn-outline-light btn-lg"
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
          <Col xs={{ order: 1 }}>
            {" "}
            <header style={{ paddingLeft: 0 }}>
              <div
                className="p-5 text-center bg-image"
                style={{
                  backgroundImage:
                    "url('https://raw.githubusercontent.com/keira-mclean/capstone-cjk-be/main/frontend/Images/ContactUsKiera.jpg')",
                  height: 350,
                  width: 600,
                }}
              >
                <div
                  className="mask"
                  style={{ backgroundColor: "rgba(0, 0, 0, 0)" }}
                >
                  <div className="d-flex justify-content-center align-items-center h-100">
                    <div className="text-white">
                      {/* <h1 className="mb-3">Heading</h1>
                    <h4 className="mb-3">Subheading</h4> */}
                      <a
                        className="btn btn-outline-light btn-lg"
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
        </Row>
      </Container>
    </>
  );
}
