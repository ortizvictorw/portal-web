import { FC } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Routes } from "react-router-dom";
import Sidemenu from "./components/Sidemenu";
import { ColSC } from "./styleComponents/ColSC";
import { homeRouter } from "./views/Home/homeRouter";

const Layout: FC = () => {
  return (
    <>
      <div className="navbar navbar-expand-lg navbar-light bg-dark py-3">
        <Container>
          <Row>
            <Col xs={6} md={4}>
              LOGO
            </Col>
            <Col xs={12} md={8}>
              xs=12 md=8
            </Col>
          </Row>
        </Container>
      </div>
      <Row>
        <ColSC xs={6} md={3} className="h-100">
          <Sidemenu />
        </ColSC>
        <ColSC xs={12} md={9}>
          <Routes>{homeRouter()}</Routes>
          xs=12 md=8
        </ColSC>
      </Row>
    </>
  );
};

export default Layout;
